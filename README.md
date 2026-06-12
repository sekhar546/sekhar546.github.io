# Portfolio Website — Raja Sekhar Reddy Gajjala

A modern, static portfolio website for **Raja Sekhar Reddy Gajjala**, a Lead Data Engineer with 14 years of experience across healthcare, insurance, and banking domains.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed via **GitHub Pages** + **GitHub Actions**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) v5 (static site generation) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Charts | [Chart.js](https://www.chartjs.org) v4 (CDN via jsdelivr) |
| Fonts | JetBrains Mono (headings) + Inter (body) via Google Fonts |
| Icons | Inline SVGs (no icon library dependency) |
| Analytics | [GoatCounter](https://www.goatcounter.com) (privacy-friendly) |
| Hosting | GitHub Pages (via GitHub Actions deploy) |
| Testing | [Playwright](https://playwright.dev) (15 e2e tests) |
| Security scanning | CodeQL + Dependabot + Secret scanning |

## Features

- **Responsive design**: Mobile-first with breakpoints, hamburger nav on small screens
- **Dark / Light theme**: Default dark mode with toggle and localStorage persistence
- **Scroll-spy nav**: Active link highlighting while scrolling through sections
- **Section reveal animations**: Fade/slide-up triggered by IntersectionObserver
- **Animated typing**: Hero subtitle cycles through "Lead Data Engineer", "Data Architect", "AI Engineer"
- **KPI metrics strip**: Animated counters with eased count-up on scroll
- **Experience timeline**: Alternating vertical timeline with expandable achievements
- **Project filter**: Category-based filtering with fade transition (All, Data Engineering, Cloud, AI/ML)
- **Skills radar**: Chart.js radar chart + animated progress bars
- **Pipeline diagram**: Visual architecture flow in About section
- **Schema.org structured data**: Person + BreadcrumbList JSON-LD
- **SEO optimized**: Open Graph, Twitter Cards, canonical URL, semantic HTML
- **Accessibility**: Skip-to-content link, focus-visible outlines, WCAG contrast, aria labels

## Sections

| Section | Description |
|---|---|
| Hero | Typing animation, profile photo, social links, CTAs |
| KPI Strip | Four animated metric counters (years, savings, records, projects) |
| About | Bio summary, domain badges, pipeline architecture flow |
| Experience | Alternating timeline with 4 roles, expandable details |
| Projects | Filterable project cards with quantified highlights |
| Skills | Animated progress bars + Chart.js radar visualization |
| Contact | Email, phone, LinkedIn cards |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build
npm run preview

# Run e2e tests
npx playwright test
```

## Deployment Pipeline

Every push to `main` triggers the CI/CD workflow (`.github/workflows/deploy.yml`):

1. `npm ci` — clean install
2. `npm run build` — Astro builds static site to `dist/`
3. `npx playwright test` — 15 e2e tests run
4. `actions/upload-pages-artifact` — uploads `dist/`
5. `actions/deploy-pages` — deploys to GitHub Pages

## Project Structure

```
├── .github/
│   ├── workflows/deploy.yml     # CI/CD: test → build → deploy
│   └── workflows/codeql.yml     # CodeQL security scanning
├── .opencode/
│   ├── agents/
│   │   ├── portfolio-dev.md     # Primary dev agent definition
│   │   └── reviewer.md          # Code review sub-agent
│   └── skills/portfolio-redesign/SKILL.md  # Skill reference
├── src/
│   ├── components/
│   │   ├── Header.astro         # Navigation + theme toggle + scroll-spy
│   │   ├── Hero.astro           # Hero section with typing animation
│   │   ├── KPIBanner.astro      # KPI metric counters
│   │   ├── About.astro          # Bio + pipeline diagram
│   │   ├── Experience.astro     # Career timeline
│   │   ├── Projects.astro       # Filterable project cards
│   │   ├── SkillsRadar.astro    # Radar chart + skill bars
│   │   ├── Contact.astro        # Contact cards
│   │   └── Footer.astro         # Footer with links + social icons
│   ├── data/
│   │   └── resume.js            # All content (single source of truth)
│   ├── layouts/
│   │   └── BaseLayout.astro     # HTML shell, SEO meta, JSON-LD, CDNs
│   ├── pages/
│   │   └── index.astro          # Main page composing all sections
│   └── styles/
│       └── global.css           # Tailwind v4 theme + light mode overrides
├── public/assets/profile.webp   # Profile photo (WebP format)
├── tests/portfolio.spec.ts      # 15 Playwright e2e tests
├── AGENTS.md                    # Project instructions & guardrails
├── DESIGN.md                    # Complete design system reference
├── astro.config.mjs
├── package.json
└── playwright.config.ts
```

## Customization

- **Content**: Edit `src/data/resume.js` — all text, stats, experience, skills in one file
- **Colors**: Edit the `@theme` block in `src/styles/global.css`
- **Light theme**: Edit the `html.light` overrides in `src/styles/global.css`
- **Design**: See `DESIGN.md` for the complete design system reference
- **Typing titles**: Edit the `titles` array in `src/components/Hero.astro`
- **Skills levels**: Edit `level` values in `src/data/resume.js` (0–5 scale; bars = level * 20%)

## Security

| Feature | Status |
|---|---|
| Branch protection (main) | Required status checks, linear history, no force pushes, PR required |
| Secret scanning | Enabled with push protection |
| Dependabot | Weekly npm updates, monthly Actions updates, security alerts |
| CodeQL analysis | Runs on push to main/development and PRs |
| Agent guardrails | Documented in `AGENTS.md` and `.opencode/` |

## License

MIT