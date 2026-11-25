import { ButtonLink } from "@/components/ui/Button";
import { company } from "@/config/site";

/** Closing call-to-action, used at the foot of internal pages. */
export function CtaBand({ title = "Talk to a fuel specialist.", body, quoteLabel = "Request a quote" }: { title?: string; body?: string; quoteLabel?: string }) {
  return (
    <section className="bg-bone">
      <div className="container-x grid-12 items-end gap-y-8 py-20 md:py-28">
        <div className="col-span-12 lg:col-span-8" data-reveal>
          <p className="eyebrow text-signal">Next step</p>
          <h2 className="display mt-5 text-display-m">{title}</h2>
          <p className="mt-6 max-w-2xl text-lead text-ink/70">
            {body ?? "Tell us what you run, what it burns and how much. We'll recommend a treatment programme and help you set up a before-and-after measurement."}
          </p>
        </div>
        <div className="col-span-12 flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end" data-reveal>
          <ButtonLink href="/request-a-quote" size="lg">{quoteLabel}</ButtonLink>
          <ButtonLink href={company.phones[0].href} variant="secondary" size="lg" arrow={false}>
            Call us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
