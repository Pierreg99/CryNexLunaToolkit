# Project Handoff

> **Snapshot:** 2026-10-22  
> **Baseline inspected:** `main` at `1f9924608211e68f859920a70fb4554a8c48cb35`  
> **Purpose:** concise context for the next maintainer or agent.

## Current state

CryNexLunaToolkit contains two separate browser experiences:

- **Luna's First Project Pack** — the primary local-first experience with seven browser tools, 20 prompts, Luna Launchpad, a Freebie Creator Kit, artwork, and three recipient ZIP packages.
- **Nexus Luna Toolkit Classic** — the previous dashboard preserved under `classic/`, with its own service-worker scope and separate browser-storage key namespace.

The Cryo Workflows-style README dashboard is merged to `main` through [PR #3](https://github.com/Pierreg99/CryNexLunaToolkit/pull/3), merge commit [`ea4653f`](https://github.com/Pierreg99/CryNexLunaToolkit/commit/ea4653f91a4262a869e6fa0db2e3f28be270359b). It uses the optimized local WebP hero and six local SVG navigation icons. The icon assets are included in the full-pack archive by the deterministic build script.

After the merge, [commit `1f99246`](https://github.com/Pierreg99/CryNexLunaToolkit/commit/1f9924608211e68f859920a70fb4554a8c48cb35) was created by the repository's Quality workflow to synchronize the generated downloads.

## Verified evidence

- The [Quality workflow run for PR #3](https://github.com/Pierreg99/CryNexLunaToolkit/actions/runs/39741342129) completed successfully.
- In that run, tests passed for the existing tracked archives, the packager rebuilt all three archives, and the tests passed again against the generated artifacts.
- The Sourcery review check for that PR completed successfully.
- These checks verify the tested source and package structure; they do **not** substitute for a fresh manual visual review of the GitHub-rendered README or a full assistive-technology/browser matrix.

## Next actions

1. **P0 — Visual acceptance:** inspect the rendered [main README](https://github.com/Pierreg99/CryNexLunaToolkit/blob/main/README.md) at desktop and mobile widths. Confirm the hero, six-icon grid, anchor targets, and reading order.
2. **P1 — Release hygiene:** for any change to bundled source or guides, run `npm test`, `npm run build`, then `npm test` again. Review the generated artifact diff and the extracted README.
3. **P1 — Legal boundary:** the repository does not declare one general open-source license for the complete source and artwork collection. License and third-party rights decisions remain owner-selected.
4. **P2 — Historical exposure:** `docs/REPO_SCAN.md` is excluded from recipient ZIPs, but editing the current file does not erase older Git history or caches.

## Key links

- [README](README.md) · [Plan](PLAN.md) · [Roadmap](ROADMAP.md)
- [Technical handover](HANDOVER.md) · [Changelog](CHANGELOG.md)
- [Testing and release checklist](docs/TESTING.md) · [Integration architecture](docs/INTEGRATION.md)
- [Quality workflow](https://github.com/Pierreg99/CryNexLunaToolkit/actions/workflows/quality.yml)
