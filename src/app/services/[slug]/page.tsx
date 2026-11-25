import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, FileText } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { LongForm } from "@/components/sections/LongForm";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { services, getService } from "@/content/services";
import { industries } from "@/content/industries";
import { publicFileExists } from "@/lib/media";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { company } from "@/config/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.name, description: s.summary, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const idx = services.indexOf(s);
  const doc = s.document && publicFileExists(s.document.href) ? s.document : null;

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.name, description: s.summary, url: absoluteUrl(`/services/${s.slug}`), provider: { "@type": "Organization", name: company.name }, areaServed: "NG" }} />
      <PageHero
        crumbs={[{ name: "Services", href: "/services" }, { name: s.name, href: `/services/${s.slug}` }]}
        eyebrow={`Service · ${s.short}`}
        title={s.name}
        intro={s.summary}
        aside={<MediaFrame mediaKey={s.media} fallback={idx === 0 ? "tank" : "signal"} className="aspect-[4/3]" priority sizes="(min-width:1024px) 40vw, 100vw" />}
      >
        <ButtonLink href="/request-a-quote" size="lg">Discuss your sites</ButtonLink>
      </PageHero>
      <LongForm
        sections={s.sections}
        aside={
          <div className="space-y-8">
            <div className="border border-ink/12 p-6">
              <FileText className="size-6 text-signal" aria-hidden />
              <p className="mt-4 font-medium">{s.document?.label.replace(" (PDF)", "") ?? "Service brief"}</p>
              {doc ? (
                <a href={doc.href} download className="mt-4 inline-flex items-center gap-2 text-sm text-signal underline-offset-4 hover:underline">
                  <Download className="size-4" aria-hidden /> Download PDF
                </a>
              ) : (
                <Link href="/contact" className="mt-4 inline-flex text-sm text-signal underline-offset-4 hover:underline">Request the brochure</Link>
              )}
            </div>
            {s.slug === "fuel-storage-solutions" && (
              <div className="hidden lg:block">
                <p className="eyebrow mb-3 text-ink/65">Who it’s for</p>
                <ul className="space-y-1.5 text-sm">
                  {industries.map((i) => (
                    <li key={i.slug}><Link href={`/industries/${i.slug}`} className="link-underline text-ink/70 hover:text-ink">{i.name}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        }
      />
      {s.slug === "fuel-storage-solutions" && (
        <section className="on-dark bg-ink py-16 text-bone">
          <div className="container-x flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-2xl text-lead text-bone/80">Read the full technical guide on water, oxidation, microbes and ethanol phase separation in stored fuel.</p>
            <ButtonLink href="/resources/fuel-storage" variant="inverse">Protecting stored fuel</ButtonLink>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
