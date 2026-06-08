# Portfolio Project — Agent Instructions & Guardrails

## Project Overview

Personal portfolio website for Raja Sekhar Reddy Gajjala, a Lead Data Engineer.  
Built with Astro 5 + Tailwind CSS v4, deployed via GitHub Pages + GitHub Actions.

**URL**: https://sekhar546.github.io  
**Stack**: Astro, Tailwind CSS v4, Chart.js (CDN), Playwright, GitHub Actions  
**Branches**: `main` (production), `development` (active work)

## Tech Stack Conventions

- **Astro 5**: Static site generation. All pages in `src/pages/`. Components in `src/components/`.
- **Tailwind CSS v4**: CSS-first configuration via `@theme` in `src/styles/global.css`. No tailwind.config file.
- **Chart.js**: Loaded from CDN (`chart.umd.min.js`), not bundled. Use `window.Chart` global.
- **Data**: All content in `src/data/resume.js` — the single source of truth.
- **No frameworks**: Vanilla JS in `<script>` blocks, no React/Vue/Svelte.
- **All client scripts**: Astro-processed `<script>` blocks (Vite-bundled). For CDN-reliant code, use `defer` in `<head>`.

## Development Workflow

1. Always work on the `development` branch.
2. After changes: `npm run build` to verify the build succeeds.
3. Run `npx playwright test` to run the 15 e2e tests.
4. Commit with conventional commits (`feat:`, `fix:`, `refactor:`, `docs:`).
5. Merge to `main` only for production deployment.

## Code Quality Guardrails

### Before committing
- [ ] `npm run build` passes with zero errors
- [ ] `npx playwright test` — all 15 tests pass
- [ ] No hardcoded `text-white` on text elements (use `text-heading` instead)
- [ ] No `{siteUrl}` literal in JSON-LD (build in frontmatter with `set:html`)

### SEO
- All pages must have: `title`, `meta description`, `og:title`, `og:description`, `canonical`
- JSON-LD must be built in frontmatter (`---` block), never inline in `<script>` tags
- Keep schema.org `Person` + `BreadcrumbList` updated

### Accessibility
- All interactive elements need `aria-label` or visible label
- Skip-to-content link must be first focusable element
- `focus-visible` outline styles are defined globally
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)

### Image Optimization
- Profile photo should be WebP format at `public/assets/profile.webp`
- Add explicit `width`/`height` attributes to prevent CLS
- Use `loading="lazy"` for images below the fold (About section)

### Theme
- `dark` is the default class on `<html>`, `light` is toggled by JS
- Heading text uses `text-heading` (not `text-white`)
- Button text on colored backgrounds stays `text-white`
- Light theme variables are in `html.light { ... }` in `global.css`

## Key Files

| File | Purpose |
|---|---|
| `src/data/resume.js` | All content: stats, experience, projects, skills |
| `src/layouts/BaseLayout.astro` | HTML shell, SEO, JSON-LD, CDN scripts |
| `src/styles/global.css` | Tailwind v4 theme, light overrides, utilities |
| `src/components/*.astro` | Each page section as a component |
| `tests/portfolio.spec.ts` | 15 Playwright e2e tests |
| `.github/workflows/deploy.yml` | CI/CD: test → build → deploy |
| `DESIGN.md` | Complete design system reference |
| `astro.config.mjs` | Astro config with Tailwind v4 Vite plugin |

## Known Decisions

- **No contact form**: Static site limitation. Resume links to FlowCV.
- **Chart.js from CDN**: Avoided dynamic import issues in Astro's bundled scripts.
- **Skills on 0–5 scale**: Cleaner display than 0–100%. Multiply `level * 20` for bar width.
- **KPI counter animation**: Regex `/([^\d]*)(\d+)(.*)/` separates prefix/number/suffix for values like `$50K`.
- **No Jekyll**: GitHub Pages uses our Actions workflow, not the built-in Jekyll builder.