import { test, expect } from "@playwright/test";

test.describe("SEO & Metadata", () => {
  test("has correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Raja Sekhar.*Lead Data Engineer/);
  });

  test("has meta description", async ({ page }) => {
    await page.goto("/");
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute("content", /Lead Data Engineer/);
  });

  test("has Open Graph tags", async ({ page }) => {
    await page.goto("/");
    const og = page.locator('meta[property="og:title"]');
    await expect(og).toHaveAttribute("content", /Lead Data Engineer/);
  });

  test("has canonical URL", async ({ page }) => {
    await page.goto("/");
    const link = page.locator('link[rel="canonical"]');
    await expect(link).toHaveAttribute("href", /sekhar546\.github\.io/);
  });

  test("has schema.org Person JSON-LD", async ({ page }) => {
    await page.goto("/");
    const jsonld = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonld).toContain("Person");
    expect(jsonld).toContain("Lead Data Engineer");
    expect(jsonld).toContain("shekhar.rj@gmail.com");
  });
});

test.describe("Navigation", () => {
  test("header nav links are visible on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    const links = page.locator(".nav-link");
    const labels = await links.evaluateAll((els) => els.map((el) => el.textContent?.trim()));
    expect(labels).toEqual(["About", "Experience", "Projects", "Skills", "Contact"]);
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    const menuBtn = page.locator("#mobile-menu-btn");
    const menu = page.locator("#mobile-menu");

    await expect(menu).toBeHidden();
    await menuBtn.click();
    await expect(menu).toBeVisible();

    const closeBtn = page.locator("#mobile-menu-close");
    await closeBtn.click();
    await expect(menu).toBeHidden();
  });

  test("nav link scrolls to correct section", async ({ page }) => {
    await page.goto("/");
    await page.locator('.nav-link[data-section="experience"]').click();
    await expect(page.locator("#experience")).toBeInViewport();
  });
});

test.describe("Theme", () => {
  test("page renders in dark mode by default", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/dark/);
    await expect(page.locator("#theme-toggle")).toHaveCount(0);
  });
});

test.describe("Typing Animation", () => {
  test("typing text cycles through titles", async ({ page }) => {
    await page.goto("/");
    const typingEl = page.locator("#typing-text");
    await expect(typingEl).toBeVisible();

    const initial = await typingEl.textContent();
    expect(initial?.length).toBeGreaterThan(0);
  });
});

test.describe("Project Filters", () => {
  test("filters project cards by category", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".project-card");
    const allCards = page.locator(".project-card");
    const initialCount = await allCards.count();
    expect(initialCount).toBe(4);

    await page.locator('.filter-btn[data-filter="ai"]').click();
    await page.waitForTimeout(300);
    const visibleCards = page.locator(".project-card:visible");
    const aiCount = await visibleCards.count();
    expect(aiCount).toBe(1);
  });
});

test.describe("Skills", () => {
  test("radar chart canvas is present", async ({ page }) => {
    await page.goto("/");
    const canvas = page.locator("#skillsRadar");
    await expect(canvas).toBeVisible();
  });
});

test.describe("Contact", () => {
  test("contact section has email, phone, and linkedin", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(`a[href^="mailto:"]`)).toBeVisible();
    await expect(page.locator(`a[href^="tel:"]`)).toBeVisible();
    await expect(page.locator("#contact a[href*='linkedin.com']").first()).toBeVisible();
  });
});

test.describe("Footer", () => {
  test("footer shows current year", async ({ page }) => {
    await page.goto("/");
    const year = new Date().getFullYear().toString();
    await expect(page.locator("footer")).toContainText(year);
  });
});