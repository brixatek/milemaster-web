import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProofBand } from "@/components/sections/ProofBand";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand, company } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About X-Tend and Milemaster Integrated Services",
  description: "X-Tend is a US-formulated fuel and lubricant conditioning brand backed by 30+ years of research and field-testing, supplied in Nigeria by Milemaster Integrated Services.",
  path: "/about",
});

const principles = [
  { title: "Measurable value", text: "Our mission is to deliver measurable value and operational reliability through chemical engineering — results you can see in your fuel logs." },
  { title: "Close the gap", text: "We exist because the fuel and oil available locally often fall short of what engines were designed for. X-Tend restores what is missing." },
  { title: "Total cost of ownership", text: "We work with the people accountable for the bottom line: lower fuel spend, longer asset life, less downtime." },
  { title: "Prevention over repair", text: "Clean, stable fuel and fortified lubricants prevent the failures that drive expensive servicing cycles." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        eyebrow="About us"
        title="Thirty years of fuel chemistry, applied where it matters most."
        intro={`${brand.name} is a private fuel and lubricant conditioning brand, formulated in the United States. In Nigeria, ${brand.name} products and programmes are supplied by ${company.name}.`}
      />
      <section className="container-x grid-12 gap-y-12 py-20 md:py-28">
        <div className="col-span-12 lg:col-span-5">
          <MediaFrame mediaKey="lab-experiments" fallback="lattice" label="Fuel chemistry" index="LAB" className="aspect-[4/5]" sizes="(min-width:1024px) 40vw, 100vw" />
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <SectionHeading index="01" eyebrow="The brand" title="Engineering excellence, field-tested." size="s" />
          <div className="prose-x mt-8 text-ink/80">
            <p>X-Tend represents more than 30 years of specialised research and field-testing dedicated to solving complex fuel problems. Its mission is simple: deliver measurable value and operational reliability through advanced chemical engineering.</p>
            <p>{company.about} Products are designed to optimise combustion and protect internal components in petrol, ethanol-blended and diesel engines.</p>
            <p>The range combines a complete diesel improver, a one-tankful petrol fuel-system conditioner and a nano-particle oil conditioner, supported by fuel storage programmes and remote fuel monitoring.</p>
          </div>
          <SectionHeading index="02" eyebrow="In Nigeria" title={company.name} size="s" className="mt-16" />
          <div className="prose-x mt-8 text-ink/80">
            <p>{company.name} supplies {brand.name} products to motorists, fleets and facilities from its office in {company.address.area}, {company.address.city}, and through a network of stockists in Lagos, Abuja, Port Harcourt and Kano.</p>
            <p>Beyond product supply, the team runs fuel storage programmes and monitoring for organisations that depend on stored diesel and backup power. <Link href="/where-to-buy" className="underline">Find a stockist</Link> or <Link href="/contact" className="underline">contact the team</Link>.</p>
          </div>
        </div>
      </section>
      <ProofBand />
      <section className="on-dark bg-ink py-20 text-bone md:py-28">
        <div className="container-x">
          <SectionHeading index="03" eyebrow="How we work" title="Four principles." />
          <ol className="mt-14 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <li key={p.title} className="bg-ink py-8 sm:pr-8" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <span className="eyebrow text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 text-bone/65">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
