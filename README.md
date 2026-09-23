# QA Learning Hub

An interactive, self-contained software testing course — built as a single-page web app with tutorials, a searchable glossary, and auto-graded quizzes. No backend, no build step, no dependencies: open `index.html` and it runs.

**Live demo:** https://claude.ai/artifact/2CfVxTa4v5ZQYyLi2y4L7L

## What's inside

- **11 tutorial modules, 118 lessons** — from manual testing fundamentals through to security testing and hands-on automation
- **176 quiz questions** across per-module quiz banks, plus a 20-question mixed Final Exam drawn from all modules
- **175-term glossary**, searchable and filterable by category, with alphabet-aware A-Z navigation
- **6 languages** — English, Ukrainian, Polish, Spanish, Italian, German — with a language switcher; every lesson, quiz question, and glossary entry is translated, not just the UI chrome
- **Per-viewer progress tracking** (module completion, quiz best-scores) saved locally in the browser — nothing is sent to a server

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

Module 5 goes from the basics to practice: test charters and a charter library, running and debriefing time-boxed sessions, practical heuristics, risk-based worked examples (login, REST API, multi-tenancy), and turning discoveries into automated regression checks. Module 6 covers request/response anatomy, status codes, input and boundary design, schema and contract testing, tenant isolation, idempotency and concurrency, the OWASP API Security Top 10 (2023), Postman/Playwright automation with CI/CD, and a junior QA roadmap.

Module 7 is a study-companion overview of the ISTQB Foundation Level v4.0 syllabus — written originally, not reproduced from the copyrighted textbook it's inspired by (see the "Recommended reading" callout on that module for the source citation).

## Tech stack

Plain HTML/CSS/JavaScript (ES5-compatible, no framework, no bundler). Content lives in plain JS data files that the app reads at runtime:

```
qa-learning-hub/
├── index.html              # shell — sidebar, main content area, script tags
├── app.js                  # router, rendering, quiz engine, i18n, progress persistence
├── styles.css               # design system (light + dark mode via prefers-color-scheme), incl. tables and code blocks
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
```

(Opening `index.html` directly via `file://` won't work, since the browser blocks the `<script src="data/...">` loads under that protocol — it needs to be served over HTTP.)

## Content sources

Modules 1–6 were built from short reference articles on manual testing, test design techniques, testing types, ad hoc testing, exploratory testing, and REST API testing. Modules 5 and 6 were later expanded from two longer guides, *Exploratory Testing — Complete QA Guide* and *REST API Testing for QA — Complete Guide*. Modules 1, 2, 4 and 7–11 were further extended from *QA & Software Testing — Complete Knowledge Guide* (test levels and process, white-box coverage, the CTFL exam blueprint and ISTQB ladder, performance metrics and the test pyramid, practical security checks, risk-based test architecture, and the QA competency ladder). Module 7 references *ISTQB® Certified Tester Foundation Level: A Self-Study Guide, Syllabus v4.0* (Stapp, Roman & Pilaeten — Springer, 2024) for its chapter structure only; all explanations and quiz content in that module are written independently. Modules 8–11 are original content covering tools, career resources, architecture, security, and hands-on practice.

The original source documents (Word and Markdown guides, the ISTQB PDF) aren't included (the `sources/` folder is git-ignored) in this repository — the PDF in particular is a commercially published, copyrighted book and isn't redistributed here.
