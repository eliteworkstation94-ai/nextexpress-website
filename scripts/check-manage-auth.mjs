#!/usr/bin/env node
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';

process.env.SESSION_SECRET = randomBytes(32).toString('base64url');
const { hashPassword } = await import('../manage-auth-server/server.mjs');

const root = mkdtempSync(join(tmpdir(), 'nx-manage-auth-'));
const publicDir = join(root, 'public');
const dataDir = join(root, 'data');
mkdirSync(join(publicDir, 'manage'), { recursive: true });
mkdirSync(join(publicDir, '_next/static'), { recursive: true });
mkdirSync(dataDir, { recursive: true });
writeFileSync(join(publicDir, 'manage/index.html'), '<!doctype html><title>Manage OK</title><h1>Protected Manage</h1>');
writeFileSync(join(publicDir, '_next/static/test.js'), 'console.log("asset")');
const tempPassword = 'TempPass-123456789';
writeFileSync(join(dataDir, 'users.json'), JSON.stringify({
  users: [{ username: 'thammachet', enabled: true, mustChangePassword: true, passwordHash: hashPassword(tempPassword) }]
}, null, 2));

const port = 43000 + Math.floor(Math.random() * 1000);
const child = spawn(process.execPath, ['manage-auth-server/server.mjs'], {
  cwd: new URL('..', import.meta.url).pathname,
  env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', PUBLIC_DIR: publicDir, DATA_DIR: dataDir, COOKIE_SECURE: 'false' },
  stdio: ['ignore', 'pipe', 'pipe']
});

let stdout = '';
let stderr = '';
child.stdout.on('data', (chunk) => { stdout += chunk; });
child.stderr.on('data', (chunk) => { stderr += chunk; });

async function waitReady() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/healthz`);
      if (res.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error(`server not ready stdout=${stdout} stderr=${stderr}`);
}

function cookieFrom(res) {
  return res.headers.get('set-cookie')?.split(';')[0] || '';
}

try {
  await waitReady();

  let res = await fetch(`http://127.0.0.1:${port}/`, { redirect: 'manual' });
  assert.equal(res.status, 303, 'unauthenticated root should redirect');
  assert.match(res.headers.get('location') || '', /^\/login/);

  res = await fetch(`http://127.0.0.1:${port}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username: 'thammachet', password: 'wrong' }),
    redirect: 'manual'
  });
  assert.equal(res.status, 200, 'wrong password should stay on login');
  assert.match(await res.text(), /ไม่ถูกต้อง/);

  res = await fetch(`http://127.0.0.1:${port}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username: 'thammachet', password: tempPassword }),
    redirect: 'manual'
  });
  assert.equal(res.status, 303, 'correct temporary password should redirect');
  assert.equal(res.headers.get('location'), '/change-password');
  const cookie = cookieFrom(res);
  assert.match(cookie, /^nxm_session=/);

  res = await fetch(`http://127.0.0.1:${port}/`, { headers: { cookie }, redirect: 'manual' });
  assert.equal(res.status, 303, 'must-change user should not access dashboard');
  assert.equal(res.headers.get('location'), '/change-password');

  const newPassword = 'ChangedPass-987654321';
  res = await fetch(`http://127.0.0.1:${port}/change-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', cookie },
    body: new URLSearchParams({ currentPassword: tempPassword, newPassword, confirmPassword: newPassword }),
    redirect: 'manual'
  });
  assert.equal(res.status, 303, 'password change should redirect to dashboard');
  assert.equal(res.headers.get('location'), '/');
  const cookie2 = cookieFrom(res);

  res = await fetch(`http://127.0.0.1:${port}/`, { headers: { cookie: cookie2 } });
  assert.equal(res.status, 200);
  assert.match(await res.text(), /Protected Manage/);

  const users = JSON.parse(readFileSync(join(dataDir, 'users.json'), 'utf8'));
  assert.equal(users.users[0].mustChangePassword, false, 'first-login password change flag should clear');

  console.log('manage auth regression checks passed');
} finally {
  child.kill('SIGTERM');
  rmSync(root, { recursive: true, force: true });
}
