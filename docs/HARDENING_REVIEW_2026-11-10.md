# Hardening review — 2026-11-10

This document distinguishes changes in this review branch from remaining release requirements.

## License and rights (owner decision required)

The repository does not currently provide a repository-wide license for code, documentation, and artwork. Do **not** add an MIT/Apache/Creative Commons license on the maintainer's behalf without checking ownership, third-party dependencies, and the intended redistribution rules.

Suggested decision record:
- Code: compare MIT and Apache-2.0 after checking contributor ownership and patent expectations.
- Authored documentation and prompt examples: consider CC BY 4.0, with clear attribution.
- Artwork (PNG/WebP/SVG): separately review provenance, generation terms and source rights before choosing CC BY 4.0, CC0, or explicitly reserved rights.
- Disclose exactly which paths fall under each selected license, including generated ZIPs and any third-party material.
- Update the extracted ZIP READMEs and the website's promise only after the chosen licenses are actually committed.

## Browser test coverage

The CI browser job runs a real headless Chromium on GitHub-hosted Ubuntu and uses a Playwright Pixel 7 **emulation** profile for mobile. It checks rendering, JavaScript errors, outbound network requests, horizontal overflow, theme controls, first keyboard focus, and serious/critical automated axe accessibility findings.

Manual checks remain required for physical Android browsers, TalkBack, VoiceOver, keyboard-only journeys, 200–400% zoom, reduced motion and complete WCAG 2.2 AA coverage. Emulation is **not** a physical Android device test.

Run the browser smoke suite locally with Node.js 20+:

```sh
npm install --no-save --package-lock=false playwright @axe-core/playwright
npx playwright install chromium
node tests/browser-smoke.mjs
```

These dependencies are test-only and are not part of the browser-local recipient pack.

## Historical privacy review (not executed by this change)

The public `docs/REPO_SCAN.md` explicitly warns that past history may have contained repository inventory information. The current scrubbed document does **not** prove that old commits or caches were scrubbed.

Review history privately using targeted inspection, e.g.:

```sh
git log --all --oneline -- docs/REPO_SCAN.md
git log --all -S 'Private:' -- docs/REPO_SCAN.md
```

Inspect relevant diffs locally. **Do not** paste potentially sensitive historical lines into public issues, CI logs, or PR comments. Assess whether exposed information requires notification or credentials rotation. Any history rewrite/force push requires explicit owner approval, backup, collaborator coordination, and a separate plan.

## CI and release governance

The previous `publish` CI job could commit regenerated ZIP files directly to `main` using a workflow token. This branch removes that write path. CI now requires generated artifacts to be synchronized in the proposed PR. A maintainer runs `npm run build && npm test`, reviews changed ZIPs, and commits them on the source branch before requesting a merge.

This avoids bot commits to the protected branch and keeps archive changes visible in the reviewed diff. The workflow retains read-only default permissions.

## Architecture: phased refactor, not yet implemented

Do not refactor the large `app.js` and `classic/app.js` files without behavioral regression evidence. Recommend extracting one feature at a time into testable modules, preserving no-build use, local storage keys, loading order, and offline Classic service worker behavior. First candidates: storage abstraction, prompt formatting, Kanban state and DOM rendering. Require browser smoke checks plus manual archive tests after each extraction.
