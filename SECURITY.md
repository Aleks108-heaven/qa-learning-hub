# Security Policy

This is a static, front-end-only web app (plain HTML/CSS/JavaScript, no backend, no server-side code, no database). There's no versioned release cycle to track — `master` is always the current, supported state.

## Scope

The app renders content from its own bundled data files (`data/tutorials.js`, `data/quiz.js`, `data/glossary.js`, `data/locales/*.js`) and stores per-viewer progress in the browser's `localStorage`. It makes no network requests of its own beyond loading Google Fonts. There are no secrets, API keys, or credentials anywhere in this repository.

## Reporting a Vulnerability

If you find a security issue (e.g. a way to inject markup/script through the UI, or a way this app's own data could be used to attack a viewer), please open a [GitHub issue](../../issues) describing it — there's no dedicated security contact or SLA for this project, but reports are welcome and will be looked at.
