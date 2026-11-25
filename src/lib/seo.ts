import type { Metadata } from "next";
import { brand, company, site } from "@/config/site";

type PageMeta = {
  title?: string;
  description?: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Builds per-page metadata with canonical, Open Graph and Twitter tags. */
export function pageMetadata({ title, description, path, type = "website", noindex }: PageMeta): Metadata {
  const desc = description ?? site.defaultDescription;
  return {
    title: title ?? { absolute: site.defaultTitle },
    description: desc,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type,
      url: absoluteUrl(path),
      title: title ?? site.defaultTitle,
      description: desc,
      siteName: `${brand.name} · ${company.name}`,
      locale: site.locale,
    },
    twitter: { card: "summary_large_image", title: title ?? site.defaultTitle, description: desc },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

/* ---------------- JSON-LD builders ---------------- */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: company.name,
    ...(company.legalName ? { legalName: company.legalName } : {}),
    url: site.url,
    email: company.email,
    telephone: company.phones.map((p) => p.href.replace("tel:", "")),
    brand: { "@type": "Brand", name: brand.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: `${company.address.area}, ${company.address.city}`,
      addressCountry: company.address.countryCode,
    },
    ...(company.social.length ? { sameAs: company.social.map((s) => s.href) } : {}),
  };
}

export function breadcrumbLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function productLd(p: { name: string; description: string; slug: string; image?: string | null }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    url: absoluteUrl(`/products/${p.slug}`),
    brand: { "@type": "Brand", name: brand.name },
    ...(p.image ? { image: absoluteUrl(p.image) } : {}),
  };
}

export function articleLd(a: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    mainEntityOfPage: absoluteUrl(a.path),
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function faqLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
