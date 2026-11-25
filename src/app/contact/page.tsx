import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { company } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact ${company.name} in Lekki Phase 1, Lagos — phone, email and enquiry form for X-Tend products and services.`,
  path: "/contact",
});

const mapQuery = encodeURIComponent(`${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}`);

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        eyebrow="Contact"
        title="We’d love to hear from you."
        intro="Questions about products, dosage, trials or supply — send a message or call the team directly."
      />
      <section className="container-x grid-12 gap-y-14 py-16 md:py-24">
        <div className="col-span-12 lg:col-span-4">
          <dl className="space-y-10">
            <div>
              <dt className="eyebrow flex items-center gap-2 text-ink/60"><MapPin className="size-4 text-signal" aria-hidden /> Address</dt>
              <dd className="mt-3 text-lg">
                <address className="not-italic">{company.address.street}<br />{company.address.area}, {company.address.city}<br />{company.address.country}</address>
                <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer" className="link-underline mt-3 inline-block text-sm text-signal">Open in Google Maps ↗</a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow flex items-center gap-2 text-ink/60"><Phone className="size-4 text-signal" aria-hidden /> Phone</dt>
              <dd className="mt-3 space-y-1 text-lg">
                {company.phones.map((p) => <a key={p.href} href={p.href} className="link-underline tabular block w-fit">{p.display}</a>)}
              </dd>
            </div>
            <div>
              <dt className="eyebrow flex items-center gap-2 text-ink/60"><Mail className="size-4 text-signal" aria-hidden /> Email</dt>
              <dd className="mt-3 text-lg"><a href={`mailto:${company.email}`} className="link-underline break-all">{company.email}</a></dd>
            </div>
            <div>
              <dt className="eyebrow flex items-center gap-2 text-ink/60"><Clock className="size-4 text-signal" aria-hidden /> Response</dt>
              <dd className="mt-3 text-ink/70">We aim to respond as soon as possible. For urgent supply questions, please call.</dd>
            </div>
          </dl>
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <h2 className="display mb-8 text-display-s">Send a message</h2>
          <EnquiryForm contact={{ email: company.email, phone: company.phones[0] }} />
        </div>
      </section>
    </>
  );
}
