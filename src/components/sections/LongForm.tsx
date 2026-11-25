import type { ReactNode } from "react";
import type { Section } from "@/types/content";
import { Blocks } from "@/components/ui/Blocks";

/** Long-form layout: sticky contents rail + numbered editorial sections. */
export function LongForm({ sections, aside }: { sections: Section[]; aside?: ReactNode }) {
  return (
    <div className="container-x grid-12 gap-y-12 py-20 md:py-28">
      <aside className="col-span-12 lg:col-span-3">
        <div className="lg:sticky lg:top-28">
          <nav aria-label="On this page" className="hidden lg:block">
            <p className="eyebrow mb-4 text-ink/65">On this page</p>
            <ol className="space-y-2 border-l border-ink/12">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-ink/65 transition-colors hover:border-signal hover:text-ink">
                    <span className="eyebrow mr-2 text-ink/65">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          {aside && <div className="lg:mt-12">{aside}</div>}
        </div>
      </aside>
      <div className="col-span-12 lg:col-span-8 lg:col-start-5">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="border-t border-ink/12 pt-10 pb-16 first:border-t-0 first:pt-0" data-reveal>
            <p className="eyebrow flex items-center gap-3 text-ink/65">
              <span className="text-signal">{String(i + 1).padStart(2, "0")}</span>
              {s.eyebrow && <span>{s.eyebrow}</span>}
            </p>
            <h2 id={`${s.id}-title`} className="mt-4 mb-8 text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] font-medium">{s.title}</h2>
            <Blocks blocks={s.blocks} />
          </section>
        ))}
      </div>
    </div>
  );
}
