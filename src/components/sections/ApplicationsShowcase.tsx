"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ShowcaseItem = { slug: string; name: string; kicker: string; summary: string; visual: ReactNode };

/** Interactive index: hovering or focusing a row swaps the large visual. */
export function ApplicationsShowcase({ items }: { items: ShowcaseItem[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid-12 gap-y-10">
      <div className="relative col-span-12 hidden aspect-[4/5] lg:col-span-5 lg:block">
        <div className="sticky top-28 aspect-[4/5]">
          {items.map((item, i) => (
            <div
              key={item.slug}
              aria-hidden={i !== active}
              className={cn("absolute inset-0 transition-[opacity,clip-path] duration-700 ease-(--ease-out-expo)", i === active ? "opacity-100 [clip-path:inset(0)]" : "opacity-0 [clip-path:inset(0_0_100%_0)]")}
            >
              {item.visual}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-24 text-bone">
                <p className="eyebrow text-bone/60">{item.kicker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ol className="col-span-12 lg:col-span-7 lg:pl-10">
        {items.map((item, i) => (
          <li key={item.slug} className="border-t border-ink/12 last:border-b">
            <Link
              href={`/applications/${item.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[3rem_1fr_auto] items-start gap-x-4 py-7 md:py-8"
            >
              <span className={cn("eyebrow pt-2 transition-colors", i === active ? "text-signal" : "text-ink/60")}>{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className={cn("block font-display text-2xl font-medium tracking-tight transition-colors md:text-[2rem] md:leading-tight", i === active ? "text-ink" : "text-ink/65 group-hover:text-ink")}>
                  {item.name}
                </span>
                <span className={cn("grid transition-[grid-template-rows,opacity] duration-500 ease-(--ease-out-expo)", i === active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 lg:grid-rows-[0fr]", "max-lg:grid-rows-[1fr] max-lg:opacity-100")}>
                  <span className="overflow-hidden">
                    <span className="block max-w-xl pt-3 text-ink/70">{item.summary}</span>
                  </span>
                </span>
              </span>
              <ArrowUpRight aria-hidden className={cn("mt-2 size-6 transition-all duration-300", i === active ? "text-signal" : "text-ink/30")} />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
