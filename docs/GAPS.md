# Assumptions, unavailable information and content decisions

Nothing below was invented. Where the legacy site was silent, the new site is silent too, and the gap is listed here for the owner to fill.

## Company facts to confirm before launch

| Item | Status | Where to set it |
|---|---|---|
| Registered legal name / RC number | Not published on the legacy site | `src/config/site.ts` → `company.legalName`, `registrationNumber` |
| Correct enquiry email | Legacy displays `info@milemasterintegrated.com` but links to `info@xtendadditives.com`. The displayed one is used. | `company.email` |
| Social media profiles | Icons exist on the legacy site with no URLs. None are published. | `company.social` |
| WhatsApp Business number | Not found. Feature is wired but hidden while `null`. | `company.whatsapp` |
| Logo artwork | The original `XLogo.jpg` couldn't be retrieved during the build. A typographic wordmark in the brand red/black is used instead. | `brand.logoSrc` (drop an SVG into `/public`) |
| Office hours | Not published | Contact page says only "as soon as possible", as the legacy site did |
| Relationship between X-Tend brand owner and Milemaster | The site implies Milemaster is the Nigerian supplier. Exact role (distributor, licensee, brand owner) is not stated. | Copy on `/about` |

## Claims carried over that should be substantiated

These figures come from the legacy site and are shown with attribution ("manufacturer data sheet", "customer review", "hypothetical scenario"). Under Nigerian consumer-protection and advertising rules (FCCPC, ARCON), keep evidence on file:

- "Recovering 15–18% of operational margin" (homepage hero, phrased as an aim).
- Petrol Booster "up to 7.9%" fuel economy; Oil Conditioner "up to 5%" economy and "up to 43%" wear reduction; Diesel Conditioner "4–7 point cetane increase".
- Fleet "5–12%" and heavy-duty "5–10%" fuel reductions.
- "30+ years of research and field-testing".
- Customer review figures (e.g. 30%, 60% savings) are individual reports and are presented as quotes, not as product claims.

## Content deliberately not migrated

- **Named third-party additive manufacturers.** The legacy FAQ says X-Tend "utilizes technology from" BASF, Chevron Oronite and Infineum, and that German and South Korean OEMs co-brand additives. These imply relationships that aren't documented, so the names are withheld. Restore them in `src/content/faq.ts` only with written confirmation.
- **Hospitality failure statistic** ("nearly 3 in 5 new entities fail") — no source given.
- **`/resources/` body text** — generic third-party article linking to another brand's shop.
- **Client logo grid (~40 images)** — filenames give no company names and there's no record of permission to display them. Can be added back as a `clients` list with approved logos.
- **Testimonial letter images** — the organisation names (from filenames) are listed on `/tests-and-testimonials`. The letter scans themselves weren't retrieved. Consider re-confirming consent with each organisation before publishing their logos or letters.
- **Stock images that appear to be iStock/Getty comps** (`istockphoto-*`, `gettyimages-*`, unattributed `.webp` files) — excluded from the asset manifest.

## Photography

The cloud build environment couldn't download from the legacy domain. All imagery is therefore defined in `src/content/media.ts` and fetched with `npm run assets:fetch` on a machine with internet access. Until then, each image slot renders a designed technical illustration (no broken images). Images that are representative rather than the company's own (Unsplash photos, generic vehicles/buildings) are flagged `illustrative: true` and labelled "Illustrative image" on screen.

Recommended next step: commission a half-day shoot of the actual products, a dosing demonstration, a generator/tank service visit and the Lekki office. Drop the files into `/public/media` with the same names to replace the current set.

## Testimonials and videos

- Reviewer names and quotes are reproduced from the legacy review widget with only spelling corrected.
- YouTube video IDs were harvested from the legacy Tests page. The legacy page lists "39 videos". There are 36 unique IDs; 3 entries were duplicates.
- The order/labels of the legacy "Test 1…39" items couldn't be reliably paired with IDs, so videos are labelled "Field test 01…36".

## Legal pages

`/privacy` and `/terms` are reasonable drafts referencing the Nigeria Data Protection Act 2023. They are marked "Draft for legal review before launch".

## Stockist email addresses

The stockist emails on `/where-to-buy` (e.g. `milemaster@x-tendadditives.com`) are on the legacy domain, exactly as published. If that domain is retired, its mailboxes must keep working, or the addresses in `src/content/evidence.ts` must be updated.
