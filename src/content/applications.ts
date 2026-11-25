import type { Application } from "@/types/content";

// Source: legacy application pages. Copy edited for grammar and structure;
// technical claims and figures are unchanged from the source.

export const applications: Application[] = [
  {
    slug: "cars-buses-and-suvs",
    legacyPath: "/cars-buses-and-suvs/",
    name: "Passenger & Commercial Vehicles",
    navName: "Cars, buses & SUVs",
    kicker: "Cars · Buses · SUVs",
    summary:
      "Declining fuel energy density means you pay more for less. X-Tend restores lost mileage and protects seals and injectors from alcohol-blended petrol.",
    fuels: ["petrol", "diesel", "oil"],
    products: ["x-tend-petrol-booster", "x-tend-diesel-conditioner", "x-tend-oil-conditioner"],
    media: "app-vehicles",
    sections: [
      {
        id: "fuel-quality",
        eyebrow: "The challenge",
        title: "Fuel quality and asset integrity",
        blocks: [
          { type: "lead", text: "For owners of cars, buses and SUVs, engine reliability comes first — but the fuel itself is changing." },
          { type: "p", text: "To optimise procurement costs, modern petrol (PMS) often carries higher concentrations of alcohol-based additives such as ethanol and methanol. These blends are cost-effective at import, but they reduce the energy delivered per litre and accelerate the degradation of fuel-system seals and injectors." },
          { type: "p", text: "Milemaster supplies the precision-engineered treatments needed to restore fuel stability and protect your vehicle investment." },
        ],
      },
      {
        id: "efficiency",
        eyebrow: "Fuel economy",
        title: "Efficiency in a volatile market",
        blocks: [
          { type: "p", text: "As energy-lean additives like ethanol become more common, the distance covered per tank keeps falling — a real loss of thermal efficiency for Nigerian motorists." },
          { type: "p", text: "With post-subsidy pricing, fuel efficiency is no longer a preference; it is a mechanical and financial necessity. X-Tend improves the combustion profile of modern petrol blends so operators get better fuel economy and a lower cost per kilometre, while sensitive engine components are protected." },
        ],
      },
      {
        id: "deposits",
        eyebrow: "Engine health",
        title: "Carbon build-up and material degradation",
        blocks: [
          { type: "p", text: "Normal combustion produces carbon deposits that foul valves, injectors and combustion chambers. Fuel-borne detergents used to manage this, but current blends often lack the additive concentration to keep deposits in check — and higher ethanol and methanol content adds further risk." },
          {
            type: "list",
            items: [
              { title: "Material incompatibility", text: "In vehicles engineered before 2003, alcohol-based fuels can aggressively degrade plastic and rubber seals, leading to system-wide failures and higher maintenance costs." },
              { title: "Diesel performance deficiencies", text: "Low cetane and insufficient detergency in modern diesel (AGO) cause poor ignition, more deposits and a measurable loss of thermal efficiency." },
            ],
          },
          { type: "p", text: "Whether your vehicles run on petrol, ethanol blends or diesel, X-Tend provides the detergent strength and material protection needed to safeguard them." },
        ],
      },
    ],
    outcome: "Better mileage per tank, smoother running, and fuel systems protected from alcohol-blended fuel.",
  },
  {
    slug: "boats-and-marine-vessels",
    legacyPath: "/boats-and-marine-vessels/",
    name: "Boats & Marine Vessels",
    navName: "Boats & marine",
    kicker: "Workboats · Leisure craft · Vessels",
    summary:
      "Humidity and salt air make fuel integrity the single biggest factor in avoiding mid-water failure. X-Tend controls moisture, deposits and microbial growth.",
    fuels: ["diesel", "petrol"],
    products: ["x-tend-diesel-conditioner", "x-tend-petrol-booster"],
    media: "app-marine",
    sections: [
      {
        id: "challenge",
        eyebrow: "The maritime challenge",
        title: "Protecting high-value assets on the water",
        blocks: [
          { type: "lead", text: "Marine vessels are a major capital investment, and reliability is non-negotiable." },
          { type: "p", text: "High humidity and salt-air exposure create a hostile environment for standard fuels. Whether a vessel runs on diesel (AGO) or petrol-ethanol blends, fuel integrity is the most important factor in preventing costly failures at sea." },
        ],
      },
      {
        id: "risks",
        eyebrow: "Risk factors",
        title: "What goes wrong in marine fuel systems",
        blocks: [
          {
            type: "list",
            items: [
              { title: "Moisture ingress and phase separation", text: "Humid air condenses quickly in vented tanks. In petrol-ethanol blends, water pulls the ethanol out of the mixture, leaving a low-octane layer that causes lean running, rough idling and serious valve damage." },
              { title: "Microbial contamination and sludge", text: "Water in diesel systems breeds bacteria and fungi — the “diesel bug” — which accelerates oxidation, tank corrosion and filter plugging, often visible as dense black exhaust smoke." },
              { title: "Chemical erosion", text: "Ethanol is a powerful solvent. Over time it degrades plastic and rubber fuel lines and seals, adding to deposits and creating a fire risk from potential leaks." },
              { title: "The idling deposit trap", text: "Long periods of idling accelerate carbon build-up in injectors and combustion chambers, cutting fuel economy and throttle response." },
            ],
          },
        ],
      },
      {
        id: "proven",
        eyebrow: "Proven at sea",
        title: "Decades of maritime field-testing",
        blocks: [
          { type: "p", text: "With more than 30 years of field-testing behind it, X-Tend delivers industrial-grade stability for marine fuel — dissolving performance-robbing deposits and neutralising the effects of moisture, so owners and operators get higher fuel efficiency and more mechanical uptime." },
        ],
      },
    ],
    outcome: "Moisture under control, cleaner injectors and fewer failures far from shore.",
  },
  {
    slug: "fleet-logistics",
    legacyPath: "/motorcycles-and-tricycles/",
    name: "Fleet Logistics",
    navName: "Fleet logistics",
    kicker: "Motorcycles · Tricycles · Delivery vans · Staff buses",
    summary:
      "For last-mile and corporate transport fleets, fuel is the most volatile overhead. X-Tend turns it into a managed cost.",
    fuels: ["petrol", "diesel", "oil"],
    products: ["x-tend-petrol-booster", "x-tend-oil-conditioner", "x-tend-diesel-conditioner"],
    media: "app-fleet",
    sections: [
      {
        id: "context",
        eyebrow: "The context",
        title: "Vehicles are revenue-generating assets",
        blocks: [
          { type: "lead", text: "In last-mile delivery and corporate transport, every motorcycle, tricycle, van and staff bus earns its keep — and fuel is the cost most likely to move against you." },
        ],
      },
      {
        id: "protocol",
        eyebrow: "The protocol",
        title: "A maintenance advantage for fleet managers",
        blocks: [
          { type: "p", text: "Industrial-grade conditioning treats both the fuel and the engine to keep high-utilisation vehicles at peak efficiency." },
          {
            type: "list",
            items: [
              { title: "Fuel economy restoration", text: "Counteracts the drop in fuel energy density to achieve a 5–12% gain in mileage, lowering weekly fuel spend." },
              { title: "Carbon neutralisation", text: "Cleans and protects injectors and combustion chambers so engines run smoother and cooler in heavy traffic." },
              { title: "System integrity", text: "Protects fuel-system seals and components from the aggressive effects of alcohol-blended fuels." },
              { title: "Lubrication fortification", text: "Reduces boundary friction and stabilises the oil's Total Base Number (TBN), extending the life of hard-working engines." },
            ],
          },
        ],
      },
    ],
    outcome: "Built into scheduled maintenance, X-Tend turns fuel from a rising expense into a managed asset — less downtime, protected margins.",
  },
  {
    slug: "haulage-and-heavy-duty-equipment",
    legacyPath: "/small-engine-fuel-problems/",
    name: "Haulage & Heavy-Duty Equipment",
    navName: "Haulage & heavy equipment",
    kicker: "Trucks · Earthmoving · Construction plant",
    summary:
      "Tier 3 and Tier 4 diesel engines are precise — and sensitive to low-detergency, high-sulphur regional diesel. X-Tend protects them around the clock.",
    fuels: ["diesel", "oil"],
    products: ["x-tend-diesel-conditioner", "x-tend-oil-conditioner"],
    media: "app-haulage",
    sections: [
      {
        id: "risks",
        eyebrow: "Operational risks",
        title: "Fuel as a logistical variable",
        blocks: [
          { type: "lead", text: "For construction, manufacturing and large-scale haulage companies, fuel is not just an expense — it is a critical logistical variable." },
          {
            type: "list",
            items: [
              { title: "Fuel degradation and sludge", text: "Bulk-stored diesel suffers oxidative instability and microbial growth, clogging filters and causing injector failure." },
              { title: "Component erosion", text: "Low-lubricity fuel accelerates wear on fuel pumps and high-pressure common rail (HPCR) systems." },
              { title: "Thermal inefficiency", text: "Incomplete combustion produces excess soot, frequent DPF regeneration cycles and wasted energy." },
            ],
          },
        ],
      },
      {
        id: "strategy",
        eyebrow: "The X-Tend strategy",
        title: "Performance stability and asset longevity",
        blocks: [
          { type: "p", text: "A complete chemical protocol designed for 24/7 industrial operations." },
          {
            type: "list",
            items: [
              { title: "Fuel stabilisation", text: "Stabilisers neutralise reactive compounds in stored diesel, preventing gums and sludge even during long-term storage in site tanks." },
              { title: "HPCR protection", text: "Restores lubricity to ultra-low sulphur diesel, protecting high-pressure injectors from friction scarring and premature failure." },
              { title: "TBN retention and acid neutralisation", text: "Fortifies lubricants to keep Total Base Number high, neutralising acidic combustion by-products and extending oil drain intervals." },
              { title: "Combustion optimisation", text: "Improved cetane and detergency give a more complete burn — a 5–10% reduction in fuel consumption and noticeably lower carbon emissions." },
            ],
          },
        ],
      },
      {
        id: "partnership",
        eyebrow: "Partnership",
        title: "Built for construction and FMCG logistics",
        blocks: [
          { type: "p", text: "Our programmes are designed for the demands of manufacturing, distribution and construction firms, and fit into existing maintenance schedules with a measurable proof of value." },
          { type: "quote", text: "We don't just supply additives; we provide an insurance policy for your most expensive mechanical assets." },
        ],
      },
    ],
    outcome: "Cleaner combustion, protected injectors and longer oil drain intervals for engines that never stop.",
  },
  {
    slug: "agriculture-and-farming",
    legacyPath: "/agriculture-and-farming/",
    name: "Agriculture & Farming",
    navName: "Agriculture & farming",
    kicker: "Tractors · Pumps · On-farm storage",
    summary:
      "On the farm, stored fuel is a high-value asset. X-Tend stabilises it, stops microbial growth and protects machinery and tanks.",
    fuels: ["diesel", "oil"],
    products: ["x-tend-diesel-conditioner", "x-tend-oil-conditioner"],
    media: "app-agriculture",
    sections: [
      {
        id: "cost",
        eyebrow: "The challenge",
        title: "The high cost of fuel degradation",
        blocks: [
          { type: "lead", text: "Fuel and machinery are the biggest overheads in modern agriculture. At today's prices, fuel in storage is a financial asset that needs protecting." },
          { type: "p", text: "Inconsistent storage conditions bring two threats: condensation introduces moisture that speeds chemical breakdown, and oxidative reactions set off chain reactions in the fuel. Left untreated, stable fuel turns into gums, varnish and sludge — damaging both the fuel investment and engine reliability." },
        ],
      },
      {
        id: "microbes",
        eyebrow: "Microbial risk",
        title: "Microbial growth and corrosion",
        blocks: [
          { type: "p", text: "Any tank that holds moisture is at risk. Bacteria, moulds and yeasts multiply fast — a single bacterium can become more than 250,000 organisms in eight hours — forming sludge and biomass that blind filters early and corrode tanks." },
        ],
      },
      {
        id: "solution",
        eyebrow: "The X-Tend solution",
        title: "Stability and sterilisation",
        blocks: [
          { type: "p", text: "By combining X-Tend Diesel Conditioner with a broad-spectrum biocide, operators can stabilise fuel chemistry, eliminate existing microbial colonies and establish a protective anti-corrosion barrier across the whole storage system." },
        ],
      },
    ],
    outcome: "Fuel that stays usable in storage, cleaner filters and protected tanks and machinery.",
  },
  {
    slug: "generators",
    legacyPath: "/generators/",
    name: "Power Generation",
    navName: "Generators",
    kicker: "Standby · Prime power · Captive plants",
    summary:
      "Where operations depend on decentralised power, X-Tend closes the gap between as-delivered fuel and what modern generators need.",
    fuels: ["diesel", "petrol", "oil"],
    products: ["x-tend-diesel-conditioner", "x-tend-oil-conditioner", "x-tend-petrol-booster"],
    media: "app-power",
    sections: [
      {
        id: "gap",
        eyebrow: "The challenge",
        title: "The energy reliability gap",
        blocks: [
          { type: "lead", text: "When continuity depends on your own generators, the quality of what goes into them is paramount." },
          { type: "p", text: "There is a significant gap between as-delivered fuel specifications and the precision requirements of modern petrol and diesel generators. Sub-optimal fuel density and inconsistent lubricant additive packages — especially zinc, phosphorus and molybdenum — impose a “friction tax”: higher thermal stress, more fuel burned and earlier mechanical fatigue." },
        ],
      },
      {
        id: "lubricant",
        eyebrow: "Part I",
        title: "Lubricant fortification",
        blocks: [
          { type: "p", text: "Most locally available lubricants lack the anti-wear and anti-friction concentrations that high-load stationary engines need." },
          {
            type: "list",
            items: [
              { title: "Boundary lubrication", text: "X-Tend Oil Conditioner adds a high-strength molecular film to your existing oil, reducing friction, noise and vibration." },
              { title: "TBN stability", text: "Neutralises acidic combustion by-products, preserving oil integrity and extending safe service intervals." },
            ],
          },
        ],
      },
      {
        id: "fuel",
        eyebrow: "Part II",
        title: "Fuel stability and combustion efficiency",
        blocks: [
          {
            type: "list",
            items: [
              { title: "Energy density restoration", text: "Optimises the combustion profile to offset low-quality blending, so you extract the most kVA per litre." },
              { title: "System protection", text: "Guards against moisture and injector fouling — the leading causes of generator fail-to-start incidents." },
              { title: "Waste reduction", text: "Stabilises fuel in long-term storage, preventing gums and sludge so backup power is ready the moment the grid fails." },
            ],
          },
        ],
      },
    ],
    outcome: "A lower total cost of ownership: measurable fuel savings, reduced emissions and longer asset life.",
  },
];

export function getApplication(slug: string) {
  return applications.find((a) => a.slug === slug);
}
