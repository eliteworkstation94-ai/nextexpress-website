import { createServer } from 'node:http';
import { createHmac, pbkdf2Sync, randomBytes, timingSafeEqual } from 'node:crypto';
import { createReadStream, existsSync, readFileSync, statSync, writeFileSync, mkdirSync, renameSync, chmodSync } from 'node:fs';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { URLSearchParams } from 'node:url';

const PUBLIC_DIR = resolve(process.env.PUBLIC_DIR || join(process.cwd(), 'out'));
const DATA_DIR = resolve(process.env.DATA_DIR || join(process.cwd(), 'data'));
const USERS_FILE = process.env.USERS_FILE || join(DATA_DIR, 'users.json');
const PORT = Number(process.env.PORT || 3108);
const HOST = process.env.HOST || '127.0.0.1';
const SESSION_SECRET = process.env.SESSION_SECRET || '';
const COOKIE_SECURE = process.env.COOKIE_SECURE !== 'false';
const SESSION_COOKIE = 'nxm_session';
const MAX_BODY = 32 * 1024;

function assertSessionSecret() {
  if (SESSION_SECRET.length < 32) {
    console.error('SESSION_SECRET must be at least 32 characters');
    process.exit(1);
  }
}

mkdirSync(DATA_DIR, { recursive: true });

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'application/javascript; charset=utf-8'],
  ['.mjs', 'application/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
  ['.woff2', 'font/woff2']
]);

function securityHeaders(extra = {}) {
  return {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'same-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Cache-Control': 'no-store',
    ...extra
  };
}

function htmlPage(title, body, status = 200) {
  return {
    status,
    headers: securityHeaders({ 'Content-Type': 'text/html; charset=utf-8' }),
    body: `<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><style>
:root{--blue:#062f67;--blue2:#051e43;--orange:#ff5a1f;--muted:#6b7f96;--bg:#eef4fb}*{box-sizing:border-box}body{margin:0;min-height:100vh;font-family:Inter,Arial,'Noto Sans Thai',sans-serif;background:radial-gradient(circle at 80% 0%,rgba(255,90,31,.18),transparent 30%),linear-gradient(135deg,#041b3c,#0b3d7d 45%,#f5f8fc 45%);display:grid;place-items:center;color:#10243d}.card{width:min(94vw,480px);background:rgba(255,255,255,.96);border:1px solid rgba(6,47,103,.12);border-radius:28px;padding:34px;box-shadow:0 28px 80px rgba(2,18,42,.28)}.brand{display:flex;align-items:center;gap:12px;margin-bottom:22px}.mark{display:grid;place-items:center;width:48px;height:48px;border-radius:16px;background:linear-gradient(135deg,var(--blue),#0b4d91);color:#fff;font-weight:900}.brand strong{display:block;color:var(--blue);font-size:24px}.brand span{color:var(--orange)}h1{margin:0;color:var(--blue);font-size:28px;line-height:1.08;letter-spacing:-.04em}p{color:var(--muted);line-height:1.65}label{display:block;margin-top:16px;color:#31506f;font-size:13px;font-weight:900}input{width:100%;height:50px;margin-top:7px;border:1px solid rgba(6,47,103,.16);border-radius:14px;padding:0 15px;font-size:15px;outline:none}input:focus{border-color:var(--orange);box-shadow:0 0 0 4px rgba(255,90,31,.12)}button,.btn{display:inline-flex;align-items:center;justify-content:center;width:100%;min-height:52px;margin-top:22px;border:0;border-radius:15px;background:linear-gradient(135deg,var(--orange),#ff7b2d);color:#fff;font-weight:900;text-decoration:none;cursor:pointer;box-shadow:0 16px 30px rgba(255,90,31,.26)}.muted{font-size:12px;color:#789}.error{padding:12px 14px;border-radius:14px;background:#fff1ea;color:#b83d0b;font-size:13px;font-weight:800}.ok{padding:12px 14px;border-radius:14px;background:#eaf8f1;color:#12613d;font-size:13px;font-weight:800}.row{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-top:18px}.row a{color:var(--blue);font-weight:900;text-decoration:none;font-size:13px}@media(max-width:520px){.card{padding:24px;border-radius:22px}h1{font-size:24px}}
</style></head><body><main class="card">${body}</main></body></html>`
  };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function readUsers() {
  if (!existsSync(USERS_FILE)) return { users: [] };
  return JSON.parse(readFileSync(USERS_FILE, 'utf8'));
}

function writeUsers(data) {
  const tmp = `${USERS_FILE}.tmp-${process.pid}-${Date.now()}`;
  writeFileSync(tmp, `${JSON.stringify(data, null, 2)}\n`, { mode: 0o600 });
  renameSync(tmp, USERS_FILE);
  chmodSync(USERS_FILE, 0o600);
}

function parseCookies(req) {
  return Object.fromEntries((req.headers.cookie || '').split(';').map((part) => part.trim()).filter(Boolean).map((part) => {
    const index = part.indexOf('=');
    return index === -1 ? [part, ''] : [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
  }));
}

function sign(value) {
  return createHmac('sha256', SESSION_SECRET).update(value).digest('base64url');
}

function createSession(username) {
  const payload = Buffer.from(JSON.stringify({ username, iat: Date.now(), nonce: randomBytes(12).toString('base64url') })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

function verifySession(cookie) {
  if (!cookie || !cookie.includes('.')) return null;
  const [payload, mac] = cookie.split('.', 2);
  const expected = sign(payload);
  if (!safeEqual(mac, expected)) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!session.username || Date.now() - Number(session.iat || 0) > 1000 * 60 * 60 * 12) return null;
    return session;
  } catch {
    return null;
  }
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  return left.length === right.length && timingSafeEqual(left, right);
}

function hashPassword(password, salt = randomBytes(16).toString('base64url')) {
  const iterations = 210000;
  const digest = pbkdf2Sync(password, salt, iterations, 32, 'sha256').toString('base64url');
  return { algorithm: 'pbkdf2-sha256', iterations, salt, digest };
}

function verifyPassword(password, passwordHash) {
  if (!passwordHash || passwordHash.algorithm !== 'pbkdf2-sha256') return false;
  const computed = hashPassword(password, passwordHash.salt);
  return Number(passwordHash.iterations) === computed.iterations && safeEqual(passwordHash.digest, computed.digest);
}

function findUser(username) {
  return readUsers().users.find((user) => user.username === username && user.enabled !== false);
}

async function readBody(req) {
  let body = '';
  for await (const chunk of req) {
    body += chunk;
    if (body.length > MAX_BODY) throw new Error('body_too_large');
  }
  return new URLSearchParams(body);
}

function send(res, response) {
  res.writeHead(response.status || 200, response.headers || {});
  res.end(response.body || '');
}

function redirect(res, location, cookie) {
  const headers = securityHeaders({ Location: location });
  if (cookie) headers['Set-Cookie'] = cookie;
  res.writeHead(303, headers);
  res.end('Redirecting');
}

function sessionCookie(value) {
  const secure = COOKIE_SECURE ? '; Secure' : '';
  return `${SESSION_COOKIE}=${encodeURIComponent(value)}; Path=/; HttpOnly${secure}; SameSite=Lax; Max-Age=43200`;
}

function clearCookie() {
  const secure = COOKIE_SECURE ? '; Secure' : '';
  return `${SESSION_COOKIE}=; Path=/; HttpOnly${secure}; SameSite=Lax; Max-Age=0`;
}

function loginView(error = '', next = '/') {
  return htmlPage('NextExpress Manage Login', `${brand()}<h1>เข้าสู่ระบบ NextExpress Manage</h1><p>สำหรับทีมปฏิบัติการและผู้ดูแลระบบเท่านั้น</p>${error ? `<div class="error">${escapeHtml(error)}</div>` : ''}<form method="post" action="/login"><input type="hidden" name="next" value="${escapeHtml(next)}"><label>Username<input name="username" autocomplete="username" required autofocus></label><label>Password<input name="password" type="password" autocomplete="current-password" required></label><button type="submit">เข้าสู่ระบบ</button></form><p class="muted">Session expires after 12 hours. Unauthorized access is prohibited.</p>`);
}

function changePasswordView(error = '', ok = '') {
  return htmlPage('Change Password | NextExpress Manage', `${brand()}<h1>เปลี่ยนรหัสผ่านครั้งแรก</h1><p>เพื่อความปลอดภัย กรุณาตั้งรหัสผ่านใหม่ก่อนเข้าใช้งานระบบ</p>${error ? `<div class="error">${escapeHtml(error)}</div>` : ''}${ok ? `<div class="ok">${escapeHtml(ok)}</div>` : ''}<form method="post" action="/change-password"><label>Current password<input name="currentPassword" type="password" autocomplete="current-password" required></label><label>New password<input name="newPassword" type="password" autocomplete="new-password" minlength="12" required></label><label>Confirm new password<input name="confirmPassword" type="password" autocomplete="new-password" minlength="12" required></label><button type="submit">บันทึกรหัสผ่านใหม่</button></form><div class="row"><a href="/logout">ออกจากระบบ</a><span class="muted">ขั้นต่ำ 12 ตัวอักษร</span></div>`);
}

function brand() {
  return '<div class="brand"><div class="mark">NX</div><div><strong>Next<span>Express</span></strong><p class="muted" style="margin:2px 0 0">Manage Control Tower</p></div></div>';
}

function authenticatedUser(req) {
  const session = verifySession(parseCookies(req)[SESSION_COOKIE]);
  if (!session) return null;
  return findUser(session.username) || null;
}

function serveStatic(req, res, pathname) {
  const safePath = pathname === '/' ? '/manage/index.html' : pathname;
  const candidates = [safePath, safePath.endsWith('/') ? `${safePath}index.html` : `${safePath}/index.html`];
  let filePath = null;
  for (const candidate of candidates) {
    const resolved = resolve(PUBLIC_DIR, `.${normalize(candidate)}`);
    if (resolved === PUBLIC_DIR || !resolved.startsWith(`${PUBLIC_DIR}${sep}`)) continue;
    if (existsSync(resolved) && statSync(resolved).isFile()) {
      filePath = resolved;
      break;
    }
  }
  if (!filePath) {
    const direct = resolve(PUBLIC_DIR, `.${normalize(safePath)}`);
    if (direct.startsWith(`${PUBLIC_DIR}${sep}`) && existsSync(direct) && statSync(direct).isFile()) filePath = direct;
  }
  if (!filePath) {
    send(res, htmlPage('Not found', `${brand()}<h1>ไม่พบหน้า</h1><p>Page not found.</p>`, 404));
    return;
  }
  const ext = extname(filePath).toLowerCase();
  const isHtml = ext === '.html' || ext === '.txt';
  res.writeHead(200, securityHeaders({
    'Content-Type': mimeTypes.get(ext) || 'application/octet-stream',
    'Cache-Control': isHtml ? 'no-store' : 'public, max-age=31536000, immutable'
  }));
  createReadStream(filePath).pipe(res);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', 'https://manage.nextexpress.asia');
    const pathname = url.pathname;

    if (pathname === '/healthz') {
      send(res, { status: 200, headers: securityHeaders({ 'Content-Type': 'application/json; charset=utf-8' }), body: JSON.stringify({ ok: true, service: 'nextexpress-manage-auth' }) });
      return;
    }

    if (req.method === 'GET' && pathname === '/login') {
      send(res, loginView('', url.searchParams.get('next') || '/'));
      return;
    }

    if (req.method === 'POST' && pathname === '/login') {
      const body = await readBody(req);
      const username = String(body.get('username') || '').trim();
      const password = String(body.get('password') || '');
      const next = String(body.get('next') || '/');
      const user = findUser(username);
      if (!user || !verifyPassword(password, user.passwordHash)) {
        send(res, loginView('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง', next));
        return;
      }
      redirect(res, user.mustChangePassword ? '/change-password' : sanitizeNext(next), sessionCookie(createSession(user.username)));
      return;
    }

    if (pathname === '/logout') {
      redirect(res, '/login', clearCookie());
      return;
    }

    const user = authenticatedUser(req);
    if (!user) {
      redirect(res, `/login?next=${encodeURIComponent(pathname + url.search)}`);
      return;
    }

    if (req.method === 'GET' && pathname === '/change-password') {
      send(res, changePasswordView());
      return;
    }

    if (req.method === 'POST' && pathname === '/change-password') {
      const body = await readBody(req);
      const currentPassword = String(body.get('currentPassword') || '');
      const newPassword = String(body.get('newPassword') || '');
      const confirmPassword = String(body.get('confirmPassword') || '');
      if (!verifyPassword(currentPassword, user.passwordHash)) {
        send(res, changePasswordView('Current password is incorrect.'));
        return;
      }
      if (newPassword.length < 12) {
        send(res, changePasswordView('New password must be at least 12 characters.'));
        return;
      }
      if (newPassword !== confirmPassword) {
        send(res, changePasswordView('New passwords do not match.'));
        return;
      }
      if (newPassword === currentPassword) {
        send(res, changePasswordView('New password must be different from the temporary password.'));
        return;
      }
      const data = readUsers();
      const target = data.users.find((entry) => entry.username === user.username);
      target.passwordHash = hashPassword(newPassword);
      target.mustChangePassword = false;
      target.updatedAt = new Date().toISOString();
      writeUsers(data);
      redirect(res, '/', sessionCookie(createSession(user.username)));
      return;
    }

    if (user.mustChangePassword) {
      redirect(res, '/change-password');
      return;
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      send(res, { status: 405, headers: securityHeaders({ Allow: 'GET, HEAD' }), body: 'Method not allowed' });
      return;
    }

    serveStatic(req, res, pathname === '/manage/' ? '/' : pathname);
  } catch (error) {
    console.error(error);
    send(res, htmlPage('Server error', `${brand()}<h1>Server error</h1><p>Please try again.</p>`, 500));
  }
});

function sanitizeNext(next) {
  if (!next.startsWith('/') || next.startsWith('//')) return '/';
  if (next.startsWith('/login') || next.startsWith('/change-password')) return '/';
  return next;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  assertSessionSecret();
  server.listen(PORT, HOST, () => {
    console.log(`nextexpress manage auth server listening on http://${HOST}:${PORT}`);
  });
}

export { hashPassword, server };
