import { PageHero } from "@/components/sections/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { company } from "@/config/site";
import { products } from "@/content/products";
import { pageMetadata } from "@/lib/seo";
import type { fuelInterests } from "@/schemas/enquiry";

export const metadata = pageMetadata({
  title: "Request a Quote",
  description: "Request pricing for X-Tend conditioners, fuel storage programmes or remote fuel monitoring for your fleet, facility or equipment.",
  path: "/request-a-quote",
});

type Props = { searchParams: Promise<{ product?: string }> };

const steps = [
  { t: "Tell us what you run", d: "Equipment, fuel type and approximate monthly volume." },
  { t: "Get a recommendation", d: "The right products, dosage and, where useful, a storage or monitoring programme." },
  { t: "Measure the result", d: "We’ll help you record baseline consumption so you can verify the difference." },
];

export default async function QuotePage({ searchParams }: Props) {
  const { product } = await searchParams;
  const p = products.find((x) => x.slug === product);
  const interest = p ? ([p.shortName] as (typeof fuelInterests)[number][]) : [];
  return (
    <>
      <PageHero
        crumbs={[{ name: "Request a quote", href: "/request-a-quote" }]}
        eyebrow="Procurement"
        title="Request a quote."
        intro="For fleets, facilities, distributors and procurement teams. Share a few details and we’ll come back with a tailored proposal."
      />
      <section className="container-x grid-12 gap-y-14 py-16 md:py-24">
        <ol className="col-span-12 space-y-8 lg:col-span-4">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t border-ink/12 pt-6">
              <span className="eyebrow text-signal">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-2xl font-medium">{s.t}</h2>
              <p className="mt-2 text-ink/70">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <EnquiryForm key={product ?? "none"} variant="quote" defaultInterests={interest} contact={{ email: company.email, phone: company.phones[0] }} />
        </div>
      </section>
    </>
  );
}
