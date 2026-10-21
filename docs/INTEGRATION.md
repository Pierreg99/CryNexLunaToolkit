# Integration architecture and release workflow

Date: 2026-10-21

Two diverged application histories are intentionally preserved. The root application follows the feature branch; `classic/` contains the exact five app files of the prior main snapshot `b9c195c97f6da219c3e3b8c99d7a4a50d7ee8939`. The integration commit is a real two-parent merge: its parents are the feature tip and the former main head. No force push or history rewrite is intended.

Run `python -m http.server 8080` at repository root and open:
- Project Pack: http://localhost:8080/
- Classic dashboard: http://localhost:8080/classic/
- Launchpad starter: http://localhost:8080/starter-project/

Classic's links, manifest and service-worker scope are relative to `classic/`. The two apps use distinct browser storage key namespaces.

The existing ZIPs in `downloads/` contain the Project Pack; Classic stays repository-only unless deliberately repackaged. Before publishing a fresh ZIP, run:

```sh
npm test
npm run build
npm test
git diff --stat -- downloads/ docs/PROMPTS.md
```

Requires Node.js 18+, `zip` and `unzip` for packaging and tests. The root website itself has no build dependency. Review and commit modified downloads after a rebuilt release. Do not assume a successful static test means WCAG compliance.

Legal decisions still open: owner-selected license(s) for code and content; rights/attribution for third-party resources and generated art; separate assessment of old Git history containing private repository metadata. No institutional GPAI/OECD sponsorship is claimed.
