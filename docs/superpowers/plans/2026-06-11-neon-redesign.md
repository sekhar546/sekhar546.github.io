# Neon Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current cyan/navy theme with a neon-nebula aesthetic — deep-space background, Blanka display font for the hero name, JetBrains Mono for all UI chrome, Inter for body copy, and per-section neon accent colors.

**Architecture:** All changes are purely visual — no content, no layout restructuring, no new sections. `src/data/resume.js` is untouched. CSS tokens in `global.css` are the single source of truth for the palette; components reference those tokens and are updated one-by-one. The KPI strip moves from its own section into the hero as floating glass pills.

**Tech Stack:** Astro 6, Tailwind CSS 4 (`@theme` tokens in `global.css`), Chart.js (radar), Playwright (e2e tests)

---

## File Map

| Action | File | What changes |
|---|---|---|
| Modify | `src/styles/global.css` | Font imports, `@theme` color tokens, glow vars, nebula-drift keyframe |
| Modify | `src/components/Hero.astro` | Full rewrite: Blanka name, nebula orbs, KPI glass pills, typing anim restyled |
| Delete | `src/components/KPIBanner.astro` | Replaced by pills in Hero |
| Modify | `src/pages/index.astro` | Remove `<KPIBanner />` import and usage |
| Modify | `src/components/Header.astro` | Logo → `Raja.`, update nav link/button colors |
| Modify | `src/components/About.astro` | Section label, domain badge colors → cyan tokens |
| Modify | `src/components/Experience.astro` | Accent → pink tokens |
| Modify | `src/components/Projects.astro` | Accent → violet tokens |
| Modify | `src/components/SkillsRadar.astro` | Accent → green tokens, radar chart colors |
| Modify | `src/components/Education.astro` | Accent → cyan tokens |
| Modify | `src/components/Contact.astro` | Accent → cyan tokens |
| Modify | `src/components/Footer.astro` | Background + border update |

---

## Task 1: Update CSS tokens and fonts

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Replace `global.css` entirely**

```css
@import "https://fonts.cdnfonts.com/css/blanka";
@import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap";
@import "tailwindcss";

@theme {
  --font-display: "Blanka", sans-serif;
  --font-heading: "JetBrains Mono", monospace;
  --font-body: "Inter", system-ui, sans-serif;

  /* Palette */
  --color-cyan:         #00F5FF;
  --color-cyan-dim:     rgba(0, 245, 255, 0.18);
  --color-pink:         #FF0090;
  --color-pink-mid:     #FF4DAA;
  --color-pink-dim:     rgba(255, 0, 144, 0.14);
  --color-violet:       #7700FF;
  --color-violet-mid:   #AA66FF;
  --color-violet-dim:   rgba(119, 0, 255, 0.26);
  --color-green:        #AAFF00;
  --color-green-dim:    rgba(170, 255, 0, 0.09);

  /* Surfaces */
  --color-bg:             #03030D;
  --color-surface:        #07070F;
  --color-surface-dark:   #03030D;
  --color-surface-light:  #0C0C1A;
  --color-surface-lighter:#111128;

  /* Legacy aliases (keep so existing Tailwind classes don't break) */
  --color-primary:      #00F5FF;
  --color-primary-dark: #00C5D5;
  --color-primary-light:#33F7FF;
  --color-accent:       #AAFF00;
  --color-accent-dark:  #88CC00;
  --color-violet:       #7700FF;
  --color-violet-dark:  #5500CC;

  /* Text */
  --color-text:         #DDEEFF;
  --color-text-muted:   #445566;
  --color-text-dim:     #252540;
  --color-heading:      #DDEEFF;

  /* Borders */
  --color-border:       rgba(255, 255, 255, 0.06);
  --color-border-light: rgba(255, 255, 255, 0.10);
}

/* Glow utilities */
:root {
  --glow-cyan:   0 0 25px rgba(0,245,255,0.95),   0 0 55px rgba(0,245,255,0.55);
  --glow-pink:   0 0 25px rgba(255,0,144,0.85),   0 0 50px rgba(255,0,144,0.40);
  --glow-green:  0 0 20px rgba(170,255,0,0.80),   0 0 45px rgba(170,255,0,0.35);
  --glow-violet: 0 0 20px rgba(119,0,255,0.80),   0 0 45px rgba(119,0,255,0.35);
}

/* Nebula orb drift animation */
@keyframes nebula-drift-a {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(18px, -14px); }
}
@keyframes nebula-drift-b {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(-16px, 20px); }
}
@keyframes nebula-drift-c {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(12px, 16px); }
}
@keyframes nebula-drift-d {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(-20px, -10px); }
}

html { background-color: #03030D; color: #DDEEFF; }

/* Scroll-reveal (keep existing) */
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
.reveal-visible { opacity: 1; transform: translateY(0); }
.section-reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }
.section-reveal-visible { opacity: 1; transform: translateY(0); }

/* Glow border utility */
.glow-border { transition: box-shadow 0.3s ease; }
.glow-border:hover { box-shadow: 0 0 20px rgba(0, 245, 255, 0.08); }

/* Gradient text */
.gradient-text { background: linear-gradient(135deg, #00F5FF, #7700FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

/* Typing cursor */
.typing-cursor { animation: blink 1s step-end infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
```

- [ ] **Step 2: Build and confirm no errors**

```bash
npm run build
```
Expected: `1 page(s) built` with no errors. Colors will look broken until Hero is updated — that's fine.

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: update CSS tokens and fonts for neon redesign"
```

---

## Task 2: Rewrite Hero.astro

**Files:**
- Modify: `src/components/Hero.astro`

This is the largest single change. The hero gets the nebula background, Blanka name, KPI glass pills (absorbing the KPIBanner), and restyled typing animation.

- [ ] **Step 1: Replace `src/components/Hero.astro` entirely**

```astro
---
import { resume } from "../data/resume";

const kpiColors = [
  { val: "#00F5FF", rgb: "0,245,255" },
  { val: "#FF4DAA", rgb: "255,77,170" },
  { val: "#AAFF00", rgb: "170,255,0" },
  { val: "#AA66FF", rgb: "170,102,255" },
];
---

<section id="home" class="relative min-h-screen flex items-center overflow-hidden" style="background:#03030D;">

  <!-- Nebula orbs -->
  <div class="nebula-orb orb-a" style="position:absolute;width:600px;height:480px;top:-180px;right:-100px;border-radius:50%;background:radial-gradient(circle,rgba(119,0,255,0.26) 0%,transparent 70%);filter:blur(70px);animation:nebula-drift-a 18s ease-in-out infinite;pointer-events:none;" />
  <div class="nebula-orb orb-b" style="position:absolute;width:440px;height:360px;bottom:-140px;left:-80px;border-radius:50%;background:radial-gradient(circle,rgba(0,245,255,0.18) 0%,transparent 70%);filter:blur(65px);animation:nebula-drift-b 14s ease-in-out infinite;pointer-events:none;" />
  <div class="nebula-orb orb-c" style="position:absolute;width:300px;height:260px;top:10%;left:34%;border-radius:50%;background:radial-gradient(circle,rgba(255,0,144,0.14) 0%,transparent 70%);filter:blur(65px);animation:nebula-drift-c 16s ease-in-out infinite;pointer-events:none;" />
  <div class="nebula-orb orb-d" style="position:absolute;width:220px;height:200px;bottom:10%;right:28%;border-radius:50%;background:radial-gradient(circle,rgba(170,255,0,0.09) 0%,transparent 70%);filter:blur(65px);animation:nebula-drift-d 12s ease-in-out infinite;pointer-events:none;" />

  <div class="relative z-10 max-w-5xl mx-auto px-6 w-full pt-24 pb-16 flex flex-col md:flex-row items-center md:items-start gap-12">

    <!-- Left: content -->
    <div class="flex-1 text-center md:text-left">

      <!-- Eyebrow -->
      <div class="flex items-center gap-3 justify-center md:justify-start mb-5 reveal">
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#00F5FF,#FF0090);box-shadow:0 0 8px rgba(0,245,255,0.5);border-radius:1px;flex-shrink:0;"></div>
        <span style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#00F5FF;">Lead Data Engineer · Toronto, ON</span>
      </div>

      <!-- Typing animation -->
      <div class="flex items-center gap-2 justify-center md:justify-start mb-4 reveal" style="animation-delay:50ms">
        <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#252540;">//</span>
        <span id="typing-text" style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#00F5FF;"></span>
        <span class="typing-cursor" style="color:#00F5FF;font-size:12px;">|</span>
      </div>

      <!-- Name block — Blanka -->
      <h1 class="reveal" style="animation-delay:100ms;font-family:'Blanka',sans-serif;line-height:0.9;letter-spacing:2px;margin-bottom:16px;text-transform:uppercase;">
        <span style="display:block;font-size:clamp(36px,5vw,54px);color:#DDEEFF;text-shadow:0 0 50px rgba(0,245,255,0.18),0 0 100px rgba(0,245,255,0.08);">RAJA SEKHAR</span>
        <span style="display:block;font-size:clamp(36px,5vw,54px);color:#00F5FF;text-shadow:0 0 25px rgba(0,245,255,0.95),0 0 55px rgba(0,245,255,0.55),0 0 110px rgba(0,245,255,0.22);">REDDY GAJJALA</span>
      </h1>

      <!-- Role line -->
      <p class="reveal" style="animation-delay:150ms;font-family:'JetBrains Mono',monospace;font-size:10px;color:#252540;letter-spacing:0.5px;margin-bottom:20px;">
        {resume.stats[0].value}{resume.stats[0].suffix} experience · AWS · Snowflake · Databricks · Lakehouse
      </p>

      <!-- Tech badges -->
      <div class="flex flex-wrap gap-2 justify-center md:justify-start mb-8 reveal" style="animation-delay:200ms;">
        {[
          { label: "Redshift",  r:"0,245,255"   },
          { label: "PySpark",   r:"255,77,170"  },
          { label: "dbt Core",  r:"170,255,0"   },
          { label: "Lakehouse", r:"170,102,255" },
          { label: "Airflow",   r:"255,255,255" },
        ].map(b => (
          <span style={`font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:600;padding:4px 11px;border-radius:20px;letter-spacing:1.2px;text-transform:uppercase;background:rgba(${b.r},0.1);color:rgb(${b.r});border:1px solid rgba(${b.r},0.25);`}>
            {b.label}
          </span>
        ))}
      </div>

      <!-- CTAs -->
      <div class="flex items-center gap-3 justify-center md:justify-start reveal" style="animation-delay:250ms;">
        <a
          href="#contact"
          style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;padding:10px 24px;border-radius:9px;background:linear-gradient(135deg,#00C5D5,#00F5FF);color:#000;box-shadow:0 0 24px rgba(0,245,255,0.35),0 4px 16px rgba(0,0,0,0.4);letter-spacing:0.5px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;"
        >
          Contact Me
          <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><path d="M22 2v7"/><path d="M22 2h-7"/></svg>
        </a>
        <a
          href={resume.resumeUrl}
          target="_blank"
          style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:500;padding:10px 20px;border-radius:9px;background:rgba(255,255,255,0.04);color:#445566;border:1px solid rgba(255,255,255,0.08);text-decoration:none;display:inline-flex;align-items:center;gap:8px;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download CV
        </a>
      </div>

      <!-- Social links -->
      <div class="flex items-center gap-4 mt-8 justify-center md:justify-start reveal" style="animation-delay:300ms;">
        <a href={resume.linkedin} target="_blank" rel="noopener" style="color:#252540;" aria-label="LinkedIn" class="hover:text-cyan-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" style="width:20px;height:20px;" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href={resume.github} target="_blank" rel="noopener" style="color:#252540;" aria-label="GitHub" class="hover:text-cyan-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" style="width:20px;height:20px;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
      </div>
    </div>

    <!-- Right: KPI glass pills -->
    <div class="flex flex-row md:flex-col gap-3 flex-wrap justify-center reveal" style="animation-delay:350ms;">
      {resume.stats.map((stat, i) => (
        <div
          style={`background:rgba(8,8,22,0.75);backdrop-filter:blur(16px);border-radius:12px;padding:14px 18px;border:1px solid rgba(${kpiColors[i].rgb},0.15);min-width:140px;`}
        >
          <div
            class="kpi-counter"
            data-target={stat.value}
            data-suffix={stat.suffix ?? ""}
            style={`font-family:'JetBrains Mono',monospace;font-size:22px;font-weight:700;letter-spacing:-0.5px;color:${kpiColors[i].val};text-shadow:0 0 18px rgba(${kpiColors[i].rgb},0.7);`}
          >
            0
          </div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:1.5px;text-transform:uppercase;margin-top:3px;color:#252540;">
            {stat.label}
          </div>
          <div style={`height:2px;border-radius:1px;margin-top:10px;background:linear-gradient(90deg,rgb(${kpiColors[i].rgb}),transparent);box-shadow:0 0 5px rgba(${kpiColors[i].rgb},0.4);`} />
        </div>
      ))}
    </div>

  </div>
</section>

<script>
  try {
    // Typing animation — reads from resume.typingTitles via data attr
    const typingEl = document.getElementById("typing-text");
    const titles = {JSON.stringify(resume.typingTitles)};
    let titleIndex = 0, charIndex = 0, isDeleting = false;
    function typeLoop() {
      if (!typingEl) return;
      const current = titles[titleIndex];
      if (!isDeleting) {
        typingEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) { isDeleting = true; setTimeout(typeLoop, 1800); return; }
      } else {
        typingEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) { isDeleting = false; titleIndex = (titleIndex + 1) % titles.length; }
      }
      setTimeout(typeLoop, isDeleting ? 60 : 100);
    }
    if (typingEl) typeLoop();
  } catch (e) { console.warn("Typing animation failed:", e); }

  try {
    // KPI counter animation
    const counters = document.querySelectorAll(".kpi-counter");
    function animateCounter(el) {
      const raw = el.dataset.target;
      const suffix = el.dataset.suffix ?? "";
      const numMatch = String(raw).match(/([^\d]*)(\d+)(.*)/);
      if (!numMatch) { el.textContent = raw + suffix; return; }
      const prefix = numMatch[1], target = parseInt(numMatch[2]), inlineSuffix = numMatch[3];
      if (!target) return;
      const duration = 1500, start = performance.now();
      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.round(eased * target) + inlineSuffix + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => obs.observe(el));
  } catch (e) { console.warn("KPI counter failed:", e); }
</script>
```

> **Note on `{JSON.stringify(resume.typingTitles)}`:** Astro evaluates this at build time, injecting the array literal directly into the `<script>` tag. This is intentional — do not change it to a string.

- [ ] **Step 2: Build and verify**

```bash
npm run build
```
Expected: clean build, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: rewrite Hero with nebula background, Blanka name, KPI glass pills"
```

---

## Task 3: Remove KPIBanner

**Files:**
- Modify: `src/pages/index.astro`
- Delete: `src/components/KPIBanner.astro`

- [ ] **Step 1: Remove KPIBanner from `index.astro`**

Open `src/pages/index.astro`. Remove these two lines:
```astro
import KPIBanner from "../components/KPIBanner.astro";
```
and:
```astro
    <KPIBanner />
```

The file should now import and use: Header, Hero, About, Experience, Projects, SkillsRadar, Education, Contact, Footer.

- [ ] **Step 2: Delete `KPIBanner.astro`**

```bash
rm src/components/KPIBanner.astro
```

- [ ] **Step 3: Build and run tests**

```bash
npm run build && npm test
```
Expected: build clean, **15 tests pass**.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro src/components/KPIBanner.astro
git commit -m "feat: remove KPIBanner section — KPIs now live in Hero"
```

---

## Task 4: Update Header

**Files:**
- Modify: `src/components/Header.astro`

- [ ] **Step 1: Update logo and nav colors in `Header.astro`**

Find line 8 (the `<a href="#">` logo anchor) and replace its content:
```astro
<!-- OLD -->
    <a href="#" class="font-heading text-xl font-bold text-heading">
      {resume.name.split(" ")[0]}<span class="text-primary">.</span>
    </a>

<!-- NEW -->
    <a href="#" class="font-heading text-xl font-bold" style="color:#DDEEFF;text-decoration:none;">
      Raja<span style="color:#00F5FF;text-shadow:0 0 10px rgba(0,245,255,0.7);">.</span>
    </a>
```

Find the `nav-link` class usage in the desktop nav (line 12) and update the hover color in the `<a>` elements — the `data-section` active state in the scroll observer script should already use `text-primary` which now resolves to cyan. Confirm by checking the script at the bottom of Header.astro still references `text-primary` for the active state. No change needed there.

Find the Resume button (line 34) and update its style:
```astro
<!-- OLD -->
        class="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"

<!-- NEW -->
        class="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
        style="background:rgba(0,245,255,0.1);color:#00F5FF;border:1px solid rgba(0,245,255,0.25);font-family:'JetBrains Mono',monospace;font-size:11px;"
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: update Header logo to Raja. and nav button to neon style"
```

---

## Task 5: Restyle About section

**Files:**
- Modify: `src/components/About.astro`

- [ ] **Step 1: Update section label, photo border, and domain badges**

Replace the section header block (lines 7–10):
```astro
    <div class="text-center mb-12">
      <p class="text-primary font-heading text-sm tracking-widest uppercase mb-2">About</p>
      <h2 class="font-heading text-3xl md:text-4xl font-bold text-heading">Background</h2>
    </div>
```
with:
```astro
    <div class="text-center mb-12">
      <div class="flex items-center gap-3 justify-center mb-3">
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#00F5FF,#FF0090);border-radius:1px;box-shadow:0 0 8px rgba(0,245,255,0.4);"></div>
        <p style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#00F5FF;">// About</p>
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#FF0090,#00F5FF);border-radius:1px;box-shadow:0 0 8px rgba(0,245,255,0.4);"></div>
      </div>
      <h2 class="font-heading text-3xl md:text-4xl font-bold" style="color:#DDEEFF;">Background</h2>
    </div>
```

Replace the profile photo div (line 14):
```astro
<!-- OLD -->
        <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-primary/20 glow-border">

<!-- NEW -->
        <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden" style="border:1px solid rgba(0,245,255,0.25);box-shadow:0 0 30px rgba(0,245,255,0.12),0 0 60px rgba(0,245,255,0.05);">
```

Replace the domain badges map (lines 26–34):
```astro
        <div class="flex flex-wrap gap-4 pt-4">
          {[
            { label: "Healthcare" },
            { label: "Insurance" },
            { label: "Banking" },
            { label: "HIPAA Compliant" },
          ].map((domain) => (
            <span style="font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;padding:4px 12px;border-radius:20px;background:rgba(0,245,255,0.08);color:#00F5FF;border:1px solid rgba(0,245,255,0.2);">
              {domain.label}
            </span>
          ))}
        </div>
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/About.astro
git commit -m "feat: restyle About section with cyan neon accents"
```

---

## Task 6: Restyle Experience section

**Files:**
- Modify: `src/components/Experience.astro`

- [ ] **Step 1: Update section label, timeline, and card accents to pink**

Replace the section header block (lines 6–9):
```astro
    <div class="text-center mb-12">
      <p class="text-primary font-heading text-sm tracking-widest uppercase mb-2">Career</p>
      <h2 class="font-heading text-3xl md:text-4xl font-bold text-heading">Experience</h2>
    </div>
```
with:
```astro
    <div class="text-center mb-12">
      <div class="flex items-center gap-3 justify-center mb-3">
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#FF0090,#FF4DAA);border-radius:1px;box-shadow:0 0 8px rgba(255,0,144,0.4);"></div>
        <p style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#FF4DAA;">// Experience</p>
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#FF4DAA,#FF0090);border-radius:1px;box-shadow:0 0 8px rgba(255,0,144,0.4);"></div>
      </div>
      <h2 class="font-heading text-3xl md:text-4xl font-bold" style="color:#DDEEFF;">Experience</h2>
    </div>
```

Replace the timeline vertical line (line 13):
```astro
<!-- OLD -->
      <div class="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
<!-- NEW -->
      <div class="absolute left-3 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style="background:rgba(255,0,144,0.25);" />
```

Replace the timeline dot (line 19):
```astro
<!-- OLD -->
          <div class="absolute left-[-1.35rem] md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-primary border-2 border-surface-dark z-10" />
<!-- NEW -->
          <div class="absolute left-[-1.35rem] md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full z-10" style="background:#FF4DAA;border:2px solid #03030D;box-shadow:0 0 8px rgba(255,0,144,0.7);" />
```

Replace card hover border class in the card div (line 22):
```astro
<!-- OLD -->
            <div class="bg-surface-light rounded-xl p-5 border border-border hover:border-primary/20 transition-all glow-border group">
<!-- NEW -->
            <div class="bg-surface-light rounded-xl p-5 border border-border transition-all group" style="border-color:rgba(255,255,255,0.06);" onmouseenter="this.style.borderColor='rgba(255,77,170,0.2)';this.style.boxShadow='0 0 20px rgba(255,0,144,0.05)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.06)';this.style.boxShadow='none'">
```

Replace `group-hover:text-primary` on the job title h3:
```astro
<!-- OLD -->
                  <h3 class="font-heading font-semibold text-heading group-hover:text-primary transition-colors">
<!-- NEW -->
                  <h3 class="font-heading font-semibold transition-colors" style="color:#DDEEFF;">
```

Replace `text-primary text-sm` on company name:
```astro
<!-- OLD -->
                  <p class="text-primary text-sm font-medium">{exp.company}</p>
<!-- NEW -->
                  <p class="text-sm font-medium" style="color:#FF4DAA;">{exp.company}</p>
```

Replace tag badge styles:
```astro
<!-- OLD -->
                  <span class="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
<!-- NEW -->
                  <span style="padding:2px 8px;font-size:10px;font-weight:500;border-radius:9999px;background:rgba(255,0,144,0.1);color:#FF4DAA;border:1px solid rgba(255,0,144,0.2);font-family:'JetBrains Mono',monospace;">
```

Replace bullet star icon color (`text-primary`):
```astro
<!-- OLD -->
                        <span class="text-primary mt-1 flex-shrink-0">
<!-- NEW -->
                        <span class="mt-1 flex-shrink-0" style="color:#FF4DAA;">
```
(applies to both the visible and `<details>` bullet lists — two occurrences)

Replace `text-xs text-primary` on the summary toggle:
```astro
<!-- OLD -->
                  <summary class="text-xs text-primary cursor-pointer hover:text-primary-light transition-colors list-none flex items-center gap-1">
<!-- NEW -->
                  <summary style="font-size:11px;color:#FF4DAA;cursor:pointer;list-style:none;display:flex;align-items:center;gap:4px;font-family:'JetBrains Mono',monospace;">
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Experience.astro
git commit -m "feat: restyle Experience section with pink neon accents"
```

---

## Task 7: Restyle Projects section

**Files:**
- Modify: `src/components/Projects.astro`

- [ ] **Step 1: Update section label, filter buttons, and card accents to violet**

Replace section header (lines 6–9):
```astro
    <div class="text-center mb-12">
      <div class="flex items-center gap-3 justify-center mb-3">
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#7700FF,#AA66FF);border-radius:1px;box-shadow:0 0 8px rgba(119,0,255,0.4);"></div>
        <p style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#AA66FF;">// Projects</p>
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#AA66FF,#7700FF);border-radius:1px;box-shadow:0 0 8px rgba(119,0,255,0.4);"></div>
      </div>
      <h2 class="font-heading text-3xl md:text-4xl font-bold" style="color:#DDEEFF;">Projects & Highlights</h2>
    </div>
```

Replace the filter button active/inactive classes. Find the `<button class:list>` block and replace the entire `<button>` element:
```astro
        <button
          class="filter-btn px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300"
          class:list={{
            "bg-violet-mid text-white border-violet-mid": filter === "all",
            "bg-transparent text-text-muted border-border hover:border-violet/30 hover:text-violet-mid": filter !== "all",
          }}
          style={filter === "all" ? "background:#AA66FF;color:#000;border-color:#AA66FF;font-family:'JetBrains Mono',monospace;font-size:11px;" : "font-family:'JetBrains Mono',monospace;font-size:11px;"}
          data-filter={filter}
        >
```

Replace the project card hover border:
```astro
<!-- OLD -->
          class="project-card bg-surface-light rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 glow-border flex flex-col"
<!-- NEW -->
          class="project-card bg-surface-light rounded-xl p-6 border border-border transition-all duration-300 flex flex-col"
          style="border-color:rgba(255,255,255,0.06);"
          onmouseenter="this.style.borderColor='rgba(170,102,255,0.2)';this.style.boxShadow='0 0 20px rgba(119,0,255,0.06)'"
          onmouseleave="this.style.borderColor='rgba(255,255,255,0.06)';this.style.boxShadow='none'"
```

Replace the category badge span:
```astro
<!-- OLD -->
              <span class="px-2.5 py-1 text-[10px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
<!-- NEW -->
              <span style="padding:3px 10px;font-size:9px;font-weight:600;border-radius:9999px;background:rgba(170,102,255,0.1);color:#AA66FF;border:1px solid rgba(170,102,255,0.2);text-transform:uppercase;letter-spacing:1px;font-family:'JetBrains Mono',monospace;">
```

Replace the checkmark highlight bullet:
```astro
<!-- OLD -->
                <span class="text-accent mt-0.5 flex-shrink-0">
<!-- NEW -->
                <span class="mt-0.5 flex-shrink-0" style="color:#AA66FF;">
```

Also update the JS at the bottom of the file — the filter button reset className hardcodes `text-text-muted`:
```javascript
// OLD (inside the forEach reset)
b.className = "filter-btn px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 bg-transparent text-text-muted border-border hover:border-primary/30 hover:text-primary";
// NEW
b.className = "filter-btn px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 bg-transparent border-border";
b.style.cssText = "font-family:'JetBrains Mono',monospace;font-size:11px;color:#445566;";
// and active button:
btn.className = "filter-btn px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300";
btn.style.cssText = "font-family:'JetBrains Mono',monospace;font-size:11px;background:#AA66FF;color:#000;border-color:#AA66FF;";
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects.astro
git commit -m "feat: restyle Projects section with violet neon accents"
```

---

## Task 8: Restyle Skills section

**Files:**
- Modify: `src/components/SkillsRadar.astro`

- [ ] **Step 1: Update section label, skill bars, and radar chart to green**

Replace section header:
```astro
    <div class="text-center mb-12">
      <div class="flex items-center gap-3 justify-center mb-3">
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#AAFF00,#88CC00);border-radius:1px;box-shadow:0 0 8px rgba(170,255,0,0.4);"></div>
        <p style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#AAFF00;">// Skills</p>
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#88CC00,#AAFF00);border-radius:1px;box-shadow:0 0 8px rgba(170,255,0,0.4);"></div>
      </div>
      <h2 class="font-heading text-3xl md:text-4xl font-bold" style="color:#DDEEFF;">Technical Skills</h2>
    </div>
```

Replace skill group title color:
```astro
<!-- OLD -->
          <h3 class="font-heading font-semibold text-primary mb-5 text-center">{groupName}</h3>
<!-- NEW -->
          <h3 class="font-heading font-semibold mb-5 text-center" style="color:#AAFF00;">{groupName}</h3>
```

Replace skill bar gradient:
```astro
<!-- OLD -->
                  class="h-full rounded-full bg-gradient-to-r from-primary to-violet skill-bar"
<!-- NEW -->
                  class="h-full rounded-full skill-bar"
                  style="background:linear-gradient(90deg,#AAFF00,#00F5FF);width:0%;"
```

In the `<script>` block, update Chart.js colors:
```javascript
// OLD
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        borderColor: "#06b6d4",
        borderWidth: 2,
        pointBackgroundColor: "#06b6d4",
        pointBorderColor: "#12122a",
// NEW
        backgroundColor: "rgba(170, 255, 0, 0.08)",
        borderColor: "#AAFF00",
        borderWidth: 2,
        pointBackgroundColor: "#AAFF00",
        pointBorderColor: "#03030D",
```

Also update radar scale colors in the same script:
```javascript
// OLD
            ticks: { stepSize: 1, color: "#64748b", backdropColor: "transparent" },
            grid: { color: "rgba(148, 163, 184, 0.1)" },
            angleLines: { color: "rgba(148, 163, 184, 0.1)" },
            pointLabels: { color: "#94a3b8", font: { family: "'JetBrains Mono', monospace", size: 11 } },
// NEW
            ticks: { stepSize: 1, color: "#252540", backdropColor: "transparent" },
            grid: { color: "rgba(170,255,0,0.07)" },
            angleLines: { color: "rgba(170,255,0,0.07)" },
            pointLabels: { color: "#445566", font: { family: "'JetBrains Mono', monospace", size: 11 } },
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/SkillsRadar.astro
git commit -m "feat: restyle Skills section with acid-green neon accents"
```

---

## Task 9: Restyle Education and Contact sections

**Files:**
- Modify: `src/components/Education.astro`
- Modify: `src/components/Contact.astro`

- [ ] **Step 1: Update Education section label and card accent to cyan**

In `Education.astro`, replace the section header:
```astro
    <div class="text-center mb-12">
      <div class="flex items-center gap-3 justify-center mb-3">
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#00F5FF,#FF0090);border-radius:1px;box-shadow:0 0 8px rgba(0,245,255,0.4);"></div>
        <p style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#00F5FF;">// Education</p>
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#FF0090,#00F5FF);border-radius:1px;box-shadow:0 0 8px rgba(0,245,255,0.4);"></div>
      </div>
      <h2 class="font-heading text-3xl md:text-4xl font-bold" style="color:#DDEEFF;">Education</h2>
    </div>
```

Replace the card hover border class:
```astro
<!-- OLD -->
          <div class="bg-surface-light rounded-xl p-6 border border-border hover:border-primary/20 transition-all glow-border">
<!-- NEW -->
          <div class="bg-surface-light rounded-xl p-6 border transition-all" style="border-color:rgba(255,255,255,0.06);" onmouseenter="this.style.borderColor='rgba(0,245,255,0.2)';this.style.boxShadow='0 0 20px rgba(0,245,255,0.05)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.06)';this.style.boxShadow='none'">
```

Replace the icon container:
```astro
<!-- OLD -->
              <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <svg ... class="h-5 w-5 text-primary" ...>
<!-- NEW -->
              <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style="background:rgba(0,245,255,0.08);border:1px solid rgba(0,245,255,0.2);">
                <svg ... style="width:20px;height:20px;color:#00F5FF;" ...>
```

Replace degree title color:
```astro
<!-- OLD -->
                <h3 class="font-heading font-semibold text-heading">{edu.degree}</h3>
                <p class="text-primary text-sm font-medium">{edu.field}</p>
<!-- NEW -->
                <h3 class="font-heading font-semibold" style="color:#DDEEFF;">{edu.degree}</h3>
                <p class="text-sm font-medium" style="color:#00F5FF;">{edu.field}</p>
```

- [ ] **Step 2: Update Contact section label and card accents to cyan**

In `Contact.astro`, replace the section header:
```astro
    <div class="text-center mb-12">
      <div class="flex items-center gap-3 justify-center mb-3">
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#00F5FF,#FF0090);border-radius:1px;box-shadow:0 0 8px rgba(0,245,255,0.4);"></div>
        <p style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#00F5FF;">// Contact</p>
        <div style="width:28px;height:2px;background:linear-gradient(90deg,#FF0090,#00F5FF);border-radius:1px;box-shadow:0 0 8px rgba(0,245,255,0.4);"></div>
      </div>
      <h2 class="font-heading text-3xl md:text-4xl font-bold" style="color:#DDEEFF;">Get in Touch</h2>
    </div>
```

Replace each contact card `<a>` class for hover border and icon bg:
```astro
<!-- OLD (three cards, same pattern) -->
      <a href=... class="group bg-surface-light rounded-xl p-6 border border-border hover:border-primary/20 transition-all glow-border text-center">
        <div class="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <svg ... class="h-5 w-5 text-primary" ...>
        </div>
        <h3 class="font-heading font-semibold text-heading mb-1">...</h3>
        <p class="text-text-dim text-sm">...</p>
      </a>

<!-- NEW (apply to all three) -->
      <a href=... class="group bg-surface-light rounded-xl p-6 border transition-all text-center" style="border-color:rgba(255,255,255,0.06);text-decoration:none;" onmouseenter="this.style.borderColor='rgba(0,245,255,0.2)';this.style.boxShadow='0 0 20px rgba(0,245,255,0.06)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.06)';this.style.boxShadow='none'">
        <div class="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center transition-colors" style="background:rgba(0,245,255,0.08);border:1px solid rgba(0,245,255,0.2);">
          <svg ... style="width:20px;height:20px;color:#00F5FF;" ...>
        </div>
        <h3 class="font-heading font-semibold mb-1" style="color:#DDEEFF;">...</h3>
        <p class="text-sm" style="color:#252540;">...</p>
      </a>
```

- [ ] **Step 3: Build and verify**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Education.astro src/components/Contact.astro
git commit -m "feat: restyle Education and Contact sections with cyan neon accents"
```

---

## Task 10: Update Footer

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Update footer background, border, and link hover color**

Replace the `<footer>` opening tag:
```astro
<!-- OLD -->
<footer class="border-t border-border py-8 mt-12">
<!-- NEW -->
<footer class="py-8 mt-12" style="background:#02020A;border-top:1px solid rgba(0,245,255,0.06);">
```

Replace footer link hover classes — find all `hover:text-primary` on footer `<a>` tags and ensure they still work. Since `--color-primary` now maps to `#00F5FF`, the existing `hover:text-primary` Tailwind class will correctly resolve to cyan. No changes needed to individual link classes.

- [ ] **Step 2: Build and run full test suite**

```bash
npm run build && npm test
```
Expected: **15 tests pass**.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: update Footer background and border for neon theme"
```

---

## Task 11: Final verification and push

- [ ] **Step 1: Run full build + tests one final time**

```bash
npm run build && npm test
```
Expected: clean build, **15 tests pass**, zero failures.

- [ ] **Step 2: Push to claudedev branch**

```bash
git push origin claudedev
```

Wait for GitHub Actions `pr-checks.yml` to go green before merging to `main`.

- [ ] **Step 3: Once CI is green, push to main**

```bash
git checkout main && git merge claudedev && git push origin main
```

GitHub Pages will deploy automatically via `deploy.yml`.

---

## Self-Review Notes

**Spec coverage check:**
- ✅ Color palette: Task 1 (`global.css`)
- ✅ Blanka font: Task 1 (import) + Task 2 (usage)
- ✅ JetBrains Mono weights 100–800: Task 1
- ✅ Glow CSS vars: Task 1
- ✅ Nebula orb drift animation: Task 1 (keyframes) + Task 2 (applied)
- ✅ Hero full rewrite: Task 2
- ✅ KPI pills in hero, `.kpi-counter` selector preserved: Task 2
- ✅ KPIBanner removed: Task 3
- ✅ Header logo `Raja.`: Task 4
- ✅ About cyan: Task 5
- ✅ Experience pink: Task 6
- ✅ Projects violet: Task 7
- ✅ Skills green + radar colors: Task 8
- ✅ Education cyan: Task 9
- ✅ Contact cyan: Task 9
- ✅ Footer update: Task 10
- ✅ 15 tests verified at Tasks 3, 10, 11

**Playwright test risk:** Tests assert on `#typing-text` visibility, `.nav-link` labels, `#skillsRadar` canvas, `a[href^="mailto:"]`, `a[href^="tel:"]`, `#contact a[href*='linkedin.com']`, and footer year. None of these selectors or behaviors change — all 15 should stay green throughout.
