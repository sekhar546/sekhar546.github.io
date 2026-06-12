# Claude Code — Project Instructions

## Project Overview

Portfolio website for Raja Sekhar Reddy Gajjala, Lead Data Engineer.
Built with Astro + Tailwind CSS, hosted on GitHub Pages.

**Live site:** https://sekhar546.github.io  
**All content lives in one file:** `src/data/resume.js`

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro 5 |
| Styling | Tailwind CSS 4 |
| Charts | Chart.js (dynamic import) |
| Tests | Playwright |
| CI/CD | GitHub Actions |

---

## Development Workflow

Follow this sequence for every change, no matter how small:

### 1. Plan
- Understand the full scope before touching any file
- For multi-file or non-trivial changes, state the plan to the user and get confirmation
- Identify which files will change and why

### 2. Build
- Work on the `claudedev` branch — never commit directly to `main` or `development`
- All content changes go through `src/data/resume.js`
- New UI sections get a dedicated component in `src/components/`
- Wire new components into `src/pages/index.astro`
- Run a local build to catch compile errors before committing:
  ```
  npm run build
  ```

### 3. Test
- Run the full Playwright suite before every push:
  ```
  npm test
  ```
- All 15 tests must pass — fix any failures before proceeding
- When adding new content (projects, sections), update any hardcoded counts or assertions in `tests/portfolio.spec.ts`

### 4. Push to Git
- Stage only the files you changed (never `git add .` blindly)
- Write a clear commit message: `type: short description`
  - Types: `feat`, `fix`, `chore`, `docs`, `test`
- Push to `claudedev`, then open a PR to `main`
- Do **not** push directly to `main` — the deploy workflow requires passing PR checks

---

## Branch Strategy

```
main          ← production (GitHub Pages deploys from here)
development   ← integration branch
claudedev     ← active feature/fix work (branch off development)
```

PRs go: `claudedev → development → main`

---

## Key Commands

```bash
npm run dev       # local dev server (http://localhost:4321)
npm run build     # production build to /dist
npm test          # run Playwright e2e tests
```

---

## Key Files

```
src/data/resume.js          # single source of truth for all content
src/components/             # one Astro component per section
src/pages/index.astro       # composes all components
src/styles/global.css       # Tailwind theme variables
tests/portfolio.spec.ts     # Playwright e2e tests
.github/workflows/          # CI/CD pipelines
```

---

## Things to Keep in Mind

- Education, certifications, and work experience are sensitive — verify content accuracy with the user before publishing
- The `tests/portfolio.spec.ts` file has assertions tied to content counts (e.g. number of projects) — update them when content changes
- Do not push to `main` directly; always go through a PR so `pr-checks.yml` runs first
