import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { AccordionItem } from "@/components/ui/Accordion";
import { Blocks } from "@/components/ui/Blocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/content/faq";
import { blocksToText } from "@/lib/search";
import { faqLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions — Do Fuel Additives Work?",
  description: "Straight answers on fuel additives: injector failure, warranties, long-term effects, oil additives and fuel economy, cost-effectiveness and realistic savings.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs.map((f) => ({ question: f.question, answer: blocksToText(f.answer) })))} />
      <PageHero
        crumbs={[{ name: "FAQ", href: "/faq" }]}
        eyebrow="Frequently asked questions"
        title="The hard questions, answered."
        intro="Scepticism about additives is healthy. Here is how X-Tend works, what it won’t do, and how to judge the results for yourself."
      />
      <section className="container-x grid-12 gap-y-10 py-16 md:py-24">
        <nav aria-label="Questions" className="col-span-12 lg:col-span-4">
          <ol className="space-y-2 text-sm lg:sticky lg:top-28">
            {faqs.map((f, i) => (
              <li key={f.id}>
                <a href={`#${f.id}`} className="flex gap-3 text-ink/65 hover:text-signal">
                  <span className="eyebrow pt-0.5 text-ink/60">{String(i + 1).padStart(2, "0")}</span>
                  {f.question}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="col-span-12 lg:col-span-8">
          {faqs.map((f, i) => (
            <AccordionItem key={f.id} id={f.id} title={f.question} defaultOpen={i === 0}>
              <Blocks blocks={f.answer} />
            </AccordionItem>
          ))}
        </div>
      </section>
      <CtaBand title="Still have a question?" body="Our team can talk through your equipment, your fuel and what results to expect." quoteLabel="Ask a specialist" />
    </>
  );
}
