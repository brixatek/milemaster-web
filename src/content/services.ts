import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "fuel-storage-solutions",
    legacyPath: "/fuel-storage/",
    name: "X-Tend Fuel Storage Solutions",
    short: "XFSS",
    summary:
      "A hybrid programme that combines mechanical tank servicing with the right fuel chemistry, so stored diesel and petrol stay in specification — and stay that way.",
    media: "svc-storage",
    sections: [
      {
        id: "what",
        eyebrow: "The programme",
        title: "Chemistry and mechanics, together",
        blocks: [
          { type: "lead", text: "Protecting stored fuel takes more than one tool. It involves testing, mechanical remediation such as filtration, and chemical treatment with the right products." },
          { type: "p", text: "Good stored fuel burns cleanly, without black smoke, and leaves no deposits in the engine. When fuel falls out of specification, engines run poorly or not at all — usually because of what has accumulated in the fuel, not the fuel itself." },
          { type: "p", text: "XFSS works with non-retail fuel users — fleets, hospitals, government facilities, telecom and manufacturing sites, and hospitality operators — to keep stored fuel problem-free and ready for business." },
        ],
      },
      {
        id: "mechanical",
        eyebrow: "Mechanical servicing",
        title: "What filtration can — and can't — do",
        blocks: [
          { type: "p", text: "Filters and water separators remove particulates and water from fuel and tanks. Mechanical processing is the best way to bring out-of-spec fuel back into specification and to deal with large volumes of accumulated water." },
          { type: "p", text: "Its limitation is that it does nothing to stop problems returning. Polished fuel can darken again, or redevelop microbial growth, within a couple of months." },
        ],
      },
      {
        id: "chemical",
        eyebrow: "Chemical treatment",
        title: "What treatment chemistry adds",
        blocks: [
          {
            type: "list",
            items: [
              { title: "Fuel stabilisers", text: "Antioxidant packages that stop the chain reactions that degrade fuel. They must be added while the fuel is fresh — a stabiliser cannot reverse sludge once it has formed." },
              { title: "Water controllers", text: "Emulsifying or water-suspending chemistries that manage limited amounts of free water." },
              { title: "Demulsifiers", text: "Break fuel-water emulsions so water drops out as free water and can be removed." },
              { title: "Biocides and sludge dispersants", text: "Eliminate microbial contamination. They must be circulated through the fuel to reach what they need to remediate." },
            ],
          },
        ],
      },
      {
        id: "hybrid",
        eyebrow: "Best practice",
        title: "The hybrid approach",
        blocks: [
          { type: "p", text: "Start with periodic mechanical fuel and tank servicing to remove existing water, sludge, asphaltene dropout and microbial growth. Combine it with quality chemical treatments that make polishing more effective and prevent problems returning for far longer than either method alone." },
        ],
      },
    ],
  },
  {
    slug: "remote-fuel-monitoring",
    legacyPath: "/diesel-under-delivery-and-diesel-theft/",
    name: "Remote Fuel Monitoring",
    short: "Monitoring",
    summary:
      "Software-led oversight for remote generator sites that exposes diesel under-delivery, doctored runtime records and theft.",
    media: "svc-monitoring",
    document: { label: "Download the monitoring system brochure (PDF)", href: "/documents/x-tend-diesel-monitoring-system.pdf" },
    sections: [
      {
        id: "problem",
        eyebrow: "The problem",
        title: "Remote sites, limited oversight",
        blocks: [
          { type: "lead", text: "The biggest risk of operating remote sites is the lack of oversight. Telecom operators, banks, restaurant and pharmacy chains all know the problem." },
          { type: "p", text: "These organisations rely on internal teams and third parties for generator inspections every 250 running hours, refuelling and emergency response. Everyone gets full site access, but the owner has no direct view of day-to-day activity and no way to tell who is responsible for discrepancies." },
          { type: "p", text: "Human error already creates gaps where time and money disappear. Worse, a dishonest refueller can stop a delivery short — or skip it — while the person on site controls the equipment that would reveal it." },
        ],
      },
      {
        id: "solution",
        eyebrow: "The solution",
        title: "How X-Tend monitoring works",
        blocks: [
          { type: "p", text: "The X-Tend platform records and organises asset and site performance data, then turns it into charts, graphs and reports used to spot irregular patterns." },
          {
            type: "list",
            items: [
              { title: "KPI thresholds", text: "Limits on fuel and performance metrics flag outlying behaviour, such as sudden configuration changes or altered values." },
              { title: "Access logging", text: "A log of who accessed each site helps trace vandalism or other criminal intent." },
              { title: "Runtime cross-checks", text: "Because both the generator's own runtime and the runtime of integrated relays are tracked, doctored generator hours show up as discrepancies." },
              { title: "Accountability", text: "Working with the customer, the individuals and third-party refuellers responsible can be identified, and reported uptime reconciled against fuel delivered for accurate reimbursement." },
            ],
          },
        ],
      },
      {
        id: "outcomes",
        eyebrow: "Outcomes",
        title: "What monitoring has uncovered",
        blocks: [
          { type: "p", text: "In the period assessed, the system detected doctored hours that would have resulted in fuel losses of thousands of litres, and stopped a pattern of behaviour that could otherwise have continued indefinitely." },
          { type: "p", text: "Fuel prices have more than quadrupled in four years, increasing the incentive for corner-cutting. Ongoing monitoring protects customers against both." },
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
