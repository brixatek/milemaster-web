# Legacy website audit — x-tendadditives.com

Audit date: 24 November 2026. Method: rendered the live site in a browser, read `robots.txt` and the WordPress sitemap index (`/wp-sitemap.xml` → posts, pages, categories), fetched every listed URL and extracted main content, images, links, embedded videos, downloads and forms, and read all navigation menus (desktop, mobile, footer).

## 1. Business summary

| Item | Finding |
|---|---|
| Brand | **X-Tend** — fuel and lubricant conditioners, described as US-formulated, "30+ years of research and field-testing". |
| Operator | **Milemaster Integrated Services** (named on *Where to buy*, in page copy, and in the contact email domain). Lekki Phase 1, Lagos. |
| Products | X-Tend Diesel Conditioner, X-Tend Petrol Booster, X-Tend Oil Conditioner (each with a data sheet page). |
| Services | X-Tend Fuel Storage Solutions (XFSS — chemical + mechanical tank care) and remote fuel monitoring (diesel under-delivery / theft detection, with PDF brochure). |
| Audiences | Private motorists; fleet operators (buses, delivery motorcycles/tricycles/vans); haulage, construction and FMCG logistics; farms; marine operators; facilities running generators — hospitals, government, telecoms/data centres, manufacturing, hospitality. |
| Market | Nigeria (Lagos, Abuja, Port Harcourt, Kano stockists; post-subsidy fuel pricing; NERC tariffs). |
| Positioning | "Industrial-grade" vs diluted retail additives; closes the gap between local fuel/oil quality and OEM requirements; ROI/TCO framing. |

## 2. Route inventory

Status legend: **Rebuilt** (new page), **Merged** (content moved into another page), **Retired** (no business content; redirected).

| # | Existing URL | Title | Purpose / content | Proposed URL | Improvements | Status |
|---|---|---|---|---|---|---|
| 1 | `/` | X-Tend Additives – Improving engine efficiency… | Hero claim (15–18% margin), about, 6 application cards, testimonials, 6 benefits, review widget (4.8/5, 16 reviews), ~40 client logos, CTA | `/` | New narrative, verified stats band, interactive applications index, emissions calculator, services split, product range | Rebuilt |
| 2 | `/cars-buses-and-suvs/` | Cars, Buses and SUVs | Petrol ethanol/methanol blends, carbon deposits, pre-2003 seal risk | `/applications/cars-buses-and-suvs` | Edited copy, numbered sections, recommended products | Rebuilt |
| 3 | `/boats-and-marine-vessels/` | Boats and Marine Vessels | Moisture, phase separation, diesel bug, idling deposits | `/applications/boats-and-marine-vessels` | As above | Rebuilt |
| 4 | `/motorcycles-and-tricycles/` | Motorcycles and Tricycles (H1: Motorcycles & Delivery Vans) | Fleet protocol, 5–12% mileage gain | `/applications/fleet-logistics` | Slug matches homepage label "Fleet Logistics" | Rebuilt |
| 5 | `/small-engine-fuel-problems/` | Small Engine Fuel Problems (H1: Trucks and Heavy Duty Equipment) | Tier 3/4 diesel, HPCR, TBN, 5–10% fuel reduction | `/applications/haulage-and-heavy-duty-equipment` | Slug no longer contradicts the content | Rebuilt |
| 6 | `/generators/` | Generators | Lubricant fortification + fuel stability for gensets | `/applications/generators` | As above | Rebuilt |
| 7 | `/agriculture-and-farming/` | Agriculture and Farming | Fuel degradation in storage, microbes, biocide | `/applications/agriculture-and-farming` | As above | Rebuilt |
| 8 | `/fleets/` | Fleets | XFSS for bus companies / private fleets | `/industries/fleets` | Grouped under Industries | Rebuilt |
| 9 | `/hospitals-health-care-facilities/` | Hospitals & Health Care Facilities | Backup fuel reliability | `/industries/hospitals-health-care-facilities` | | Rebuilt |
| 10 | `/government-fleets-facilities/` | Government Fleets & Facilities | Public services' stored fuel | `/industries/government-fleets-facilities` | | Rebuilt |
| 11 | `/telecommunications-and-manufacturing/` | Telecommunications and Manufacturing | Generator fuel for data centres/factories | `/industries/telecommunications-and-manufacturing` | | Rebuilt |
| 12 | `/hospitality/` | Hospitality | Energy costs in hotels/restaurants | `/industries/hospitality` | Unsourced failure-rate statistic removed (see GAPS) | Rebuilt |
| 13 | `/fuel-storage/` | Fuel Storage | Long technical guide: water, stability, ethanol, best practice | `/resources/fuel-storage` (+ summary in `/services/fuel-storage-solutions`) | Split into guide + service page | Rebuilt |
| 14 | `/diesel-under-delivery-and-diesel-theft/` | Diesel Under Delivery and Diesel Theft | Remote monitoring service, outcomes, PDF brochure | `/services/remote-fuel-monitoring` | Presented as a service | Rebuilt |
| 15 | `/carbon-dioxide-produced-per-kilowatt-hour/` | Carbon dioxide produced per Kilowatt Hour | US EIA 2022 emission factors table | `/resources/carbon-dioxide-produced-per-kilowatt-hour` | Accessible data table, source linked | Rebuilt |
| 16 | `/carbon-emission-reduction/` | Carbon Emission Reduction | 2.6 kg CO₂/L worked example | `/resources/carbon-emission-reduction` | Table + interactive calculator on home | Rebuilt |
| 17 | `/lower-energy-tariffs/` | Lower Energy Tariffs | Blended cost of energy, 500→380 L scenario | `/resources/lower-energy-tariffs` | Scenario labelled hypothetical | Rebuilt |
| 18 | `/expectations-from-using-x-tend/` | Expectations from using X-Tend | Fuel/lubricant quality gap; 3 chart images | `/resources/expectations-from-using-x-tend` (charts on Tests page) | | Rebuilt |
| 19 | `/x-tend-oil-conditioner/` | X-TEND Oil Conditioner | Data sheet: description, benefits, ASTM properties, dosage | `/products/x-tend-oil-conditioner` | Structured spec + dosage tables, Product schema | Rebuilt |
| 20 | `/x-tend-diesel-conditioner/` | X-TEND Diesel Conditioner | Data sheet: benefits, dosage, properties, how to use | `/products/x-tend-diesel-conditioner` | As above | Rebuilt |
| 21 | `/x-tend-petrol-booster/` | X-TEND Petrol Booster | Data sheet: PEA detergent, benefits, suitability | `/products/x-tend-petrol-booster` | As above | Rebuilt |
| 22 | `/tests-and-testimonials/` | Tests and Testimonials | 39 test videos (36 unique IDs), 6 video testimonials, 11 testimonial-letter images | `/tests-and-testimonials` (unchanged) | Click-to-load video facades, all written reviews | Rebuilt |
| 23 | `/frequently-asked-questions/` | Frequently Asked Questions | 12 long Q&As | `/faq` | Accordion, FAQ schema, edited for length | Rebuilt |
| 24 | `/where-to-buy/` | Where To Buy | 2 online stores, 7 stockists in 4 states | `/where-to-buy` (unchanged) | Grouped by state, click-to-call | Rebuilt |
| 25 | `/contact-us/` | Contact Us | Address, 3 phones, email, form | `/contact` | Working validated form, honest failure states | Rebuilt |
| 26 | `/resources/` | Resources | Generic oil-leak article that links to bellperformance.com (third-party product) | `/resources` | Replaced with a hub of the company's own resources | Rebuilt (old body not migrated — see GAPS) |
| 27 | `/sample-page/` | Sample Page | WordPress default | → `/` | — | Retired |
| 28 | `/hello-world/` | Hello world! | WordPress default post | → `/` | — | Retired |
| 29 | `/category/uncategorized/` | Category archive | Empty | → `/resources` | — | Retired |
| 30 | `/?reviews-page=2…6` | Review pagination | Paged reviews | Content on `/tests-and-testimonials#reviews` | All reviews on one page | Merged |
| 31 | `/#applications`, `/#more`, `/#sol` | Anchors | Homepage sections | `/#applications`, `/applications` | | Merged |

New pages with no legacy equivalent (justified by existing content): `/products`, `/applications`, `/industries`, `/services`, `/about`, `/request-a-quote`, `/search`, `/privacy`, `/terms`, custom 404.

Not created (no factual content available): Leadership, Careers, News/Articles, Sustainability report, Quality/certifications, Vision & Mission.

## 3. Issues found on the legacy site

**Content & trust**
- Header email link (`mailto:info@xtendadditives.com`) differs from the displayed address (`info@milemasterintegrated.com`).
- Social icons (Facebook, Twitter, Instagram, LinkedIn) have no destination URLs.
- "Data Sheets" menu item links to `#`.
- Two WordPress placeholder pages (`/sample-page/`, `/hello-world/` with an open comment form) are public and indexed.
- `/resources/` content is a generic third-party article linking to another additive brand's shop.
- Slug/content mismatches (`/small-engine-fuel-problems/` is about trucks and heavy equipment; `/motorcycles-and-tricycles/` H1 says delivery vans).
- Footer copyright is fixed at 2023.
- Several application images appear to be iStock/Getty comps (612×612 with stock filenames) — licence status unknown.

**Accessibility**
- Most content images have no `alt` text; client logos are named "0 (2)", "N (1)" etc.
- Icon-only social links without accessible names or targets.
- Multiple H1/H2 hierarchy inconsistencies (e.g. empty headings, repeated H2s).

**Usability & performance**
- ~100–200 KB of HTML per page from Elementor; 42 YouTube iframes loaded eagerly on the Tests page.
- No search, no product comparison, no structured product data, no quote flow.
- Inconsistent grammar and typos ("barrieer", "Reesources", "Organizatons").

## 4. Existing functionality

| Function | Legacy | New |
|---|---|---|
| Contact form | Elementor/MetForm form on Contact Us | Validated form (client + server, Zod), honeypot, timing check, rate limit, real email delivery via Resend |
| Reviews | Site Reviews widget, 6 pages | Static, all on one page, rating summary |
| Videos | Embedded playlists | Click-to-load privacy-enhanced embeds |
| Brochure download | PDF link | Download button when the PDF is present; otherwise "Request the brochure" |
| Search | None | Site-wide search with contextual excerpts + header search dialog (⌘K) |
| Product filtering | None | Filter by fuel system, application and keyword |
