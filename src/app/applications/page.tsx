import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { applications } from "@/content/applications";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";
import type { ArtVariant } from "@/components/ui/ArtPanel";

export const metadata = pageMetadata({
  title: "Applications — Vehicles, Marine, Fleets, Heavy Plant, Farming & Power",
  description: "How X-Tend fuel and oil conditioners protect cars, buses, boats, delivery fleets, heavy-duty equipment, farm machinery and generators.",
  path: "/applications",
});

const art: ArtVariant[] = ["flow", "contour", "signal", "spray", "tank", "lattice"];

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Applications", href: "/applications" }]}
        eyebrow="Solutions by asset"
        title="Every engine has a fuel problem. Here’s yours."
        intro="Fuel quality affects a motorcycle, a tugboat and a 1 MVA generator differently. Choose your application to see the risks and the treatment programme."
      />
      <section className="container-x py-16 md:py-24">
        <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {applications.map((a, i) => (
            <li key={a.slug} className={i % 2 === 1 ? "md:mt-24" : ""} data-reveal>
              <Link href={`/applications/${a.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <MediaFrame mediaKey={a.media} fallback={art[i] ?? "flow"} label={a.kicker} index={String(i + 1).padStart(2, "0")} className="size-full transition-transform duration-[1.2s] ease-(--ease-out-expo) group-hover:scale-[1.03]" sizes="(min-width:768px) 45vw, 100vw" />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-signal">{String(i + 1).padStart(2, "0")}</p>
                    <h2 className="mt-2 text-3xl font-medium transition-colors group-hover:text-signal md:text-4xl">{a.name}</h2>
                    <p className="mt-3 max-w-lg text-ink/70">{a.summary}</p>
                  </div>
                  <ArrowUpRight className="mt-6 size-7 shrink-0 text-ink/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" aria-hidden />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="on-dark bg-ink py-20 text-bone md:py-28">
        <div className="container-x grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-signal">Industries served</p>
            <h2 className="display mt-5 text-display-s">Fuel storage programmes for organisations that cannot stop.</h2>
          </div>
          <ul className="col-span-12 lg:col-span-6 lg:col-start-7">
            {industries.map((ind) => (
              <li key={ind.slug} className="border-t border-bone/12 last:border-b">
                <Link href={`/industries/${ind.slug}`} className="group flex items-center justify-between gap-6 py-5">
                  <span>
                    <span className="block text-xl font-medium transition-colors group-hover:text-signal">{ind.name}</span>
                    <span className="mt-1 block text-sm text-bone/65">{ind.summary}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-bone/30 group-hover:text-signal" aria-hidden />
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
