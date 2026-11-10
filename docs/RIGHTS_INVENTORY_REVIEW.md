# Rights inventory and release checklist — NOT YET VERIFIED

**Status:** owner review required. This is a review worksheet, not an assertion that every asset is owned by the repository maintainer.

| Path/group | Nature | Known evidence | Required owner decision |
| --- | --- | --- | --- |
| `index.html`, `styles.css`, `app.js`, `data/prompts.js` | Browser code and prompt data | Current source files present | Confirm contributor ownership and code license compatibility |
| `classic/` | Preserved former browser application | Separate classic implementation | Trace upstream history and authorship before applying the new grant |
| `starter-project/` | Reusable beginner application | Files and walkthrough included | Determine if permitted internal changes may include shared classroom submissions |
| `scripts/`, `.github/`, `package.json` | Build, CI and metadata | Current scripts/workflow present | Decide whether authorizing use extends to maintainer tooling |
| `README.md`, `docs/` | Documentation | Some documents contain historical research, links and project governance | Review authorship and any linked/quoted third-party material |
| `freebie-creator-kit/`, `.agents/skills/` | Templates, agent roles, portable skills | Described as original, editable templates | Confirm contributor rights; avoid implying unrestricted publication |
| `assets/*.png`, `assets/*.webp` | Artwork and wallpapers | README calls hero AI-assisted original artwork | Record creation provenance, generation-provider terms and third-party references |
| `assets/*.svg`, `assets/icons/` | Icons and scalable assets | Files present | Inspect whether assets are original and whether any external library/license applies |
| `downloads/*.zip` | Built distributions | Builder lists bundled source and text/art files | Put final adopted terms in each ZIP; extract and verify rights file location |
| User-generated content | Outputs created by toolkit users | Core tool outputs are created locally | Expressly avoid claiming ownership of user outputs |

## Publication checklist

- [ ] Confirm copyright owners and authorization to license every affected item
- [ ] Identify third-party materials, attributions, upstream license exceptions and contributor agreements
- [ ] Resolve AI-assisted artwork provenance and branding/trademark questions
- [ ] Confirm exact intended free-use audience and internal-business-use scope
- [ ] Obtain legal review of the customized German/EU license terms
- [ ] Approve final rights text, issuer details and effective date
- [ ] Update source README, website, Creator Kit and all three generated archives consistently
- [ ] Run `npm test`, `npm run build`, `npm test` and inspect extracted contents
- [ ] Make a separate, approved PR to publish the effective terms

**Never claim a successful legal or asset audit from this inventory alone.** Public GitHub visibility grants view/fork rights under the platform terms, not broad independent redistribution permission.
