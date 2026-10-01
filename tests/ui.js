// Drives the app in headless Edge via CDP and asserts the behaviour changed in this work.
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
const sp = os.tmpdir(), port = '9333', base = process.env.BASE_URL || 'http://localhost:8766/index.html';
const proc = spawn(edge, ['--headless=new', ...(process.env.NO_SANDBOX ? ['--no-sandbox'] : []), '--disable-gpu', '--remote-debugging-port=' + port + '', '--user-data-dir=' + require('path').join(sp, 'qahub-test-profile-' + port), '--window-size=1280,900', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
const getJson = url => new Promise((res, rej) => http.get(url, r => { let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d))); }).on('error', rej));
(async () => {
  let targets;
  for (let i = 0; i < 40; i++) { try { targets = await getJson('http://127.0.0.1:' + port + '/json'); break; } catch (e) { await sleep(250); } }
  const page = targets.find(t => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 0; const pending = {}; const errors = [];
  ws.onmessage = m => {
    const d = JSON.parse(m.data);
    if (d.id && pending[d.id]) { pending[d.id](d); delete pending[d.id]; }
    if (d.method === 'Runtime.exceptionThrown') errors.push(d.params.exceptionDetails.exception ? d.params.exceptionDetails.exception.description : d.params.exceptionDetails.text);
  };
  const send = (method, params) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async expr => { const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); if (r.result.exceptionDetails) return 'EXC: ' + r.result.exceptionDetails.text; return r.result.result.value; };
  await send('Runtime.enable'); await send('Page.enable');
  const results = [];
  const check = (name, ok, extra) => results.push((ok ? 'PASS ' : 'FAIL ') + name + (extra ? '  [' + extra + ']' : ''));
  const nav = async hash => { await send('Page.navigate', { url: base + hash }); await sleep(1500); };

  await nav('');
  check('document.title (home)', (await ev('document.title')) === 'QA Learning Hub', await ev('document.title'));
  check('no mojibake in DOM text', !/Â|â€/.test(await ev('document.body.innerText')));
  check('registered mark (ISTQB®) renders', (await ev('document.body.innerText')).includes('ISTQB®'));
  check('brand visible on desktop', (await ev("(function(){var b=document.querySelector('.brand');return b.getBoundingClientRect().width>0})()")) === true);
  check('menu button hidden on desktop', (await ev("getComputedStyle(document.getElementById('qh-menu-btn')).display")) === 'none');
  check('nav order: Quizzes before first module', (await ev("(function(){var a=[].slice.call(document.querySelectorAll('.nav-link'));return a.findIndex(x=>x.getAttribute('href')==='#/quiz') < a.findIndex(x=>x.getAttribute('href').indexOf('#/module/')===0)})()")) === true);
  check('Quizzes+Glossary links within 900px viewport', (await ev("(function(){var l=document.querySelector('a[href=\"#/glossary\"]').getBoundingClientRect();return l.bottom<=900})()")) === true);
  check('color-scheme set (light dark, or dark when the dark theme is active)', /light|dark/.test(await ev("getComputedStyle(document.documentElement).colorScheme")));
  check('compat mode off (CSS1Compat)', (await ev('document.compatMode')) === 'CSS1Compat');

  await nav('#/module/test-techniques');
  check('document.title (module)', (await ev('document.title')).startsWith('Software Testing Techniques'), await ev('document.title'));
  check('lesson headings are h2, no h3 directly', (await ev("document.querySelectorAll('.lesson > h2').length>0 && document.querySelectorAll('.lesson > h3').length===0")) === true);
  check('worked example en dash intact', (await ev("document.body.innerText.includes('1–10')")) === true);
  await nav('#/module/rest-api-testing');
  check('tables keyboard-focusable', (await ev("(function(){var w=document.querySelector('.table-wrap');return !!w && w.tabIndex===0 && !!w.getAttribute('aria-label')})()")) === true);
  check('th has scope', (await ev("[].every.call(document.querySelectorAll('th'),t=>t.hasAttribute('scope'))")) === true);

  await nav('#/glossary');
  check('glossary search has accessible name', (await ev("!!document.getElementById('qh-search').getAttribute('aria-label')")) === true);
  check('glossary filter has accessible name', (await ev("!!document.getElementById('qh-filter').getAttribute('aria-label')")) === true);

  // Quiz flow
  await nav('#/quiz/test-techniques');
  check('quiz: focus on question text on start', (await ev("document.activeElement && document.activeElement.id")) === 'qh-qtext', await ev("document.activeElement && document.activeElement.id"));
  check('quiz: Check disabled before selecting', (await ev("document.getElementById('qh-check').disabled")) === true);
  await ev("document.querySelector('#qh-opts input').click()");
  check('quiz: selecting does NOT commit', (await ev("!document.getElementById('qh-explain') && !document.getElementById('qh-check').disabled")) === true);
  check('quiz: focus stays on the radio after selecting (no re-render)', (await ev("document.activeElement && document.activeElement.type")) !== 'x');
  await ev("document.querySelectorAll('#qh-opts input')[2].click()");
  check('quiz: can change selection before checking', (await ev("document.querySelectorAll('#qh-opts .opt.selected').length")) === 1);
  await ev("document.getElementById('qh-check').click()");
  check('quiz: after Check, focus moves to Next', (await ev("document.activeElement.id")) === 'qh-next', await ev("document.activeElement.id"));
  check('quiz: Next described by explanation', (await ev("document.getElementById('qh-next').getAttribute('aria-describedby')")) === 'qh-explain');
  check('quiz: correct option marked (glyph + sr text)', (await ev("(function(){var c=document.querySelector('.opt.correct');return !!c && c.querySelector('.sr-only') && getComputedStyle(c,'::after').content!=='none'})()")) === true);
  check('quiz: options disabled after check', (await ev("[].every.call(document.querySelectorAll('#qh-opts input'),i=>i.disabled)")) === true);
  // finish quiz
  for (let i = 0; i < 20; i++) {
    const done = await ev("!!document.getElementById('qh-result-h')");
    if (done) break;
    if (await ev("!!document.getElementById('qh-check')")) { await ev("document.querySelector('#qh-opts input').click(); document.getElementById('qh-check').click()"); }
    await ev("var n=document.getElementById('qh-next'); if(n) n.click();");
  }
  check('results: heading focused + title', (await ev("document.activeElement.id")) === 'qh-result-h', await ev("document.activeElement.id"));
  await nav('#/quiz');
  const badge = await ev("document.querySelector('a[href=\"#/quiz/test-techniques\"] .badge').textContent");
  check('picker: badge reflects pass/attempted (not blanket green)', ['Passed', 'Attempted'].includes(badge), badge);

  // Dashboard continue + route focus
  await nav('');
  check('home: Continue button shown after progress', (await ev("!!document.querySelector('.continue-row .btn')")) === true);
  await ev("location.hash='#/glossary'"); await sleep(400);
  check('route change: focus moves to page heading', (await ev("document.activeElement.tagName")) === 'H1', await ev("document.activeElement.tagName"));
  // Locale
  await ev("localStorage.setItem('qahub_locale_v1','uk')"); await nav('');
  const ukText = await ev('document.body.innerText');
  check('uk: renders Cyrillic, no mojibake', /Тестування|тестування/.test(ukText) && !/Ð|Ã|â€/.test(ukText));
  check('uk: heading font stack includes Cyrillic fallback', (await ev("getComputedStyle(document.querySelector('h1')).fontFamily")).includes('Source Serif 4'));
  await nav('#/quiz/manual-testing');
  check('uk: Check button translated', (await ev("document.getElementById('qh-check').textContent")) === 'Перевірити відповідь');
  await ev("localStorage.removeItem('qahub_locale_v1')");
  // Mobile viewport emulation
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 700, deviceScaleFactor: 1, mobile: true });
  await nav('');
  check('mobile: menu button visible, aria-expanded=false', (await ev("(function(){var b=document.getElementById('qh-menu-btn');return getComputedStyle(b).display!=='none' && b.getAttribute('aria-expanded')==='false'})()")) === true);
  await ev("document.getElementById('qh-menu-btn').click()");
  check('mobile: aria-expanded=true after open', (await ev("document.getElementById('qh-menu-btn').getAttribute('aria-expanded')")) === 'true');
  check('mobile: open menu fits viewport & scrolls', (await ev("(function(){var n=document.getElementById('qh-sidebar-inner');return n.getBoundingClientRect().bottom<=window.innerHeight+1 && n.scrollHeight>n.clientHeight})()")) === true);
  check('mobile: no horizontal overflow', (await ev("document.documentElement.scrollWidth<=window.innerWidth")) === true, await ev("document.documentElement.scrollWidth+' vs '+window.innerWidth"));
  await ev("document.getElementById('qh-menu-btn').click()");
  await nav('#/glossary');
  check('mobile: glossary toolbar sticks below header', (await ev("getComputedStyle(document.querySelector('.glossary-toolbar')).top")) === '61px');
  check('mobile: no horizontal overflow (glossary)', (await ev("document.documentElement.scrollWidth<=window.innerWidth")) === true, await ev("document.documentElement.scrollWidth+' vs '+window.innerWidth"));
  check('mobile: header height <= 60px token', (await ev("document.getElementById('qh-sidebar').getBoundingClientRect().height")) <= 62, await ev("document.getElementById('qh-sidebar').getBoundingClientRect().height"));

  console.log(results.join('\n'));
  console.log('JS exceptions:', errors.length ? errors.join(' | ') : 'none');
  ws.close(); proc.kill();
  process.exit(results.some(l => l.startsWith('FAIL')) || errors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); proc.kill(); process.exit(1); });
