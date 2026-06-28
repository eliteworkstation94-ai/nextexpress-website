#!/usr/bin/env node
import { hashPassword } from '../manage-auth-server/server.mjs';

const username = process.argv[2];
if (!username) {
  console.error('Usage: node scripts/create-manage-user.mjs <username>');
  process.exit(2);
}

let password = '';
process.stdin.setEncoding('utf8');
for await (const chunk of process.stdin) password += chunk;
password = password.replace(/\r?\n$/, '');

if (password.length < 12) {
  console.error('Password must be at least 12 characters');
  process.exit(2);
}

const now = new Date().toISOString();
const record = {
  users: [
    {
      username,
      enabled: true,
      mustChangePassword: true,
      passwordHash: hashPassword(password),
      createdAt: now,
      updatedAt: now
    }
  ]
};

process.stdout.write(`${JSON.stringify(record, null, 2)}\n`);
