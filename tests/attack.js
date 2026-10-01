// Red-team harness: tries real attacks against the running app in headless Edge (CDP).
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs'), os = require('os');
// Browser: set BROWSER to a Chromium/Edge/Chrome executable, otherwise common install paths are tried.
const edge = process.env.BROWSER || [
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
].find(p => fs.existsSync(p));
if (!edge) { console.error('No browser found. Set BROWSER=/path/to/chrome-or-edge'); process.exit(2); }
const sp = os.tmpdir(), port = '9334', base = process.env.BASE_URL || 'http://localhost:8766/index.html';
const proc = spawn(edge, ['--headless=new', ...(process.env.NO_SANDBOX ? ['--no-sandbox'] : []), '--disable-gpu', '--remote-debugging-port=' + port, '--user-data-dir=' + require('path').join(sp, 'qahub-test-profile-' + port), '--window-size=1280,900', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
const getJson = url => new Promise((res, rej) => http.get(url, r => { let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d))); }).on('error', rej));
(async () => {
  let targets;
  for (let i = 0; i < 40; i++) { try { targets = await getJson('http://127.0.0.1:' + port + '/json'); break; } catch (e) { await sleep(250); } }
  const page = targets.find(t => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 0; const pending = {}; let errors = []; let dialogs = []; const csp = [];
  ws.onmessage = m => {
    const d = JSON.parse(m.data);
    if (d.id && pending[d.id]) { pending[d.id](d); delete pending[d.id]; }
    if (d.method === 'Runtime.exceptionThrown') errors.push((d.params.exceptionDetails.exception || {}).description || d.params.exceptionDetails.text);
    if (d.method === 'Page.javascriptDialogOpening') { dialogs.push(d.params.message); send('Page.handleJavaScriptDialog', { accept: true }); }
    if (d.method === 'Log.entryAdded' && /Content Security Policy|Refused/i.test(d.params.entry.text)) csp.push(d.params.entry.text.slice(0, 120));
  };
  const send = (method, params) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async expr => { const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true }); return r.result.exceptionDetails ? 'EXC: ' + r.result.exceptionDetails.text : r.result.result.value; };
  await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
  const out = [];
  const rec = (name, vulnerable, detail) => out.push((vulnerable ? 'VULNERABLE ' : 'held       ') + name + (detail ? '  [' + detail + ']' : ''));
  const nav = async (hash, setup) => {
    errors = []; dialogs = [];
    await send('Page.navigate', { url: base }); await sleep(900);
    if (setup) { await ev(setup); }
    await send('Page.navigate', { url: base + hash }); await sleep(1300);
    if (hash) { await ev('location.reload()'); await sleep(1300); }
  };

  // A1: reflected DOM XSS through hash route ids
  for (const h of ['#/module/<img src=x onerror=alert(1)>', '#/quiz/"><img src=x onerror=alert(2)>', '#/module/%3Cimg%20src%3Dx%20onerror%3Dalert(3)%3E', "#/quiz/'-alert(4)-'"]) {
    await nav(h);
    rec('A1 XSS via hash route ' + h.slice(0, 30), dialogs.length > 0 || (await ev("!!document.querySelector('#qh-app img[src=x]')")) === true, 'dialogs=' + dialogs.length);
  }
  // A2: prototype-key route ids crash the router (client-side DoS via crafted link)
  for (const h of ['#/quiz/__proto__', '#/quiz/constructor', '#/quiz/toString', '#/module/__proto__']) {
    await nav(h);
    const app = await ev("document.getElementById('qh-app').innerText.length");
    rec('A2 crafted link ' + h, errors.length > 0 || app === 0, errors[0] ? errors[0].split('\n')[0].slice(0, 70) : 'app text len ' + app);
  }
  // A3: tampered localStorage (progress + locale)
  const poison = {
    modules: { 'manual-testing': { status: '<img src=x onerror=alert(5)>' }, 'test-techniques': { status: 'constructor' }, 'testing-types': { status: '__proto__' } },
    quizzes: { 'manual-testing': { best: '<img src=x onerror=alert(6)>' }, 'test-techniques': { best: { a: 1 } }, final: { best: 1e999 } }
  };
  await nav('', "localStorage.setItem('qahub_progress_v1', " + JSON.stringify(JSON.stringify(poison)) + ")");
  await sleep(500);
  rec('A3 tampered progress -> script execution', dialogs.length > 0 || (await ev("!!document.querySelector('#qh-app img[src=x]')")) === true, 'dialogs=' + dialogs.length);
  const badgeText = await ev("[].map.call(document.querySelectorAll('.card .badge'),b=>b.className+':'+b.textContent).slice(0,3).join(' | ')");
  const stat = await ev("document.querySelector('.stat-row').innerText.replace(/\\n/g,' ')");
  rec('A3b tampered progress accepted verbatim (no validation)', /constructor/.test(badgeText) || /\[object|NaN|Infinity/.test(await ev("document.getElementById('qh-app').innerText")), badgeText.slice(0, 90));
  await ev("localStorage.clear()");
  await nav('', "localStorage.setItem('qahub_locale_v1','__proto__')");
  rec('A3c locale poisoning', errors.length > 0, 'errors=' + errors.length);
  await ev("localStorage.clear()");
  // A4: is there any CSP / injected inline script allowed? (probe by injecting at runtime)
  await nav('');
  const cspMeta = await ev("!!document.querySelector('meta[http-equiv=\"Content-Security-Policy\"]')");
  const injected = await ev("(function(){window.__pwn=0;var s=document.createElement('script');s.textContent='window.__pwn=1';document.head.appendChild(s);return window.__pwn})()");
  rec('A4 no CSP: injected inline script executes', injected === 1, 'cspMeta=' + cspMeta);
  const ext = await ev("(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://example.invalid/x.css';document.head.appendChild(l);return 'attached'})()");
  // A5: third-party requests made by a plain page load
  const reqs = await ev("performance.getEntriesByType('resource').map(r=>new URL(r.name).host).filter((v,i,a)=>a.indexOf(v)===i && v.indexOf('localhost')<0 && v!=='example.invalid').join(',')");
  rec('A5 third-party hosts contacted on load', reqs.length > 0, reqs || 'none');
  // A6: framing
  out.push('residual    A6 can be framed (clickjacking): meta CSP cannot set frame-ancestors; needs host headers, see _headers');
  console.log(out.join('\n'));
  console.log('CSP console messages:', csp.length);
  ws.close(); proc.kill(); process.exit(out.some(l => /^(VULNERABLE|FAIL)/.test(l)) ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); proc.kill(); process.exit(1); });
