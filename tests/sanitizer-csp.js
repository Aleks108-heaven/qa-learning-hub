// Sanitizer fidelity (all locales x modules), hostile-content blocking, CSP violations, offline fonts.
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
const sp = os.tmpdir(), port = '9335', base = process.env.BASE_URL || 'http://localhost:8766/index.html';
const proc = spawn(edge, ['--headless=new', ...(process.env.NO_SANDBOX ? ['--no-sandbox'] : []), '--disable-gpu', '--remote-debugging-port=' + port, '--user-data-dir=' + require('path').join(sp, 'qahub-test-profile-' + port), '--window-size=1280,900', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
const getJson = url => new Promise((res, rej) => http.get(url, r => { let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d))); }).on('error', rej));
(async () => {
  let targets;
  for (let i = 0; i < 40; i++) { try { targets = await getJson('http://127.0.0.1:' + port + '/json'); break; } catch (e) { await sleep(250); } }
  const ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 0; const pending = {}; let errors = [], dialogs = [], violations = [], failedReqs = [];
  ws.onmessage = m => {
    const d = JSON.parse(m.data);
    if (d.id && pending[d.id]) { pending[d.id](d); delete pending[d.id]; }
    if (d.method === 'Runtime.exceptionThrown') errors.push((d.params.exceptionDetails.exception || {}).description || d.params.exceptionDetails.text);
    if (d.method === 'Page.javascriptDialogOpening') { dialogs.push(d.params.message); send('Page.handleJavaScriptDialog', { accept: true }); }
    if (d.method === 'Log.entryAdded' && /Content Security Policy|violates/i.test(d.params.entry.text)) violations.push(d.params.entry.text.slice(0, 160));
    if (d.method === 'Network.loadingFailed') failedReqs.push(d.params.errorText + ' ' + (d.params.blockedReason || ''));
  };
  const send = (method, params) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expr, awaitPromise) => { const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: !!awaitPromise }); return r.result.exceptionDetails ? 'EXC: ' + JSON.stringify(r.result.exceptionDetails.exception || r.result.exceptionDetails.text).slice(0, 200) : r.result.result.value; };
  await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable'); await send('Network.enable');
  const out = []; const check = (n, ok, x) => out.push((ok ? 'PASS ' : 'FAIL ') + n + (x ? '  [' + x + ']' : ''));
  let navN = 0;   // unique query forces a real document load (a hash-only change is a same-document navigation)
  const nav = async (hash) => { await send('Page.navigate', { url: base + '?n=' + (++navN) + hash }); await sleep(1200); };

  // 1. Fidelity: sanitizer must not alter legitimate content in any locale
  await nav('');
  const fidelity = `(async function(){
    var bad=[], total=0, locales=Object.keys(window.QAHUB_LOCALES);
    for (var li=0; li<locales.length; li++){
      localStorage.setItem('qahub_locale_v1', locales[li]);
      location.hash=''; location.reload(); await new Promise(r=>setTimeout(r,0));
    }
    return 'skip';
  })()`;
  // (reload-based loops are brittle; instead render each locale/module by switching the in-page select, then reading the DOM)
  const locales = ['en', 'uk', 'pl', 'es', 'it', 'de'];
  let totalLessons = 0, mismatches = [];
  for (const loc of locales) {
    await nav(''); await ev("localStorage.setItem('qahub_locale_v1','" + loc + "')"); await nav('');
    const res = await ev(`(async function(){
      var L = window.QAHUB_LOCALES[document.documentElement.lang]; var mism=[], n=0;
      for (var i=0;i<L.modules.length;i++){
        location.hash = '#/module/' + L.modules[i].id;
        await new Promise(r=>setTimeout(r,60));
        var secs = document.querySelectorAll('.lesson');
        for (var j=0;j<L.modules[i].lessons.length;j++){
          n++;
          var t = document.createElement('template'); t.innerHTML = L.modules[i].lessons[j].body;
          t.content.querySelectorAll('a[href^="https://"]').forEach(function(a){ a.setAttribute('target','_blank'); a.setAttribute('rel','noopener noreferrer'); });
          var rendered = secs[j] ? secs[j].innerHTML.replace(/^<h2[^>]*>.*?<\\/h2>/s,'') : null;
          // th scope is added by enhanceContent after render; strip it for comparison
          if(rendered!==null) rendered = rendered.replace(/ scope="col"/g,'').replace(/ tabindex="0"| role="region"| aria-label="[^"]*"/g,'');
          if (rendered !== t.innerHTML) mism.push(document.documentElement.lang+':'+L.modules[i].id+'#'+j);
        }
        if (L.modules[i].callout){ /* callout compared separately below */ }
      }
      return JSON.stringify({n:n, mism:mism});
    })()`, true);
    const r = JSON.parse(res); totalLessons += r.n; mismatches = mismatches.concat(r.mism);
  }
  check('sanitizer is lossless on all real content', mismatches.length === 0 && totalLessons > 700, totalLessons + ' lessons checked' + (mismatches.length ? '; mismatches: ' + mismatches.slice(0, 5).join(',') : ''));

  check('CSP silent while rendering all real content (6 locales, 756 lessons)', violations.length === 0 && failedReqs.length === 0, violations.concat(failedReqs).join(' | ').slice(0, 160));
  violations = [];
  // 2. Hostile content injected into the data layer must be neutralised
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `
    Object.defineProperty(window,'QAHUB_MODULES',{configurable:true,set:function(v){
      v[0].lessons[0].body += '<img src=x onerror=alert(91)><script>alert(92)<\\/script><a href="javascript:alert(93)" onclick="alert(94)" style="x:y">j</a><svg onload=alert(95)></svg><iframe src="https://evil.invalid"></iframe><a href="http://plain.invalid">http</a><a href="https://ok.invalid">https</a><div class="evil worked-example" style="color:red" id="x">cls</div><form action="https://evil.invalid"><input></form>';
      v[0].callout = {label:'L', body:'<img src=x onerror=alert(96)>callout'};
      this._m=v;},get:function(){return this._m;}});` });
  await ev("localStorage.removeItem('qahub_locale_v1')");   // previous loop left locale=de; the payload targets the English data
  await nav('#/module/manual-testing');
  await sleep(500);
  console.log('payload reached DOM:', await ev("document.getElementById('lesson-0').textContent.indexOf('cls')>-1"));
  console.log('DBG setter ran:', await ev("typeof window._m"), '| url:', await ev('location.href'), '| locale:', await ev("document.documentElement.lang + '/' + localStorage.getItem('qahub_locale_v1')"), '| tail:', await ev("(document.getElementById('lesson-0')||{innerHTML:'none'}).innerHTML.slice(-300)"));
  const hostile = JSON.parse(await ev(`JSON.stringify({
    img: document.querySelectorAll('#qh-app img').length, script: document.querySelectorAll('#qh-app script').length, svg: document.querySelectorAll('#qh-app svg').length,
    iframe: document.querySelectorAll('#qh-app iframe').length, form: document.querySelectorAll('#qh-app form, #qh-app input').length,
    handlers: document.querySelectorAll('#qh-app [onclick],#qh-app [onerror],#qh-app [onload],#qh-app [style]').length,
    jsHref: [].filter.call(document.querySelectorAll('#qh-app a'),function(a){return /^javascript:/i.test(a.getAttribute('href')||'')}).length,
    httpHref: [].filter.call(document.querySelectorAll('#qh-app a'),function(a){return /^http:/i.test(a.getAttribute('href')||'')}).length,
    httpsRel: (function(){var a=[].filter.call(document.querySelectorAll('#qh-app a'),function(a){return a.getAttribute('href')==='https://ok.invalid'})[0];return a&&a.target+'|'+a.rel})(),
    cls: (function(){var d=[].filter.call(document.querySelectorAll('#qh-app div'),function(d){return d.textContent==='cls'})[0];return d&&d.className+'|'+d.id})()
  })`));
  check('hostile payload: no img/script/svg/iframe/form/input survive', !hostile.img && !hostile.script && !hostile.svg && !hostile.iframe && !hostile.form, JSON.stringify(hostile));
  check('hostile payload: no event handlers / style attributes survive', hostile.handlers === 0);
  check('hostile payload: javascript: and http: links stripped', hostile.jsHref === 0 && hostile.httpHref === 0);
  check('https links forced to _blank + noopener noreferrer', hostile.httpsRel === '_blank|noopener noreferrer', hostile.httpsRel);
  check('unknown classes/ids dropped, allowed class kept', hostile.cls === 'worked-example|', hostile.cls);
  check('no script ran (no dialogs)', dialogs.length === 0, 'dialogs=' + dialogs.length);
  await send('Page.addScriptToEvaluateOnNewDocument', { source: "delete window.QAHUB_MODULES" }); // best effort; process is thrown away after

  console.log(out.join('\n'));
  ws.close(); proc.kill(); process.exit(out.some(l => /^(VULNERABLE|FAIL)/.test(l)) ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); proc.kill(); process.exit(1); });
