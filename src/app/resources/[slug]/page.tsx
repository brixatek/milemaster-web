import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { LongForm } from "@/components/sections/LongForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { resources, getResource } from "@/content/resources";
import { articleLd, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const r = getResource((await params).slug);
  if (!r) return {};
  return pageMetadata({ title: r.title, description: r.summary, path: `/resources/${r.slug}`, type: "article" });
}

export default async function ResourcePage({ params }: Params) {
  const r = getResource((await params).slug);
  if (!r) notFound();
  const more = resources.filter((x) => x.slug !== r.slug).slice(0, 3);
  return (
    <>
      <JsonLd data={articleLd({ title: r.title, description: r.summary, path: `/resources/${r.slug}` })} />
      <PageHero
        size="m"
        crumbs={[{ name: "Resources", href: "/resources" }, { name: r.title, href: `/resources/${r.slug}` }]}
        eyebrow={`${r.category} · ${r.readingMinutes} min read`}
        title={r.title}
        intro={r.summary}
      />
      <LongForm
        sections={r.sections}
        aside={
          r.source ? (
            <div className="border-l-2 border-signal pl-4 text-sm text-ink/65">
              <p className="eyebrow mb-2 text-ink/60">Data source</p>
              {r.source.href ? <a href={r.source.href} target="_blank" rel="noopener noreferrer" className="underline">{r.source.label}</a> : r.source.label}
            </div>
          ) : undefined
        }
      />
      <section className="border-t border-ink/10 bg-bone py-16 md:py-24">
        <div className="container-x">
          <h2 className="eyebrow text-ink/60">Keep reading</h2>
          <ul className="mt-8 grid gap-px bg-ink/10 md:grid-cols-3">
            {more.map((m) => (
              <li key={m.slug} className="bg-bone">
                <Link href={`/resources/${m.slug}`} className="group block py-6 md:pr-8">
                  <p className="eyebrow text-ink/60">{m.category}</p>
                  <p className="mt-2 text-xl font-medium transition-colors group-hover:text-signal">{m.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
