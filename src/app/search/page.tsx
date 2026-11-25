import Link from "next/link";
import { Search as SearchIcon, SearchX } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { search } from "@/lib/search";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Search", path: "/search", noindex: true });

type Props = { searchParams: Promise<{ q?: string | string[] }> };

const popular = ["diesel conditioner", "generator", "injector", "stored fuel", "ethanol", "dosage", "where to buy"];

export default async function SearchPage({ searchParams }: Props) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw)?.slice(0, 120).trim() ?? "";
  const results = q ? search(q) : [];
  return (
    <>
      <PageHero crumbs={[{ name: "Search", href: "/search" }]} eyebrow="Search" title={q ? <>Results for “{q}”</> : "Search the site"} size="m">
        <form action="/search" role="search" className="flex w-full max-w-2xl border border-bone/25 focus-within:border-bone">
          <label htmlFor="q" className="sr-only">Search</label>
          <input id="q" name="q" type="search" defaultValue={q} placeholder="Products, applications, questions…" className="min-w-0 flex-1 bg-transparent px-5 py-4 text-lg text-bone placeholder:text-bone/40 focus:outline-none" />
          <button type="submit" className="flex items-center gap-2 bg-signal px-6 font-medium text-white hover:bg-signal-deep">
            <SearchIcon className="size-5" aria-hidden /> Search
          </button>
        </form>
      </PageHero>
      <section className="container-x py-16 md:py-24">
        {q && (
          <p className="eyebrow mb-8 text-ink/65" role="status">
            {results.length} {results.length === 1 ? "result" : "results"}
          </p>
        )}
        {q && results.length === 0 && (
          <div className="flex flex-col items-start gap-4 border border-dashed border-ink/20 p-10">
            <SearchX className="size-8 text-signal" aria-hidden />
            <p className="text-xl font-medium">Nothing matched “{q}”.</p>
            <p className="text-ink/65">Try a broader term, or one of these:</p>
          </div>
        )}
        {results.length > 0 && (
          <ol className="border-t border-ink/12">
            {results.map((r) => (
              <li key={r.href} className="border-b border-ink/12">
                <Link href={r.href} className="group grid gap-2 py-7 md:grid-cols-[10rem_1fr]">
                  <span className="eyebrow pt-1.5 text-signal">{r.kind}</span>
                  <span>
                    <span className="block text-2xl font-medium transition-colors group-hover:text-signal">{r.title}</span>
                    <span className="mt-2 block max-w-3xl text-ink/65">{r.excerpt}</span>
                    <span className="mt-2 block font-mono text-xs text-ink/65">{r.href}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        )}
        {(!q || results.length === 0) && (
          <div className="mt-10">
            <p className="eyebrow text-ink/65">Popular searches</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {popular.map((p) => (
                <li key={p}><Link href={`/search?q=${encodeURIComponent(p)}`} className="inline-flex min-h-11 items-center border border-ink/20 px-4 hover:border-ink">{p}</Link></li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
