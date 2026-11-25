/**
 * Media manifest.
 *
 * Each entry maps a semantic key to a local file under /public/media. Files are
 * populated by `npm run assets:fetch`, which downloads approved images from the
 * legacy site. When a file is missing, components render a designed fallback
 * panel instead of a broken image — the site is complete either way.
 *
 * `rights` records what we know about each image:
 *  - "company"  : appears to be the company's own photo/render — confirm ownership
 *  - "unsplash" : Unsplash licence (free commercial use, no attribution required)
 *
 * Images on the legacy site that appear to be iStock/Getty comps or of unknown
 * origin were deliberately NOT included. See docs/GAPS.md.
 */
export type MediaEntry = {
  src: string;
  legacy: string;
  alt: string;
  rights: "company" | "unsplash";
  /** Representative photography, not the company's own facilities or customers. */
  illustrative?: boolean;
  width: number;
  height: number;
};

const L = "https://www.x-tendadditives.com/wp-content/uploads";

export const media: Record<string, MediaEntry> = {
  "hero-product": { src: "/media/x-tend-range.png", legacy: `${L}/2023/12/X4-1024x931.png`, alt: "The X-Tend conditioner range", rights: "company", width: 1024, height: 931 },
  "lab-experiments": { src: "/media/experiments.jpg", legacy: `${L}/2023/01/experiments.jpg`, alt: "Side-by-side fuel samples from X-Tend experiments", rights: "company", width: 1200, height: 800 },
  "product-diesel": { src: "/media/diesel-conditioner.png", legacy: `${L}/2023/12/Diesel_Conditioner-.png`, alt: "X-Tend Diesel Conditioner bottle", rights: "company", width: 800, height: 800 },
  "product-petrol": { src: "/media/petrol-booster.png", legacy: `${L}/2023/12/4-1.png`, alt: "X-Tend Petrol Booster bottle", rights: "company", width: 800, height: 800 },
  "product-oil": { src: "/media/oil-conditioner.png", legacy: `${L}/2023/12/5-1.png`, alt: "X-Tend Oil Conditioner bottle", rights: "company", width: 800, height: 800 },
  "app-vehicles": { src: "/media/app-vehicles.jpg", legacy: `${L}/2026/04/claude-nai-8tAUkLZZvZY-unsplash-768x1024.jpg`, alt: "Passenger car on an urban road", rights: "unsplash", illustrative: true, width: 768, height: 1024 },
  "app-marine": { src: "/media/app-marine.jpg", legacy: `${L}/2023/12/boat1-1024x767.jpeg`, alt: "Boat on open water", rights: "company", illustrative: true, width: 1024, height: 767 },
  "app-fleet": { src: "/media/app-fleet.jpg", legacy: `${L}/2026/04/tokyoqu-hyHsjbJn8Ls-unsplash-scaled.jpg`, alt: "Delivery motorcycles in city traffic", rights: "unsplash", illustrative: true, width: 2560, height: 1707 },
  "app-haulage": { src: "/media/app-haulage.jpg", legacy: `${L}/2026/04/rhys-moult-7eaFIKeo1MQ-unsplash-scaled.jpg`, alt: "Heavy-duty truck on a highway", rights: "unsplash", illustrative: true, width: 2560, height: 1707 },
  "app-agriculture": { src: "/media/app-agriculture.jpg", legacy: `${L}/2026/04/jaclyn-baxter-f18VPTvYFes-unsplash-1024x683.jpg`, alt: "Tractor working a field", rights: "unsplash", illustrative: true, width: 1024, height: 683 },
  "app-power": { src: "/media/app-power.jpg", legacy: `${L}/2026/04/bee-naturalles-d0EMqK7aNIU-unsplash-1024x683.jpg`, alt: "Industrial diesel generator", rights: "unsplash", illustrative: true, width: 1024, height: 683 },
  "svc-storage": { src: "/media/svc-storage.jpg", legacy: `${L}/2023/12/IMG-20231216-WA0001-1024x683.jpg`, alt: "Fuel storage tank servicing", rights: "company", width: 1024, height: 683 },
  "svc-monitoring": { src: "/media/svc-monitoring.jpg", legacy: `${L}/2024/01/fuel-tank-level-diagram-1024x864.jpg`, alt: "Fuel tank level monitoring diagram", rights: "company", width: 1024, height: 864 },
  "chart-diesel-quality": { src: "/media/chart-diesel-quality.jpg", legacy: `${L}/2023/12/DIESEL-QUALITY_page-0001.jpg`, alt: "Chart comparing diesel quality parameters", rights: "company", width: 1240, height: 1754 },
  "chart-nigeria-vs-other": { src: "/media/chart-nigeria-vs-other.jpg", legacy: `${L}/2023/12/Nigerian-vs-other_page-0001.jpg`, alt: "Chart comparing Nigerian fuel with other markets", rights: "company", width: 1240, height: 1754 },
  "chart-poc-results": { src: "/media/chart-poc-results.jpg", legacy: `${L}/2023/12/x-tend-poc-results_page-0001.jpg`, alt: "X-Tend proof-of-concept results", rights: "company", width: 1240, height: 1754 },
  "ind-fleets": { src: "/media/ind-fleets.jpg", legacy: `${L}/2023/11/1662.jpg`, alt: "Buses at a depot", rights: "company", illustrative: true, width: 1200, height: 800 },
  "ind-health": { src: "/media/ind-health.jpg", legacy: `${L}/2023/02/Hospitals-Health-Care-Facilities.jpg`, alt: "Hospital building", rights: "company", illustrative: true, width: 1200, height: 800 },
  "ind-government": { src: "/media/ind-government.jpg", legacy: `${L}/2023/11/BRT.jpg`, alt: "Public transport bus", rights: "company", illustrative: true, width: 1200, height: 800 },
  "ind-telecom": { src: "/media/ind-telecom.jpg", legacy: `${L}/2023/02/Telecommunications-and-Manufacturing-1024x768.jpg`, alt: "Telecommunications mast", rights: "company", illustrative: true, width: 1024, height: 768 },
  "ind-hospitality": { src: "/media/ind-hospitality.jpg", legacy: `${L}/2023/02/Hospitality.jpg`, alt: "Hotel exterior", rights: "company", illustrative: true, width: 1200, height: 800 },
};

/** Downloadable documents. Rendered only when the file exists locally. */
export const documents = {
  monitoringBrochure: {
    src: "/documents/x-tend-diesel-monitoring-system.pdf",
    legacy: `${L}/2024/01/X-tend-diesel-monitoring-system.pdf`,
    label: "Remote fuel monitoring brochure",
  },
} as const;
