# QA Learning Hub

An interactive, self-contained software testing course — built as a single-page web app with tutorials, a searchable glossary, and auto-graded quizzes. No backend, no build step, no dependencies, and no third-party requests: serve the folder and it runs.

**Live demo:** https://claude.ai/artifact/2CfVxTa4v5ZQYyLi2y4L7L (a published snapshot; it may lag behind this repository)

## What's inside

- **12 tutorial modules, 126 lessons** — from manual testing fundamentals through security testing and hands-on automation to AI testing
- **190 quiz questions** across per-module quiz banks, plus a 20-question mixed Final Exam drawn from all modules
- **175-term glossary**, searchable and filterable by category, with alphabet-aware A-Z navigation
- **6 languages** — English, Ukrainian, Polish, Spanish, Italian, German — with a language switcher; every lesson, quiz question, and glossary entry is translated, not just the UI chrome
- **A guided learning path** on the dashboard that groups the modules into five stages, with a detailed overview of each module, its lesson count, and a link to its quiz
- **Per-viewer progress tracking** (module completion, quiz best-scores) saved locally in the browser — nothing is sent to a server
- **Accessible by design** — keyboard and screen-reader support, WCAG AA text contrast, reduced-motion support, light and dark themes (see [Accessibility](#accessibility))
- **Hardened** — strict Content-Security-Policy, HTML allowlist sanitizer, validated storage and routes, self-hosted fonts (see [Security](#security))

## Learning path

The dashboard groups the modules into five stages. Newcomers can take them in order; experienced testers can jump to the stage they need. Each module also opens with a detailed overview of what it covers.

| Stage | Modules | Focus |
|-------|---------|-------|
| 1 · Foundations | 1–3 | Vocabulary, principles, test design techniques, the testing-types landscape |
| 2 · Hands-on testing | 4–6 | Ad hoc, exploratory and REST API testing |
| 3 · Certification & career | 7–8 | ISTQB® CTFL v4.0 exam prep, the QA toolbox and career growth |
| 4 · Engineering quality at scale | 9–11 | Test/QA architecture, application security, performance, UI/UX and automation |
| 5 · AI testing | 12 | Using AI to test, and testing AI-based systems |

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

Module 5 goes from the basics to practice: test charters and a charter library, running and debriefing time-boxed sessions, practical heuristics, risk-based worked examples (login, REST API, multi-tenancy), and turning discoveries into automated regression checks. Module 6 covers request/response anatomy, status codes, input and boundary design, schema and contract testing, tenant isolation, idempotency and concurrency, the OWASP API Security Top 10 (2023), Postman/Playwright automation with CI/CD, and a junior QA roadmap.

Module 12 covers both sides of AI testing: AI-assisted and agentic test tools (and how to evaluate them), and testing ML and generative-AI systems — statistical oracles, the confusion matrix and precision/recall/F1, drift monitoring, hallucination and prompt-injection checks, and the ISTQB CT-AI certification.

Module 7 is a study-companion overview of the ISTQB Foundation Level v4.0 syllabus — written originally, not reproduced from the copyrighted textbook it's inspired by (see the "Recommended reading" callout on that module for the source citation).

## Tech stack

Plain HTML/CSS/JavaScript (ES5-compatible, no framework, no bundler). Content lives in plain JS data files that the app reads at runtime:

```
qa-learning-hub/
├── index.html              # shell — doctype/charset/viewport, CSP, sidebar, main content area, script tags
├── app.js                  # router, rendering, quiz engine, i18n, progress persistence, HTML sanitizer
├── styles.css              # design system: tokens (color, type, radius), light + dark mode, focus/reduced-motion rules
├── fonts.css               # @font-face rules for the self-hosted fonts
├── fonts/                  # woff2 files (Latin, Latin-Extended, Cyrillic) + LICENSES.md (SIL OFL 1.1)
├── _headers                # security headers for hosts that support them (Netlify, Cloudflare Pages)
├── SECURITY.md             # threat model, controls, review findings, how to re-run the checks
├── tests/                  # browser-driven checks: attack.js, sanitizer-csp.js, ui.js, serve.js
├── .gitlab-ci.yml          # GitLab pipeline: validate -> test (+ SAST, secret detection) -> Pages deploy
└── data/
    ├── tutorials.js         # window.QAHUB_MODULES — all lesson content (English)
    ├── quiz.js               # window.QAHUB_QUIZZES — all quiz banks (English)
    ├── glossary.js           # window.QAHUB_GLOSSARY — all glossary entries (English)
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
node tests/serve.js &          # static server on :8766
node tests/attack.js           # XSS via hash/storage, crafted ids, CSP bypass, third-party hosts
node tests/sanitizer-csp.js    # sanitizer is lossless on all 756 lessons x 6 locales and neutralises hostile HTML
node tests/ui.js               # a11y / UX regression checks (focus, titles, quiz flow, mobile menu, encoding)
```

The tests exit non-zero on any `FAIL` or `VULNERABLE` result, so they can gate a pipeline. Set `NO_SANDBOX=1` when running as root in a container.

## Continuous integration (GitLab)

`.gitlab-ci.yml` defines three stages (the file must be named exactly `.gitlab-ci.yml`; GitLab ignores `gitlab-ci.yaml`):

| Stage | Job | What it does |
|-------|-----|--------------|
| validate | `syntax` | `node --check` on every JS file (app, data, locales, tests) |
| validate | `assets` | Every script/style/font referenced by `index.html` and `fonts.css` exists; the CSP must start from `default-src 'none'` and may not contain `unsafe-inline`, `unsafe-eval`, wildcards or third-party hosts |
| test | `security-attacks`, `sanitizer-and-csp`, `ui-regression` | The three `tests/` suites in headless Chromium (installed in the job; `node:22-bookworm` image, `NO_SANDBOX=1`) |
| test | `sast`, `secret_detection` | GitLab's Security/SAST and Security/Secret-Detection templates (secret detection also scans history) |
| deploy | `pages` | Publishes `index.html`, `styles.css`, `fonts.css`, `app.js`, `fonts/` and `data/` to GitLab Pages, default branch only |

Pipelines run for merge requests and for branches without an open merge request. GitLab Pages can't set custom HTTP headers, so on Pages the meta CSP in `index.html` is the only policy (see [SECURITY.md](SECURITY.md)). Before first use, check that shared runners are enabled for the project. The pipeline was validated as YAML and its validate-stage logic was exercised locally, but it has not yet run on a GitLab runner.

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
| Tests | Reproducible browser-driven checks | `tests/` (see above); 756 lessons × 6 locales verified lossless through the sanitizer |
| Repo hygiene | `desktop.ini` and `Thumbs.db` ignored | `.gitignore` |
| CI | GitLab pipeline: validation, the browser test suites, SAST, secret detection, Pages deploy | `.gitlab-ci.yml`; tests now exit non-zero on failure and honour `NO_SANDBOX` |

**Deliberately not changed:** the correct quiz option is the longest in 66% of questions (a content rewrite across six languages); module depth is uneven (Module 3 is much shorter than Module 5); opening a module still marks it "in progress" and *Mark complete* can't be undone; the dashboard still lists every module twice (cards, then learning path); the page cannot be protected from framing on hosts that ignore `_headers` (see SECURITY.md).

## Content sources

Modules 1–6 were built from short reference articles on manual testing, test design techniques, testing types, ad hoc testing, exploratory testing, and REST API testing. Modules 5 and 6 were later expanded from two longer guides, *Exploratory Testing — Complete QA Guide* and *REST API Testing for QA — Complete Guide*. Modules 1, 2, 4 and 7–11 were further extended from *QA & Software Testing — Complete Knowledge Guide* (test levels and process, white-box coverage, the CTFL exam blueprint and ISTQB ladder, performance metrics and the test pyramid, practical security checks, risk-based test architecture, and the QA competency ladder). Module 12 was built from *AI Testing: A Research Overview for Testers*; market figures and vendor claims from that overview were left out or softened, and CT-AI v2.0 details are attributed to ISTQB's announcement. Module 7 references *ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0* (Stapp, Roman & Pilaeten — Springer, 2024) for its chapter structure only; all explanations and quiz content in that module are written independently. Modules 8–11 are original content covering tools, career resources, architecture, security, and hands-on practice.

The original source documents (Word and Markdown guides, the ISTQB PDF) aren't included (the `sources/` folder is git-ignored) in this repository — the PDF in particular is a commercially published, copyrighted book and isn't redistributed here.
