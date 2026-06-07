# Design System — Raja Sekhar Reddy Gajjala Portfolio

## Brand Identity

- **Role**: Lead Data Engineer | Architecture & Modern Data Platforms
- **Tone**: Technical, precise, confident, approachable
- **Audience**: Data engineering recruiters, hiring managers, technical peers

## Color System

| Token | Value | Usage |
|---|---|---|
| `surface-dark` | `#07070f` | Page background |
| `surface` | `#12122a` | Section backgrounds |
| `surface-light` | `#1a1a2e` | Card surfaces |
| `surface-lighter` | `#23234a` | Elevated surfaces |
| `primary` | `#06b6d4` | Cyan — links, buttons, accents |
| `primary-dark` | `#0891b2` | Hover states |
| `accent` | `#10b981` | Green — success metrics, KPIs |
| `violet` | `#8b5cf6` | AI/ML section accents |
| `text` | `#e2e8f0` | Body text |
| `text-muted` | `#94a3b8` | Secondary text |
| `text-dim` | `#64748b` | Tertiary / captions |
| `border` | `#1e293b` | Card borders |
| `border-light` | `#334155` | Subtle dividers |

## Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Headings | JetBrains Mono | 600–700 | `text-3xl` to `text-6xl` |
| Body | Inter | 400 | `text-sm` to `text-base` |
| Code/Tech | JetBrains Mono | 500 | `text-xs` to `text-sm` |
| Gradient text | Primary → Violet | 700 | As heading |

## Spacing System

- **Section padding**: `py-20` (5rem)
- **Card padding**: `p-5` to `p-8`
- **Gap between elements**: `gap-4` to `gap-8`
- **Max content width**: `max-w-5xl` (1024px)

## Components

### Cards
- Background: `surface-light`
- Border: `border` with `hover:border-primary/20`
- Shadow: `glow-border` utility (subtle cyan glow)
- Border radius: `rounded-xl`

### Buttons
- **Primary**: `bg-primary text-white` → hover `bg-primary-dark`
- **Outline**: `border-primary/30 text-primary` → hover `bg-primary/10`
- Border radius: `rounded-lg`

### Tags / Badges
- Background: `primary/10`, border: `primary/20`, text: `primary`
- Font: `text-[10px]` uppercase tracking-wider
- Border radius: `rounded-full`

### Links
- Default: `text-text-muted` → hover `text-primary`
- Transition: `transition-colors`

## Animations

| Name | Duration | Trigger | Element |
|---|---|---|---|
| `fadeIn` | 0.6s | Page load | Hero subtitle |
| `slideUp` | 0.5s | Page load | Hero title, stat cards |
| `pulse` | 3s | Continuous | Typing cursor |

## Layout

- Single-page scroll with anchor navigation
- Sections: Hero → KPI Strip → About → Experience → Projects → Skills → Contact
- Responsive breakpoints at `md:` (768px)
- Mobile: hamburger menu with fullscreen overlay
- Desktop: horizontal nav bar

## Data Engineering Visual Language

- **Background grid**: `pipelines-grid` utility (subtle cyan grid pattern mimicking data flow diagrams)
- **Gradient text**: Primary → Violet for name/title (signals technical depth)
- **Bar charts**: Gradient from primary to violet for skill bars
- **Radar chart**: Cyan fill with dark background
- **Icons**: Inline SVG only (no icon library dependency)
- **Pipeline diagram**: 5-stage flow in About section (Sources → Ingest → Process → Store → Analytics)