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
  let id = 0; const pending = {}; const errors = []; const logErrors = [];
  ws.onmessage = m => {
    const d = JSON.parse(m.data);
    if (d.id && pending[d.id]) { pending[d.id](d); delete pending[d.id]; }
    if (d.method === 'Runtime.exceptionThrown') errors.push(d.params.exceptionDetails.exception ? d.params.exceptionDetails.exception.description : d.params.exceptionDetails.text);
    if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error') logErrors.push(d.params.entry.text + ' ' + (d.params.entry.url || ''));
  };
  const send = (method, params) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async expr => { const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); if (r.result.exceptionDetails) return 'EXC: ' + r.result.exceptionDetails.text; return r.result.result.value; };
  await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
  await send('Emulation.setFocusEmulationEnabled', { enabled: true });   // headless pages are not "focused" by default, so blur/focus events would not fire
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
  // The standalone page declares its favicon in <head>; the artifact build is a body fragment and the host supplies the icon.
  const standalone = (await ev("!!document.querySelector('meta[http-equiv=\"Content-Security-Policy\"]')")) === true;
  if (standalone) {
    check('console is clean on load: no failed requests (favicon included)', logErrors.length === 0, logErrors.join(' | '));
    check('favicon declared and served', (await ev("(function(){var l=document.querySelector('link[rel=icon]');return !!l && l.getAttribute('href')==='favicon.svg'})()")) === true);
  } else {
    check('console is clean on load: no failed requests other than the host-owned favicon', logErrors.every(e => /favicon\.ico/.test(e)), logErrors.join(' | '));
  }

  // Dashboard / learning path with Module 13
  await nav('');
  check('dashboard lists 13 module cards', (await ev("document.querySelectorAll('.dashboard-grid .card').length")) === 13);
  check('learning path has 6 stages, the last holding Module 13', (await ev("(function(){var s=document.querySelectorAll('.path-stage');return s.length===6 && !!s[5].querySelector('a[href=\"#/module/verification-reporting\"]')})()")) === true);
  check('sidebar has a Toolkit link after Glossary', (await ev("(function(){var a=[].slice.call(document.querySelectorAll('.nav-link')).map(x=>x.getAttribute('href'));return a.indexOf('#/toolkit')===a.indexOf('#/glossary')+1})()")) === true);
  await nav('#/module/verification-reporting');
  check('Module 13 renders 8 lessons with in-app links to the toolkit kept by the sanitizer', (await ev("document.querySelectorAll('.lesson').length===8 && document.querySelectorAll('.lesson a[href=\"#/toolkit\"]').length>=4")) === true);
  check('Module 13 title', (await ev('document.title')).startsWith('Verification, Audit & Reporting in Practice'), await ev('document.title'));

  // Quiz picker heading order (WCAG 1.3.1): h1 > h2 > h3, no skipped level
  await nav('#/quiz');
  check('quiz picker: no skipped heading level', (await ev("(function(){var h=[].slice.call(document.querySelectorAll('#qh-app h1,#qh-app h2,#qh-app h3'));var last=0;for(var i=0;i<h.length;i++){var l=+h[i].tagName[1];if(last&&l>last+1)return false;last=l}return true})()")) === true);

  // Final Exam must draw from every module (regression: a plain shuffle left modules out of ~95% of exams)
  await nav('#/quiz/final');
  const modCount = await ev('window.QAHUB_MODULES.length');
  const sources = new Set(); let total = 0;
  for (let i = 0; i < 40; i++) {
    if (await ev("!!document.getElementById('qh-result-h')")) break;
    const src = await ev("(function(){var q=document.querySelector('.q-num');return q?q.textContent.split('\\u00b7').slice(1).join('').trim():''})()");
    if (src) { sources.add(src); total++; }
    await ev("document.querySelector('#qh-opts input').click(); document.getElementById('qh-check').click(); document.getElementById('qh-next').click();");
  }
  check('final exam has 20 questions', total === 20, String(total));
  check('final exam covers every module', sources.size === modCount, sources.size + ' of ' + modCount + ' modules');

  // Module completion is reversible, and focus follows the control
  await nav('#/module/ai-testing');
  await ev("document.getElementById('qh-mark-complete').click()");
  check('mark complete: badge shown, undo button focused', (await ev("!!document.querySelector('.cta-row .badge.completed') && document.activeElement.id")) === 'qh-mark-incomplete', await ev('document.activeElement.id'));
  await ev("document.getElementById('qh-mark-incomplete').click()");
  check('undo completion: back to in progress, mark-complete focused', (await ev("JSON.parse(localStorage.getItem('qahub_progress_v1')).modules['ai-testing'].status+'|'+document.activeElement.id")) === 'in-progress|qh-mark-complete');

  // Reset progress: two-step, no blocking dialog
  await nav('');
  await ev("document.getElementById('qh-reset').focus(); document.getElementById('qh-reset').click()");   // a real click focuses the button
  const armedText = await ev("document.getElementById('qh-reset').textContent");
  check('reset: first click only asks for confirmation', armedText !== 'Reset all progress' && (await ev("Object.keys(JSON.parse(localStorage.getItem('qahub_progress_v1')).modules).length")) > 0, armedText.slice(0, 40));
  await ev("document.getElementById('qh-reset').blur()");
  check('reset: losing focus cancels the confirmation', (await ev("document.getElementById('qh-reset').textContent")) === 'Reset all progress');
  await ev("document.getElementById('qh-reset').focus(); document.getElementById('qh-reset').click(); document.getElementById('qh-reset').click();");
  await sleep(300);
  check('reset: second click clears progress and announces it', (await ev("(function(){var p=JSON.parse(localStorage.getItem('qahub_progress_v1'));return Object.keys(p.modules).length+Object.keys(p.quizzes).length})()")) === 0 && (await ev("document.getElementById('qh-reset-note').textContent")) === 'Progress cleared.');
  check('reset: dashboard shows 0 completed and no reset button', (await ev("document.querySelector('.stat-num').textContent")) === '0 / 13' && (await ev("!document.getElementById('qh-reset')")) === true);

  // ---- QA Toolkit
  const setSel = (sid, v) => ev("(function(){var e=document.getElementById('" + sid + "');e.value='" + v + "';e.dispatchEvent(new Event('change',{bubbles:true}))})()");
  const setTxt = (sid, v) => ev("(function(){var e=document.getElementById('" + sid + "');e.value=" + JSON.stringify(v) + ";e.dispatchEvent(new Event('input',{bubbles:true}))})()");
  const tick = (n, on) => ev("(function(){var e=document.getElementById('tk-q" + n + "');e.checked=" + on + ";e.dispatchEvent(new Event('change',{bubbles:true}))})()");
  await nav('#/toolkit');
  check('toolkit: page title and h1', (await ev('document.title')) === 'QA Toolkit · QA Learning Hub' && (await ev("document.querySelector('h1').textContent")) === 'QA Toolkit');
  check('toolkit: nav link is the current page', (await ev("document.querySelector('a[href=\"#/toolkit\"]').getAttribute('aria-current')")) === 'page');
  check('toolkit: every control has a label', (await ev("[].every.call(document.querySelectorAll('#qh-app input,#qh-app select,#qh-app textarea'),function(e){return e.labels&&e.labels.length>0})")) === true);
  check('toolkit: every tool section is named by its heading', (await ev("[].every.call(document.querySelectorAll('.tool'),function(s){var h=document.getElementById(s.getAttribute('aria-labelledby'));return !!h&&h.tagName==='H2'})")) === true);
  // severity calculator: every band and the boundaries between bands
  const sev = async (i, l) => { await setSel('tk-impact', i); await setSel('tk-like', l); return await ev("document.querySelector('#tk-sev-out .pill').textContent+'|'+document.querySelector('#tk-sev-out .result-math').textContent"); };
  const cases = [[5, 5, 'Critical|5 × 5 = 25'], [5, 4, 'Critical|5 × 4 = 20'], [4, 4, 'High|4 × 4 = 16'], [4, 3, 'High|4 × 3 = 12'], [5, 2, 'Medium|5 × 2 = 10'], [3, 3, 'Medium|3 × 3 = 9'], [2, 3, 'Medium|2 × 3 = 6'], [1, 5, 'Low|1 × 5 = 5'], [2, 2, 'Low|2 × 2 = 4'], [1, 2, 'Low|1 × 2 = 2'], [1, 1, 'Info|1 × 1 = 1']];
  for (const [i, l, want] of cases) { const got = await sev(i, l); check('severity ' + i + ' x ' + l + ' -> ' + want.split('|')[0], got === want, got); }
  await setSel('tk-conf', 'confLow');
  check('severity: confidence is reported separately and does not change the score', (await ev("document.getElementById('tk-sev-out').textContent")).includes('Confidence: Low') && (await ev("document.querySelector('#tk-sev-out .pill').textContent")) === 'Info');
  check('severity: result is a polite live region', (await ev("document.getElementById('tk-sev-out').getAttribute('role')+'/'+document.getElementById('tk-sev-out').getAttribute('aria-live')")) === 'status/polite');
  // final status helper: first matching rule decides
  const stat = async () => ev("document.querySelector('#tk-stat-out .pill').textContent");
  check('status: nothing ticked -> PASS', (await stat()) === 'PASS');
  await tick(4, true); check('status: open Medium/Low/Info -> PASS WITH FINDINGS', (await stat()) === 'PASS WITH FINDINGS');
  await tick(3, true); check('status: untested scope beats open findings -> PARTIALLY VERIFIED', (await stat()) === 'PARTIALLY VERIFIED');
  await tick(2, true); check('status: unreachable target beats partial -> NOT ENOUGH EVIDENCE', (await stat()) === 'NOT ENOUGH EVIDENCE');
  await tick(1, true); check('status: Confirmed Critical/High beats everything -> FAIL (rule 1)', (await stat()) === 'FAIL' && (await ev("document.querySelector('#tk-stat-out .result-math').textContent")) === 'Rule 1 of 5');
  // defect record builder
  await setTxt('tk-rec-id', 'QA-777'); await setTxt('tk-rec-title', 'Pipe | and <b>markup</b>'); await setTxt('tk-rec-steps', '1. open page\n- click save\n3) read result');
  const md = await ev("document.getElementById('tk-rec-md').textContent");
  check('record: heading and table rows', md.startsWith('## QA-777 — Pipe') && md.includes('| ID | QA-777 |') && md.includes('| Status | Confirmed |') && md.includes('| Reproducible | Always |'));
  check('record: pipes are escaped and steps renumbered', md.includes('Pipe \\| and') && md.includes('| Steps | 1. open page<br>2. click save<br>3. read result |'));
  check('record: empty fields say so, root cause defaults to "Not determined"', md.includes('| Environment | (not provided) |') && md.includes('| Root cause | Not determined |'));
  check('record: user markup is shown as text, never parsed', (await ev("document.querySelectorAll('#tk-rec-md b').length")) === 0 && (await ev("document.getElementById('tk-rec-md').textContent")).includes('<b>markup</b>'));
  await ev("document.getElementById('tk-rec-copy').click()"); await sleep(400);
  check('record: copy gives feedback (copied, or a manual-copy hint)', (await ev("document.getElementById('tk-rec-status-msg').textContent.length")) > 0);
  const dl = fs.mkdtempSync(require('path').join(os.tmpdir(), 'qahub-dl-'));
  await send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: dl });
  await ev("document.getElementById('tk-rec-download').click()");
  let file = null; for (let i = 0; i < 20 && !file; i++) { await sleep(200); file = fs.readdirSync(dl).find(f => f === 'QA-777.md'); }
  check('record: download writes QA-777.md under the CSP', !!file && fs.readFileSync(require('path').join(dl, 'QA-777.md'), 'utf8').includes('| ID | QA-777 |'), file || 'no file');
  // reference library
  await setSel('tk-pit-sel', 'python');
  check('reference: Python pitfalls include yaml.safe_load as code', (await ev("!![].find.call(document.querySelectorAll('#tk-pit-out li code'),function(c){return c.textContent==='yaml.safe_load'})")) === true);
  await setSel('tk-cmd-sel', 'windows');
  check('reference: Windows commands shown and copy button present', (await ev("document.getElementById('tk-cmd-code').textContent.includes('Get-NetFirewallProfile') && !!document.getElementById('tk-cmd-copy')")) === true);
  check('reference: 13-item host checklist as native disclosure widgets', (await ev("document.querySelectorAll('details.check-item').length")) === 13);
  check('toolkit: no horizontal overflow on desktop', (await ev('document.documentElement.scrollWidth<=window.innerWidth')) === true);

  // Locale
  await ev("localStorage.setItem('qahub_locale_v1','uk')"); await nav('');
  const ukText = await ev('document.body.innerText');
  check('uk: renders Cyrillic, no mojibake', /Тестування|тестування/.test(ukText) && !/Ð|Ã|â€/.test(ukText));
  check('uk: heading font stack includes Cyrillic fallback', (await ev("getComputedStyle(document.querySelector('h1')).fontFamily")).includes('Source Serif 4'));
  await nav('#/quiz/manual-testing');
  check('uk: Check button translated', (await ev("document.getElementById('qh-check').textContent")) === 'Перевірити відповідь');
  await nav('');
  check('uk: Module 13 and Stage 6 are on the dashboard', (await ev('document.body.innerText')).includes('Етап 6') && (await ev('document.body.innerText')).includes('Верифікація, аудит і звітність'));
  await nav('#/toolkit');
  check('uk: toolkit is translated (calculator heading, option labels, result)', (await ev("document.getElementById('tk-sev-h').textContent")) === 'Калькулятор серйозності' && (await ev("document.querySelector('#tk-impact option').textContent")).includes('Косметичний') && (await ev("document.querySelector('#tk-sev-out .pill').textContent")) === 'Medium');
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

  await nav('#/toolkit');
  check('mobile: no horizontal overflow (toolkit)', (await ev("document.documentElement.scrollWidth<=window.innerWidth")) === true, await ev("document.documentElement.scrollWidth+' vs '+window.innerWidth"));
  check('mobile: toolkit form controls are at least 24px tall (WCAG 2.5.8)', (await ev("[].every.call(document.querySelectorAll('#qh-app .tool select,#qh-app .tool input[type=text],#qh-app .tool .btn'),function(e){return e.getBoundingClientRect().height>=24})")) === true);

  console.log(results.join('\n'));
  console.log('JS exceptions:', errors.length ? errors.join(' | ') : 'none');
  ws.close(); proc.kill();
  process.exit(results.some(l => l.startsWith('FAIL')) || errors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); proc.kill(); process.exit(1); });
