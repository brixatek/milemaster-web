import type { Block } from "@/types/content";
import { cn } from "@/lib/cn";

/** Renders structured content blocks with consistent editorial typography. */
export function Blocks({ blocks, tone = "light" }: { blocks: Block[]; tone?: "light" | "dark" }) {
  return (
    <div className="prose-x">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "lead":
            return <p key={i} className="text-lead !text-current leading-snug font-medium">{b.text}</p>;
          case "p":
            return <p key={i}>{b.text}</p>;
          case "h":
            return <h3 key={i}>{b.text}</h3>;
          case "quote":
            return (
              <blockquote key={i} className="my-8 border-l-2 border-signal pl-6 font-display text-2xl leading-tight font-medium tracking-tight">
                {b.text}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className={cn("my-8 divide-y border-y", tone === "dark" ? "divide-bone/15 border-bone/15" : "divide-ink/12 border-ink/12")}>
                {b.items.map((item, j) => (
                  <li key={j} className="grid gap-1 py-5 sm:grid-cols-[2.5rem_1fr]">
                    <span className="eyebrow pt-1 text-signal">{String(j + 1).padStart(2, "0")}</span>
                    <div>
                      {item.title && <p className="!mb-1 font-medium !text-current">{item.title}</p>}
                      <p className="!mb-0">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <figure key={i} className="my-8 !max-w-none">
                <div className="overflow-x-auto" role="region" aria-label={b.caption ?? "Data table"} tabIndex={0}>
                  <table className="w-full min-w-[32rem] border-collapse text-left text-[0.9375rem]">
                    {b.caption && <caption className="eyebrow mb-3 text-left opacity-70">{b.caption}</caption>}
                    <thead>
                      <tr className="border-b-2 border-current">
                        {b.head.map((h, j) => (
                          <th key={j} scope="col" className="py-3 pr-6 font-medium">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="tabular font-mono text-[0.875rem]">
                      {b.rows.map((r, j) => (
                        <tr key={j} className="border-b border-current/15">
                          {r.map((c, k) =>
                            k === 0 ? (
                              <th key={k} scope="row" className="py-3 pr-6 font-sans font-medium">{c}</th>
                            ) : (
                              <td key={k} className="py-3 pr-6">{c}</td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.note && <figcaption className="mt-3 text-sm opacity-60">{b.note}</figcaption>}
              </figure>
            );
        }
      })}
    </div>
  );
}
