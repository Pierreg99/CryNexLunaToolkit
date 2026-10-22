# Changelog

Not every repository change is a product release. This log records material changes merged into the repository and the status of current delivery work.

## Unreleased

- Add a maintainer handoff, technical handover, roadmap, and prioritized plan so project state, evidence, release procedure, and remaining gates are discoverable.
- Link governance documents from the source README's repository-only section. The deterministic packager removes that source-only section from recipient downloads.
- This documentation update does not intentionally change browser runtime behavior.

## 2026-10-22 — Cryo Workflows README dashboard

**Merged:** [PR #3](https://github.com/Pierreg99/CryNexLunaToolkit/pull/3)  
**Merge commit:** [`ea4653f`](https://github.com/Pierreg99/CryNexLunaToolkit/commit/ea4653f91a4262a869e6fa0db2e3f28be270359b)

- Reworked the root README into a GitHub-native dashboard with a clearer product path, six linked local SVG navigation icons, optimized WebP hero, resource cockpit, and explicit trust boundaries.
- Added the six icons to the full-pack ZIP build manifest.
- Extended repository validation to check README HTML links/assets and packaged README references.
- Quality evidence: [workflow run for PR #3](https://github.com/Pierreg99/CryNexLunaToolkit/actions/runs/39741342129) passed the test-before-build and test-after-build stages.
- Generated packages were then synchronized on `main` by [commit `1f99246`](https://github.com/Pierreg99/CryNexLunaToolkit/commit/1f9924608211e68f859920a70fb4554a8c48cb35).

## 2026-10-22 — README hierarchy refinement

**Merged:** [PR #2](https://github.com/Pierreg99/CryNexLunaToolkit/pull/2)

- Reorganized README entry paths, feature overview, quick start, package comparison, privacy notes, and maintainer instructions.
- Preserved the root README markers required by the deterministic packager after fixing the packaging boundary detected by CI.

## Release notes

No version tag or formal release is asserted by this changelog. See [`docs/TESTING.md`](docs/TESTING.md) for the release checklist and [`ROADMAP.md`](ROADMAP.md) for outstanding acceptance gates.
