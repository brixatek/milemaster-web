import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertCircle, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { SpecTable } from "@/components/products/SpecTable";
import { products, getProduct, fuelLabels } from "@/content/products";
import { applications } from "@/content/applications";
import { pageMetadata, productLd } from "@/lib/seo";
import { resolveMedia } from "@/lib/media";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: `${p.name} — ${p.subtitle}`, description: p.summary, path: `/products/${p.slug}` });
}

export default async function ProductPage({ params }: Params) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const related = products.filter((x) => x.slug !== p.slug);
  const apps = applications.filter((a) => p.appliesTo.includes(a.slug));
  const image = resolveMedia(p.media);
  const nav = [
    ["overview", "Overview"],
    ["benefits", "Benefits"],
    ...(p.dosage ? [["dosage", "Dosage"]] : []),
    ...(p.properties ? [["properties", "Technical data"]] : []),
    ["applications", "Applications"],
  ] as const;

  return (
    <>
      <JsonLd data={productLd({ name: p.name, description: p.description, slug: p.slug, image: image?.src })} />
      <PageHero
        crumbs={[{ name: "Products", href: "/products" }, { name: p.name, href: `/products/${p.slug}` }]}
        eyebrow={`${fuelLabels[p.fuel]} · ${p.subtitle}`}
        title={p.name}
        intro={p.summary}
        aside={<MediaFrame mediaKey={p.media} fit="contain" fallback={p.fuel === "diesel" ? "spray" : p.fuel === "petrol" ? "flow" : "lattice"} label={p.shortName} index="DATA SHEET" className="aspect-square border border-bone/10" priority sizes="(min-width:1024px) 40vw, 100vw" />}
      >
        <ButtonLink href={`/request-a-quote?product=${p.slug}`} size="lg">Request a quote</ButtonLink>
        <ButtonLink href="/where-to-buy" variant="secondary" size="lg">Where to buy</ButtonLink>
      </PageHero>

      {/* Key figures */}
      <section aria-label="Key figures" className="border-b border-ink/10">
        <dl className="container-x grid sm:grid-cols-3">
          {p.keyFigures.map((f) => (
            <div key={f.label} className="flex flex-col border-ink/10 py-10 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0 max-sm:border-b">
              <dt className="order-2 mt-2 text-sm text-ink/65">{f.label}</dt>
              <dd className="display order-1 text-[clamp(2.5rem,2rem+2vw,4rem)]">{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="container-x pb-6 text-xs text-ink/65">Figures are as stated on the manufacturer’s data sheet. Results vary with equipment, fuel quality and operating conditions.</p>
      </section>

      <div className="container-x grid-12 gap-y-12 py-20 md:py-28">
        <aside className="col-span-12 lg:col-span-3">
          <nav aria-label="Product sections" className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4 text-ink/65">Data sheet</p>
            <ol className="flex flex-wrap gap-2 lg:block lg:space-y-1 lg:border-l lg:border-ink/12">
              {nav.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="block border border-ink/15 px-3 py-1.5 text-sm text-ink/70 hover:text-ink lg:-ml-px lg:border-0 lg:border-l lg:border-transparent lg:py-1 lg:pl-4 lg:hover:border-signal">{label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="col-span-12 space-y-24 lg:col-span-8 lg:col-start-5">
          <section id="overview" aria-labelledby="overview-t">
            <p className="eyebrow text-signal">01 · Product description</p>
            <h2 id="overview-t" className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] font-medium">{p.subtitle}</h2>
            <p className="mt-6 text-lead text-ink/80">{p.description}</p>
            <ul className="mt-8 space-y-4">
              {p.overview.map((o) => (
                <li key={o} className="flex gap-4 text-ink/75"><span aria-hidden className="mt-2.5 h-px w-6 shrink-0 bg-signal" />{o}</li>
              ))}
            </ul>
          </section>

          <section id="benefits" aria-labelledby="benefits-t">
            <p className="eyebrow text-signal">02 · Benefits</p>
            <h2 id="benefits-t" className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] font-medium">What it does</h2>
            <ul className="mt-8 grid border-t border-ink/12 sm:grid-cols-2">
              {p.benefits.map((b) => (
                <li key={b} className="flex gap-3 border-b border-ink/12 py-4 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                  <Check className="mt-0.5 size-5 shrink-0 text-signal" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            {(p.recommendedFor || p.suitableFor) && (
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                {p.recommendedFor && (
                  <div>
                    <h3 className="text-xl font-medium">Recommended for</h3>
                    <ul className="mt-4 space-y-2 text-ink/75">{p.recommendedFor.map((x) => <li key={x}>— {x}</li>)}</ul>
                  </div>
                )}
                {p.suitableFor && (
                  <div>
                    <h3 className="text-xl font-medium">Also suitable for</h3>
                    <ul className="mt-4 space-y-2 text-ink/75">{p.suitableFor.map((x) => <li key={x}>— {x}</li>)}</ul>
                  </div>
                )}
              </div>
            )}
            {p.cautions && (
              <div className="mt-10 flex gap-4 border-l-2 border-signal bg-bone p-6">
                <AlertCircle className="size-5 shrink-0 text-signal" aria-hidden />
                <ul className="space-y-1">{p.cautions.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            )}
          </section>

          {p.dosage && (
            <section id="dosage" aria-labelledby="dosage-t">
              <p className="eyebrow text-signal">03 · Dosage</p>
              <h2 id="dosage-t" className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] font-medium">{p.dosage.caption}</h2>
              <div className="mt-8"><SpecTable caption={p.dosage.caption} head={p.dosage.head} rows={p.dosage.rows} /></div>
              {p.dosage.steps && (
                <ol className="mt-10 grid gap-8 sm:grid-cols-3">
                  {p.dosage.steps.map((s, i) => (
                    <li key={s.title}>
                      <p className="eyebrow text-ink/65">Step {i + 1}</p>
                      <h3 className="mt-2 text-lg font-medium">{s.title}</h3>
                      <p className="mt-2 text-sm text-ink/70">{s.text}</p>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          )}

          {p.properties && (
            <section id="properties" aria-labelledby="properties-t">
              <p className="eyebrow text-signal">04 · Technical data</p>
              <h2 id="properties-t" className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] font-medium">{p.properties.caption}</h2>
              <div className="mt-8"><SpecTable caption={p.properties.caption} head={p.properties.head} rows={p.properties.rows} /></div>
            </section>
          )}

          <section id="applications" aria-labelledby="applications-t">
            <p className="eyebrow text-signal">Applications</p>
            <h2 id="applications-t" className="mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] font-medium">Where it’s used</h2>
            <p className="mt-6 text-ink/75">{p.applications}</p>
            <ul className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2">
              {apps.map((a) => (
                <li key={a.slug} className="bg-paper">
                  <Link href={`/applications/${a.slug}`} className="group flex items-center justify-between py-4 pr-4 transition-colors hover:text-signal">
                    <span className="font-medium">{a.name}</span>
                    <span aria-hidden className="text-ink/30 group-hover:text-signal">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="border-t border-ink/10 bg-bone py-20 md:py-28" aria-labelledby="related-t">
        <div className="container-x">
          <h2 id="related-t" className="display text-display-s">Complete the treatment</h2>
          <ul className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug} className="bg-bone">
                <Link href={`/products/${r.slug}`} className="group grid grid-cols-[7rem_1fr] items-center gap-6 py-6 md:pr-8">
                  <MediaFrame mediaKey={r.media} fit="contain" fallback={r.fuel === "diesel" ? "spray" : r.fuel === "petrol" ? "flow" : "lattice"} className="aspect-square" sizes="7rem" />
                  <span>
                    <span className="eyebrow block text-signal">{fuelLabels[r.fuel]}</span>
                    <span className="mt-2 block text-2xl font-medium transition-colors group-hover:text-signal">{r.name}</span>
                    <span className="mt-1 block text-sm text-ink/65">{r.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title={`Get ${p.shortName.toLowerCase()} pricing for your operation.`} />
    </>
  );
}
