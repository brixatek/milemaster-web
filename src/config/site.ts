/**
 * Central brand + company configuration.
 *
 * Branding (how the site looks and what it is called) is kept separate from
 * verified company facts (who operates it and how to reach them), so either
 * can be changed without touching components.
 *
 * Every value marked `source:` below was taken from the legacy site
 * (x-tendadditives.com) during the November 2026 audit. Anything not
 * verifiable was left `null` and is documented in docs/GAPS.md.
 */

export const brand = {
  /** Product brand shown in the logo and headlines. */
  name: "X-Tend",
  wordmark: { mark: "X", rest: "TEND" },
  /** Short descriptor used next to the wordmark and in titles. */
  descriptor: "Fuel & Lubricant Conditioning",
  tagline: "Advanced fuel chemistry for engines that work for a living.",
  /** Optional raster/SVG logo in /public. When null the SVG wordmark is used. */
  logoSrc: null as string | null,
  colors: {
    signal: "#D3241B",
    ink: "#0C0E11",
    bone: "#F2EFE9",
  },
} as const;

export const company = {
  /** Trading name used on the legacy "Where to buy" page and email domain. */
  name: "Milemaster Integrated Services",
  /** Registered legal entity name — NOT verified. Fill in before launch. */
  legalName: null as string | null,
  /** RC number (CAC) — NOT verified. */
  registrationNumber: null as string | null,
  description:
    "Milemaster Integrated Services supplies X-Tend fuel and oil conditioners, fuel storage programmes and remote fuel monitoring to vehicle owners, fleets and facilities across Nigeria.",
  // source: footer "About Us" + homepage "About X-Tend"
  about:
    "X-Tend is a private brand formulated in the United States, drawing on technology from established additive manufacturers with a long record of quality and performance in petrol, ethanol-blended and diesel engines.",
  address: {
    street: "17a Ichei Mike Ejezie Street",
    area: "Lekki Phase 1",
    city: "Lagos",
    country: "Nigeria",
    countryCode: "NG",
  },
  phones: [
    { display: "+234 (0) 809 555 9999", href: "tel:+2348095559999" },
    { display: "+234 (0) 809 666 9999", href: "tel:+2348096669999" },
    { display: "+234 (0) 708 555 9999", href: "tel:+2347085559999" },
  ],
  // The legacy site displays info@milemasterintegrated.com but its mailto link
  // points to info@xtendadditives.com. The displayed address is used; confirm.
  email: "info@milemasterintegrated.com",
  /**
   * Social profiles. The legacy footer shows Facebook / X / Instagram /
   * LinkedIn icons but none of them link anywhere, so none are published.
   */
  social: [] as { label: string; href: string }[],
  /** WhatsApp Business number in E.164 without "+", or null to hide. Unverified. */
  whatsapp: null as string | null,
  online: [
    { label: "Konga", href: "https://www.konga.com/merchant/milemaster-integrated-services" },
    { label: "ETH10k", href: "https://eth10k.io/official-brands/x-tend/" },
  ],
} as const;

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://milemasterintegrated.com").replace(/\/$/, ""),
  defaultTitle: "X-Tend Fuel & Oil Conditioners | Milemaster Integrated Services",
  titleTemplate: "%s | X-Tend by Milemaster",
  defaultDescription:
    "US-formulated X-Tend diesel conditioners, petrol boosters and oil conditioners that restore engine efficiency, cut fuel consumption and protect stored fuel. Supplied in Nigeria by Milemaster Integrated Services.",
  locale: "en_NG",
  ogImage: "/opengraph-image",
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href: string; intro: string; links: NavLink[] };

export const primaryNav: NavGroup[] = [
  {
    label: "Products",
    href: "/products",
    intro: "Three conditioners covering diesel, petrol and lubricating oil.",
    links: [
      { label: "X-Tend Diesel Conditioner", href: "/products/x-tend-diesel-conditioner", description: "Complete diesel improver" },
      { label: "X-Tend Petrol Booster", href: "/products/x-tend-petrol-booster", description: "Complete fuel system conditioner" },
      { label: "X-Tend Oil Conditioner", href: "/products/x-tend-oil-conditioner", description: "Friction and wear reducer" },
      { label: "Where to buy", href: "/where-to-buy", description: "Stockists and online stores" },
    ],
  },
  {
    label: "Solutions",
    href: "/applications",
    intro: "Applications by asset type, and the industries that depend on them.",
    links: [
      { label: "Passenger & Commercial Vehicles", href: "/applications/cars-buses-and-suvs" },
      { label: "Boats & Marine Vessels", href: "/applications/boats-and-marine-vessels" },
      { label: "Fleet Logistics", href: "/applications/fleet-logistics" },
      { label: "Haulage & Heavy Equipment", href: "/applications/haulage-and-heavy-duty-equipment" },
      { label: "Agriculture & Farming", href: "/applications/agriculture-and-farming" },
      { label: "Power Generation", href: "/applications/generators" },
      { label: "All industries", href: "/industries" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    intro: "Programmes that go beyond the bottle.",
    links: [
      { label: "Fuel Storage Solutions (XFSS)", href: "/services/fuel-storage-solutions", description: "Chemical and mechanical tank care" },
      { label: "Remote Fuel Monitoring", href: "/services/remote-fuel-monitoring", description: "Under-delivery and theft detection" },
    ],
  },
  {
    label: "Evidence",
    href: "/tests-and-testimonials",
    intro: "Field tests, customer results and the questions buyers ask.",
    links: [
      { label: "Tests & testimonials", href: "/tests-and-testimonials" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    intro: "Who we are and how to reach us.",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Request a quote", href: "/request-a-quote" },
    ],
  },
];

export const integrations = {
  /** Server-side mail delivery for enquiry forms. See README → Environment variables. */
  mailConfigured: Boolean(process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL),
} as const;
