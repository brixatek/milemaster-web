import type { Product } from "@/types/content";

// Source: legacy data sheet pages /x-tend-*/ (audited Nov 2026).
// Figures are the manufacturer's stated values and are labelled as such in the UI.

export const products: Product[] = [
  {
    slug: "x-tend-diesel-conditioner",
    legacyPath: "/x-tend-diesel-conditioner/",
    name: "X-Tend Diesel Conditioner",
    shortName: "Diesel Conditioner",
    subtitle: "Complete diesel improver",
    fuel: "diesel",
    summary:
      "A multi-functional diesel additive that cleans injectors, lifts cetane, disperses water and stabilises fuel in storage.",
    description:
      "X-Tend Diesel Conditioner is a complete diesel improver that restores power and performance in all diesel equipment. It combines a concentrated fuel injector cleaner, cetane booster, water dispersant, lubricity additive, corrosion inhibitor and fuel stabiliser in a single treatment.",
    overview: [
      "Engineered to safely remove internal and external carbon coking deposits from injectors while increasing power and controlling moisture and corrosion.",
      "Contains twice the detergency requirement for diesel, uses special nitrates to improve cetane number, and demulsifies water held in the fuel.",
      "The result is a stabilised fuel that burns more completely, improves fuel economy and lowers maintenance costs.",
    ],
    applications:
      "Recommended for all diesel engines: generators, dredgers, industrial engines, heavy-duty and pick-up trucks, farm and construction equipment, cars and buses.",
    benefits: [
      "Boosts cetane by 4–7 points",
      "Improves fuel economy",
      "Cleans cylinders, fuel tank, lines and injectors",
      "Eliminates black smoke",
      "Dissolves diesel injector deposits",
      "Contains a water dispersant",
      "Reduces machine failures and repair costs",
      "Restores lost power",
      "Restores acceleration and throttle response",
      "Prevents rust and corrosion in tanks and lines",
      "Lubricates fuel pump and injectors",
      "Reduces particulate matter in filters",
      "Contains a fuel stabiliser",
    ],
    keyFigures: [
      { value: "4–7", label: "point cetane increase" },
      { value: "2×", label: "diesel detergency requirement" },
      { value: "60 ml", label: "treats one 200 L drum" },
    ],
    dosage: {
      caption: "Treat rate",
      head: ["Diesel volume", "X-Tend Diesel Conditioner"],
      rows: [
        ["200 litres (1 drum)", "60 ml"],
        ["500 litres", "150 ml"],
        ["5,000 litres", "1.5 litres"],
        ["20,000 litres", "6 litres"],
      ],
      steps: [
        {
          title: "Initial application",
          text: "Calculate the dose for the diesel already in the tank and for the fresh diesel about to be added. Pour both doses directly into the tank while the supply truck is discharging, so the additive mixes evenly.",
        },
        {
          title: "Subsequent applications",
          text: "Calculate the dose for each new delivery and add it directly into the tank as the diesel is discharged.",
        },
        {
          title: "Note",
          text: "Best results are achieved when the additive and diesel are evenly mixed.",
        },
      ],
    },
    properties: {
      caption: "Typical properties",
      head: ["Property", "Result"],
      rows: [
        ["API gravity @ 60 °F", "27.9"],
        ["Viscosity @ 100 °F, SUS", "43"],
        ["Viscosity @ 100 °F, cSt", "5.2"],
        ["Flash point, °F", "158"],
        ["Pour point, °F", "−60"],
        ["Acid test", "Excellent"],
        ["Ash content", "None"],
        ["Copper strip corrosion test", "Pass"],
        ["Gum and varnish test", "Excellent"],
        ["Storage stability", "Excellent"],
      ],
    },
    appliesTo: ["cars-buses-and-suvs", "boats-and-marine-vessels", "haulage-and-heavy-duty-equipment", "agriculture-and-farming", "generators", "fleet-logistics"],
    media: "product-diesel",
  },
  {
    slug: "x-tend-petrol-booster",
    legacyPath: "/x-tend-petrol-booster/",
    name: "X-Tend Petrol Booster",
    shortName: "Petrol Booster",
    subtitle: "Complete fuel system conditioner",
    fuel: "petrol",
    summary:
      "A one-tankful petrol treatment with Polyetheramine (PEA) detergent that cleans injectors, valves and combustion chambers.",
    description:
      "X-Tend Petrol Booster is a complete fuel system conditioner that works in one tankful. It is formulated for petrol generators, motorcycles, tricycles, passenger cars and light trucks — carburetted, two-stroke, port fuel injected and direct injected engines.",
    overview: [
      "Contains a highly effective Polyetheramine (PEA) detergent, among other additives.",
      "Cleans deposits from fuel injectors, carburettors, intake valves and combustion chambers.",
      "Cleans, restores and protects the entire fuel system, including sulphur-contaminated fuel gauge sensors.",
    ],
    applications:
      "Recommended for any vehicle or equipment that runs on petrol, including carburetted, throttle-body injected, multi-port injected, sequential injected and direct injected engines.",
    benefits: [
      "Improves fuel economy by up to 7.9%",
      "Cleans and restores fuel injectors",
      "Cleans combustion chamber deposits",
      "Cleans intake valve deposits",
      "Dissolves gums and varnish",
      "Smooths idle",
      "Improves emissions",
      "Lubricates the entire fuel system",
      "Safe for all emissions equipment",
      "Restores performance and acceleration",
      "Reduces deposit formation",
      "Reduces noise, vibration and misfires",
      "Compatible with ethanol-blended fuels",
      "Provides corrosion protection for the entire fuel system",
    ],
    keyFigures: [
      { value: "7.9%", label: "fuel economy improvement, up to" },
      { value: "1", label: "tankful to take effect" },
      { value: "PEA", label: "Polyetheramine detergent" },
    ],
    recommendedFor: [
      "Spark-ignition engines on petrol, ethanol and petrol/ethanol blends",
      "Direct injected petrol engines (DISI)",
      "Petrol hybrid vehicles",
    ],
    suitableFor: [
      "Two-stroke air-cooled petrol engines (motorcycles, chainsaws)",
      "Two-stroke water-cooled petrol engines (motorcycles, marine)",
      "Four-stroke petrol engines in lawnmowers, motorcycles, vehicles and marine applications",
    ],
    cautions: [
      "Will not harm catalytic converters or oxygen sensors.",
      "Not recommended for diesel engines.",
    ],
    appliesTo: ["cars-buses-and-suvs", "boats-and-marine-vessels", "fleet-logistics", "generators"],
    media: "product-petrol",
  },
  {
    slug: "x-tend-oil-conditioner",
    legacyPath: "/x-tend-oil-conditioner/",
    name: "X-Tend Oil Conditioner",
    shortName: "Oil Conditioner",
    subtitle: "Oil booster and improver",
    fuel: "oil",
    summary:
      "A synthetic friction reducer and carbon nano-particle anti-wear additive that lifts the performance of conventional and synthetic oils.",
    description:
      "X-Tend Oil Conditioner is a synthetic friction reducer, nano-lubricant and wear reducer. It is formulated for petrol and diesel passenger cars and light trucks, including carburetted, two-stroke, port fuel injected and direct injected engines.",
    overview: [
      "A lubricity-enhancing additive that increases the lubricating and wear-reduction properties of the host oil.",
      "Contains patented synthetic lubricants with lubricating properties that compare favourably even with PAO or mPAO synthetics of the same viscosity.",
      "Its anti-wear component is a patented carbon nano-particle that fills microscopic irregularities on machined surfaces, giving the oil film a smoother surface to form on.",
      "Together, these components extend the base oil's shear stability, oxidation stability, film strength and, above all, friction reduction.",
    ],
    applications:
      "Works in conventional and synthetic oil. Can be added to diesel or petrol engines, power-steering pumps, differentials and hydraulic systems in trucks, construction, farm and lawn equipment, generators, motorcycles, ATVs, cars and industrial applications.",
    benefits: [
      "Reduces coefficient of friction",
      "Improves fuel economy by up to 5%",
      "Reduces wear by up to 43%",
      "Improves shear stability of the host oil",
      "Improves boundary lubrication at start-up",
      "Reduces operating temperature",
      "Eliminates and prevents rust and corrosion",
      "Reduces machine failures and repair costs",
      "Cleans sludge and deposits from surfaces",
      "Reduces noise and vibration",
      "Extends engine oil life",
      "Protects rubber seals",
      "Restores lost compression",
    ],
    keyFigures: [
      { value: "43%", label: "wear reduction, up to" },
      { value: "5%", label: "fuel economy improvement, up to" },
      { value: "203", label: "viscosity index (ASTM D-2270)" },
    ],
    dosage: {
      caption: "Directions for use",
      head: ["Oil / fluid capacity", "X-Tend Oil Conditioner"],
      rows: [
        ["4–6 litres", "1 bottle (50 ml)"],
        ["7–12 litres", "2 bottles (100 ml)"],
        ["13–18 litres", "3 bottles (150 ml)"],
        ["19–24 litres", "4 bottles (200 ml)"],
      ],
    },
    properties: {
      caption: "Typical properties",
      head: ["Property or test", "ASTM", "Result"],
      rows: [
        ["Kinematic viscosity @ 40 °C, mm²/s", "D-445", "53.70 cSt"],
        ["Kinematic viscosity @ 100 °C, mm²/s", "D-445", "11.03 cSt"],
        ["Viscosity index", "D-2270", "203"],
        ["Specific gravity", "D-4052", "0.8873"],
        ["Acid number, mg KOH/g", "D-974", "0.03"],
        ["Flash point (open cup), °F", "D-92", "496"],
        ["Pour point, °C", "D-97", "−36"],
        ["Dielectric breakdown voltage, kV", "D-877", "36.23"],
        ["Water, mass %", "D-6304", "0.01"],
        ["Colour", "D-1500", "L0.5"],
      ],
    },
    appliesTo: ["cars-buses-and-suvs", "fleet-logistics", "haulage-and-heavy-duty-equipment", "agriculture-and-farming", "generators"],
    media: "product-oil",
  },
];

export const fuelLabels: Record<Product["fuel"], string> = {
  diesel: "Diesel (AGO)",
  petrol: "Petrol (PMS)",
  oil: "Engine oil & lubricants",
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
