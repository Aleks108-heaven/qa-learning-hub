# QA Learning Hub

An interactive, self-contained software testing course — built as a single-page web app with tutorials, a searchable glossary, and auto-graded quizzes. No backend, no build step, no dependencies, and no third-party requests: serve the folder and it runs.

**Live demo:** https://claude.ai/artifact/2CfVxTa4v5ZQYyLi2y4L7L (a published snapshot; it may lag behind this repository)

## What's inside

- **13 tutorial modules, 134 lessons** — from manual testing fundamentals through security testing and hands-on automation to AI testing, closing with evidence-based verification and reporting
- **206 quiz questions** across per-module quiz banks, plus a 20-question mixed Final Exam that always includes at least one question from every module
- **186-term glossary**, searchable and filterable by category, with alphabet-aware A-Z navigation
- **A QA Toolkit** (`#/toolkit`) — a severity calculator, a final-status helper, a defect-record builder (copy or download Markdown) and a reference library of language pitfalls, read-only host commands and a 13-item host security checklist
- **6 languages** — English, Ukrainian, Polish, Spanish, Italian, German — with a language switcher; every lesson, quiz question, and glossary entry is translated, not just the UI chrome (the toolkit's reference lists are English only, by design: they are tool names, commands and rule names)
- **A guided learning path** on the dashboard that groups the modules into six stages, with a detailed overview of each module, its lesson count, and a link to its quiz
- **Per-viewer progress tracking** (module completion, quiz best-scores) saved locally in the browser — nothing is sent to a server
- **Accessible by design** — keyboard and screen-reader support, WCAG AA text contrast, reduced-motion support, light and dark themes (see [Accessibility](#accessibility))
- **Hardened** — strict Content-Security-Policy, HTML allowlist sanitizer, validated storage and routes, self-hosted fonts (see [Security](#security))

## Learning path

The dashboard groups the modules into six stages. Newcomers can take them in order; experienced testers can jump to the stage they need. Each module also opens with a detailed overview of what it covers.

| Stage | Modules | Focus |
|-------|---------|-------|
| 1 · Foundations | 1–3 | Vocabulary, principles, test design techniques, the testing-types landscape |
| 2 · Hands-on testing | 4–6 | Ad hoc, exploratory and REST API testing |
| 3 · Certification & career | 7–8 | ISTQB® CTFL v4.0 exam prep, the QA toolbox and career growth |
| 4 · Engineering quality at scale | 9–11 | Test/QA architecture, application security, performance, UI/UX and automation |
| 5 · AI testing | 12 | Using AI to test, and testing AI-based systems |
| 6 · Verification & reporting | 13 | Evidence rules, rating findings, defect records, report verdicts, code and host review checklists |

Every module ends with a quiz; the mixed Final Exam is the checkpoint at the end.

## Modules

| # | Module | Lessons | Quiz Qs |
|---|--------|---------|---------|
| 1 | Manual Testing Fundamentals | 17 | 14 |
| 2 | Software Testing Techniques & Test Case Design | 12 | 15 |
| 3 | Types of Software Testing — Reference Catalogue | 4 | 8 |
| 4 | Ad Hoc Testing | 9 | 11 |
| 5 | Exploratory Testing | 16 | 23 |
| 6 | REST API Testing | 16 | 24 |
| 7 | ISTQB® CTFL v4.0 Certification Track | 10 | 16 |
| 8 | QA Toolbox & Career Growth | 11 | 18 |
| 9 | QA & Test Architecture | 8 | 16 |
| 10 | Security Testing & AppSec | 8 | 15 |
| 11 | Performance, UI/UX & Automation Testing in Practice | 7 | 16 |
| 12 | AI Testing: Using AI & Testing AI | 8 | 14 |
| 13 | Verification, Audit & Reporting in Practice | 8 | 16 |

Module 5 goes from the basics to practice: test charters and a charter library, running and debriefing time-boxed sessions, practical heuristics, risk-based worked examples (login, REST API, multi-tenancy), and turning discoveries into automated regression checks. Module 6 covers request/response anatomy, status codes, input and boundary design, schema and contract testing, tenant isolation, idempotency and concurrency, the OWASP API Security Top 10 (2023), Postman/Playwright automation with CI/CD, and a junior QA roadmap.

Module 12 covers both sides of AI testing: AI-assisted and agentic test tools (and how to evaluate them), and testing ML and generative-AI systems — statistical oracles, the confusion matrix and precision/recall/F1, drift monitoring, hallucination and prompt-injection checks, and the ISTQB CT-AI certification.

Module 13 is about the output of testing: the Confirmed / Suspected / Not Tested evidence rules and the four verification modes, safe scoping, severity as impact × likelihood with confidence reported separately, the defect record, the five final verdicts and the ordered rules that choose between them, language-specific code-review pitfalls, and read-only host health and security checks. It ends with a worked example: a real defect found while reviewing this app (the Final Exam omitting whole modules), written up as a finding. The QA Toolkit page puts the calculators, the record builder and the checklists behind it.

Module 7 is a study-companion overview of the ISTQB Foundation Level v4.0 syllabus — written originally, not reproduced from the copyrighted textbook it's inspired by (see the "Recommended reading" callout on that module for the source citation).

## Tech stack

Plain HTML/CSS/JavaScript (no framework, no bundler, no transpiler; it targets any current browser, since the code uses ES2015 features such as template literals and `Object.assign`). Content lives in plain JS data files that the app reads at runtime:

```
qa-learning-hub/
├── index.html              # shell — doctype/charset/viewport, CSP, sidebar, main content area, script tags
├── app.js                  # router, rendering, quiz engine, QA Toolkit, i18n, progress persistence, HTML sanitizer
├── styles.css              # design system: tokens (color, type, radius), light + dark mode, focus/reduced-motion rules
├── fonts.css               # @font-face rules for the self-hosted fonts
├── favicon.svg             # tab icon (a missing icon made every page load log a 404)
├── fonts/                  # woff2 files (Latin, Latin-Extended, Cyrillic) + LICENSES.md (SIL OFL 1.1)
├── _headers                # security headers for hosts that support them (Netlify, Cloudflare Pages)
├── SECURITY.md             # threat model, controls, review findings, how to re-run the checks
├── tests/                  # content.js (no browser), plus browser-driven attack.js, sanitizer-csp.js, ui.js and serve.js
├── tools/build-artifact.js # builds the copy published as the live demo (see "Rebuilding the demo artifact")
├── .gitlab-ci.yml          # GitLab pipeline: validate -> test (+ SAST, secret detection) -> Pages deploy
└── data/
    ├── tutorials.js         # window.QAHUB_MODULES — all lesson content (English)
    ├── quiz.js               # window.QAHUB_QUIZZES — all quiz banks (English)
    ├── glossary.js           # window.QAHUB_GLOSSARY — all glossary entries (English)
    ├── toolkit.js            # window.QAHUB_TOOLKIT — QA Toolkit reference lists (English only)
    └── locales/
        ├── uk.js             # Ukrainian translation (mirrors the English structure)
        ├── pl.js             # Polish
        ├── es.js             # Spanish
        ├── it.js             # Italian
        └── de.js             # German
```

Each locale file sets `window.QAHUB_LOCALES.<code> = { ui, catLabels, modules, quizzes, glossary }`, mirroring the English content 1:1 by module `id` and quiz-question position — `app.js` picks the active locale (persisted in `localStorage`) and renders from it.

## Running locally

No install needed — just serve the folder and open it:

```bash
cd qa-learning-hub
python -m http.server 8000
# then open http://localhost:8000
# (or: node tests/serve.js  ->  http://localhost:8766)
```

(Opening `index.html` directly via `file://` won't work, since the browser blocks the `<script src="data/...">` loads under that protocol — it needs to be served over HTTP.)

`index.html` declares UTF-8 itself, so non-ASCII text (™, ®, —, Cyrillic and accented letters) renders correctly even from servers that send no charset header.

## Design system

`styles.css` is organized around tokens, so a change in one place propagates everywhere:

- **Color** — semantic tokens (`--bg`, `--surface`, `--ink`, `--ink-soft`, `--accent`, `--good`, `--bad`, `--warn`, plus `-soft` backgrounds) with a full dark set under `prefers-color-scheme: dark`. `--accent` (brand, links, active state) and `--good` (success, passed) are deliberately different greens. `--border-strong` is for form controls and state markers and meets 3:1 non-text contrast; `--border` is for decorative dividers.
- **Type** — a 9-step scale (`--fs-2xs` … `--fs-score`; it was 21 ad-hoc sizes) and three families: Fraunces for headings, IBM Plex Sans for body (with real italics), IBM Plex Mono for code. Source Serif 4 is the Cyrillic fallback for headings because Fraunces has no Cyrillic glyphs.
- **Radius** — `--r-xs/sm/md/lg/pill` (it was 11 values). **Shadow** — `--shadow`, `--shadow-hover`.
- **Layout** — `--header-h` is `0` on desktop and the height of the sticky header on mobile; sticky toolbars and scroll targets offset themselves with it.
- **Utilities** — `.sr-only`, `.lede`, `.cta-row.{stack,split,wide,tight}`. The app's HTML strings no longer carry static inline styles.
- `color-scheme: light dark` and `accent-color` make native controls (radios, selects, scrollbars) follow the theme.

## Accessibility

- **Document** — real doctype, `lang` kept in sync with the language switcher, viewport meta, `<nav>`/`<main>`/`<section>` landmarks, a per-page `<title>`, and one `h1` per page with lesson headings as `h2`.
- **Navigation** — focus moves to the page heading on every route change; the current page has `aria-current="page"`; the mobile menu button has `aria-expanded`/`aria-controls`; module status (completed / in progress) is exposed as text, not only a colored dot (hollow ring vs filled dot as well).
- **Quizzes** — choosing an option only marks it; **Check answer** commits it, so a stray click or arrow key cannot lock in a mistake. Selecting updates in place, so keyboard focus and arrow-key navigation survive. After checking, focus moves to *Next* (described by the explanation); correct and incorrect options carry a ✓/✗ glyph and hidden text in addition to color; the progress bar has `role="progressbar"`; the results page focuses its heading.
- **Forms and tables** — glossary search and category filter have accessible names and a polite live result count; scrollable tables are keyboard-focusable regions named after their lesson; header cells have `scope`.
- **Visual** — text contrast is at least 4.8:1 in both themes; form-control borders meet 3:1; a visible `:focus-visible` ring; `prefers-reduced-motion` disables transitions, hover lifts and smooth scrolling.
- **Mobile** — the sticky header no longer covers the glossary toolbar or lesson/A–Z jump targets; the open menu scrolls inside the viewport.

## Security

The app has no server, so its attack surface is the URL, `localStorage`, the content files and the hosting layer. In short: all dynamic text is escaped; route ids and stored progress are validated; lesson HTML goes through an allowlist sanitizer; a strict CSP (no `unsafe-inline`, no third-party hosts, no `connect-src`) backs all of it up; fonts are self-hosted so nothing is requested from third parties. Full threat model, findings and the way to re-run the checks are in [SECURITY.md](SECURITY.md).

## Testing

The checks in `tests/` drive the real app in a headless Chromium-based browser over the DevTools protocol (Node 22+, no npm install; set `BROWSER=…` if Edge/Chrome isn't auto-detected):

```bash
node tests/content.js          # no browser: structure, locale parity (modules, lessons, quizzes, glossary, UI keys), quiz/glossary hygiene, toolkit data
node tests/serve.js &          # static server on :8766
node tests/attack.js           # XSS via hash/storage/toolkit input, crafted ids, CSP bypass, third-party hosts
node tests/sanitizer-csp.js    # sanitizer is lossless on every lesson x 6 locales (804 today) and neutralises hostile HTML
node tests/ui.js               # a11y / UX regression checks (91): focus, titles, quiz flow, Final Exam coverage, toolkit tools, locales, mobile
```

The tests exit non-zero on any `FAIL` or `VULNERABLE` result, so they can gate a pipeline. Set `NO_SANDBOX=1` when running as root in a container. `ui.js` also passes against the artifact build (see below): it skips the favicon checks there, because the host owns the icon.

## Rebuilding the demo artifact

The live demo is hosted by Claude's artifact viewer, which differs from a normal static site: it wraps the page in its own skeleton and CSP, allows fonts only from Google Fonts, drives light/dark through a `data-theme` attribute, and sets its own `body` font. `node tools/build-artifact.js [outDir]` produces a copy that accounts for that:

- `page.html` is the page as a fragment (title, Google Fonts link, stylesheet, markup) with no meta CSP of its own;
- `styles.css` gets `:root[data-theme="dark"]` / `:not([data-theme="light"])` token blocks, a safe-area-aware mobile header, and the app font restored on `body`;
- `index.html` is the same page inside an emulated host skeleton, for local testing: `ROOT=<outDir> node tests/serve.js`, then `node tests/ui.js`.

Publish `page.html` plus `styles.css`, `app.js` and `data/**` to the existing artifact URL. The self-hosted fonts, `_headers` and the meta CSP are for normal hosting and are not part of the artifact.

## Continuous integration (GitLab)

`.gitlab-ci.yml` defines three stages (the file must be named exactly `.gitlab-ci.yml`; GitLab ignores `gitlab-ci.yaml`):

| Stage | Job | What it does |
|-------|-----|--------------|
| validate | `syntax` | `node --check` on every JS file (app, data, locales, tests) |
| validate | `content` | `node tests/content.js`: locale parity, quiz and glossary hygiene, toolkit data (no browser) |
| validate | `assets` | Every script/style/font referenced by `index.html` and `fonts.css` exists; the CSP must start from `default-src 'none'` and may not contain `unsafe-inline`, `unsafe-eval`, wildcards or third-party hosts |
| test | `security-attacks`, `sanitizer-and-csp`, `ui-regression` | The three `tests/` suites in headless Chromium (installed in the job; `node:22-bookworm` image, `NO_SANDBOX=1`) |
| test | `sast`, `secret_detection` | GitLab's Security/SAST and Security/Secret-Detection templates (secret detection also scans history) |
| deploy | `pages` | Publishes `index.html`, `styles.css`, `fonts.css`, `app.js`, `favicon.svg`, `fonts/` and `data/` to GitLab Pages, default branch only |

Pipelines run for merge requests and for branches without an open merge request. GitLab Pages can't set custom HTTP headers, so on Pages the meta CSP in `index.html` is the only policy (see [SECURITY.md](SECURITY.md)). Before first use, check that shared runners are enabled for the project. The pipeline was validated as YAML and its validate-stage logic was exercised locally, but it has not yet run on a GitLab runner.

## Changelog — late October 2026 (QA review, Module 13, QA Toolkit)

The project was reviewed with its own verification method (Module 13): evidence first, each finding labelled Confirmed / Suspected / Not Tested, rated by impact × likelihood, with the checks that passed reported too.

**Review findings**

| ID | Finding | Evidence | Severity (impact × likelihood) | Status |
|----|---------|----------|-------------------------------|--------|
| QA-001 | The Final Exam could omit whole modules: it shuffled one pooled bank, so each module's share followed its bank size | Confirmed by reading `buildQuizQuestions` and simulating 20,000 exams: about 95% left at least one module out; Module 3 averaged 0.8 of 20 questions | Medium (2 × 5 = 10) | Fixed: one question per module first, the rest drawn at random. Regression test in `ui.js` |
| QA-002 | The quiz list skipped from `h1` to `h3` | Heading-order probe on all 16 routes | Low (1 × 4 = 4) | Fixed: a visually hidden `h2` |
| QA-003 | Every page load logged a 404 for `/favicon.ico` | Browser log on all 16 routes; the logged URL named the file | Low (1 × 5 = 5) | Fixed: `favicon.svg` |
| QA-004 | *Mark complete* could not be undone and there was no way to clear progress | Reading `renderModule()` and the dashboard | Low (impact 1: only a progress label in the learner's own browser × likelihood 3 = 3) | Fixed: toggle, plus a two-step *Reset all progress* |
| QA-005 | README claimed "ES5-compatible", but the code uses `Object.assign`, template literals and `NodeList.forEach` | Reading `app.js` and `data/*.js` | Info (1 × 1 = 1) | Fixed: README states the real baseline |
| — | Dead UI string `navPractice` ("Practice") exists in all six locales but nothing uses it | `grep` | Info | Not changed (harmless; remove in a future cleanup) |

**Checked and healthy:** text contrast is at least 4.83:1 and control borders at least 3.5:1 in both themes; nothing scrolls sideways at 320 px on any route; no interactive target is under 24 px; the five translations matched the English structure exactly; the existing attack, sanitizer and UI suites passed before any change. **Not tested:** Firefox and Safari, a real screen reader, the GitLab pipeline on a runner, text-spacing overrides (WCAG 1.4.12).

**What was added**

| Area | What | How |
|------|------|-----|
| Content | Module 13, *Verification, Audit & Reporting in Practice*: 8 lessons, 16 quiz questions, 11 glossary terms, in all six languages | `data/tutorials.js`, `data/quiz.js`, `data/glossary.js`, `data/locales/*.js`; built from the project's QA verification and review material (evidence rules, severity scale, defect record, verdict rules, language pitfalls, host-check checklists) |
| Learning path | Stage 6, *Verification & reporting* | `PATH_STAGES` and six new UI strings |
| Feature | QA Toolkit page (`#/toolkit`): severity calculator, final-status helper, defect-record builder, reference library | `renderToolkit()` in `app.js`; reference data in `data/toolkit.js`; styles reuse the existing tokens |
| Feature | Reversible module completion; two-step progress reset | `renderModule()`, `renderHome()` |
| i18n | About 80 new UI strings in all six languages; the intro, learning-path and footer texts updated | `EN_UI` and the five locale files |
| Tests | `tests/content.js` (new, no browser); 46 new UI checks (91 total); toolkit attacks A7–A9; counts in `sanitizer-csp.js` are now computed | `tests/` |
| CI | New `content` job; `favicon.svg` published to Pages | `.gitlab-ci.yml` |

**Not changed on purpose:** the severity, finding and verdict labels stay in English in every language (they are the standard vocabulary of reports and tools), and so do the toolkit's reference lists.

## Changelog — October 2026 (design, accessibility, security)

**What changed, and how it was done**

| Area | What | How |
|------|------|-----|
| Page shell | Added doctype, `<meta charset="utf-8">`, viewport, `<html lang>`; removed a dead empty brand `<div>` and the inline script | Rewrote `index.html`. Without a charset the app showed `â€”`, `ISTQBÂ®` and `1â€“10` when served by `python -m http.server`; it also ran in quirks mode |
| Brand and navigation | Brand shown on desktop; sidebar order is Dashboard, Quizzes, Glossary, modules, language | `.topbar` is always visible, only the Menu button is mobile-only; `renderSidebar()` reordered. Quizzes/Glossary were below the fold at 900px |
| Quiz | Select → **Check answer**; focus management; ✓/✗ markers; `radiogroup`; progress bar semantics | `renderQuizQuestion(focusTarget)` updates selection in place instead of re-rendering the page |
| Quiz badges | *Passed* (green) vs *Attempted* (amber) instead of green for any attempt | `quizBadge()` compares the best score with the 70% pass threshold |
| Dashboard | "Continue: …" button once you've started; `FINAL_EXAM_SIZE` constant | First module that isn't completed |
| Routing/a11y | Per-route page titles, focus moves to the heading, `aria-current`, `aria-expanded`, status text | `setTitle()`, `focusHeading()`, `render()` |
| Content | Lesson headings `h2`; keyboard-focusable tables; `scope` on `th` | `enhanceContent()` after render |
| Glossary | Named search and filter, live count, `type="search"` | Attributes in `renderGlossary()` |
| Motion | Reduced-motion respected by CSS and by JS scrolling | `@media (prefers-reduced-motion)`, `scrollBehavior()` |
| Theming | `color-scheme`, `accent-color`, `--border-strong`, distinct `--good` | Tokens in `styles.css`. Native radios were white on the dark theme; control borders were 1.3:1 |
| Design tokens | Type, radius, shadow and layout scales; static inline styles moved to classes; duplicated dark block and unreachable `data-theme` override removed | Rewrote `styles.css`; added `.lede`, `.cta-row.*`, `.result-*`, `.ans-*` |
| Typography | Real Plex italics; Cyrillic serif fallback for headings | Fraunces has no Cyrillic, so Ukrainian headings were falling back to Georgia |
| Mobile | Sticky glossary toolbar and scroll targets clear the header; open menu scrolls | `--header-h` token, `max-height` + `overflow-y` on the open menu |
| i18n | New strings `checkAnswer`, `ctaContinue`, `filterByCategory` in all six languages | `EN_UI` + five locale files (English is the fallback) |
| Security: routes | Crafted ids (`#/quiz/__proto__` etc.) fall back to the quiz list instead of crashing | Id validation in `renderQuizRun()`, `hasOwn()` lookups |
| Security: storage | Stored progress is rebuilt from known ids with validated values | `sanitizeProgress()` |
| Security: HTML | Lesson/callout/footer HTML goes through an allowlist | `sanitizeHTML()` using an inert `<template>` |
| Security: CSP | Strict CSP meta and `no-referrer` policy | Removed the inline script and the inline progress-bar style (width is set via the CSSOM) |
| Security: fonts | No third-party requests | Self-hosted woff2 files in `fonts/`, `fonts.css`, license notes |
| Security: hosting | Security headers for hosts that support them | `_headers` (CSP + `frame-ancestors`, nosniff, Permissions-Policy, COOP/CORP, HSTS) |
| Tests | Reproducible browser-driven checks | `tests/` (see above); every lesson × 6 locales verified lossless through the sanitizer (756 at the time, 804 now) |
| Repo hygiene | `desktop.ini` and `Thumbs.db` ignored | `.gitignore` |
| CI | GitLab pipeline: validation, the browser test suites, SAST, secret detection, Pages deploy | `.gitlab-ci.yml`; tests now exit non-zero on failure and honour `NO_SANDBOX` |

**Deliberately not changed:** the correct quiz option is the longest in 66% of questions (a content rewrite across six languages); module depth is uneven (Module 3 is much shorter than Module 5); opening a module still marks it "in progress" (*Mark complete* can now be undone, see the later changelog); the dashboard still lists every module twice (cards, then learning path); the page cannot be protected from framing on hosts that ignore `_headers` (see SECURITY.md).

## Content sources

Modules 1–6 were built from short reference articles on manual testing, test design techniques, testing types, ad hoc testing, exploratory testing, and REST API testing. Modules 5 and 6 were later expanded from two longer guides, *Exploratory Testing — Complete QA Guide* and *REST API Testing for QA — Complete Guide*. Modules 1, 2, 4 and 7–11 were further extended from *QA & Software Testing — Complete Knowledge Guide* (test levels and process, white-box coverage, the CTFL exam blueprint and ISTQB ladder, performance metrics and the test pyramid, practical security checks, risk-based test architecture, and the QA competency ladder). Module 12 was built from *AI Testing: A Research Overview for Testers*; market figures and vendor claims from that overview were left out or softened, and CT-AI v2.0 details are attributed to ISTQB's announcement. Module 7 references *ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0* (Stapp, Roman & Pilaeten — Springer, 2024) for its chapter structure only; all explanations and quiz content in that module are written independently. Modules 8–11 are original content covering tools, career resources, architecture, security, and hands-on practice. Module 13 and the QA Toolkit are built from the project's own QA verification and review material: the evidence rules and report templates, the severity scale, the language pitfall lists, the read-only host commands and the host security checklist.

The original source documents (Word and Markdown guides, the ISTQB PDF) aren't included (the `sources/` folder is git-ignored) in this repository — the PDF in particular is a commercially published, copyrighted book and isn't redistributed here.
