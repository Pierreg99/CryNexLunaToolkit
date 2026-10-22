# Project Plan

> **Updated:** 2026-10-22 · Priorities are ordered by risk and dependency. This file records work, not promises.

## P0 — Finish README visual acceptance

**Why:** repository and archive tests verify links and required assets, but they do not prove that GitHub's rendered README has the intended visual hierarchy on every viewport.

Tasks:

1. Open the [main README](https://github.com/Pierreg99/CryNexLunaToolkit/blob/main/README.md) in GitHub.
2. Inspect desktop and narrow/mobile layouts: hero, workflow badge, 3×2 navigation grid, reading order, anchors, tables, and footer.
3. Open the full-pack ZIP, extract it, and inspect the packaged README and local icons.
4. Record any issue and fix it on a focused branch; repeat the checks before merge.

**Acceptance:** no missing image or local link; every icon targets a real section; the primary start path and downloads are clear; the extracted README contains no repository-only links.

## P1 — Preserve release quality

For any change to bundled app files, prompts, Creator Kit documents, the starter project, artwork, or packaged README:

```sh
npm test
npm run build
npm test
git diff --check
```

Review `git diff --stat -- downloads/ docs/PROMPTS.md`. Generated archives are synchronized by the repository's Quality workflow after a successful push to `main`; inspect the bot commit rather than assuming it happened.

**Acceptance:** both test runs pass, archives are valid and deterministic, expected files are present, local links resolve, unsafe archive paths are absent, and `docs/REPO_SCAN.md` remains outside every recipient ZIP.

## P1 — Decide rights and attribution

1. Select and document the intended license(s) for software, written material, and artwork.
2. Review licenses and attribution obligations for any third-party material.
3. Evaluate the historical exposure noted in [`docs/REPO_SCAN.md`](docs/REPO_SCAN.md) separately; current-file exclusion does not rewrite Git history.

**Acceptance:** rights decisions are explicit, recorded, and consistent with what the repository distributes.

## P2 — Keep operational docs synchronized

When a meaningful change lands, reconcile:

- [`README.md`](README.md) for user-facing entry paths and current facts.
- [`ROADMAP.md`](ROADMAP.md) for milestones and acceptance gates.
- [`CHANGELOG.md`](CHANGELOG.md) for merged changes and the pending delivery.
- [`HANDOFF.md`](HANDOFF.md) and [`HANDOVER.md`](HANDOVER.md) for current evidence and reproducible continuation steps.

Keep completion labels tied to a concrete commit, pull request, workflow run, or artifact. Do not use invented percentages or mark manual checks passed when they were not run.

## Definition of Done

- Scope and changed files match the approved request.
- Relevant automated checks pass and their run is linked.
- Manual checks are completed or explicitly listed as pending.
- The README, changelog, roadmap, handoff, and handover remain consistent.
- Changes are committed on a focused branch and merged only after required checks and review are satisfied.
