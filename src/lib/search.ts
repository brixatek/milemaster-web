import { applications } from "@/content/applications";
import { faqs } from "@/content/faq";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { resources } from "@/content/resources";
import { services } from "@/content/services";
import type { Block, SearchDoc, Section } from "@/types/content";

export function blocksToText(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case "list":
          return b.items.map((i) => `${i.title ?? ""} ${i.text}`).join(" ");
        case "table":
          return [b.caption, ...b.head, ...b.rows.flat(), b.note].filter(Boolean).join(" ");
        default:
          return b.text;
      }
    })
    .join(" ");
}

const sectionsText = (sections: Section[]) => sections.map((s) => `${s.title} ${blocksToText(s.blocks)}`).join(" ");

const staticPages: SearchDoc[] = [
  { href: "/where-to-buy", title: "Where to buy X-Tend", kind: "Page", summary: "Stockists in Lagos, Abuja, Port Harcourt and Kano, plus online stores.", body: "stockist shop buy online konga eth10k lagos abuja rivers port harcourt kano" },
  { href: "/tests-and-testimonials", title: "Tests & testimonials", kind: "Page", summary: "Field-test videos, customer reviews and written testimonials.", body: "video test review testimonial results customers" },
  { href: "/contact", title: "Contact Milemaster", kind: "Page", summary: "Phone, email and office address in Lekki, Lagos.", body: "contact phone email address office lekki lagos" },
  { href: "/request-a-quote", title: "Request a quote", kind: "Page", summary: "Tell us about your equipment and fuel volumes for a tailored quotation.", body: "quote price pricing bulk order procurement" },
  { href: "/about", title: "About X-Tend and Milemaster", kind: "Page", summary: "Three decades of fuel chemistry, supplied in Nigeria by Milemaster.", body: "about company history formulated united states" },
];

export const searchIndex: SearchDoc[] = [
  ...products.map((p) => ({
    href: `/products/${p.slug}`,
    title: p.name,
    kind: "Product" as const,
    summary: p.summary,
    body: [p.subtitle, p.description, ...p.overview, p.applications, ...p.benefits].join(" "),
  })),
  ...applications.map((a) => ({ href: `/applications/${a.slug}`, title: a.name, kind: "Application" as const, summary: a.summary, body: `${a.kicker} ${sectionsText(a.sections)}` })),
  ...industries.map((i) => ({ href: `/industries/${i.slug}`, title: i.name, kind: "Industry" as const, summary: i.summary, body: sectionsText(i.sections) })),
  ...services.map((s) => ({ href: `/services/${s.slug}`, title: s.name, kind: "Service" as const, summary: s.summary, body: sectionsText(s.sections) })),
  ...resources.map((r) => ({ href: `/resources/${r.slug}`, title: r.title, kind: "Resource" as const, summary: r.summary, body: sectionsText(r.sections) })),
  ...faqs.map((f) => ({ href: `/faq#${f.id}`, title: f.question, kind: "FAQ" as const, summary: blocksToText(f.answer).slice(0, 180) + "…", body: blocksToText(f.answer) })),
  ...staticPages,
];

const normalise = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu, " ");

export type SearchHit = SearchDoc & { score: number; excerpt: string };

/** Weighted term search: title > summary > body. Returns contextual excerpts. */
export function search(query: string, limit = 30): SearchHit[] {
  const terms = normalise(query).split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return [];
  const hits: SearchHit[] = [];
  for (const doc of searchIndex) {
    const title = normalise(doc.title);
    const summary = normalise(doc.summary);
    const body = normalise(doc.body);
    let score = 0;
    let matchedAll = true;
    for (const t of terms) {
      const s = (title.includes(t) ? 8 : 0) + (summary.includes(t) ? 3 : 0) + (body.split(t).length - 1);
      if (!s) matchedAll = false;
      score += s;
    }
    if (!score) continue;
    if (matchedAll) score *= 1.5;
    hits.push({ ...doc, score, excerpt: excerpt(doc, terms) });
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

function excerpt(doc: SearchDoc, terms: string[]) {
  const text = `${doc.summary} ${doc.body}`;
  const lower = text.toLowerCase();
  const idx = terms.map((t) => lower.indexOf(t)).filter((i) => i >= 0).sort((a, b) => a - b)[0];
  if (idx === undefined || idx < doc.summary.length) return doc.summary;
  const start = Math.max(0, idx - 70);
  return `…${text.slice(start, start + 200).trim()}…`;
}
