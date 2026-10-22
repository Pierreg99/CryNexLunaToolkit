# Roadmap

> **Snapshot:** 2026-10-22 · Status is based on repository files and recorded workflow evidence, not estimates or percentage scores.

## Product baseline

The primary deliverable is a local-first browser pack. The preserved Classic app is a separate experience and is not included in the recipient ZIPs.

| Milestone | Status | Evidence / acceptance |
| --- | --- | --- |
| First Project Pack core | **Complete** | Seven tools and 20 authored prompts; see [README](README.md) and [prompt source](data/prompts.js). |
| Luna Launchpad starter | **Complete** | Editable HTML/CSS/JavaScript project and [five-step walkthrough](starter-project/WALKTHROUGH.md). |
| Freebie Creator Kit | **Complete** | Eight guides and four portable skills under [`freebie-creator-kit/`](freebie-creator-kit/README.md) and `.agents/skills/`. |
| Deterministic distribution | **Implemented** | [Build script](scripts/build-pack.mjs) produces three ZIPs; [repository checker](scripts/check-repository.mjs) validates archives, links, expected files, and exclusion of the private scan. |
| Cryo Workflows README dashboard | **Merged** | [PR #3](https://github.com/Pierreg99/CryNexLunaToolkit/pull/3): optimized WebP hero, six local SVG navigation icons, live Quality badge, resource cockpit, and stronger HTML/link validation. |
| Package synchronization after README merge | **Verified** | [Main sync commit](https://github.com/Pierreg99/CryNexLunaToolkit/commit/1f9924608211e68f859920a70fb4554a8c48cb35) rebuilt the tracked ZIP artifacts after the merge. |

## Delivery priorities

### P0 — Manual visual acceptance

**Goal:** finish the README's visual gate using GitHub's renderer, not an inferred preview.

Acceptance checklist:

- [ ] The hero and status badge load on the `main` README.
- [ ] All six navigation icons render in a clear 3×2 grid and link to the intended anchors.
- [ ] Headings and tables remain legible at desktop and narrow/mobile widths.
- [ ] The README remains understandable without JavaScript and links use GitHub-native behavior.
- [ ] Open the full ZIP and check that its README has no links to repository-only governance files or `classic/`.

The automated archive checks passed on the PR #3 source, but a fresh manual visual review was not recorded in that workflow.

### P1 — Release evidence and maintainability

- [ ] Run the complete release sequence whenever bundled source or guides change: `npm test`, `npm run build`, `npm test`.
- [ ] Review the generated ZIP changes and ensure a second unchanged build is deterministic.
- [ ] Keep README packaging markers, ZIP content, and local links in sync.
- [ ] Keep this roadmap, [`PLAN.md`](PLAN.md), [`HANDOFF.md`](HANDOFF.md), and [`HANDOVER.md`](HANDOVER.md) updated when status or dependencies change.

### P1 — Rights and provenance

- [ ] Owner-selected license(s) for code, text, and artwork.
- [ ] Review third-party resources and attribution terms before redistribution.
- [ ] Evaluate whether historical Git commits containing repository-inventory data require a separate history review. Deleting a current file does not remove old history or cached copies.

## Explicitly out of scope until separately approved

- Replacing or deleting the preserved Classic experience.
- Claiming a public deployment or product release without checking the relevant service and release records.
- Adding cloud accounts, analytics, APIs, or remote runtime dependencies to the core experience.
- Treating illustrative prompt examples as verified AI-generated outcomes.

## References

[Plan](PLAN.md) · [Handoff](HANDOFF.md) · [Technical handover](HANDOVER.md) · [Changelog](CHANGELOG.md) · [Testing checklist](docs/TESTING.md)
