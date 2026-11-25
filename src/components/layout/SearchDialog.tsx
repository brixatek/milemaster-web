"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const suggestions = ["diesel injector", "generator fuel", "stored fuel", "oil conditioner", "where to buy", "emissions"];

/** Site search launcher using the native <dialog> (built-in focus trap + Escape). */
export function SearchDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ref.current?.showModal();
        requestAnimationFrame(() => input.current?.focus());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function open() {
    ref.current?.showModal();
    requestAnimationFrame(() => input.current?.focus());
  }
  function go(term: string) {
    if (!term.trim()) return;
    ref.current?.close();
    router.push(`/search?q=${encodeURIComponent(term.trim())}`);
  }

  return (
    <>
      <button type="button" onClick={open} aria-label="Search the site" className="grid size-11 place-items-center text-bone/80 transition-colors hover:text-bone">
        <Search className="size-5" aria-hidden />
      </button>
      <dialog
        ref={ref}
        aria-label="Search"
        className="m-0 mt-0 h-auto max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ink/80"
        onClick={(e) => e.target === ref.current && ref.current?.close()}
      >
        <div className="on-dark bg-ink text-bone">
          <form
            role="search"
            action="/search"
            onSubmit={(e) => {
              e.preventDefault();
              go(q);
            }}
            className="container-x flex items-center gap-4 py-6 md:py-10"
          >
            <Search className="size-6 shrink-0 text-signal" aria-hidden />
            <label htmlFor="site-search" className="sr-only">Search products, applications and resources</label>
            <input
              ref={input}
              id="site-search"
              name="q"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products, applications, resources…"
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent font-display text-2xl tracking-tight placeholder:text-bone/35 focus:outline-none md:text-4xl"
            />
            <button type="button" onClick={() => ref.current?.close()} aria-label="Close search" className="grid size-11 place-items-center text-bone/70 hover:text-bone">
              <X className="size-6" aria-hidden />
            </button>
          </form>
          <div className="container-x flex flex-wrap items-center gap-2 border-t border-bone/10 py-5">
            <span className="eyebrow mr-2 text-bone/60">Try</span>
            {suggestions.map((s) => (
              <button key={s} type="button" onClick={() => go(s)} className="border border-bone/20 px-3 py-1.5 text-sm text-bone/80 transition-colors hover:border-bone hover:text-bone">
                {s}
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
