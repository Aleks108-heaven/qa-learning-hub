// Content integrity checks (no browser needed): loads the data files into a fake window and verifies structure,
// locale parity, quiz quality, glossary hygiene and the toolkit reference data. Exits non-zero on any FAIL.
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '..');
const win = {}; const ctx = vm.createContext({ window: win });
const load = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
['data/tutorials.js', 'data/glossary.js', 'data/quiz.js', 'data/toolkit.js'].forEach(load);
const LOCALES = ['uk', 'pl', 'es', 'it', 'de'];
LOCALES.forEach(c => load('data/locales/' + c + '.js'));
// English UI strings live in app.js (EN_UI); read them without running the app.
const appSrc = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const enUi = vm.runInContext('(' + /var EN_UI = (\{[\s\S]*?\n  \});/.exec(appSrc)[1] + ')', ctx);

const en = { modules: win.QAHUB_MODULES, quizzes: win.QAHUB_QUIZZES, glossary: win.QAHUB_GLOSSARY };
const L = win.QAHUB_LOCALES, tk = win.QAHUB_TOOLKIT;
const results = [];
const check = (name, ok, extra) => results.push((ok ? 'PASS ' : 'FAIL ') + name + (extra ? '  [' + extra + ']' : ''));

// ---- English structure
check('13 modules, numbered 1..13 in order', en.modules.length === 13 && en.modules.every((m, i) => m.num === i + 1), en.modules.length + ' modules');
check('module ids are unique', new Set(en.modules.map(m => m.id)).size === en.modules.length);
check('every module has title, summary, overview, takeaway and at least one lesson', en.modules.every(m => m.title && m.summary && m.overview && m.takeaway && m.lessons.length > 0));
check('every module has a quiz bank', en.modules.every(m => Array.isArray(en.quizzes[m.id]) && en.quizzes[m.id].length >= 8));
check('no quiz bank without a module', Object.keys(en.quizzes).every(k => en.modules.some(m => m.id === k)));

// ---- Quiz quality
const quizProblems = [];
Object.entries(en.quizzes).forEach(([id, qs]) => qs.forEach((q, i) => {
  const tag = id + '#' + (i + 1);
  if (!q.q || !q.explain) quizProblems.push(tag + ' missing question/explanation');
  if (!Array.isArray(q.options) || q.options.length !== 4) quizProblems.push(tag + ' needs exactly 4 options');
  else {
    if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct > 3) quizProblems.push(tag + ' correct index out of range');
    if (new Set(q.options.map(o => o.trim().toLowerCase())).size !== 4) quizProblems.push(tag + ' duplicate options');
  }
}));
check('every quiz question has 4 distinct options, a valid answer and an explanation', quizProblems.length === 0, quizProblems.slice(0, 3).join('; '));

// ---- Glossary
const cats = ['Functional', 'Non-Functional', 'Structural', 'Change-Related', 'Specialized', 'General'];
const seen = {}, dups = [];
en.glossary.forEach(g => { const k = g.term.toLowerCase(); if (seen[k]) dups.push(g.term); seen[k] = 1; });
check('glossary: no duplicate terms', dups.length === 0, dups.join(', '));
check('glossary: every entry has a term, a definition and a known category', en.glossary.every(g => g.term && g.def && cats.indexOf(g.cat) !== -1));

// ---- Locale parity (every locale mirrors English 1:1)
LOCALES.forEach(code => {
  const l = L[code], p = [];
  if (l.modules.length !== en.modules.length) p.push('modules ' + l.modules.length + '/' + en.modules.length);
  en.modules.forEach((m, i) => {
    const lm = l.modules[i]; if (!lm) return;
    if (lm.id !== m.id || lm.num !== m.num) p.push('module order @' + i);
    if (lm.lessons.length !== m.lessons.length) p.push(m.id + ' lessons ' + lm.lessons.length + '/' + m.lessons.length);
    ['title', 'summary', 'overview', 'takeaway'].forEach(k => { if (m[k] && !lm[k]) p.push(m.id + ' missing ' + k); });
    const lq = (l.quizzes || {})[m.id] || [], eq = en.quizzes[m.id] || [];
    if (lq.length !== eq.length) p.push(m.id + ' quiz ' + lq.length + '/' + eq.length);
    lq.forEach((q, j) => { if (eq[j] && (q.correct !== eq[j].correct || q.options.length !== 4)) p.push(m.id + ' q' + (j + 1) + ' answer differs'); });
  });
  if ((l.glossary || []).length !== en.glossary.length) p.push('glossary ' + (l.glossary || []).length + '/' + en.glossary.length);
  const missing = Object.keys(enUi).filter(k => !(k in (l.ui || {}))), extra = Object.keys(l.ui || {}).filter(k => !(k in enUi));
  if (missing.length) p.push('ui missing: ' + missing.slice(0, 5).join(','));
  if (extra.length) p.push('ui extra: ' + extra.slice(0, 5).join(','));
  check('locale ' + code + ' mirrors English (modules, lessons, quizzes, glossary, UI keys)', p.length === 0, p.join(' | '));
});

// ---- UI strings: placeholders used by tf() must survive translation
const placeholders = s => (String(s).match(/\{\w+\}/g) || []).sort().join(',');
const phProblems = [];
LOCALES.forEach(code => Object.keys(enUi).forEach(k => { if (L[code].ui[k] != null && placeholders(L[code].ui[k]) !== placeholders(enUi[k])) phProblems.push(code + '.' + k); }));
check('UI placeholders ({n}, {conf}, ...) are intact in every locale', phProblems.length === 0, phProblems.slice(0, 4).join(', '));

// ---- Lesson HTML: markup sanity that the sanitizer would otherwise hide
const htmlProblems = [];
const allMods = [['en', en.modules]].concat(LOCALES.map(c => [c, L[c].modules]));
allMods.forEach(([code, mods]) => mods.forEach(m => m.lessons.forEach(l => {
  ['table', 'ul', 'ol', 'div', 'p', 'pre'].forEach(tag => {
    const open = (l.body.match(new RegExp('<' + tag + '[\\s>]', 'g')) || []).length, close = (l.body.match(new RegExp('</' + tag + '>', 'g')) || []).length;
    if (open !== close) htmlProblems.push(code + ' ' + m.id + ' "' + l.h.slice(0, 24) + '" <' + tag + '> ' + open + '/' + close);
  });
})));
check('lesson HTML: tags are balanced in every lesson and locale', htmlProblems.length === 0, htmlProblems.slice(0, 3).join('; '));

// ---- Toolkit reference data
check('toolkit: 13 checklist items numbered 1..13', tk.checklist.length === 13 && tk.checklist.every((c, i) => c.n === i + 1 && c.title && c.look));
check('toolkit: pitfalls cover "All languages" plus 12 stacks, each with at least one group of items', tk.pitfalls.length === 13 && tk.pitfalls[0].id === 'all' && tk.pitfalls.every(p => p.id && p.name && p.groups.length && p.groups.every(g => g.label && g.items.length)));
check('toolkit: commands exist for Linux, Windows and macOS', ['linux', 'windows', 'macos'].every(id => tk.commands.some(c => c.id === id && c.items.length >= 5)));
// Reference text is escaped when rendered, so a tag would show literally; flag anything that looks like real markup.
check('toolkit: no HTML tags or event handlers in reference strings', !/<\s*\/?\s*(script|img|svg|iframe|a|b|i|div|span|style|link)\b|\bon\w+\s*=/i.test(JSON.stringify(tk)));

console.log(results.join('\n'));
process.exit(results.some(l => l.startsWith('FAIL')) ? 1 : 0);
