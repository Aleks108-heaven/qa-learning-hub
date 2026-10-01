// Builds a copy of the app that works inside the Claude artifact host, which differs from a normal static site:
//   - the host wraps the page in its own <!doctype>/<head>/<body> skeleton and enforces its own CSP
//     (so the page is published as a fragment, with no meta CSP of its own);
//   - only Google Fonts may supply fonts, so the self-hosted fonts.css is replaced by the Google link;
//   - the viewer's light/dark toggle sets data-theme, so the dark tokens are re-emitted with that selector;
//   - the skeleton sets `body{font:14px system}`, which would override the app's font, so it is restored.
// Usage: node tools/build-artifact.js [outDir]      (default: dist-artifact/, git-ignored)
// Output: page.html (fragment to publish), index.html (same page wrapped in an emulated skeleton, for local testing),
//         styles.css, app.js, data/ (the files the page references).
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const out = path.resolve(process.argv[2] || path.join(root, 'dist-artifact'));
fs.mkdirSync(out, { recursive: true });

function must(cond, msg) { if (!cond) { console.error('build-artifact: ' + msg); process.exit(1); } }
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  fs.readdirSync(src, { withFileTypes: true }).forEach(e => {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  });
}

// ---- styles.css: data-theme dark tokens, safe-area header, host body font
let css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const dark = css.match(/@media \(prefers-color-scheme: dark\)\{\s*:root\{([\s\S]*?)\}\s*\}/);
must(dark, 'could not find the dark-mode token block in styles.css');
const tokens = dark[1].replace(/\s+$/, '');
css = css.replace(dark[0],
  '@media (prefers-color-scheme: dark){\n  :root:not([data-theme="light"]){' + tokens + '\n    color-scheme:dark;\n  }\n}\n' +
  ':root[data-theme="dark"]{' + tokens + '\n  color-scheme:dark;\n}\n' +
  ':root[data-theme="light"]{color-scheme:light;}');
const sticky = 'position:sticky; top:0; height:auto;';
must(css.includes(sticky), 'could not find the mobile sticky header rule in styles.css');
css = css.replace(sticky, 'position:sticky; top:env(safe-area-inset-top,0px); height:auto;');
css += '\n/* Artifact host: its skeleton sets body{font:14px system}; restore the app font and size. */\nbody{font-family:var(--font-body); font-size:1rem;}\n';
fs.writeFileSync(path.join(out, 'styles.css'), css);

// ---- page fragment: title, Google Fonts (the only allowed font host), stylesheet, then the body markup
const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const body = src.match(/<body>([\s\S]*)<\/body>/);
must(body, 'could not find <body> in index.html');
const fonts = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Source+Serif+4:wght@600' +
  '&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,600&family=IBM+Plex+Mono:wght@400;500&display=swap';
const fragment = '<title>QA Learning Hub</title>\n' +
  '<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
  '<link rel="stylesheet" href="' + fonts + '">\n' +
  '<link rel="stylesheet" href="styles.css">\n' + body[1].trim() + '\n';
fs.writeFileSync(path.join(out, 'page.html'), fragment);

// ---- local preview: the fragment inside the same skeleton the host applies
const skeleton = '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">' +
  '<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}' +
  'html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#faf9f5;color:#141413}' +
  'img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>\n';
fs.writeFileSync(path.join(out, 'index.html'), skeleton + fragment + '</body></html>\n');

fs.copyFileSync(path.join(root, 'app.js'), path.join(out, 'app.js'));
copyDir(path.join(root, 'data'), path.join(out, 'data'));
console.log('built ' + out);
