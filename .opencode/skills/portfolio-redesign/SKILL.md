---
name: portfolio-redesign
description: Skill for redesigning and maintaining a Data Engineering portfolio website using Astro and Tailwind CSS. Use when working on the sekhar546.github.io project — covers design decisions, component patterns, data flow, and deployment.
---

# Portfolio Redesign Skill

## When to Use
Use this skill whenever working on `sekhar546.github.io`. It covers the full stack from design decisions through deployment.

## Architecture

```
src/
├── data/resume.js              ← All content (single source of truth)
├── layouts/BaseLayout.astro    ← HTML shell, SEO, CDN scripts
├── components/
│   ├── Header.astro             ← Nav, theme toggle, scroll-spy
│   ├── Hero.astro               ← Typing animation, profile, CTAs
│   ├── KPIBanner.astro          ← Animated metric counters
│   ├── About.astro              ← Bio, domains, pipeline diagram
│   ├── Experience.astro         ← Vertical alternating timeline
│   ├── Projects.astro           ← Filterable cards
│   ├── SkillsRadar.astro        ← Bar chart + radar chart
│   ├── Contact.astro            ← Email, phone, LinkedIn
│   └── Footer.astro             ← Links, social, copyright
├── styles/global.css            ← Tailwind v4 theme + light overrides
└── pages/index.astro            ← Section composition
```

## Component Patterns

### Section Structure
Every section follows this pattern:
```astro
<section id="{name}" class="py-20">
  <div class="max-w-5xl mx-auto px-4">
    <div class="text-center mb-12">
      <p class="text-primary font-heading text-sm tracking-widest uppercase mb-2">Label</p>
      <h2 class="font-heading text-3xl md:text-4xl font-bold text-heading">Title</h2>
    </div>
    <!-- content -->
  </div>
</section>
```

### Card Pattern
```html
<div class="bg-surface-light rounded-xl p-5 border border-border hover:border-primary/20 transition-all glow-border group">
```

### Badge / Tag Pattern
```html
<span class="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
```

### Button Pattern
```html
<!-- Primary -->
<a class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
<!-- Outline -->
<a class="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors">
```

## Data Flow

All content lives in `src/data/resume.js`. Components import the `resume` object:

```javascript
import { resume } from "../data/resume";
// Access: resume.experience, resume.skills, resume.stats, etc.
```

To update any text on the site, edit `resume.js` — never hunt for text in individual `.astro` files.

## Theme System

### Dark Mode (default)
```css
/* Defined in @theme block */
--color-surface-dark: #07070f;
--color-text: #e2e8f0;
--color-heading: #ffffff;
```

### Light Mode
```css
/* Override in html.light block */
html.light {
  --color-surface-dark: #f8fafc;
  --color-text: #1e293b;
  --color-heading: #0f172a;
}
```

Toggle mechanism: `<html>` class switches `dark` ↔ `light`, persisted in `localStorage`.

## Deployment Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs:
1. `npm ci` → clean install
2. `npm run build` → Astro build
3. `npx playwright install chromium --with-deps` → test browser
4. `npm test` → Playwright tests
5. `actions/upload-pages-artifact` → uploads `dist/`
6. `actions/deploy-pages` → deploys to GitHub Pages

Trigger: push to `main`.

## Testing Patterns

Key tests in `tests/portfolio.spec.ts`:

| Test Group | What it Covers |
|---|---|
| SEO & Metadata | Title, meta desc, OG, canonical, JSON-LD |
| Navigation | Desktop links, mobile menu, scroll-to-section |
| Theme Toggle | Dark/light switch, localStorage persistence |
| Typing Animation | Hero subtitle cycles |
| Project Filters | Category filtering with card visibility |
| Skills | Radar chart canvas presence |
| Contact | Email, phone, LinkedIn links |
| Footer | Dynamic year rendering |

## Color Palette

| Token | Dark | Light | Usage |
|---|---|---|---|
| `primary` | `#06b6d4` (cyan) | Same | Accents, links, buttons |
| `accent` | `#10b981` (green) | Same | Success indicators, KPIs |
| `violet` | `#8b5cf6` | Same | AI/ML accents, skill bar gradients |
| `surface` | `#12122a` | `#ffffff` | Card backgrounds |
| `text` | `#e2e8f0` | `#1e293b` | Body text |
| `heading` | `#ffffff` | `#0f172a` | Section and card titles |

## Known Gotchas

1. **JSON-LD in scripts**: Template expressions like `{siteUrl}` don't interpolate inside `<script>`. Always build JSON in frontmatter with `set:html`.
2. **Chart.js import**: Dynamic `await import("chart.js")` fails in bundled scripts. Use CDN `<script>` with `defer`.
3. **KPI animation regex**: Values like `$50K` need `match(/([^\d]*)(\d+)(.*)/)` to properly separate `$`, `50`, `K`.
4. **Skill bar widths**: Multiply 0–5 levels by 20 for percentage: `data-width={skill.level * 20}`.
5. **Duplicate `theme-toggle` IDs**: Only one element should have this ID (in Header.astro). Footer had a duplicate that broke the toggle.