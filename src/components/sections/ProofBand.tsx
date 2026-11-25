import { Counter } from "@/components/ui/Counter";
import { proofPoints } from "@/content/evidence";

/** Verified figures only — each is traceable to the legacy site (see docs). */
export function ProofBand() {
  return (
    <section aria-label="Key figures" className="border-y border-ink/10 bg-paper">
      <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
        {proofPoints.map((p, i) => (
          <div key={p.label} className="flex flex-col border-ink/10 py-10 pr-6 max-lg:odd:border-r lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 max-lg:[&:nth-child(-n+2)]:border-b max-lg:even:pl-6" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
            <dt className="order-2 mt-3 max-w-[22ch] text-sm leading-snug text-ink/65">{p.label}</dt>
            <dd className="display order-1 text-[clamp(2.5rem,1.6rem+3vw,4.5rem)] text-ink">
              <Counter value={p.value} decimals={"decimals" in p ? p.decimals : 0} suffix={"suffix" in p ? p.suffix : ""} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
