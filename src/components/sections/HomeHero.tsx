import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { resolveMedia } from "@/lib/media";
import { SprayField } from "./SprayField";

const fuels = ["Diesel · AGO", "Petrol · PMS", "Ethanol blends", "Engine oils", "Stored fuel", "Generators", "Marine", "Heavy plant"];

export function HomeHero() {
  const range = resolveMedia("hero-product");
  return (
    <section className="on-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-bone">
      <div aria-hidden className="blueprint absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(80%_70%_at_60%_50%,black,transparent)]" />
      <div aria-hidden className="absolute top-1/2 left-[55%] -z-10 size-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/12 blur-[140px]" />
      <SprayField />
      {range && (
        <div className="absolute right-[4%] bottom-[14%] hidden w-[30vw] max-w-[520px] xl:block">
          <Image src={range.src} alt={range.alt} width={range.width} height={range.height} priority sizes="30vw" className="h-auto w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]" />
        </div>
      )}

      <div className="container-x relative flex flex-1 flex-col justify-center pt-[calc(var(--header-h)+3rem)] pb-16">
        <p className="eyebrow flex items-center gap-3 text-bone/70 [animation:fade-up_.9s_var(--ease-out-expo)_both]">
          <span className="inline-block size-2 bg-signal" aria-hidden />
          X-Tend fuel &amp; lubricant conditioning · Supplied by Milemaster
        </p>
        <h1 className="display mt-8 max-w-[14ch] text-display-xl">
          <span className="block [animation:rise_1s_var(--ease-out-expo)_.08s_both]">Stop paying</span>
          <span className="block [animation:rise_1s_var(--ease-out-expo)_.16s_both]">for fuel that</span>
          <span className="block text-signal [animation:rise_1s_var(--ease-out-expo)_.24s_both]">never burns.</span>
        </h1>
        <div className="mt-10 grid max-w-3xl gap-8 md:grid-cols-[1fr_auto] md:items-end [animation:fade-up_1s_var(--ease-out-expo)_.36s_both]">
          <p className="text-lead leading-relaxed text-bone/80">
            US-formulated conditioners that dissolve combustion deposits, restore fuel lubricity and stabilise lubricants — aimed at recovering 15–18% of the operating margin lost to poor fuel.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 [animation:fade-up_1s_var(--ease-out-expo)_.44s_both]">
          <ButtonLink href="/products" size="lg">Explore the range</ButtonLink>
          <ButtonLink href="/tests-and-testimonials" variant="secondary" size="lg">See the field tests</ButtonLink>
        </div>
      </div>

      <div className="relative border-t border-bone/10">
        <div className="flex overflow-hidden py-4" aria-hidden>
          <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] gap-12 pr-12">
            {[...fuels, ...fuels].map((f, i) => (
              <span key={i} className="eyebrow flex items-center gap-12 whitespace-nowrap text-bone/60">
                {f}
                <span className="text-signal">✕</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
