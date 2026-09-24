# Security Policy

This is a static, front-end-only web app (plain HTML/CSS/JavaScript, no backend, no server-side code, no database). There's no versioned release cycle to track — `master` is always the current, supported state.

## Scope

The app renders content from its own bundled data files (`data/tutorials.js`, `data/quiz.js`, `data/glossary.js`, `data/locales/*.js`) and stores per-viewer progress in the browser's `localStorage`. It makes no network requests of its own beyond loading Google Fonts. There are no secrets, API keys, or credentials anywhere in this repository.

## Security Practices

- **Output escaping:** all data rendered into the page (module titles, overviews, summaries, UI strings, IDs and numbers) goes through the `esc()` helper in `app.js`, which escapes `& < > " '`. The exception is lesson bodies and callouts, which are trusted, author-written HTML in the bundled data files and are rendered as-is, so changes to those files should be reviewed like code.
- **Internal links only:** navigation uses hash routes (`#/module/…`, `#/quiz/…`); the app builds no links from user input.
- **No user input reaches the DOM unescaped:** the glossary search box is escaped before rendering, and the locale stored in `localStorage` is only accepted if it's a known locale.
- **No secrets:** the repository contains no API keys, tokens, credentials or personal data.
- **External resources:** the only third-party request is the Google Fonts stylesheet.

### Last review

A manual review was done in September 2026 after the learning-path and module-overview changes (including all five translations). It found no vulnerabilities; the module `id` and `num` in the new learning-path links were additionally escaped as hardening.

**Known gap:** `index.html` doesn't set a Content-Security-Policy. Adding one would limit the impact of any future injection, but it would need to allow the inline script in `index.html` and Google Fonts.

## Reporting a Vulnerability

If you find a security issue (e.g. a way to inject markup/script through the UI, or a way this app's own data could be used to attack a viewer), please open a [GitHub issue](../../issues) describing it — there's no dedicated security contact or SLA for this project, but reports are welcome and will be looked at.
