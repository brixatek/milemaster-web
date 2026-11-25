import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { products, fuelLabels } from "@/content/products";
import { applications } from "@/content/applications";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products — Diesel, Petrol & Oil Conditioners",
  description: "Compare X-Tend Diesel Conditioner, Petrol Booster and Oil Conditioner by fuel system and application. Technical data, dosage and enquiry.",
  path: "/products",
});

export default function ProductsPage() {
  const appName = (slug: string) => applications.find((a) => a.slug === slug)?.navName ?? slug;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Products", href: "/products" }]}
        eyebrow="Product catalogue"
        title="Chemistry for every fuel system you run."
        intro="Three US-formulated conditioners — for diesel, petrol and lubricating oil — that restore efficiency and protect engines from the fuel they are actually given."
      >
        <ButtonLink href="/request-a-quote" size="lg">Request a quote</ButtonLink>
        <ButtonLink href="/where-to-buy" variant="secondary" size="lg">Where to buy</ButtonLink>
      </PageHero>
      <section className="container-x py-16 md:py-24">
        <ProductCatalog
          applications={applications.map((a) => ({ slug: a.slug, name: a.navName }))}
          items={products.map((p) => ({
            slug: p.slug,
            name: p.name,
            subtitle: p.subtitle,
            summary: p.summary,
            fuel: p.fuel,
            fuelLabel: fuelLabels[p.fuel],
            applications: p.appliesTo.map((s) => ({ slug: s, name: appName(s) })),
            figures: p.keyFigures,
            keywords: [p.name, p.subtitle, p.summary, p.description, ...p.benefits, p.applications].join(" ").toLowerCase(),
            visual: <MediaFrame mediaKey={p.media} fit="contain" fallback={p.fuel === "diesel" ? "spray" : p.fuel === "petrol" ? "flow" : "lattice"} label={p.shortName} className="size-full" sizes="18rem" />,
          }))}
        />
      </section>
      <CtaBand title="Not sure which product fits?" body="Tell us your equipment and fuel. We’ll recommend the right combination and dosage for your operation." />
    </>
  );
}
