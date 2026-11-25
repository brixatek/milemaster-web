import type { Resource } from "@/types/content";

export const resources: Resource[] = [
  {
    slug: "expectations-from-using-x-tend",
    legacyPath: "/expectations-from-using-x-tend/",
    title: "What to expect from X-Tend",
    category: "Product guidance",
    summary: "Why imported fuel and locally blended lubricants underperform, and how conditioners restore near-factory efficiency.",
    readingMinutes: 2,
    sections: [
      {
        id: "gap",
        title: "Closing the quality gap",
        blocks: [
          { type: "p", text: "There is a gap in the quality of fuel allowed into the country. It leaves machines running sub-optimally and consuming more fuel." },
          { type: "p", text: "There is a similar gap in some locally blended lubricants, which leaves machines running with more friction — wasting energy and, again, burning more fuel." },
          { type: "p", text: "X-Tend Diesel Conditioner restores the detergents, cetane improvers and stabilisers that are missing from the fuel. X-Tend Oil Conditioner supplies the additives needed to bring oil back to standard or premium quality." },
          { type: "p", text: "Applied to vehicles, machines and equipment, the conditioners restore efficiency close to factory level, so equipment performs as it was designed to." },
        ],
      },
    ],
  },
  {
    slug: "carbon-emission-reduction",
    legacyPath: "/carbon-emission-reduction/",
    title: "Carbon emission reduction",
    category: "Emissions",
    summary: "Every litre of diesel burned releases about 2.6 kg of CO₂. Burning fewer litres for the same work is the most direct way to cut emissions.",
    readingMinutes: 2,
    sections: [
      {
        id: "principle",
        title: "Efficiency is an emissions strategy",
        blocks: [
          { type: "p", text: "A generator or vehicle produces a generally accepted 2.6 kg of CO₂ for every litre of diesel it burns. An inefficient engine needs more fuel for the same task — and emits more." },
          { type: "p", text: "Reducing the diesel needed for a task through better efficiency directly reduces the CO₂ released into the atmosphere." },
        ],
      },
      {
        id: "example",
        title: "A worked example",
        blocks: [
          {
            type: "table",
            caption: "Illustrative scenario from the legacy site",
            head: ["Scenario", "Diesel for the task", "CO₂ produced"],
            rows: [
              ["Inefficient engine", "50 litres", "2.6 × 50 = 130 kg"],
              ["After efficiency improvement", "30 litres", "2.6 × 30 = 78 kg"],
              ["Reduction", "20 litres", "52 kg (40%)"],
            ],
            note: "Hypothetical figures used to illustrate the calculation. Actual savings depend on equipment, fuel and operating conditions.",
          },
        ],
      },
    ],
  },
  {
    slug: "lower-energy-tariffs",
    legacyPath: "/lower-energy-tariffs/",
    title: "Lowering your blended cost of energy",
    category: "Energy economics",
    summary: "For most Nigerian businesses the real cost of power blends grid tariffs with diesel generation. Cutting generator fuel use pulls that blend down.",
    readingMinutes: 3,
    sections: [
      {
        id: "bcoe",
        title: "The Blended Cost of Energy (BCOE)",
        blocks: [
          { type: "p", text: "The true cost of power is rarely just the NERC-regulated grid tariff. For most commercial and industrial consumers it is a blend of grid supply and far more expensive captive power from diesel or gas generators." },
          {
            type: "list",
            items: [
              { title: "Grid-dominant mix", text: "Near-constant grid supply keeps the blended cost close to the statutory tariff (above ₦200/kWh for Band A at the time of writing)." },
              { title: "Generator-dominant mix", text: "Running standby generators 12–20 hours a day drives the blended cost sharply higher, because diesel generation costs far more than grid power." },
            ],
          },
          { type: "p", text: "Every hour the grid fails, your blended tariff climbs. When diesel is expensive, the real cost per kWh can easily triple the grid rate." },
        ],
      },
      {
        id: "impact",
        title: "Where X-Tend fits",
        blocks: [
          { type: "p", text: "The most effective lever isn't hoping for more grid hours — it is reducing the specific fuel consumption of your generators." },
          {
            type: "table",
            caption: "Hypothetical scenario from the legacy site",
            head: ["", "Before", "After"],
            rows: [
              ["Daily diesel consumption", "500 litres", "380 litres"],
              ["Blended cost of power", "₦850/kWh", "Moves toward grid rate"],
            ],
            note: "Illustrative only. Diesel prices cited on the legacy page ranged from ₦1,200 to ₦1,800 per litre.",
          },
          { type: "p", text: "Lowering the fuel needed to produce each kilowatt-hour cuts operating expenditure and pulls the blended tariff toward the grid rate." },
        ],
      },
    ],
  },
  {
    slug: "carbon-dioxide-produced-per-kilowatt-hour",
    legacyPath: "/carbon-dioxide-produced-per-kilowatt-hour/",
    title: "Carbon dioxide produced per kilowatt-hour",
    category: "Emissions",
    summary: "Reference data on CO₂ emission factors by fuel for utility-scale power generation, using US EIA figures for 2022.",
    readingMinutes: 2,
    source: { label: "U.S. Energy Information Administration, State Electricity Profiles (U.S. profile, tables 5 and 7)", href: "https://www.eia.gov/electricity/state/" },
    sections: [
      {
        id: "context",
        title: "Emission factors vary by source",
        blocks: [
          { type: "p", text: "In the United States, utility-scale power plants (at least one megawatt of capacity) generated about 4.23 trillion kWh in 2022, emitting about 1.65 billion metric tons of CO₂." },
          { type: "p", text: "Emissions per kWh depend on the energy source and on the type and efficiency of the plant, so grid emission factors change hourly, daily and seasonally. Individual plants may differ considerably from the averages below." },
        ],
      },
      {
        id: "data",
        title: "US net generation and CO₂ emissions by fuel, 2022",
        blocks: [
          {
            type: "table",
            head: ["Fuel", "Generation (million kWh)", "CO₂ (million metric tons)", "CO₂ (million short tons)", "lb CO₂ per kWh"],
            rows: [
              ["Coal", "831,512", "868", "957", "2.30"],
              ["Natural gas", "1,687,067", "743", "819", "0.97"],
              ["Petroleum", "22,931", "25", "27", "2.38"],
              ["All energy sources", "4,230,672", "1,650", "1,819", "0.86"],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "fuel-storage",
    legacyPath: "/fuel-storage/",
    title: "Protecting stored fuel: a practical guide",
    category: "Fuel quality",
    summary: "How water, oxidation and microbes degrade stored diesel and ethanol-petrol — and the best practices that keep fuel usable.",
    readingMinutes: 6,
    sections: [
      {
        id: "water",
        title: "Water accumulation in diesel tanks",
        blocks: [
          { type: "p", text: "Water builds up in tanks that are vented to the outside. Day-night temperature swings cause condensation on the tank walls; it runs down and settles at the bottom, because water is heavier than diesel." },
          { type: "p", text: "A thin layer of free water in contact with diesel is all bacteria and fungi need to thrive. The acids and corrosive by-products they produce degrade fuel quality and corrode tanks." },
          { type: "p", text: "Coalescers, filters and centrifuges can remove significant amounts of water. Some treatments absorb water and lock it into the fuel for combustion; demulsifiers break emulsions so free water can be drained. A good fuel and tank programme removes excess water and adds water controllers and biocides to stop microbial problems before they start." },
        ],
      },
      {
        id: "stability",
        title: "Stability breakdown in stored diesel",
        blocks: [
          { type: "p", text: "Today's diesel and biodiesel blends are prone to oxidative instability. Everyday exposure to water, oxygen, light, heat and bacterial by-products breaks fuel molecules apart and turns them into unstable compounds that form sludge and deposits." },
          { type: "p", text: "Water and air supply the oxygen for oxidation and hydrolysis; heat speeds the reactions up; microbial by-products add acidity that attacks both fuel and tank." },
        ],
      },
      {
        id: "ethanol",
        title: "Stored ethanol blends",
        blocks: [
          { type: "p", text: "Ethanol became a common petrol oxygenate around 2005–2006, after MTBE was phased out over groundwater concerns. Oxygenates help petrol burn with fewer harmful emissions." },
          { type: "p", text: "Ethanol blends have a much shorter storage life than diesel and readily attract water. That water accelerates oxidation, encourages microbial growth and causes phase separation. Once phase-separated, stored petrol is useless — its octane and combustibility are gone and it cannot be restored. Prevention is the only protection." },
        ],
      },
      {
        id: "best-practice",
        title: "Best practice: chemical and mechanical",
        blocks: [
          {
            type: "list",
            items: [
              { title: "Mechanical treatment", text: "Filters and water separators bring out-of-spec fuel back into specification and handle large volumes of water — but do nothing to stop problems returning." },
              { title: "Fuel stabilisers", text: "Antioxidants that prevent the chain reactions of oxidation. Add them to fresh fuel; they cannot reverse sludge that has already formed." },
              { title: "Water controllers and demulsifiers", text: "Manage limited free water, or break emulsions so water can be removed." },
              { title: "Biocides and sludge dispersants", text: "Fix microbial contamination. Circulate them through the fuel — simply pouring them on top is rarely effective." },
            ],
          },
          { type: "p", text: "The recommended approach combines both: periodic mechanical servicing to remove water, sludge, asphaltene dropout and microbial growth, followed by chemical treatments that improve polishing and prevent recurrence for much longer." },
        ],
      },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
