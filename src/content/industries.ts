import type { Industry } from "@/types/content";

// Source: legacy "Industries Served" pages. These pages describe how the
// X-Tend Fuel Storage Solutions (XFSS) programme applies to each sector.

const xfssTools = {
  type: "list" as const,
  items: [
    { title: "Biocides and dispersants", text: "Eliminate destructive microbial growth." },
    { title: "Cetane improvers", text: "Better diesel engine and generator performance." },
    { title: "Water eliminators", text: "Combat water accumulation in storage tanks." },
    { title: "Sludge dispersants and anti-corrosion protectants", text: "Healthier storage tanks for longer." },
  ],
};

export const industries: Industry[] = [
  {
    slug: "fleets",
    legacyPath: "/fleets/",
    name: "Fleets",
    summary: "Intracity and intercity bus operators and private fleets that run on stored fuel.",
    media: "ind-fleets",
    sections: [
      {
        id: "risk",
        title: "When stored fuel stops the fleet",
        blocks: [
          { type: "p", text: "Intracity and intercity bus companies depend on stored fuel — which means problems with fuel or storage tanks can stop the business." },
          { type: "p", text: "Microbes and microbially induced corrosion can spread from the storage tank to every vehicle it supplies. These problems are hard to fix without the right tools and approach, and too often operators rely on guesswork." },
        ],
      },
      {
        id: "xfss",
        title: "The XFSS approach",
        blocks: [
          { type: "p", text: "X-Tend Fuel Storage Solutions (XFSS) works with non-retail fuel users and private fleets using a hybrid approach to stored fuel and tanks: the right treatment chemistry to eliminate problems and maximise engine life, plus mechanical tank services and remediation for what chemistry alone cannot achieve." },
        ],
      },
    ],
  },
  {
    slug: "hospitals-health-care-facilities",
    legacyPath: "/hospitals-health-care-facilities/",
    name: "Hospitals & Healthcare",
    summary: "Hospitals, clinics, surgical centres and care facilities whose backup power cannot fail.",
    media: "ind-health",
    sections: [
      {
        id: "risk",
        title: "Backup power that has to work",
        blocks: [
          { type: "p", text: "Hospitals, clinics, surgical centres and home-health facilities cannot afford for stored fuel or emergency generators to fail. The cost of failure can be severe for everyone involved." },
          { type: "p", text: "Even well-prepared facilities can be caught out. Today's fuels are not what they used to be: microbial and biomass infestations develop quickly, plugging filters and compromising backup systems. Diesel now forms gums and varnish fast enough to darken and stratify in less than half the time it once did — and fuel-borne microbes and water attack the tanks themselves." },
        ],
      },
      {
        id: "xfss",
        title: "How XFSS protects healthcare facilities",
        blocks: [
          { type: "p", text: "The X-Tend Fuel Storage Solution combines treatment chemistry that prevents microbial and corrosion problems with mechanical tank services and remediation, covering every element of emergency fuel health." },
        ],
      },
    ],
  },
  {
    slug: "government-fleets-facilities",
    legacyPath: "/government-fleets-facilities/",
    name: "Government Fleets & Facilities",
    summary: "Fire, police, public works and utilities that rely on stored fuel to serve the public.",
    media: "ind-government",
    sections: [
      {
        id: "risk",
        title: "Public service runs on stored fuel",
        blocks: [
          { type: "p", text: "Fire services, police, state and local public works and utilities all serve constituents who expect them to deliver. Many of them (RRS, for example) rely on stored fuel and storage tanks to do so." },
          { type: "p", text: "Modern fuels develop microbial and water problems faster than ever. Gums, varnish and sludge, together with microbial infestation and biomass, can lead to poor performance at best and outright failure at worst. Assessing the true condition of stored fuel — especially microbial contamination — is difficult, yet staying ahead of it is critical." },
        ],
      },
      {
        id: "xfss",
        title: "A preventive programme",
        blocks: [
          { type: "p", text: "The XFSS hybrid approach gives government operators a complete, preventive solution, so they can anticipate critical problems instead of reacting after the damage is done." },
          xfssTools,
        ],
      },
    ],
  },
  {
    slug: "telecommunications-and-manufacturing",
    legacyPath: "/telecommunications-and-manufacturing/",
    name: "Telecoms & Manufacturing",
    summary: "Data centres, telecom sites and factories that depend on generators during grid outages.",
    media: "ind-telecom",
    sections: [
      {
        id: "risk",
        title: "Generators ready at the critical moment",
        blocks: [
          { type: "p", text: "Data centres, telecom operators and factories all rely on backup generators to keep running when grid supply fails — and usually on service companies to keep those generators ready to run." },
          { type: "p", text: "Whether a generator performs depends heavily on its stored fuel. Today's generator fuels develop microbe and water problems quickly; gums, varnish, sludge and biomass can undermine full-load performance exactly when it matters, and the real condition of the fuel is hard to know." },
        ],
      },
      {
        id: "xfss",
        title: "The complete generator fuel solution",
        blocks: [
          { type: "p", text: "XFSS keeps generators problem-free and ready with treatment chemistry that prevents microbial and corrosion problems in generator fuel and tanks." },
          xfssTools,
        ],
      },
    ],
  },
  {
    slug: "hospitality",
    legacyPath: "/hospitality/",
    name: "Hospitality",
    summary: "Hotels, bars and restaurants where diesel cost and quality decide profitability.",
    media: "ind-hospitality",
    sections: [
      {
        id: "context",
        title: "A sector squeezed by energy costs",
        blocks: [
          { type: "p", text: "In recent years, a new wave of high-end and mid-market hotels, bars and restaurants has opened in Nigeria, driven by capital controls and by the pandemic, which pushed people to look for experiences closer to home." },
          { type: "p", text: "Poor grid supply, high diesel prices and questionable diesel quality have pushed operating costs up sharply — a major factor in the failure of many new businesses in the sector." },
        ],
      },
      {
        id: "xfss",
        title: "Keeping generators ready",
        blocks: [
          { type: "p", text: "XFSS keeps generators ready with treatment chemistry that prevents microbial and corrosion problems in fuel and tanks." },
          xfssTools,
        ],
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
