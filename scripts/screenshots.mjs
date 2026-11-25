// Visual QA: node scripts/screenshots.mjs <baseUrl> <outDir> <widths,csv> <paths...>
// Set CHROME_PATH to use an installed Chrome.
import { chromium } from "@playwright/test";
const [,, base, out, widthsArg, ...paths] = process.argv;
const widths = widthsArg.split(",").map(Number);
const browser = await chromium.launch({ ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}), args: ["--no-sandbox"] });
const errors = [];
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 800 ? 812 : 900 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  page.on("console", (m) => m.type() === "error" && errors.push(`${w} ${page.url()}: ${m.text()}`));
  page.on("pageerror", (e) => errors.push(`${w} ${page.url()}: ${e.message}`));
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: "networkidle" });
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 30)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(300);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 0) errors.push(`${w} ${p}: horizontal overflow ${overflow}px`);
    const name = (p === "/" ? "home" : p.replace(/\//g, "_").replace(/^_/, "")) + `-${w}.png`;
    await page.screenshot({ path: `${out}/${name}`, fullPage: true });
  }
  await ctx.close();
}
await browser.close();
console.log(errors.join("\n") || "no console errors / overflow");
