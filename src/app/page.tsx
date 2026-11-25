import Link from "next/link";
import { ArrowUpRight, Droplets, Flame, Gauge, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProofBand } from "@/components/sections/ProofBand";
import { ApplicationsShowcase } from "@/components/sections/ApplicationsShowcase";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { EmissionsCalculator } from "@/components/sections/EmissionsCalculator";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { applications } from "@/content/applications";
import { products, fuelLabels } from "@/content/products";
import { services } from "@/content/services";
import { resources } from "@/content/resources";
import { industries } from "@/content/industries";
import { featuredTestimonials, reviewSummary } from "@/content/evidence";
import { pageMetadata } from "@/lib/seo";
import type { ArtVariant } from "@/components/ui/ArtPanel";

export const metadata = pageMetadata({ path: "/" });

const appArt: Record<string, ArtVariant> = {
  "cars-buses-and-suvs": "flow",
  "boats-and-marine-vessels": "contour",
  "fleet-logistics": "signal",
  "haulage-and-heavy-duty-equipment": "spray",
  "agriculture-and-farming": "tank",
  generators: "lattice",
};

const benefits = [
  { icon: Gauge, title: "Restores power & performance", text: "Cleans injectors and combustion chambers so engines deliver their designed output." },
  { icon: Flame, title: "Increases fuel efficiency", text: "More complete combustion and lower friction mean fewer litres for the same work." },
  { icon: ShieldCheck, title: "Prevents ethanol damage", text: "Protects seals and fuel lines from alcohol-blended petrol." },
  { icon: Sparkles, title: "Cleans engine deposits", text: "Dissolves carbon, gums and varnish from the fuel system." },
  { icon: Droplets, title: "Controls moisture", text: "Disperses water to stop phase separation, corrosion and microbial growth." },
  { icon: Timer, title: "Promotes engine longevity", text: "Lubricity and TBN support extend component and oil life." },
];

const gaps = [
  { n: "01", title: "The fuel gap", text: "Imported fuel often arrives short of the detergents, cetane improvers and stabilisers modern engines need — so machines run below their designed efficiency." },
  { n: "02", title: "The lubricant gap", text: "Some locally blended oils lack the anti-wear and anti-friction packages that high-load engines depend on, wasting energy as friction." },
  { n: "03", title: "The storage gap", text: "Water, oxygen and microbes degrade diesel and ethanol-petrol in storage, turning paid-for fuel into sludge." },
];

export default function HomePage() {
  const [lead, ...rest] = products;
  return (
    <>
      <HomeHero />
      <ProofBand />

      {/* Company introduction */}
      <section className="py-24 md:py-36">
        <div className="container-x grid-12 gap-y-14">
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading index="01" eyebrow="About X-Tend" title={<>Three decades of engineering, <span className="text-ink/60">one obsession: efficiency.</span></>} size="l" />
          </div>
          <div className="col-span-12 grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:pt-24" data-reveal>
            <div>
              <p className="eyebrow text-signal">Research &amp; field-testing</p>
              <p className="mt-4 text-ink/75">X-Tend represents more than 30 years of specialised research and field-testing dedicated to solving complex fuel problems — with one aim: measurable value and operational reliability for customers.</p>
            </div>
            <div>
              <p className="eyebrow text-signal">Formulated in the USA</p>
              <p className="mt-4 text-ink/75">Formulated in the United States for petrol, ethanol-blended and diesel engines, X-Tend optimises combustion and protects internal components so machinery runs at peak efficiency.</p>
            </div>
            <div className="sm:col-span-2">
              <MediaFrame mediaKey="lab-experiments" fallback="lattice" label="Fuel chemistry" index="LAB" className="aspect-[16/9]" />
            </div>
          </div>
        </div>
      </section>

      {/* The performance gap */}
      <section className="on-dark bg-ink py-24 text-bone md:py-36">
        <div className="container-x">
          <SectionHeading
            index="02"
            eyebrow="Why it matters"
            align="split"
            title="Your engine was designed for better fuel than it gets."
            intro="Manufacturers engineer engines around high-specification fuels and oils. Where supply falls short, efficiency leaks away silently. X-Tend restores what is missing."
          />
          <ol className="mt-16 grid gap-px bg-bone/10 md:mt-24 md:grid-cols-3">
            {gaps.map((g, i) => (
              <li key={g.n} className="bg-ink pt-8 md:pr-10 md:[&:not(:first-child)]:pl-10" data-reveal style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}>
                <span className="eyebrow text-signal">{g.n}</span>
                <h3 className="mt-6 text-3xl font-medium">{g.title}</h3>
                <p className="mt-4 text-bone/65">{g.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 md:py-36" aria-labelledby="products-title">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading index="03" eyebrow="The range" title={<span id="products-title">Three conditioners. Every engine you run.</span>} />
            <ButtonLink href="/products" variant="secondary">Compare all products</ButtonLink>
          </div>
          <div className="mt-16 grid gap-px bg-ink/10 md:mt-20 lg:grid-cols-12">
            <ProductFeature product={lead!} large />
            <div className="grid gap-px bg-ink/10 lg:col-span-5">
              {rest.map((p) => (
                <ProductFeature key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="bg-bone py-24 md:py-36">
        <div className="container-x">
          <SectionHeading index="04" eyebrow="Applications" align="split" title="Engineered for the work your engines do." intro="Precision treatments for petrol, diesel and bio-fuel engines — from a single car to a 24/7 power plant." />
          <div className="mt-16 md:mt-24">
            <ApplicationsShowcase
              items={applications.map((a, i) => ({
                slug: a.slug,
                name: a.name,
                kicker: a.kicker,
                summary: a.summary,
                visual: <MediaFrame mediaKey={a.media} fallback={appArt[a.slug] ?? "flow"} index={String(i + 1).padStart(2, "0")} className="size-full" sizes="40vw" />,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-36">
        <div className="container-x grid-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading index="05" eyebrow="Outcomes" title="What X-Tend does inside the engine." />
              <ButtonLink href="/faq" variant="secondary" className="mt-10">Read the technical FAQ</ButtonLink>
            </div>
          </div>
          <ul className="col-span-12 grid sm:grid-cols-2 lg:col-span-8">
            {benefits.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="border-t border-ink/12 py-8 sm:pr-10 sm:even:pl-10 sm:even:border-l" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 2) * 90}ms` }}>
                <Icon className="size-7 text-signal" strokeWidth={1.4} aria-hidden />
                <h3 className="mt-6 text-2xl font-medium">{title}</h3>
                <p className="mt-3 text-ink/70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services split */}
      <section aria-labelledby="services-title" className="on-dark grid bg-ink text-bone lg:grid-cols-2">
        <h2 id="services-title" className="sr-only">Services</h2>
        {services.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group relative flex min-h-[34rem] flex-col justify-end overflow-hidden p-[var(--gutter)] lg:min-h-[44rem]">
            <MediaFrame mediaKey={s.media} fallback={i === 0 ? "tank" : "signal"} className="absolute inset-0 transition-transform duration-[1.2s] ease-(--ease-out-expo) group-hover:scale-[1.03]" sizes="50vw" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
            <div className="relative max-w-lg">
              <p className="eyebrow text-signal">Service {String(i + 1).padStart(2, "0")} · {s.short}</p>
              <h3 className="display mt-5 text-display-s">{s.name}</h3>
              <p className="mt-4 text-bone/70">{s.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 border-b border-bone/40 pb-1 transition-colors group-hover:border-signal group-hover:text-signal">
                Explore the service <ArrowUpRight className="size-4" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Testimonials */}
      <section className="on-dark border-t border-bone/10 bg-ink py-24 text-bone md:py-32">
        <div className="container-x">
          <TestimonialSlider items={featuredTestimonials} rating={reviewSummary.rating} count={reviewSummary.count} />
          <div className="mt-14 flex justify-end">
            <ButtonLink href="/tests-and-testimonials" variant="secondary">All tests &amp; testimonials</ButtonLink>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="on-dark bg-ink-3 py-24 text-bone md:py-36">
        <div className="container-x grid-12 items-center gap-y-12">
          <div className="col-span-12 lg:col-span-6 lg:pr-12">
            <SectionHeading index="06" eyebrow="Emissions" title="Every litre you don’t burn is 2.6 kg of CO₂ that never exists." intro="Efficiency is the most direct emissions strategy available to a diesel-dependent business. Model it with your own numbers." />
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/resources/carbon-emission-reduction" variant="inverse">How the maths works</ButtonLink>
              <ButtonLink href="/resources/lower-energy-tariffs" variant="secondary">Blended cost of energy</ButtonLink>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6" data-reveal>
            <EmissionsCalculator />
          </div>
        </div>
      </section>

      {/* Industries + resources */}
      <section className="py-24 md:py-36">
        <div className="container-x grid-12 gap-y-20">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeading index="07" eyebrow="Industries" title="Built for operations where downtime is not an option." size="s" />
            <ul className="mt-10">
              {industries.map((ind) => (
                <li key={ind.slug} className="border-t border-ink/12 last:border-b">
                  <Link href={`/industries/${ind.slug}`} className="group flex items-center justify-between gap-4 py-5 text-xl font-medium transition-colors hover:text-signal">
                    {ind.name}
                    <ArrowUpRight className="size-5 text-ink/30 transition-colors group-hover:text-signal" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <SectionHeading index="08" eyebrow="Resources" title="Know your fuel." size="s" />
            <ul className="mt-10 grid gap-px bg-ink/10">
              {resources.slice(0, 4).map((r) => (
                <li key={r.slug} className="bg-paper">
                  <Link href={`/resources/${r.slug}`} className="group block py-6">
                    <p className="eyebrow text-ink/60">{r.category} · {r.readingMinutes} min read</p>
                    <p className="mt-2 font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-signal">{r.title}</p>
                    <p className="mt-2 text-ink/65">{r.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href="/resources" variant="ghost" className="mt-6">All resources</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductFeature({ product: p, large }: { product: (typeof products)[number]; large?: boolean }) {
  const figure = p.keyFigures[0]!;
  return (
    <Link
      href={`/products/${p.slug}`}
      className={`group relative grid overflow-hidden bg-paper transition-colors hover:bg-white ${large ? "lg:min-h-[36rem] lg:col-span-7" : "min-h-[18rem] sm:grid-cols-[1fr_12rem]"}`}
    >
      <div className={`relative z-10 flex flex-col justify-between py-8 md:p-10 ${large ? "max-w-md" : ""}`}>
        <div>
          <p className="eyebrow text-signal">{fuelLabels[p.fuel]}</p>
          <h3 className={`mt-4 font-medium ${large ? "display text-display-s" : "text-3xl"}`}>{p.name}</h3>
          <p className="mt-3 text-ink/70">{p.summary}</p>
        </div>
        <div className="mt-8 flex items-end justify-between gap-6">
          <p>
            <span className="display block text-5xl text-ink">{figure.value}</span>
            <span className="mt-1 block text-sm text-ink/60">{figure.label}</span>
          </p>
          <ArrowUpRight className="size-7 text-ink/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" aria-hidden />
        </div>
      </div>
      <MediaFrame
        mediaKey={p.media}
        fallback={p.fuel === "diesel" ? "spray" : p.fuel === "petrol" ? "flow" : "lattice"}
        fit="contain"
        className={large ? "absolute inset-y-0 right-0 w-1/2 max-lg:hidden" : "hidden sm:block"}
        sizes={large ? "30vw" : "12rem"}
      />
    </Link>
  );
}
