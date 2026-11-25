import { PageHero } from "@/components/sections/PageHero";
import { Blocks } from "@/components/ui/Blocks";
import { company } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Terms of Use", path: "/terms", description: `Terms governing use of the ${company.name} website.` });

export default function TermsPage() {
  return (
    <>
      <PageHero size="m" crumbs={[{ name: "Terms of use", href: "/terms" }]} eyebrow="Legal" title="Terms of use" intro="Draft for legal review before launch." />
      <section className="container-x py-16 md:py-24">
        <Blocks
          blocks={[
            { type: "h", text: "Use of this website" },
            { type: "p", text: `By using this website you agree to these terms. The site is provided by ${company.name} for general information about X-Tend products and services.` },
            { type: "h", text: "Product information" },
            { type: "p", text: "Performance figures are as stated by the manufacturer or reported by customers and are not guarantees. Results depend on equipment, fuel quality, maintenance and operating conditions. Always follow the dosage and directions on the product label." },
            { type: "h", text: "Quotations" },
            { type: "p", text: "Information on this website is not an offer. Prices, availability and terms of supply are confirmed in writing in a quotation." },
            { type: "h", text: "Intellectual property" },
            { type: "p", text: "Content on this website, including text, graphics and logos, may not be reproduced without permission." },
            { type: "h", text: "External links" },
            { type: "p", text: "Links to third-party sites, including online marketplaces, are provided for convenience. We are not responsible for their content or practices." },
            { type: "h", text: "Governing law" },
            { type: "p", text: "These terms are governed by the laws of the Federal Republic of Nigeria." },
          ]}
        />
      </section>
    </>
  );
}
