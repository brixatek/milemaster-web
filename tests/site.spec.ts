import { expect, test } from "@playwright/test";
import { legacyRedirects } from "../src/config/redirects";

const routes = [
  "/", "/products", "/products/x-tend-diesel-conditioner", "/products/x-tend-petrol-booster", "/products/x-tend-oil-conditioner",
  "/applications", "/applications/cars-buses-and-suvs", "/applications/boats-and-marine-vessels", "/applications/fleet-logistics",
  "/applications/haulage-and-heavy-duty-equipment", "/applications/agriculture-and-farming", "/applications/generators",
  "/industries", "/industries/fleets", "/industries/hospitals-health-care-facilities", "/industries/government-fleets-facilities",
  "/industries/telecommunications-and-manufacturing", "/industries/hospitality",
  "/services", "/services/fuel-storage-solutions", "/services/remote-fuel-monitoring",
  "/resources", "/resources/fuel-storage", "/resources/carbon-emission-reduction", "/resources/lower-energy-tariffs",
  "/resources/carbon-dioxide-produced-per-kilowatt-hour", "/resources/expectations-from-using-x-tend",
  "/tests-and-testimonials", "/faq", "/where-to-buy", "/about", "/contact", "/request-a-quote", "/search?q=diesel", "/privacy", "/terms",
];

test.describe("routes", () => {
  for (const path of routes) {
    test(`${path} renders with one h1, a title and no horizontal overflow`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      expect((await page.title()).length).toBeGreaterThan(10);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });
  }

  test("unknown route returns the custom 404", async ({ page }) => {
    const res = await page.goto("/this-does-not-exist");
    expect(res?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: /ran dry/i })).toBeVisible();
  });
});

test("every internal link on key pages resolves", async ({ page, request }) => {
  const seen = new Set<string>();
  for (const path of ["/", "/products", "/applications", "/tests-and-testimonials"]) {
    await page.goto(path);
    const hrefs = await page.$$eval("a[href^='/']", (as) => as.map((a) => a.getAttribute("href")!.split("#")[0]!));
    hrefs.forEach((h) => h && seen.add(h));
  }
  for (const href of seen) {
    const res = await request.get(href);
    expect(res.status(), href).toBeLessThan(400);
  }
});

test("legacy URLs redirect permanently", async ({ request }) => {
  for (const r of legacyRedirects.filter((x) => !x.source.includes(":"))) {
    const res = await request.get(r.source, { maxRedirects: 0 });
    expect(res.status(), r.source).toBe(308);
    expect(res.headers()["location"], r.source).toBe(r.destination);
  }
});

test("product filters narrow results and show an empty state", async ({ page }) => {
  await page.goto("/products");
  await expect(page.getByText("3 products")).toBeVisible();
  await page.getByRole("button", { name: "Petrol", exact: true }).click();
  await expect(page.getByText("1 product", { exact: true })).toBeVisible();
  await page.getByLabel("Search products", { exact: true }).fill("zzzz");
  await expect(page.getByText("No products match")).toBeVisible();
  await page.getByRole("button", { name: "Clear all filters" }).click();
  await expect(page.getByText("3 products")).toBeVisible();
});

test("site search returns contextual results", async ({ page }) => {
  await page.goto("/search?q=injector");
  await expect(page.getByRole("status")).toContainText("result");
  await expect(page.getByRole("link", { name: /Diesel Conditioner/ }).first()).toBeVisible();
  await page.goto("/search?q=qwertyuiop");
  await expect(page.getByText(/Nothing matched/)).toBeVisible();
});

test("enquiry form validates on the client", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("Please enter your full name")).toBeVisible();
  await expect(page.getByText("Enter a valid email address")).toBeVisible();
  await expect(page.getByText("Please agree so we can respond to you")).toBeVisible();
});

test("enquiry API rejects invalid payloads and never fakes success", async ({ request }) => {
  const bad = await request.post("/api/enquiry", { data: { name: "x" } });
  expect(bad.status()).toBe(422);
  const valid = {
    type: "general", name: "Test Person", email: "test@example.com", message: "Testing the enquiry endpoint.",
    consent: true, startedAt: Date.now() - 10_000,
  };
  const res = await request.post("/api/enquiry", { data: valid });
  // 200 when mail is configured; 503 with an honest error when it is not.
  expect([200, 503]).toContain(res.status());
  if (res.status() === 503) expect((await res.json()).error).toBe("not_configured");
});

test.describe("navigation", () => {
  test("desktop mega menu opens, links work and Escape closes it", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop only");
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Products" });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.click();
    await page.getByRole("region", { name: "Products" }).getByRole("link", { name: /Petrol Booster/ }).click();
    await expect(page).toHaveURL(/\/products\/x-tend-petrol-booster/);
  });

  test("mobile menu opens and navigates", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile only");
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const nav = page.getByRole("navigation", { name: "Mobile" });
    await nav.getByText("Solutions", { exact: true }).click();
    await nav.getByRole("link", { name: "Power Generation" }).click();
    await expect(page).toHaveURL(/\/applications\/generators/);
  });

  test("search dialog submits to the results page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Search the site" }).click();
    await page.getByLabel("Search products, applications and resources").fill("generator");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/search\?q=generator/);
  });
});

test("SEO essentials are present", async ({ page, request }) => {
  await page.goto("/products/x-tend-diesel-conditioner");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/products\/x-tend-diesel-conditioner$/);
  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
  const ld = await page.$$eval('script[type="application/ld+json"]', (s) => s.map((x) => JSON.parse(x.textContent!)["@type"]));
  expect(ld).toEqual(expect.arrayContaining(["Product", "BreadcrumbList", "Organization"]));
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  expect(await (await request.get("/robots.txt")).text()).toContain("Sitemap:");
});
