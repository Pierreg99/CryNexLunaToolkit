# Technical Handover

> **Updated:** 2026-10-22  
> **Scope:** repository structure, repeatable checks, packaging, and safe continuation.

## Repository map

| Path | Responsibility |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | Primary browser-local pack website |
| `data/prompts.js` | Single source for the 20 prompt cards |
| `starter-project/` | Editable Luna Launchpad project and walkthrough |
| `freebie-creator-kit/` | Eight creator-kit guides |
| `.agents/skills/` | Four portable skill definitions |
| `classic/` | Preserved Classic browser experience |
| `assets/` | Hero images, wallpapers, and navigation SVGs |
| `scripts/build-pack.mjs` | Deterministic prompt-document and ZIP generator |
| `scripts/check-repository.mjs` | Source, link, manifest, and archive checks |
| `downloads/` | Tracked full-pack, Creator Kit, and Launchpad ZIPs |
| `docs/TESTING.md` | Automated/manual validation and release checklist |
| `docs/INTEGRATION.md` | App boundaries and package-release notes |

## Prerequisites

- Node.js 18 or newer.
- `zip` and `unzip` for archive creation and tests.
- No `npm install` is required by the current scripts.
- The recipient-facing website has no required remote runtime or build step.

## Safe validation sequence

From a clean checkout:

```sh
git status --short
npm test
npm run build
npm test
git diff --check
git diff --stat
```

The build regenerates `docs/PROMPTS.md` and all three tracked ZIP archives. It uses fixed file ordering and timestamps for reproducible archives, and validates a replacement ZIP before moving it into place.

The Quality workflow runs tests against the existing artifacts, rebuilds them, and tests the newly generated artifacts again. On a successful push to `main`, its publish job commits changed generated ZIPs and `docs/PROMPTS.md` as a separate bot commit. Treat that automation as a repository behavior, not as proof of unrun manual checks.

## Browser smoke test

Use a local HTTP origin:

```sh
python -m http.server 8080
```

Then inspect:

- <http://localhost:8080/> — main Project Pack.
- <http://localhost:8080/classic/> — preserved Classic dashboard.
- <http://localhost:8080/starter-project/> — Launchpad.

Follow the detailed checklist in [`docs/TESTING.md`](docs/TESTING.md). In particular, test narrow layouts, keyboard focus, storage-unavailable behavior, reduced motion, and the extracted recipient ZIPs. Record unrun checks honestly.

## Packaging boundary

The full ZIP includes the First Project Pack and the six navigation icons. The source-only repository integration and governance material is removed from the recipient copy of `README.md` by explicit markers in `scripts/build-pack.mjs`.

Keep these root README markers compatible when editing the README:

- The full-pack CTA: `<a href="downloads/luna-first-project-pack.zip"><strong>Download the complete pack</strong></a>`
- The full-pack download table row and first quickstart instruction.
- The boundary heading: `## Repository integration: two independent browser experiences`
- The footer marker: `<p align="center"><em>Small beginnings, infinite possibilities.</em></p>`

The repository checker should be updated if these build contracts change. Do not place private inventory, credentials, or other maintainer-only details inside distributable content. `docs/REPO_SCAN.md` must remain excluded from all recipient archives.

## Security, privacy, and claims

- Never commit tokens, passwords, private keys, or credentials.
- Core app state is stored in local browser storage when available; there is no account or cloud sync.
- Prompts are illustrative authored text, not live AI results.
- Do not claim a browser pass, accessibility conformance, a published release, or a license decision unless supported by specific evidence.
- The root app and Classic app have distinct storage key prefixes and should remain isolated.

## Resuming work

1. Read [`HANDOFF.md`](HANDOFF.md), [`PLAN.md`](PLAN.md), and [`ROADMAP.md`](ROADMAP.md).
2. Confirm the current `main` SHA and the latest Quality workflow result.
3. Inspect open PRs and the rendered README before changing its visual design.
4. Make changes on a focused branch; preserve unrelated work.
5. Run the validation sequence above and document limitations before merge.
