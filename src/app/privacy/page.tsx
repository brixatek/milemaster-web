import { PageHero } from "@/components/sections/PageHero";
import { Blocks } from "@/components/ui/Blocks";
import { company } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Privacy Policy", path: "/privacy", description: `How ${company.name} collects and uses personal data submitted through this website.` });

export default function PrivacyPage() {
  return (
    <>
      <PageHero size="m" crumbs={[{ name: "Privacy policy", href: "/privacy" }]} eyebrow="Legal" title="Privacy policy" intro="Draft for legal review before launch." />
      <section className="container-x py-16 md:py-24">
        <Blocks
          blocks={[
            { type: "h", text: "Who we are" },
            { type: "p", text: `This website is operated by ${company.name}, ${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}. Contact: ${company.email}.` },
            { type: "h", text: "What we collect" },
            { type: "p", text: "When you submit an enquiry or quote form we collect the details you provide: name, email address, and optionally phone number, organisation, equipment and fuel information and your message. We also record the page the form was sent from." },
            { type: "h", text: "How we use it" },
            { type: "p", text: "We use these details only to respond to your enquiry and, where you ask, to prepare a quotation. We do not sell personal data." },
            { type: "h", text: "Lawful basis and retention" },
            { type: "p", text: "We process enquiry data on the basis of your consent and our legitimate interest in responding to you, in line with the Nigeria Data Protection Act 2023. We keep enquiry records only as long as needed for that purpose." },
            { type: "h", text: "Cookies and third parties" },
            { type: "p", text: "This website does not set advertising or analytics cookies. Embedded YouTube videos load only after you choose to play them, using YouTube’s privacy-enhanced mode; YouTube’s own policy then applies." },
            { type: "h", text: "Your rights" },
            { type: "p", text: `You may ask to access, correct or delete your personal data by emailing ${company.email}.` },
          ]}
        />
      </section>
    </>
  );
}
