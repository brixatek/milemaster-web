/**
 * Permanent redirects from legacy WordPress URLs to the new information
 * architecture. Mirrors the route inventory in docs/AUDIT.md. Next.js normalises trailing
 * slashes, so each source is listed without one.
 */
export const legacyRedirects = [
  { source: "/x-tend-oil-conditioner", destination: "/products/x-tend-oil-conditioner", permanent: true },
  { source: "/x-tend-diesel-conditioner", destination: "/products/x-tend-diesel-conditioner", permanent: true },
  { source: "/x-tend-petrol-booster", destination: "/products/x-tend-petrol-booster", permanent: true },
  { source: "/cars-buses-and-suvs", destination: "/applications/cars-buses-and-suvs", permanent: true },
  { source: "/boats-and-marine-vessels", destination: "/applications/boats-and-marine-vessels", permanent: true },
  { source: "/motorcycles-and-tricycles", destination: "/applications/fleet-logistics", permanent: true },
  { source: "/small-engine-fuel-problems", destination: "/applications/haulage-and-heavy-duty-equipment", permanent: true },
  { source: "/generators", destination: "/applications/generators", permanent: true },
  { source: "/agriculture-and-farming", destination: "/applications/agriculture-and-farming", permanent: true },
  { source: "/fleets", destination: "/industries/fleets", permanent: true },
  { source: "/hospitals-health-care-facilities", destination: "/industries/hospitals-health-care-facilities", permanent: true },
  { source: "/government-fleets-facilities", destination: "/industries/government-fleets-facilities", permanent: true },
  { source: "/telecommunications-and-manufacturing", destination: "/industries/telecommunications-and-manufacturing", permanent: true },
  { source: "/hospitality", destination: "/industries/hospitality", permanent: true },
  { source: "/fuel-storage", destination: "/resources/fuel-storage", permanent: true },
  { source: "/diesel-under-delivery-and-diesel-theft", destination: "/services/remote-fuel-monitoring", permanent: true },
  { source: "/carbon-dioxide-produced-per-kilowatt-hour", destination: "/resources/carbon-dioxide-produced-per-kilowatt-hour", permanent: true },
  { source: "/carbon-emission-reduction", destination: "/resources/carbon-emission-reduction", permanent: true },
  { source: "/lower-energy-tariffs", destination: "/resources/lower-energy-tariffs", permanent: true },
  { source: "/expectations-from-using-x-tend", destination: "/resources/expectations-from-using-x-tend", permanent: true },
  { source: "/frequently-asked-questions", destination: "/faq", permanent: true },
  { source: "/contact-us", destination: "/contact", permanent: true },
  // WordPress defaults with no business content
  { source: "/sample-page", destination: "/", permanent: true },
  { source: "/hello-world", destination: "/", permanent: true },
  { source: "/category/:slug*", destination: "/resources", permanent: true },
];
