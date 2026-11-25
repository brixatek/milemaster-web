import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { LongForm } from "@/components/sections/LongForm";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { industries, getIndustry } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";
import type { ArtVariant } from "@/components/ui/ArtPanel";

type Params = { params: Promise<{ slug: string }> };
const art: ArtVariant[] = ["signal", "contour", "tank", "lattice", "flow"];

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const ind = getIndustry((await params).slug);
  if (!ind) return {};
  return pageMetadata({ title: `${ind.name} — Fuel Storage Solutions`, description: ind.summary, path: `/industries/${ind.slug}` });
}

export default async function IndustryPage({ params }: Params) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();
  const idx = industries.indexOf(ind);
  const others = industries.filter((x) => x.slug !== ind.slug);
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", href: "/industries" }, { name: ind.name, href: `/industries/${ind.slug}` }]}
        eyebrow="Industries served"
        title={ind.name}
        intro={ind.summary}
        aside={<MediaFrame mediaKey={ind.media} fallback={art[idx] ?? "flow"} label={ind.name} className="aspect-[4/3]" priority sizes="(min-width:1024px) 40vw, 100vw" />}
      >
        <ButtonLink href="/services/fuel-storage-solutions" size="lg">About XFSS</ButtonLink>
        <ButtonLink href="/request-a-quote" variant="secondary" size="lg">Request an assessment</ButtonLink>
      </PageHero>
      <LongForm
        sections={ind.sections}
        aside={
          <div className="hidden lg:block">
            <p className="eyebrow mb-3 text-ink/65">Other industries</p>
            <ul className="space-y-1.5 text-sm">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/industries/${o.slug}`} className="link-underline text-ink/70 hover:text-ink">{o.name}</Link></li>
              ))}
            </ul>
          </div>
        }
      />
      <CtaBand title="Keep backup power ready." body="Speak to us about treatment chemistry and tank servicing for your facility’s stored fuel." />
    </>
  );
}
