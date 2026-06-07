# Portfolio Website — Raja Sekhar Reddy Gajjala

A modern, static portfolio website for **Raja Sekhar Reddy Gajjala**, a Lead Data Engineer with 14 years of experience across healthcare, insurance, and banking domains.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed via **GitHub Pages** + **GitHub Actions**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) v5 (static site generation) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Charts | [Chart.js](https://www.chartjs.org) v4 (dynamic import) |
| Fonts | JetBrains Mono (headings) + Inter (body) via Google Fonts |
| Icons | Inline SVGs (no icon library dependency) |
| Hosting | GitHub Pages (via GitHub Actions deploy) |

## Features

- **Responsive design**: Mobile-first with breakpoints, hamburger nav on small screens
- **Dark theme**: Default dark mode with toggle and localStorage persistence
- **Animated typing**: Hero subtitle cycles through "Lead Data Engineer", "Data Architect", "AI Engineer"
- **KPI metrics strip**: Animated counters showing experience, cost savings, scale
- **Experience timeline**: Alternating layout with expandable achievements
- **Project filter**: Category-based filtering (All, Data Engineering, Cloud, AI/ML)
- **Skills radar**: Chart.js radar chart visualizing technical proficiency
- **Skill bars**: Animated progress bars for each technology
- **Pipeline diagram**: Visual architecture flow in About section
- **Schema.org structured data**: Person schema for search engine visibility
- **SEO optimized**: Open Graph, Twitter Cards, semantic HTML
- **Accessibility**: WCAG-compliant contrast ratios, aria labels

## Sections

| Section | Description |
|---|---|
| Hero | Typing animation, profile photo, social links, CTAs |
| KPI Strip | Four animated metric counters |
| About | Bio summary, pipeline architecture flow |
| Experience | Alternating timeline with 4 roles |
| Projects | Filterable project cards with quantified highlights |
| Skills | Progress bars + Chart.js radar visualization |
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
```

## Deployment

This site uses **GitHub Actions** for CI/CD. Every push to `main` triggers:

1. `npm ci` — clean install
2. `npm run build` — Astro builds to `dist/`
3. `actions/upload-pages-artifact` — uploads build output
4. `actions/deploy-pages` — deploys to GitHub Pages

The workflow file is at `.github/workflows/deploy.yml`.

## Project Structure

```
├── .github/workflows/deploy.yml    # CI/CD pipeline
├── src/
│   ├── components/                  # Astro components
│   │   ├── Header.astro             # Navigation + theme toggle
│   │   ├── Hero.astro               # Hero section with typing animation
│   │   ├── KPIBanner.astro          # KPI metric counters
│   │   ├── About.astro              # Bio + pipeline diagram
│   │   ├── Experience.astro         # Career timeline
│   │   ├── Projects.astro           # Filterable project cards
│   │   ├── SkillsRadar.astro        # Radar chart + skill bars
│   │   └── Contact.astro            # Contact cards
│   ├── data/
│   │   └── resume.js                # Central data source
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML shell + SEO meta
│   ├── pages/
│   │   └── index.astro              # Main page
│   └── styles/
│       └── global.css               # Tailwind + custom theme
├── public/assets/profile.jpg        # Profile photo
├── DESIGN.md                        # Design system documentation
├── astro.config.mjs
└── package.json
```

## Customization

- **Content**: Edit `src/data/resume.js` — all text, stats, experience, skills in one file
- **Colors**: Edit the `@theme` block in `src/styles/global.css`
- **Design**: See `DESIGN.md` for the complete design system reference
- **Typing titles**: Edit the `titles` array in `src/components/Hero.astro`

## License

MIT