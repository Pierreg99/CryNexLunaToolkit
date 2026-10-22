<p align="center">
  <img src="assets/luna-pack-hero.png" alt="A moonlit, celestial creative landscape with luminous idea panels" width="100%">
</p>

<h1 align="center">Luna's First Project Pack</h1>

<p align="center">
  <strong>A gentle starting point for turning an idea into something real.</strong><br>
  Seven browser-local tools, 20 worked prompts, an editable starter project, and a creator kit—ready to open, keep, and make your own.
</p>

<p align="center">
  <a href="downloads/luna-first-project-pack.zip"><strong>Download the complete pack</strong></a>
  · <a href="docs/START-HERE.md">Start in one minute</a>
  · <a href="starter-project/index.html">Open Luna Launchpad</a>
  · <a href="freebie-creator-kit/README.md">Explore the Creator Kit</a>
</p>

<p align="center">
  <a href="https://github.com/Pierreg99/CryNexLunaToolkit/actions/workflows/quality.yml">
    <img alt="Quality workflow status on main" src="https://github.com/Pierreg99/CryNexLunaToolkit/actions/workflows/quality.yml/badge.svg?branch=main">
  </a>
  <a href="#maintainers">
    <img alt="Node.js 18 or newer for build and checks" src="https://img.shields.io/badge/build%20and%20checks-Node.js%2018%2B-6a82d7?style=flat-square">
  </a>
</p>

> **Local-first by default.** No account, subscription, API key, analytics, or required service. The core experience runs in your browser, and the files remain yours to keep.

<a id="navigation"></a>
## 🧭 Choose your path

| If you want to… | Start here | What you'll find |
| --- | --- | --- |
| Get unstuck and make a small next step | Open [`index.html`](index.html) | Seven focused helpers for prompts, terminal basics, e-mail, tasks, JSON, checklists, and tiny missions. |
| Learn by changing a real project | Open [Luna Launchpad](starter-project/index.html) | An editable HTML/CSS/JavaScript goal tracker, source code, and a five-step walkthrough. |
| Create a thoughtful free resource | Read the [Freebie Creator Kit](freebie-creator-kit/README.md) | Practical guides, bounded agent roles, reusable skills, rules, profiles, a work plan, and a roadmap. |

## ✦ What's inside

<details open>
<summary><strong>Explore the pack</strong></summary>

| Make a start | Learn by doing | Create and share |
| --- | --- | --- |
| **7 browser-local tools** for prompts, terminal references, e-mail drafts, a mini Kanban, JSON, a checklist, and small missions. | **Luna Launchpad** with editable source, local goal tracking, and a guided five-step walkthrough. | **Creator Kit** with eight guides, four bounded roles, four portable skills, rules, profiles, a plan, and a roadmap. |
| **20 prompts** across learning, coding, planning, and troubleshooting, each with a worked illustrative example. | **Three themes** and optional local thank-you note; wallpapers for desktop and phone. | **Portable files** designed to be kept, inspected, adapted, and shared under the applicable rights. |

</details>

## 🚀 Start in one minute

1. Download the complete pack above, extract it, and open `index.html`.
2. Pick one path: try a tool, open Launchpad, or read the Creator Kit.
3. Keep the files and return whenever your next idea needs a first step.

Opening the files directly works in most browsers. For a consistent local origin—especially if browser storage behaves differently with `file://`—run:

```sh
python -m http.server 8080
```

Then open <http://localhost:8080>. No build step is needed to use the pack.

## 📦 Choose the download that fits

| Download | Best for | Includes |
| --- | --- | --- |
| [`luna-first-project-pack.zip`](downloads/luna-first-project-pack.zip) | The whole experience | The website, all tools, prompts, Launchpad, Creator Kit, guides, wallpapers, and the two focused ZIPs. |
| [`luna-freebie-creator-kit.zip`](downloads/luna-freebie-creator-kit.zip) | Designing a useful freebie | The eight guides and four `.agents/skills/` workflows, without the website tools. |
| [`luna-launchpad-starter.zip`](downloads/luna-launchpad-starter.zip) | Starting to code | Only the editable goal tracker, README, and walkthrough. |

## 🌙 Why this pack feels different

- **Small enough to finish.** The first version favors a visible, achievable outcome over a long feature list.
- **Clear about its limits.** Prompt examples are illustrative, local storage depends on browser support, and the pack promises no result its files cannot deliver.
- **Built to keep.** Core use does not depend on a login, remote API, platform account, or recurring service.
- **Readable and adaptable.** The starter project and creator guides expose their source and next steps instead of hiding the process behind a service.

## 🔒 Privacy, safety, and artwork

When available, the website stores small pieces of progress in the current browser's `localStorage`: theme, Kanban tasks, checklist and walkthrough progress, and the optional supporter name. Launchpad stores its goals locally as well. The site sends no data to a server and provides no sign-in, cloud sync, or analytics.

The prompts are written examples, not live AI responses. If you paste material into an external AI service, that service's own privacy and retention rules apply. Do not paste passwords, private keys, access tokens, or confidential information into prompts.

The moon wallpapers are original artwork for this pack. The README hero visual is AI-assisted original artwork made for this repository. Review the terms of any third-party material before redistributing a modified copy. This repository does not currently declare a general open-source license for the complete source and artwork collection; do not assume that every item is licensed for unrestricted reuse.

<a id="maintainers"></a>

<details>
<summary><strong>For maintainers: build and validate the source repository</strong></summary>

<br>

The recipient ZIPs are already built and do not require Node.js. Building and testing the source archives requires **Node.js 18+, `zip`, and `unzip`**. From a repository clone:

```sh
npm run build   # regenerate deterministic ZIPs and docs/PROMPTS.md
npm test        # syntax, content, local-link, and archive checks
```

No `npm install` is required. The build writes all three tracked ZIP files; run the tests after rebuilding. The `Quality` GitHub Actions workflow tests the existing downloads, rebuilds them, and tests the generated artifacts again. A badge reflects the workflow's actual status; it is not a substitute for reviewing the run details.

Main source locations:

| Path | Purpose |
| --- | --- |
| `index.html`, `styles.css`, `app.js` | Standalone gift website |
| `data/prompts.js` | Source for the 20 prompt cards |
| `freebie-creator-kit/` | Creator-kit source documents |
| `.agents/skills/` | Four portable Codex-compatible skill files |
| `starter-project/` | Editable Launchpad source and walkthrough |
| `assets/` | Moon artwork, wallpapers, and README hero visual |
| `scripts/` | Reproducible packaging and repository checks |
| `downloads/` | Tracked recipient-facing ZIP artifacts |

[`docs/TESTING.md`](docs/TESTING.md) contains the manual release checklist and records the limits of automated checks. A successful `npm test` does not prove every browser, assistive technology, operating system, or third-party rights question has been covered.

</details>

## Repository integration: two independent browser experiences

- **[Luna's First Project Pack](index.html)** is the main experience: seven small tools, 20 prompts, the downloadable starter project, and the Freebie Creator Kit.
- **[Nexus Luna Toolkit Classic](classic/index.html)** preserves the former `main` dashboard, quick launcher, local usage information, backup/import data center, and its own offline service worker.

To run both from a local server, use `python -m http.server 8080`. The Classic URL is <http://localhost:8080/classic/>. Their browser storage key prefixes are distinct.

The tracked ZIP downloads distribute the First Project Pack, **not** Classic. Regenerate the archives with `npm run build` after bundled source or guide changes, then run `npm test`. The source-only [repository scan](docs/REPO_SCAN.md) is intentionally excluded from all public downloads.

The repository name reflects an earlier fan-project title and **does not imply affiliation** with the Global Partnership on Artificial Intelligence (GPAI), the OECD, or another organisation. This repository is not an official institutional presentation.

Read the [research analysis](docs/RESEARCH_ANALYSIS_2026-10-21.md), [integration and release notes](docs/INTEGRATION.md), and [public-safe repository scan](docs/REPO_SCAN.md).

<p align="center">
  <em>Small beginnings, infinite possibilities.</em><br>
  <a href="#navigation">Back to navigation</a> · <a href="docs/START-HERE.md">Quick start</a> · <a href="docs/TESTING.md">Testing guide</a>
</p>
