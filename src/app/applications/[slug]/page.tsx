import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { LongForm } from "@/components/sections/LongForm";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { applications, getApplication } from "@/content/applications";
import { products, fuelLabels } from "@/content/products";
import { articleLd, pageMetadata } from "@/lib/seo";
import type { ArtVariant } from "@/components/ui/ArtPanel";

type Params = { params: Promise<{ slug: string }> };
const art: ArtVariant[] = ["flow", "contour", "signal", "spray", "tank", "lattice"];

export function generateStaticParams() {
  return applications.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const a = getApplication((await params).slug);
  if (!a) return {};
  return pageMetadata({ title: `${a.name} — Fuel & Oil Treatment`, description: a.summary, path: `/applications/${a.slug}` });
}

export default async function ApplicationPage({ params }: Params) {
  const a = getApplication((await params).slug);
  if (!a) notFound();
  const idx = applications.indexOf(a);
  const recommended = a.products.map((s) => products.find((p) => p.slug === s)!).filter(Boolean);
  const next = applications[(idx + 1) % applications.length]!;

  return (
    <>
      <JsonLd data={articleLd({ title: a.name, description: a.summary, path: `/applications/${a.slug}` })} />
      <PageHero
        crumbs={[{ name: "Applications", href: "/applications" }, { name: a.name, href: `/applications/${a.slug}` }]}
        eyebrow={a.kicker}
        title={a.name}
        intro={a.summary}
        aside={<MediaFrame mediaKey={a.media} fallback={art[idx] ?? "flow"} label={a.navName} index={String(idx + 1).padStart(2, "0")} className="aspect-[4/3]" priority sizes="(min-width:1024px) 40vw, 100vw" />}
      >
        <ButtonLink href="/request-a-quote" size="lg">Request a quote</ButtonLink>
      </PageHero>

      <LongForm
        sections={a.sections}
        aside={
          <div className="border border-ink/12 p-6">
            <p className="eyebrow text-ink/65">Recommended products</p>
            <ul className="mt-4 space-y-4">
              {recommended.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="group block">
                    <span className="eyebrow block text-signal">{fuelLabels[p.fuel]}</span>
                    <span className="block font-medium transition-colors group-hover:text-signal">{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {a.outcome && (
        <section className="on-dark bg-ink py-20 text-bone md:py-28">
          <div className="container-x">
            <p className="eyebrow text-signal">The outcome</p>
            <p className="display mt-6 max-w-5xl text-display-m">{a.outcome}</p>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28" aria-labelledby="rec-t">
        <div className="container-x">
          <h2 id="rec-t" className="display text-display-s">The treatment programme</h2>
          <ol className="mt-12 grid gap-px bg-ink/10 md:grid-cols-3">
            {recommended.map((p, i) => (
              <li key={p.slug} className="bg-paper">
                <Link href={`/products/${p.slug}`} className="group flex h-full flex-col justify-between gap-8 py-8 md:pr-8 md:[&]:pl-0">
                  <div>
                    <p className="eyebrow text-ink/65">Step {i + 1} · {fuelLabels[p.fuel]}</p>
                    <h3 className="mt-3 text-2xl font-medium transition-colors group-hover:text-signal">{p.name}</h3>
                    <p className="mt-3 text-ink/70">{p.summary}</p>
                  </div>
                  <span className="text-sm text-signal">View data sheet →</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <Link href={`/applications/${next.slug}`} className="group container-x flex items-center justify-between gap-6 py-12">
          <span>
            <span className="eyebrow block text-ink/65">Next application</span>
            <span className="display mt-2 block text-display-s transition-colors group-hover:text-signal">{next.name}</span>
          </span>
          <span aria-hidden className="text-4xl text-ink/30 transition-transform group-hover:translate-x-2 group-hover:text-signal">→</span>
        </Link>
      </section>
      <CtaBand />
    </>
  );
}
