import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services — Fuel Storage Solutions & Remote Fuel Monitoring",
  description: "XFSS fuel and tank care programmes and remote fuel monitoring that exposes diesel under-delivery and theft.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services" }]}
        eyebrow="Services"
        title="Beyond the bottle."
        intro="Treatment chemistry works best inside a programme. We combine it with tank servicing and data so that fuel stays in specification — and stays accounted for."
      />
      <section className="container-x space-y-px py-16 md:py-24">
        {services.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group grid-12 items-center gap-y-8 border-t border-ink/12 py-12" data-reveal>
            <div className={`col-span-12 md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
              <MediaFrame mediaKey={s.media} fallback={i === 0 ? "tank" : "signal"} className="aspect-[16/10]" sizes="(min-width:768px) 50vw, 100vw" />
            </div>
            <div className={`col-span-12 md:col-span-5 ${i % 2 ? "md:order-1" : "md:col-start-8"}`}>
              <p className="eyebrow text-signal">{String(i + 1).padStart(2, "0")} · {s.short}</p>
              <h2 className="display mt-4 text-display-s transition-colors group-hover:text-signal">{s.name}</h2>
              <p className="mt-5 text-lead text-ink/70">{s.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 group-hover:border-signal group-hover:text-signal">Explore <ArrowUpRight className="size-4" aria-hidden /></span>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
