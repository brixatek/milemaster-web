import type { Faq } from "@/types/content";

// Source: legacy /frequently-asked-questions/. Edited for length and clarity.
// The legacy answers name specific third-party additive manufacturers as the
// source of X-Tend's technology; those names are withheld here until the
// relationship is documented (see docs/GAPS.md).

export const faqs: Faq[] = [
  {
    id: "do-additives-work",
    question: "Do fuel additives work?",
    answer: [
      { type: "p", text: "Scepticism usually comes from diluted retail products built for a low price point. Most over-the-counter additives contain minimal active detergent and need several applications before any marginal benefit shows." },
      { type: "p", text: "X-Tend is an industrial-grade formulation, with high-potency cleaning agents and combustion improvers aimed at the specific problems of the Nigerian fuel market, such as high moisture content and inconsistent detergency. The aim is measurable improvement in fuel economy and engine life, often from the first treatment." },
    ],
  },
  {
    id: "why-injectors-fail",
    question: "Why do diesel injectors fail?",
    answer: [
      { type: "p", text: "A diesel engine depends on injectors delivering a fine, atomised mist under immense pressure. When the spray becomes a stream, combustion is late and weak — power drops and emissions rise." },
      {
        type: "list",
        items: [
          { title: "External nozzle deposits (coking)", text: "Hard carbon on the nozzle exterior distorts the spray pattern and reduces flow." },
          { title: "Internal diesel injector deposits (IDID)", text: "Waxy or soapy residues inside the injector cause sticking and sluggish response." },
        ],
      },
      { type: "p", text: "Diesel systems are lubricated by the fuel itself. Regional fuel standards are often well below the lubricity required by engine manufacturers, and even trace water strips lubricity further, leading to metal-on-metal wear and seizure." },
      { type: "p", text: "X-Tend Diesel Conditioner dissolves internal and external deposits, adds lubricity, stabilises fuel and manages moisture — protecting injectors, pumps and water-separator filters." },
    ],
  },
  {
    id: "warranties",
    question: "What is the effect of additives on machines and warranties?",
    answer: [
      { type: "p", text: "Most equipment manufacturers caution against additives to limit their liability, a sensible safeguard against the many unverified products that contain harmful chemicals such as ferrocene or MMT. Many major automotive and power-generation manufacturers nonetheless sell their own branded treatments, recognising that modern fuels often fall short of engine requirements." },
      {
        type: "list",
        items: [
          { title: "Safe-chemistry mandate", text: "X-Tend contains no harmful metallic compounds or chemicals that could damage catalytic converters, DPFs or internal seals." },
          { title: "Accountability", text: "X-Tend is a professional-grade brand backed by testing, not an anonymous “miracle” product." },
        ],
      },
      { type: "p", text: "Using the wrong additive is a risk. A properly formulated conditioner keeps the engine within the clean, efficient parameters it was designed for." },
    ],
  },
  {
    id: "long-term-damage",
    question: "Will additives damage machines in the long run?",
    answer: [
      { type: "p", text: "The claim that all additives cause long-term damage is a generalisation without data. A fair assessment looks at the specific formulation, how it was tested, and where the chemistry comes from." },
      {
        type: "list",
        items: [
          { title: "Protects seals and gaskets", text: "Neutralises the corrosive effects of high ethanol and methanol content." },
          { title: "Preserves metal surfaces", text: "Adds a microscopic layer of protection against friction and wear." },
          { title: "Maintains as-new performance", text: "Prevents the gradual carbon build-up that eventually chokes high-value engines." },
        ],
      },
      { type: "p", text: "X-Tend is built on more than three decades of testing and is designed as a long-term maintenance tool, not a quick fix." },
    ],
  },
  {
    id: "oil-additive-fuel",
    question: "How can an oil additive reduce fuel consumption?",
    answer: [
      { type: "p", text: "Part of the energy in fuel never reaches the wheels or the alternator; it is lost to parasitic friction at camshaft bearings, piston-liner interfaces and crankshaft bearings — up to 10% of an engine's potential output." },
      { type: "p", text: "High-viscosity oils such as 20W-50 or 15W-40 are often necessary in hot, heavy-duty conditions but create viscous drag. X-Tend Oil Conditioner reinforces film strength, reduces internal resistance and improves circulation at start-up, so standard oils behave more like advanced synthetics." },
      { type: "p", text: "With less friction, the engine runs at its intended equilibrium and burns fuel more completely." },
    ],
  },
  {
    id: "damage-generator",
    question: "Will X-Tend damage my generator or vehicle?",
    answer: [
      { type: "p", text: "No. The bigger risk is running on additive-starved fuel. Seized fuel pumps and clogged injector nozzles are typically caused by fuel lacking detergency and lubricity, not by quality conditioners." },
      {
        type: "list",
        items: [
          { title: "Seal and gasket safety", text: "Tested for compatibility with rubber, plastic and Viton components." },
          { title: "No heavy metals", text: "No ferrocene or harmful solvents that could foul sensors or damage precision pumps." },
        ],
      },
      { type: "p", text: "The frequent injector servicing common in the Nigerian market is a symptom of poor fuel quality. X-Tend closes the lubricity and detergency gap that causes it." },
    ],
  },
  {
    id: "old-equipment",
    question: "Will my old equipment benefit?",
    answer: [
      { type: "p", text: "Yes — older generators and high-mileage vehicles often show the most dramatic improvement, because they carry years of deposits on injectors, valves and combustion chambers." },
      { type: "p", text: "X-Tend dissolves those deposits to restore spray patterns, supplies the lubricity older pumps were designed for, and stabilises performance. The legacy site reports cases of 30-year-old generators and vehicles with over 600,000 km showing smoother running, lower emissions and fuel savings after a few applications." },
    ],
  },
  {
    id: "snake-oil",
    question: "Is it snake oil?",
    answer: [
      { type: "p", text: "Snake oil makes miraculous claims with no basis in chemistry. The fair question is: if fuel and oil could be better, why aren't they made that way at the refinery?" },
      { type: "p", text: "Engines are designed for high-specification fuels found in Europe or North America. Where fuel and oil standards are inconsistent — through storage, moisture or lower refining specifications — a performance gap opens. Refineries meet minimum regulatory requirements, not maximum engine potential." },
      { type: "p", text: "Targeted chemistry can raise fuel and lubricant performance: lifting octane, and reinforcing anti-wear packages such as zinc and molybdenum. X-Tend is a precision tool that bridges the gap between the fuel you have and the fuel your engine needs." },
    ],
  },
  {
    id: "adoption",
    question: "Why don't more people use additives?",
    answer: [
      {
        type: "list",
        items: [
          { title: "Technical awareness", text: "Many operators treat fuel and oil as fixed commodities and see additives as an optional extra." },
          { title: "Bad experiences", text: "Years of low-concentration retail products created general scepticism." },
          { title: "Institutional inertia", text: "Maintenance routines follow tradition, and some service and supply arrangements benefit from frequent repairs and higher fuel volumes." },
        ],
      },
      { type: "p", text: "Organisations adopting X-Tend — bottling plants, construction firms and logistics operators among them — are those that manage to total cost of ownership." },
    ],
  },
  {
    id: "who-benefits",
    question: "Who benefits from using X-Tend?",
    answer: [
      { type: "p", text: "Operators notice smoother equipment, but the main beneficiary is whoever is accountable for the bottom line." },
      {
        type: "list",
        items: [
          { title: "Lower OPEX", text: "An immediate reduction in daily fuel spend." },
          { title: "Protected CAPEX", text: "Longer life for generators, trucks and vessels." },
          { title: "Less downtime", text: "Assets stay in the field earning revenue rather than in the workshop." },
        ],
      },
    ],
  },
  {
    id: "cost-effective",
    question: "Is it cost-effective?",
    answer: [
      { type: "p", text: "Judge it on total cost of ownership, not price per bottle." },
      {
        type: "list",
        items: [
          { title: "Fuel economy", text: "Restored injector precision and lower friction deliver savings that typically exceed the cost of treatment." },
          { title: "Service intervals", text: "Cleaner combustion keeps oil healthier and extends time between filter changes and overhauls." },
          { title: "Parts longevity", text: "One set of injectors or a high-pressure pump can cost more than years of treatment." },
          { title: "Uptime and emissions", text: "Reliable starts, less black smoke and less fouling of DPFs and valves." },
        ],
      },
    ],
  },
  {
    id: "savings-possible",
    question: "Are the fuel savings figures realistic?",
    answer: [
      { type: "p", text: "Where fuel is premium and standardised, efficiency gains are incremental because the baseline is already high. Where fuel quality is inconsistent, an engine can lose 15–30% of its designed efficiency through poor atomisation, moisture and friction. X-Tend recovers that lost efficiency rather than adding power." },
      { type: "p", text: "Savings often go unnoticed because baseline consumption is rarely measured. Measure before and after treatment to see the difference for your own equipment — we can help you set up that trial." },
    ],
  },
];
