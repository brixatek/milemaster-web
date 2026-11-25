"use client";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import type { Testimonial } from "@/types/content";

export function TestimonialSlider({ items, rating, count }: { items: Testimonial[]; rating: number; count: number }) {
  const [i, setI] = useState(0);
  const t = items[i]!;
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);
  return (
    <div className="grid-12 gap-y-12">
      <div className="col-span-12 lg:col-span-4">
        <p className="eyebrow text-signal">Customer evidence</p>
        <p className="display mt-6 text-[clamp(4rem,3rem+4vw,7rem)] leading-none">{rating.toFixed(1)}</p>
        <div className="mt-3 flex gap-1 text-sky" aria-hidden>
          {Array.from({ length: 5 }, (_, k) => (
            <Star key={k} className="size-5" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="mt-4 max-w-[26ch] text-bone/65">Average rating from {count} verified reviews of X-Tend products.</p>
      </div>
      <figure className="col-span-12 lg:col-span-8 lg:border-l lg:border-bone/10 lg:pl-12" aria-roledescription="carousel" aria-label="Customer testimonials">
        <div aria-live="polite" className="min-h-[14rem] md:min-h-[12rem]">
          <blockquote key={i} className="font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-[1.15] font-medium tracking-tight [animation:fade-up_.7s_var(--ease-out-expo)_both]">
            “{t.quote}”
          </blockquote>
        </div>
        <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-bone/10 pt-6">
          <div>
            <p className="font-medium">{t.name}{t.location ? `, ${t.location}` : ""}</p>
            {t.product && <p className="eyebrow mt-1 text-bone/60">{t.product}</p>}
          </div>
          <div className="flex items-center gap-4">
            <span className="eyebrow tabular text-bone/60">{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid size-12 place-items-center border border-bone/25 transition-colors hover:border-bone hover:bg-bone hover:text-ink">
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid size-12 place-items-center border border-bone/25 transition-colors hover:border-bone hover:bg-bone hover:text-ink">
              <ArrowRight className="size-5" aria-hidden />
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
