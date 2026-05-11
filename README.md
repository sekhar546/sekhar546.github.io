# Portfolio Website — Raja Sekhar Reddy Gajjala

A personal portfolio website showcasing the professional experience, projects, and skills of **Raja Sekhar Reddy Gajjala**, a Data Engineer and Technology Lead.

## Tech Stack

- **HTML5** — Semantic markup with accessible structure
- **CSS3** — Custom properties (CSS variables), Flexbox, Grid, responsive media queries
- **JavaScript** — Vanilla JS for interactivity (no frameworks)
- **Fonts** — DM Sans (body) + Outfit (headings) via Google Fonts
- **Icons** — Font Awesome 6 (free)

## Features

- Responsive design (mobile-first with breakpoints at 320px, 576px, 767px, 968px)
- Fixed navigation header with backdrop blur
- Mobile bottom-sheet menu with hamburger toggle
- Typing animation in hero subtitle cycling through job titles
- Timeline-based experience section with expandable details
- Project cards with category filter (All / Cloud / Data Engineering / AI/ML)
- Skills grid with categorized groupings
- Contact cards (email, phone, LinkedIn)
- Scroll-to-top button
- Active navigation link highlighting on scroll
- Light / Dark theme toggle with localStorage persistence
- Open Graph meta tags for social sharing

## Sections

| Section      | Description |
|--------------|-------------|
| Home         | Hero section with typing animation, social links, and call-to-action |
| About        | Professional summary with key stats |
| Experience   | Timeline of professional roles with expandable achievement details |
| Projects     | Highlighted project cards with category filter |
| Skills       | Categorized technical skills |
| Contact      | Email, phone, and LinkedIn contact cards |

## Getting Started

This is a static site with no build tools or dependencies. To run locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sekhar546/sekhar546.github.io.git
   ```

2. Open `index.html` in your browser, or serve with any static file server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve .
   ```

3. Navigate to `http://localhost:8000` in your browser.

## Deployment

This site is designed to be deployed on **GitHub Pages**:

1. Push to the `main` branch of `sekhar546/sekhar546.github.io`
2. GitHub Pages will automatically serve the site from the root

## Customization

- **Colors**: Edit CSS custom properties in the `:root` block in `css/styles.css`
- **Light theme overrides**: Edit the `body.light-theme` block in `css/styles.css`
- **Content**: Update text and links directly in `index.html`
- **Typing titles**: Edit the `typingTitles` array in `js/script.js`

## Adding a Profile Photo

1. Place your photo at `assets/profile.jpg`
2. In `index.html`, replace the `<div class="home__img-placeholder">` block in the hero section with `<img src="assets/profile.jpg" alt="Raja Sekhar" class="home__img">`
3. Uncomment the `<img>` tag in the About section and update its `src`

## License

MIT
