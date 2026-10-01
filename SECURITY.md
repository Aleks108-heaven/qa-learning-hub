# Security Policy

This is a static, front-end-only web app (plain HTML/CSS/JavaScript, no backend, no server-side code, no database). There's no versioned release cycle to track: `master` is always the current, supported state.

## Scope and threat model

The app renders content from its own bundled data files (`data/tutorials.js`, `data/quiz.js`, `data/glossary.js`, `data/locales/*.js`) and stores per-viewer progress in the browser's `localStorage`. It makes **no network requests at all**: scripts, styles and fonts are all served from the same origin. There are no secrets, API keys or credentials in this repository.

What an attacker could realistically try, and where each is handled:

| Attack surface | Who controls it | Defence (details below) |
|----------------|-----------------|--------------------------|
| URL hash (`#/module/…`, `#/quiz/…`), including crafted links sent to a victim | Anyone | Route ids are validated against the real module list; every id is escaped (`esc()`) before it is written into HTML |
| `localStorage` (`qahub_progress_v1`, `qahub_locale_v1`) | Anything running on the origin, a shared browser, DevTools | Rebuilt from known ids with validated values on every load |
| Lesson/callout/footer HTML in `data/*.js` | Repo contributors, translators, a compromised dependency or PR | Allowlist sanitizer on every render, plus the CSP |
| Third-party resources (fonts) | Google Fonts, CDN, network attackers | Removed: fonts are self-hosted |
| Hosting layer (headers, framing) | Whoever hosts the site | `_headers` file for hosts that support it |

## Security controls

1. **Output escaping.** All dynamic text (titles, summaries, UI strings, ids, numbers, search text) goes through `esc()` in `app.js`, which escapes `& < > " '`. New accessible-name and `aria-*` values are escaped too.
2. **Route validation.** `#/quiz/<id>` only runs for `final` or a real module id; anything else falls back to the quiz list. Quiz and locale lookups use own-property checks (`hasOwn`), so `__proto__`, `constructor` or `toString` in a URL or in storage never resolve to inherited members.
3. **Untrusted storage.** `sanitizeProgress()` rebuilds progress from the known module ids and `final` only, accepts only the three valid statuses, and accepts only finite scores from 0 to 100. Anything else is dropped. The stored locale is accepted only if it is a loaded locale.
4. **HTML allowlist sanitizer.** Lesson bodies, callouts and the footer are author-written HTML rendered with `innerHTML`. `sanitizeHTML()` parses them in an inert `<template>` and keeps only these tags: `a br code div em li ol p pre span strong sub sup table tbody td th thead tr ul`. It keeps only these classes: `chip-list k-badge table-wrap worked-example`. All other attributes (event handlers, `style`, `id`, `src`…) are removed. Links survive only as `https://…` (forced to `target="_blank" rel="noopener noreferrer"`) or in-app `#/…` routes; `javascript:`, `data:` and plain `http:` hrefs are removed. Unknown elements (`script`, `svg`, `iframe`, `form`, `img`, `style`, `link`…) are deleted with their contents.
5. **Content Security Policy** (a `<meta>` tag in `index.html`):
   `default-src 'none'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; base-uri 'none'; form-action 'none'`.
   There is no `unsafe-inline`: the one inline script and the one inline style (quiz progress bar) were removed to make this possible. The progress bar width is now set through the CSSOM. There is no `connect-src`, so `fetch`/XHR/WebSocket are blocked outright.
6. **No third-party requests.** The fonts (Fraunces, Source Serif 4, IBM Plex Sans/Mono; Latin, Latin-Extended and Cyrillic subsets, about 411 KB) are self-hosted in `fonts/` with `fonts.css` (SIL OFL 1.1, see `fonts/LICENSES.md`). This removes a supply-chain dependency (Google Fonts CSS cannot be pinned with Subresource Integrity) and stops visitor IP addresses and referrers from reaching a third party.
7. **Referrer policy.** `<meta name="referrer" content="no-referrer">`.
8. **Host headers** (`_headers`, read by Netlify and Cloudflare Pages): the same CSP plus `frame-ancestors 'none'`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`, a restrictive `Permissions-Policy`, COOP/CORP `same-origin`, and HSTS.
9. **No secrets or personal data in the tree.** A scan of the working tree and git history found none (the only matches were testing vocabulary such as "Bearer token" in lessons).

## Last review: October 2026

Scope: whole repository, static analysis plus live attacks against the running app in a real browser (Microsoft Edge, driven over the DevTools protocol).

| # | Finding | Severity | How it was shown | Fix | Status |
|---|---------|----------|------------------|-----|--------|
| 1 | A crafted link such as `#/quiz/__proto__`, `#/quiz/constructor` or `#/quiz/toString` crashed the router (`TypeError: arr.slice is not a function`), leaving a blank page | Low (client-side denial of service via a link; cleared by navigating elsewhere) | Opened each URL; the page threw and rendered nothing | Route validation + `hasOwn` lookups (controls 2) | Fixed |
| 2 | Tampered `localStorage` was trusted verbatim: a status of `constructor` or `__proto__` became a CSS class and badge, and arbitrary objects/strings/`Infinity` were accepted as scores | Low (no script execution, output was escaped) | Wrote poisoned progress and loaded the dashboard | `sanitizeProgress()` (control 3) | Fixed |
| 3 | No Content-Security-Policy, so any future injection would have run unrestricted. A script injected at runtime executed | Medium (defence in depth; no injection existed) | Appended an inline `<script>` and an external stylesheet at runtime and observed them run/load | CSP meta, inline script and style removed (control 5) | Fixed |
| 4 | Third-party dependency on Google Fonts (cannot be integrity-pinned; leaks visitor IP/referrer; blocks a strict CSP) | Low–Medium (supply chain and privacy) | Listed the hosts contacted on page load: `fonts.googleapis.com`, `fonts.gstatic.com` | Self-hosted fonts (control 6). Hosts contacted now: none | Fixed |
| 5 | Lesson HTML rendered unfiltered; safe today, but one bad edit or translation PR would be injectable | Low (trusted input, defence in depth) | Injected `<img onerror>`, `<script>`, `<svg onload>`, `<iframe>`, `<form>`, `javascript:`/`http:` links, `style` and `id` attributes into the data layer | Allowlist sanitizer (control 4). All payloads neutralised | Fixed |
| 6 | The app can be embedded in another site's frame (clickjacking) | Low (no authentication, payments or state-changing actions to hijack) | Meta CSP cannot set `frame-ancestors`; no `X-Frame-Options` | `_headers` for hosts that support it | **Residual:** not enforceable on GitHub Pages |
| 7 | Reflected/DOM XSS through the URL hash or through `localStorage` | n/a | Tried `<img onerror>`, quote-breaking and URL-encoded payloads in routes, and markup in stored progress | None needed: `esc()` and route validation already blocked them | Not vulnerable |

Other things checked and found fine: all seven external links in lessons already had `rel="noopener"` (the eighth link is an in-app `#/glossary` route); no event handlers, `javascript:` URLs, scripts, iframes or forms exist anywhere in the content data (all six languages); no regular expressions are built from user input (the glossary search uses `indexOf`); no dependency manifest exists, so there is no package supply chain to audit.

### Residual risks to be aware of

- **Framing** (finding 6) on hosts that ignore `_headers`.
- **Same-origin attackers**: anything that can already run script on the same origin can read or erase `localStorage`; the app only guarantees such tampering can't escalate into script execution or a crash.
- **Commit metadata**: git history contains commit-author email addresses. Use a GitHub `noreply` address (and the "Block command line pushes that expose my email" setting) for future commits.
- **Build integrity of `fonts/`**: the font files are static binaries copied from Google Fonts. Re-download them from the upstream sources (see `fonts/LICENSES.md`) if you ever need to verify them.

## How to re-run the checks

The harnesses in `tests/` need Node 22+ and a Chromium-based browser (Edge or Chrome; set `BROWSER=/path/to/browser` if it isn't auto-detected). They launch the browser headless and drive it over the DevTools protocol, so they exercise the real app, CSP included.

```bash
node tests/serve.js &               # static server on http://localhost:8766 (no charset header, like python -m http.server)
node tests/attack.js                # attacks: hash-route XSS, crafted ids, poisoned localStorage, CSP bypass, third-party hosts
node tests/sanitizer-csp.js         # sanitizer is lossless on all 756 real lessons x 6 locales; hostile payloads are neutralised; CSP stays silent on real content
node tests/ui.js                    # accessibility/UX regression checks (focus, titles, quiz flow, mobile menu, encoding)
```

`attack.js` prints `held` for a defence that stood, `VULNERABLE` for a hole, and `residual` for a known limitation. A passing run has no `VULNERABLE` lines, and all three scripts exit non-zero on any `VULNERABLE` or `FAIL` result.

**In CI** (`.gitlab-ci.yml`): the same three suites run on every merge request and branch, together with GitLab's SAST and Secret Detection (history scan on). A separate `assets` job fails the pipeline if the CSP in `index.html` regresses to `unsafe-inline`, `unsafe-eval`, wildcards or third-party hosts. GitLab Pages cannot send custom headers, so a Pages deployment relies on the meta CSP only (finding 6 stays residual there).

### When you change the app

- Add new tags/classes to lesson HTML only after adding them to `SAFE_TAGS` / `SAFE_CLASSES` in `app.js`; `sanitizer-csp.js` will fail if the sanitizer starts altering real content.
- Don't add inline `<script>`, inline `style="…"`, `eval`, or third-party hosts; the CSP will block them. If you need a new origin, change the CSP in **both** `index.html` and `_headers`, and document why here.
- Treat edits to `data/*.js` like code: they are sanitized, but review them anyway.

## Reporting a Vulnerability

If you find a security issue (e.g. a way to inject markup/script through the UI, or a way this app's own data could be used to attack a viewer), please open a [GitHub issue](../../issues) describing it. For anything you'd rather not disclose publicly, use GitHub's private "Report a vulnerability" option on the repository's Security tab if it is enabled. There is no dedicated security contact or SLA for this project, but reports are welcome and will be looked at.
