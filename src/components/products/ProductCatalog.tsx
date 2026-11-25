"use client";

import Link from "next/link";
import { SearchX } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CatalogItem = {
  slug: string;
  name: string;
  subtitle: string;
  summary: string;
  fuel: "diesel" | "petrol" | "oil";
  fuelLabel: string;
  applications: { slug: string; name: string }[];
  figures: { value: string; label: string }[];
  keywords: string;
  visual: ReactNode;
};

type Props = { items: CatalogItem[]; applications: { slug: string; name: string }[] };

/** Product filtering by fuel system and application, plus free-text search. */
export function ProductCatalog({ items, applications }: Props) {
  const [fuel, setFuel] = useState<"all" | CatalogItem["fuel"]>("all");
  const [app, setApp] = useState("all");
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter(
      (p) =>
        (fuel === "all" || p.fuel === fuel) &&
        (app === "all" || p.applications.some((a) => a.slug === app)) &&
        (!term || p.keywords.includes(term)),
    );
  }, [items, fuel, app, q]);

  const fuels: { key: typeof fuel; label: string }[] = [
    { key: "all", label: "All" },
    { key: "diesel", label: "Diesel" },
    { key: "petrol", label: "Petrol" },
    { key: "oil", label: "Engine oil" },
  ];

  return (
    <div>
      <div className="grid gap-6 border-y border-ink/12 py-6 lg:grid-cols-[auto_1fr_18rem] lg:items-center">
        <fieldset>
          <legend className="eyebrow mb-3 text-ink/65">Fuel system</legend>
          <div className="flex flex-wrap gap-2">
            {fuels.map((f) => (
              <button
                key={f.key}
                type="button"
                aria-pressed={fuel === f.key}
                onClick={() => setFuel(f.key)}
                className={cn("h-11 border px-4 text-sm transition-colors", fuel === f.key ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink")}
              >
                {f.label}
              </button>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="app-filter" className="eyebrow mb-3 block text-ink/65">Application</label>
          <select id="app-filter" value={app} onChange={(e) => setApp(e.target.value)} className="h-11 w-full border border-ink/20 bg-paper px-3 text-sm lg:max-w-xs">
            <option value="all">All applications</option>
            {applications.map((a) => (
              <option key={a.slug} value={a.slug}>{a.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="product-search" className="eyebrow mb-3 block text-ink/65">Search products</label>
          <input id="product-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. injector, cetane, seals" className="h-11 w-full border border-ink/20 bg-paper px-3 text-sm placeholder:text-ink/40" />
        </div>
      </div>

      <p className="eyebrow mt-6 text-ink/65" aria-live="polite">
        {results.length} {results.length === 1 ? "product" : "products"}
      </p>

      {results.length === 0 ? (
        <div className="mt-8 flex flex-col items-start gap-4 border border-dashed border-ink/20 p-10">
          <SearchX className="size-8 text-signal" aria-hidden />
          <p className="text-xl font-medium">No products match those filters.</p>
          <button type="button" onClick={() => { setFuel("all"); setApp("all"); setQ(""); }} className="link-underline text-signal">Clear all filters</button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-px bg-ink/10">
          {results.map((p) => (
            <li key={p.slug} className="bg-paper">
              <Link href={`/products/${p.slug}`} className="group grid gap-8 py-10 md:grid-cols-[14rem_1fr] lg:grid-cols-[18rem_1fr_16rem] lg:gap-12">
                <div className="aspect-square">{p.visual}</div>
                <div>
                  <p className="eyebrow text-signal">{p.fuelLabel}</p>
                  <h2 className="mt-3 text-[clamp(1.75rem,1.4rem+1.4vw,2.75rem)] font-medium transition-colors group-hover:text-signal">{p.name}</h2>
                  <p className="mt-1 text-ink/65">{p.subtitle}</p>
                  <p className="mt-5 max-w-xl text-ink/75">{p.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.applications.map((a) => (
                      <li key={a.slug} className="border border-ink/15 px-2.5 py-1 text-xs text-ink/65">{a.name}</li>
                    ))}
                  </ul>
                </div>
                <dl className="grid grid-cols-3 gap-4 border-t border-ink/12 pt-6 md:col-span-2 lg:col-span-1 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  {p.figures.map((f) => (
                    <div key={f.label} className="flex flex-col">
                      <dt className="order-2 text-xs text-ink/65">{f.label}</dt>
                      <dd className="display order-1 text-3xl">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
