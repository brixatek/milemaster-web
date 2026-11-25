# Milemaster Integrated Services — X-Tend corporate website

A complete rebuild of [x-tendadditives.com](http://www.x-tendadditives.com/) for deployment at **milemasterintegrated.com**.

- **Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict) · Tailwind CSS 4 · React Hook Form + Zod · Lucide icons · Playwright
- **Pages:** 36 content routes (34 prerendered, plus dynamic search and quote), an enquiry API, sitemap, robots and OG image
- **Docs:** [Audit & route inventory](docs/AUDIT.md) · [Design system](docs/DESIGN-SYSTEM.md) · [Assumptions & gaps](docs/GAPS.md)

## Quick start

```bash
npm install
cp .env.example .env.local     # set the values you have
npm run assets:fetch           # download approved images + brochure from the legacy site (needs internet)
npm run dev                    # http://localhost:3000
```

Production:

```bash
npm run build
npm run start                  # serves on port 3000 (PORT=xxxx to change)
```

Runtime requirement: Node.js 20.9 or newer. Any Node host works (VPS, Docker, Vercel, Netlify, Render…). There's no database.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `npm run start` | Production build / server |
| `npm run typecheck` | `tsc --noEmit` (strict) |
| `npm run lint` | ESLint (Next core-web-vitals + TypeScript rules) |
| `npm run test:e2e` | Playwright suite, desktop 1440 and mobile 390. Starts the server automatically. Run `npx playwright install chromium` once, or set `PLAYWRIGHT_CHROME_PATH` to an installed Chrome. |
| `npm run check` | typecheck + lint + build |
| `npm run assets:fetch` | Pull images listed in `src/content/media.ts` into `/public/media` |
| `node scripts/screenshots.mjs <base> <out> 375,768,1440 / /products …` | Full-page screenshots for visual QA (`CHROME_PATH` optional) |

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin for metadata, sitemap and OG. Default `https://milemasterintegrated.com`. |
| `RESEND_API_KEY` | For enquiries | API key from [Resend](https://resend.com). Without it, forms show an honest "unavailable — contact us directly" message. They never fake a success. |
| `ENQUIRY_TO_EMAIL` | For enquiries | Comma-separated recipients. |
| `ENQUIRY_FROM_EMAIL` | For enquiries | A sender on a domain verified in Resend, e.g. `Website <no-reply@milemasterintegrated.com>`. |

Secrets are only read on the server (`src/services/mailer.ts`). Nothing secret is exposed to the client.

## Project structure

```
src/
  app/                 routes (App Router), sitemap, robots, OG image, API route
  components/
    layout/            Header (mega menu, mobile sheet), Footer, SearchDialog, BackToTop, WhatsAppLink
    sections/          PageHero, HomeHero, LongForm, CtaBand, ProofBand, showcases, calculator, video facade
    products/          ProductCatalog (filters), SpecTable
    forms/             EnquiryForm
    ui/                Button, SectionHeading, Breadcrumbs, MediaFrame, ArtPanel, Blocks, Accordion, Counter, Logo, JsonLd
  config/              site.ts (brand + company + nav), redirects.ts, fonts.ts
  content/             products, applications, industries, services, resources, faq, evidence, media
  lib/                 seo (metadata + JSON-LD), search, media, rate-limit, cn
  schemas/             enquiry (Zod, shared client/server)
  services/            mailer (Resend over HTTP)
  styles/              globals.css (design tokens)
  types/               content model
tests/                 Playwright specs
scripts/               asset fetcher, screenshot tool
docs/                  audit, design system, gaps
```

### Rebranding and editing content

- **Brand and company facts** live in `src/config/site.ts`, in separate `brand` and `company` objects. The old domain isn't referenced anywhere in components. It appears only in the media manifest, as the download source for `assets:fetch`.
- **Content** is typed data in `src/content/*`. Pages are generated from it, so adding a product, application or article needs no new component. The `Block`/`Section` model (`src/types/content.ts`) maps directly onto a headless CMS (Sanity, Contentful, Payload) when you're ready. Swap the import for a fetch.
- **Images:** set the file in `/public/media` with the name in `src/content/media.ts`. Missing files fall back to designed illustrations automatically.

## Routing and redirects

All legacy WordPress URLs 308-redirect to their new homes (`src/config/redirects.ts`). The full mapping is in [docs/AUDIT.md](docs/AUDIT.md#2-route-inventory). Two legacy URLs are preserved as-is: `/tests-and-testimonials` and `/where-to-buy`.

## Integrations

| Integration | Status | Action needed |
|---|---|---|
| Enquiry and quote email | Implemented (Resend HTTP API) | Create a Resend account, verify the domain, set the three env vars |
| Rate limiting | In-memory, 5 submissions / 10 min / IP | Fine for one instance. For multiple instances, back `src/lib/rate-limit.ts` with Redis/Upstash. |
| Spam protection | Honeypot + minimum fill time + origin check + rate limit | Optional: add Cloudflare Turnstile if spam appears (CSP would need `challenges.cloudflare.com`) |
| YouTube videos | Click-to-load, `youtube-nocookie.com` | None |
| WhatsApp Business | Component ready, hidden | Set `company.whatsapp` (e.g. `2348095559999`) once verified |
| Social profiles | Hidden (none verified) | Fill `company.social` |
| Maps | "Open in Google Maps" link (no API key, no tracking) | Optional embedded map: add `https://www.google.com/maps/embed` to CSP `frame-src` |
| Analytics | None | Add your provider and update the CSP and privacy policy |

## Security

- Strict security headers on every route: CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy (`next.config.ts`). The CSP allows `'unsafe-inline'` scripts for Next.js's inline bootstrap. Move to nonces via `proxy.ts` if you need a stricter policy.
- Validation is shared between client and server through Zod. Email HTML is escaped, JSON-LD is `<`-escaped, and there's no `dangerouslySetInnerHTML` with user input.
- The enquiry API checks Origin, rate-limits, validates input and returns generic errors.

## Quality results (this build, 24 Nov 2026)

| Check | Result |
|---|---|
| `tsc --noEmit` (strict, `noUncheckedIndexedAccess`) | Pass |
| ESLint | Pass, 0 warnings |
| `next build` | Pass. 43 prerendered entries; search, quote and enquiry API are dynamic. |
| Playwright (desktop 1440 + mobile 390) | **92 passed**, 2 skipped (device-specific). Covers every route, one `h1` per page, no horizontal overflow or JS errors, internal links, legacy redirects, product filters, search, form validation, enquiry API, mega menu, mobile menu, search dialog, SEO tags and JSON-LD. |
| Lighthouse desktop (/, product, tests) | Performance 100 · Accessibility 100 · Best Practices 100/96* · SEO 100 |
| Lighthouse mobile (simulated slow 4G) | Accessibility 100 · Best Practices 100 · SEO 100 · Performance 88–93, LCP 2.5–3.4 s, CLS 0–0.02 |
| Manual visual review | 375/390, 768, 1440 screenshots of every template |

\* The Tests page loses 4 Best-Practices points in the sandbox only because YouTube thumbnails couldn't load from the build environment.

Mobile performance was measured with `next start` on a shared sandbox, not a production CDN. Expect better field numbers behind a CDN with Brotli and HTTP/2. The remaining LCP cost is the web-font swap on a throttled connection. If mobile 95+ in the lab is required, switch the fonts to `display: "optional"` in `src/config/fonts.ts`. The trade-off is that a first visitor on a slow network may see the fallback face.

## Before launch

See [docs/GAPS.md](docs/GAPS.md). In short:

1. Confirm the legal entity name, the enquiry email and the WhatsApp/social links.
2. Run `npm run assets:fetch`, then review every image's rights. Replace illustrative images with real photography where possible.
3. Keep substantiation on file for the performance claims carried over from the legacy site.
4. Have the privacy policy and terms reviewed by counsel.
5. Configure Resend and send a test enquiry from production.
