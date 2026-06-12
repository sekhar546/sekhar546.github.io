# Neon Redesign — Design Spec
**Date:** 2026-06-11
**Status:** Approved

---

## Overview

Full visual redesign of sekhar546.github.io from the current cyan/navy theme to a neon-nebula aesthetic. The design combines a deep-space background with multi-color neon accents, a display font for the hero name, and a coding font for all UI chrome.

All content and data remain in `src/data/resume.js` unchanged. Only visual presentation changes.

---

## Color Palette

| Token | Hex | Role |
|---|---|---|
| `--color-cyan` | `#00F5FF` | Primary accent · hero name glow · About · Contact |
| `--color-pink` | `#FF0090` | Secondary · Experience section accent |
| `--color-violet` | `#7700FF` | Background nebula glow · Projects section |
| `--color-green` | `#AAFF00` | Highlight · Skills section accent |
| `--color-bg` | `#03030D` | Page background |
| `--color-surface` | `#07070F` | Card surfaces |
| `--color-surface-light` | `#0C0C1A` | Elevated cards |
| `--color-text` | `#DDEEFF` | Primary text |
| `--color-text-muted` | `#445566` | Secondary text |
| `--color-text-dim` | `#252540` | Dimmed / nav links |
| `--color-border` | `rgba(255,255,255,0.06)` | Card borders |

Nebula orbs in the background are built from four radial gradients layered on `--color-bg`:
- Top-right: violet (`rgba(119,0,255,0.26)`) — large, blurred 70px
- Bottom-left: cyan (`rgba(0,245,255,0.18)`) — medium, blurred 65px
- Center: pink (`rgba(255,0,144,0.14)`) — small, blurred 65px
- Bottom-center: green (`rgba(170,255,0,0.09)`) — small, blurred 65px

---

## Typography

### Display — Blanka
- **Source:** `https://fonts.cdnfonts.com/css/blanka`
- **Usage:** Hero name only — two lines, all caps, `letter-spacing: 2px`
- **Line 1:** "RAJA SEKHAR" — color `#DDEEFF`, soft glow `text-shadow: 0 0 50px rgba(0,245,255,0.18), 0 0 100px rgba(0,245,255,0.08)`
- **Line 2:** "REDDY GAJJALA" — color `#00F5FF`, full bloom `text-shadow: 0 0 25px rgba(0,245,255,0.95), 0 0 55px rgba(0,245,255,0.55), 0 0 110px rgba(0,245,255,0.22)`
- **Font size:** `50px` both lines, `line-height: 0.9`

### UI / Code — JetBrains Mono
- **Source:** Google Fonts — weights 400, 500, 700, 800
- **Usage:** Nav logo, nav links, eyebrow labels, tech badges, KPI numbers, section labels, CTA buttons, code-style role text
- **Eyebrow format:** `// Section Label` — `font-size: 9px`, `letter-spacing: 3px`, uppercase, preceded by a 28px gradient line (cyan → pink)

### Body — Inter
- **Source:** Google Fonts — weights 300, 400, 500, 600
- **Usage:** About bio text, card descriptions, experience bullet points, footer copy
- **Body size:** `14px`, `line-height: 1.7`, color `--color-text-muted`

---

## Section Color Assignments

Each section uses one neon as its primary accent (borders, labels, hover states, icon fills):

| Section | Accent color | Hex |
|---|---|---|
| Hero | Cyan | `#00F5FF` |
| KPI Banner | Per-stat (cyan / pink / green / violet) | — |
| About | Cyan | `#00F5FF` |
| Experience | Pink | `#FF0090` → `#FF4DAA` tints |
| Projects | Violet | `#7700FF` → `#AA66FF` tints |
| Skills | Acid Green | `#AAFF00` |
| Education | Cyan | `#00F5FF` |
| Contact | Cyan | `#00F5FF` |

---

## Components

### Hero Section
- Full-viewport background with four nebula orbs (see Color Palette)
- **Nav:** Logo `RSR.` (JetBrains Mono, `.` in cyan), links in `--color-text-dim`, Resume CTA button with cyan glass style
- **Eyebrow:** Gradient line + `// Lead Data Engineer · Toronto, ON`
- **Name block:** Blanka, two lines as specified above
- **Typing animation:** Keep the existing cycling title animation (`typingTitles` array). The animated text sits between the eyebrow and the name block, styled in JetBrains Mono, cyan color, `12px`. The blinking cursor is retained.
- **Role line:** JetBrains Mono, `10px`, `--color-text-dim`, lists stack/yoe
- **Tech badges:** pill shape, color-coded by category
- **CTAs:** Primary = cyan gradient button with glow shadow; Secondary = ghost button
- **KPI cards (right side):** Three frosted-glass pills stacked vertically, each with a colored value, label, and bottom gradient bar. Values glow in their respective accent color.

### KPI Banner (below hero)
- **Remove** `<KPIBanner />` from `index.astro` — KPIs move into the hero as floating glass pills
- The `KPIBanner.astro` component file can be deleted; its counter animation logic gets ported inline into `Hero.astro`
- The existing 4-stat data in `resume.stats` is reused unchanged

### About Section
- Accent: cyan
- Section label: `// About`
- Profile photo with cyan glow border
- Bio text in Inter
- Domain badges (Healthcare, Banking, etc.) styled as cyan pill tags

### Experience Section
- Accent: pink (`#FF4DAA`)
- Timeline line color: pink
- Timeline dots: pink with glow
- Card hover border: pink/20
- Section label: `// Experience`
- Tag badges: pink-tinted

### Projects Section
- Accent: violet (`#AA66FF`)
- Card borders on hover: violet/20
- Category filter buttons: violet active state
- Section label: `// Projects`

### Skills Section
- Accent: acid green (`#AAFF00`)
- Skill bar fill: green gradient
- Radar chart colors updated to palette
- Section label: `// Skills`

### Education Section
- Accent: cyan
- Existing `Education.astro` component restyled with new tokens

### Contact Section
- Accent: cyan
- Card hover glows in cyan

### Footer
- Background: `#02020A`
- Subtle top border in `rgba(0,245,255,0.06)`

---

## CSS Architecture Changes

### `src/styles/global.css`
- Replace all existing `@theme` color tokens with the new palette above
- Add Blanka font import from cdnfonts.com
- Update JetBrains Mono import to include weights 100–800
- Add `--font-display: 'Blanka', sans-serif` token
- Add CSS custom properties for neon glow intensities:
  - `--glow-cyan: 0 0 25px rgba(0,245,255,0.95), 0 0 55px rgba(0,245,255,0.55)`
  - `--glow-pink: 0 0 25px rgba(255,0,144,0.85), 0 0 50px rgba(255,0,144,0.4)`
  - `--glow-green: 0 0 20px rgba(170,255,0,0.8), 0 0 45px rgba(170,255,0,0.35)`
  - `--glow-violet: 0 0 20px rgba(119,0,255,0.8), 0 0 45px rgba(119,0,255,0.35)`

### Component updates (all components touched)
- `Hero.astro` — complete rewrite of name block, add nebula orbs, add KPI glass pills, move KPI data here
- `KPIBanner.astro` — remove from page (KPIs move to hero) OR repurpose as a minimal stat strip
- `Header.astro` — update colors and logo treatment
- `About.astro` — swap accent tokens to cyan
- `Experience.astro` — swap accent tokens to pink
- `Projects.astro` — swap accent tokens to violet
- `SkillsRadar.astro` — swap accent tokens to green, update radar chart colors
- `Education.astro` — swap accent tokens to cyan
- `Contact.astro` — swap accent tokens to cyan
- `Footer.astro` — update background and border

---

## Fonts — Implementation Note

Blanka is not on Google Fonts. Load via cdnfonts.com:
```css
@import "https://fonts.cdnfonts.com/css/blanka";
```
Add this as the first import in `global.css`, before the Google Fonts import. Use only for the hero name — do not apply to body or other headings.

---

## Animations — Keep / Update

Keep existing scroll-reveal, KPI counter, and skill bar animations. Update colors only.

Add one new effect: **nebula orbs get a subtle slow drift** — each orb animates its `transform: translate` by ±20px over 12–18s with `ease-in-out` and alternate direction. This gives the background life without being distracting.

---

## Out of Scope

- No content changes (all data stays in `resume.js`)
- No new sections
- No layout restructuring (single-page scroll, same section order)
- No new JavaScript behaviors
- Playwright tests: all 15 existing tests must remain green. The tests do not assert on colors or font names, so no test changes are expected. The one risk is the KPI counter test (if any) — the counter logic moves to `Hero.astro` but the `.kpi-counter` selector and `data-target` attribute must be preserved so the existing animation and any test selectors still work.
