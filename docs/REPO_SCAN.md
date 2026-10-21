# Repository scan & selection notes

## Scope

This present started with an account-wide metadata pass over every repository returned by the connected GitHub account: **161 repositories** in total.

- Public: **76**
- Private: **85**
- Archived: **1**

The broad scan used repository metadata such as name, visibility, default branch, archive state and repository size. A smaller shortlist was then inspected at file/README level. This is intentionally different from claiming a line-by-line audit of every file in 161 repositories.

## Pattern scan

Categories can overlap because one repository can match more than one theme.

| Theme | Matching repositories |
| --- | ---: |
| AI & Agents | 29 |
| Docs & Learning | 11 |
| Games & Creative | 27 |
| System & Developer Tools | 32 |
| Media & Streaming | 22 |
| Store & Plugins | 6 |
| Planning & Productivity | 6 |

## Shortlist of useful ideas (privacy-preserving summary)

The selection involved beginner learning material, copy-friendly terminal references, reusable e-mail templates, structured prompting, small task boards, component reuse, plugin discovery, and focused local generators. Individual repository names have been omitted where account metadata included private repositories.

## What became a gift

1. **Prompt Builder** — structured prompting reduced to five beginner-friendly fields.
2. **Terminal Quickstart** — safe starter commands only; no destructive system commands.
3. **E-mail Starter** — local German/English templates.
4. **Mini Kanban** — three columns and local persistence, no server.
5. **JSON Helper** — validate, format and minify with obvious actions.
6. **First Project Checklist** — a small path from idea to tested first repository.
7. **Luna Mini Missions** — playful tiny challenges inspired by the many game and creative repos.

## Selection principles

- Useful in under one minute.
- Beginner can understand the purpose without documentation.
- No API key, login or backend required.
- Local-first where possible.
- Safe defaults.
- One tool = one obvious job.
- Inspired by existing projects without copying their full complexity.

## Publication boundary and provenance

The 2026-10-07 account scan contained metadata for 161 repositories (76 public, 85 private). Only aggregated figures and design patterns are retained here. Individual private repository names, sizes and branches do not belong in a public inventory.

**Historical exposure caveat:** Earlier public commits may still contain the original inventory. Editing this file cannot remove information from Git history or caches. Review history separately if confidentiality requires it.
