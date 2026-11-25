import type { MetadataRoute } from "next";
import { applications } from "@/content/applications";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { resources } from "@/content/resources";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly") => ({ url: absoluteUrl(path), lastModified: now, changeFrequency, priority });
  return [
    entry("/", 1),
    entry("/products", 0.9),
    ...products.map((p) => entry(`/products/${p.slug}`, 0.9)),
    entry("/applications", 0.8),
    ...applications.map((a) => entry(`/applications/${a.slug}`, 0.8)),
    entry("/industries", 0.7),
    ...industries.map((i) => entry(`/industries/${i.slug}`, 0.7)),
    entry("/services", 0.7),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.7)),
    entry("/resources", 0.6),
    ...resources.map((r) => entry(`/resources/${r.slug}`, 0.6)),
    entry("/tests-and-testimonials", 0.7),
    entry("/faq", 0.7),
    entry("/where-to-buy", 0.8),
    entry("/about", 0.6),
    entry("/contact", 0.7),
    entry("/request-a-quote", 0.8),
    entry("/privacy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
  ];
}
