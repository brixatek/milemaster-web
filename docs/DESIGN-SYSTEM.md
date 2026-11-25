# Design system — "Refinery Editorial"

An industrial-editorial identity built on the X-Tend brand's existing red-and-black equity. Deep navy grounds, cool white paper, a single signal red, hairline rules and the Poppins typeface. Square corners throughout: no rounded cards, no glassmorphism, no drop-shadow stacks.

All tokens live in `src/styles/globals.css` (`@theme`) and are exposed as Tailwind utilities (`bg-ink`, `text-signal`, `text-display-l`…).

## Colour

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0B1A2E` | Deep navy: primary dark ground, body text on light |
| `ink-2` / `ink-3` | `#13263F` / `#1A3150` | Raised dark surfaces, media panels |
| `graphite` | `#2C3E57` | Secondary dark UI |
| `steel` | `#8A9BB0` | Muted meta on dark |
| `mist` | `#C8D2DE` | Rules on light (rarely) |
| `bone` | `#EDF1F6` | Cool light alternate section ground; text on dark |
| `paper` | `#F4F6F9` | Cool white default page ground |
| `signal` | `#D3241B` | Brand red: primary CTAs, indices, large type on dark |
| `signal-deep` | `#A3190F` | CTA hover |
| signal-bright | `#FF6B5E` | Automatic substitute for *small* red text on navy (WCAG AA ≥ 4.7:1) |
| `sky` | `#3FA7D6` | Data highlights only (ratings, focus ring on dark) |
| `ok` | `#2F7D4F` | Success states |

Text opacity floor: `text-ink/65` and `text-bone/60` for any small text (≥ 4.5:1 on all grounds).

## Typography

| Role | Family | Notes |
|---|---|---|
| Display | Poppins 600 / 500 | `.display` = 600 weight, −3.5% tracking, 1.02 leading. Sub-headings use Poppins Medium (500). |
| Body | Poppins 400/500 | 15px base, 1.7 leading, `text-wrap: pretty` |
| Data / labels | Ubuntu Mono 400/700 | `.eyebrow`: 12px, 0.12em tracking, uppercase; spec tables use tabular figures |

Fonts are self-hosted with `next/font/local` (preloaded, metric-matched fallbacks) under the SIL Open Font License (Poppins) and the Ubuntu Font Licence (Ubuntu Mono).

Fluid scale (375 → 1440px): `display-xl` 44→116px · `display-l` 36→80 · `display-m` 30→56 · `display-s` 24→36 · `lead` 18→22.

## Layout

- Container: `.container-x`, max 1440px, gutter `clamp(20px, …, 48px)`.
- Grid: `.grid-12` — 12 columns, gap 16→32px. Compositions are deliberately asymmetric (7/5, 4/8, 3/8 with offset).
- Section rhythm: `py-24 md:py-36` for major sections, `py-16 md:py-24` for internal content.
- Breakpoints: Tailwind defaults (640/768/1024/1280/1536) plus `3xl` 1920.
- Radius: 0 (2px `xs` token available for inputs if ever needed).
- Elevation: none. Separation is achieved with hairlines (`border-ink/12`) and 1px "gap grids" (`gap-px bg-ink/10`).

## Motifs

- **Index numbering** — mono red `01 —` before eyebrows; mirrors data-sheet numbering.
- **Blueprint grid** — 48px line grid on dark sections and media fallbacks.
- **Technical illustrations** (`ArtPanel`) — spray, lattice, flow, tank, signal, contour. Each is tied to a topic (injector atomisation, molecular film, fuel lines, storage, monitoring, marine). Used when photography is absent.
- **Hero figure** — an injector atomising fuel into a fine cone, captioned "Fig. 01".

## Components

| Component | File | Variants |
|---|---|---|
| Button / ButtonLink | `components/ui/Button.tsx` | primary, secondary, ghost, inverse · md, lg · optional arrow |
| SectionHeading | `ui/SectionHeading.tsx` | stack / split · sizes l, m, s · index + eyebrow |
| PageHero | `sections/PageHero.tsx` | with/without aside media, CTA slot, size l/m |
| Breadcrumbs | `ui/Breadcrumbs.tsx` | dark/light, emits BreadcrumbList JSON-LD |
| MediaFrame / ArtPanel | `ui/MediaFrame.tsx`, `ui/ArtPanel.tsx` | cover/contain, illustrative label |
| Blocks | `ui/Blocks.tsx` | lead, p, h, numbered list, quote, data table |
| LongForm | `sections/LongForm.tsx` | sticky contents rail + numbered sections + aside slot |
| Accordion | `ui/Accordion.tsx` | native `<details>` |
| Counter | `ui/Counter.tsx` | verified figures only; SSR renders final value |
| ProductCatalog | `products/ProductCatalog.tsx` | fuel/application/keyword filters, empty state |
| SpecTable | `products/SpecTable.tsx` | spec and dosage tables |
| EnquiryForm | `forms/EnquiryForm.tsx` | general / quote; idle, validating, submitting, success, error, unavailable |
| Header / mega menu / mobile sheet / search dialog | `components/layout/*` | |
| CtaBand, ProofBand, ApplicationsShowcase, TestimonialSlider, EmissionsCalculator, VideoFacade | `components/sections/*` | |

## Motion

- Durations: 160ms (state), 320ms (UI), 900ms (reveals). Easing: `--ease-out-expo` `cubic-bezier(.16,1,.3,1)`.
- Scroll reveals: progressive (`.js [data-reveal]`), content is visible without JavaScript.
- Hero headline uses a transform-only rise so it paints immediately (good LCP).
- `prefers-reduced-motion: reduce` disables all animation, the live spray particles and counters.

## Accessibility standards

WCAG 2.2 AA: skip link, visible focus rings (red on light, sky blue on dark), 44px minimum targets, labelled form controls with linked error messages, `aria-expanded`/`aria-controls` on menus, Escape closes menus and dialogs, native `<dialog>` for search, one `h1` per page, decorative SVG hidden from assistive tech.
