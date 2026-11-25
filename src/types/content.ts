/** Rich content blocks used by long-form pages. CMS-friendly by design. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "lead"; text: string }
  | { type: "list"; items: { title?: string; text: string }[] }
  | { type: "quote"; text: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][]; note?: string };

export type Section = {
  id: string;
  eyebrow?: string;
  title: string;
  blocks: Block[];
};

export type MediaKey = string;

export type FuelType = "diesel" | "petrol" | "oil";

export type Product = {
  slug: string;
  legacyPath: string;
  name: string;
  shortName: string;
  subtitle: string;
  fuel: FuelType;
  summary: string;
  description: string;
  overview: string[];
  applications: string;
  benefits: string[];
  /** Headline claims quoted from the manufacturer data sheet. */
  keyFigures: { value: string; label: string }[];
  recommendedFor?: string[];
  suitableFor?: string[];
  cautions?: string[];
  dosage?: { caption: string; head: [string, string]; rows: [string, string][]; steps?: { title: string; text: string }[] };
  properties?: { caption: string; head: string[]; rows: string[][] };
  appliesTo: string[]; // application slugs
  media: MediaKey;
};

export type Application = {
  slug: string;
  legacyPath: string;
  name: string;
  navName: string;
  kicker: string;
  summary: string;
  fuels: FuelType[];
  products: string[];
  sections: Section[];
  outcome?: string;
  media: MediaKey;
};

export type Industry = {
  slug: string;
  legacyPath: string;
  name: string;
  summary: string;
  sections: Section[];
  media: MediaKey;
};

export type Service = {
  slug: string;
  legacyPath: string;
  name: string;
  short: string;
  summary: string;
  sections: Section[];
  document?: { label: string; href: string };
  media: MediaKey;
};

export type Resource = {
  slug: string;
  legacyPath: string;
  title: string;
  category: "Emissions" | "Energy economics" | "Fuel quality" | "Product guidance";
  summary: string;
  readingMinutes: number;
  sections: Section[];
  source?: { label: string; href?: string };
  media?: MediaKey;
};

export type Faq = { id: string; question: string; answer: Block[] };

export type Testimonial = {
  name: string;
  quote: string;
  product?: string;
  location?: string;
};

export type Stockist = {
  name: string;
  address: string[];
  state: "Lagos" | "Abuja" | "Rivers" | "Kano";
  email: string;
  phones: string[];
};

export type SearchDoc = {
  href: string;
  title: string;
  kind: "Product" | "Application" | "Industry" | "Service" | "Resource" | "FAQ" | "Page";
  summary: string;
  body: string;
};
