import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { resources } from "@/content/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources — Fuel Quality, Emissions & Energy Economics",
  description: "Technical guides on stored fuel, CO₂ emissions per litre and kWh, the blended cost of energy and what to expect from X-Tend.",
  path: "/resources",
});

export default function ResourcesPage() {
  const [feature, ...rest] = resources.slice().sort((a, b) => b.readingMinutes - a.readingMinutes);
  return (
    <>
      <PageHero
        crumbs={[{ name: "Resources", href: "/resources" }]}
        eyebrow="Resources"
        title="The technical case, in plain numbers."
        intro="Guides for engineers, facility managers and finance teams on fuel quality, emissions and the real cost of energy."
      />
      <section className="container-x py-16 md:py-24">
        <Link href={`/resources/${feature!.slug}`} className="group grid-12 items-end gap-y-6 border-y border-ink/12 py-12">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow text-signal">Featured · {feature!.category} · {feature!.readingMinutes} min read</p>
            <h2 className="display mt-4 text-display-m transition-colors group-hover:text-signal">{feature!.title}</h2>
          </div>
          <p className="col-span-12 text-lead text-ink/70 lg:col-span-4">{feature!.summary}</p>
        </Link>
        <ul className="mt-4 grid gap-px bg-ink/10 md:grid-cols-2">
          {rest.map((r) => (
            <li key={r.slug} className="bg-paper">
              <Link href={`/resources/${r.slug}`} className="group flex h-full flex-col justify-between gap-6 py-10 md:pr-10">
                <div>
                  <p className="eyebrow text-ink/65">{r.category} · {r.readingMinutes} min read</p>
                  <h2 className="mt-3 text-3xl font-medium transition-colors group-hover:text-signal">{r.title}</h2>
                  <p className="mt-3 text-ink/70">{r.summary}</p>
                </div>
                <ArrowUpRight className="size-6 text-ink/30 group-hover:text-signal" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
