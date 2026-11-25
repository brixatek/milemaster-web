import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";
import type { ArtVariant } from "@/components/ui/ArtPanel";

export const metadata = pageMetadata({
  title: "Industries Served",
  description: "Fuel storage and generator fuel programmes for fleets, hospitals, government facilities, telecoms, manufacturing and hospitality.",
  path: "/industries",
});

const art: ArtVariant[] = ["signal", "contour", "tank", "lattice", "flow"];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", href: "/industries" }]}
        eyebrow="Industries served"
        title="When the generator has to start, the fuel has to be right."
        intro="Organisations that rely on stored fuel face the same threats — water, microbes, oxidation and corrosion. The X-Tend Fuel Storage Solutions programme is built for them."
      />
      <section className="container-x py-16 md:py-24">
        <ul className="border-t border-ink/12">
          {industries.map((ind, i) => (
            <li key={ind.slug} className="border-b border-ink/12" data-reveal>
              <Link href={`/industries/${ind.slug}`} className="group grid items-center gap-6 py-8 md:grid-cols-[4rem_1fr_16rem_auto] md:gap-10">
                <span className="eyebrow text-signal">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-3xl font-medium tracking-tight transition-colors group-hover:text-signal md:text-4xl">{ind.name}</span>
                  <span className="mt-2 block max-w-xl text-ink/65">{ind.summary}</span>
                </span>
                <MediaFrame mediaKey={ind.media} fallback={art[i] ?? "flow"} className="hidden aspect-[4/3] md:block" sizes="16rem" />
                <ArrowUpRight className="size-7 text-ink/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal max-md:hidden" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Protect your backup fuel." body="Ask about a fuel and tank assessment under the XFSS programme." />
    </>
  );
}
