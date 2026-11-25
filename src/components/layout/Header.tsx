"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { primaryNav, company } from "@/config/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { SearchDialog } from "./SearchDialog";

export function Header() {
  const pathname = usePathname();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const baseId = useId();

  // Close menus on navigation
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset UI on route change
    setOpenIdx(null);
    setMobileOpen(false);
  }, [pathname]);

  // Solid background after leaving the hero; hide on scroll down, reveal on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 400 && y > lastY.current && openIdx === null);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openIdx]);

  // Escape + outside click close the mega menu
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const trigger = document.getElementById(`${baseId}-trigger-${openIdx}`);
        setOpenIdx(null);
        trigger?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenIdx(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openIdx, baseId]);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hoverOpen = useCallback((i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIdx(i);
  }, []);
  const hoverClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenIdx(null), 160);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const solid = scrolled || openIdx !== null || mobileOpen;

  return (
    <header
      ref={navRef}
      className={cn(
        "on-dark fixed inset-x-0 top-0 z-50 text-bone transition-[transform,background-color,border-color] duration-500 ease-(--ease-out-expo)",
        solid ? "border-b border-bone/10 bg-ink" : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent",
        hidden && !mobileOpen && "-translate-y-full", // no transform when shown: a transform would trap the fixed mobile sheet
      )}
      onMouseLeave={hoverClose}
    >
      <a href="#main" className="sr-only z-[60] bg-signal px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2">
        Skip to content
      </a>
      <div className="container-x flex h-(--header-h) items-center justify-between gap-6">
        <Link href="/" aria-label="X-Tend by Milemaster — home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden h-full lg:block">
          <ul className="flex h-full items-stretch">
            {primaryNav.map((group, i) => {
              const open = openIdx === i;
              return (
                <li key={group.label} className="flex" onMouseEnter={() => hoverOpen(i)}>
                  <button
                    id={`${baseId}-trigger-${i}`}
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${baseId}-panel-${i}`}
                    onClick={() => setOpenIdx(open ? null : i)}
                    className={cn(
                      "relative flex items-center gap-1.5 px-4 text-[0.9375rem] transition-colors xl:px-5",
                      open || isActive(group.href) ? "text-bone" : "text-bone/70 hover:text-bone",
                    )}
                  >
                    {group.label}
                    <ChevronDown aria-hidden className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")} />
                    <span aria-hidden className={cn("absolute inset-x-4 bottom-0 h-0.5 origin-left bg-signal transition-transform duration-300 xl:inset-x-5", open || isActive(group.href) ? "scale-x-100" : "scale-x-0")} />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <SearchDialog />
          <Link href="/request-a-quote" className="ml-2 hidden h-11 items-center gap-2 bg-signal px-5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-signal-deep sm:inline-flex">
            Request a quote
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={`${baseId}-mobile`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu panels */}
      {primaryNav.map((group, i) => (
        <div
          key={group.label}
          id={`${baseId}-panel-${i}`}
          role="region"
          aria-labelledby={`${baseId}-trigger-${i}`}
          hidden={openIdx !== i}
          onMouseEnter={() => hoverOpen(i)}
          className="absolute inset-x-0 top-full hidden border-b border-bone/10 bg-ink lg:block"
        >
          <div className="container-x grid-12 py-12">
            <div className="col-span-4 pr-8">
              <p className="eyebrow text-signal">{String(i + 1).padStart(2, "0")} — {group.label}</p>
              <p className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight">{group.intro}</p>
              <Link href={group.href} className="link-underline mt-6 inline-flex items-center gap-2 text-bone/80 hover:text-bone">
                View all {group.label.toLowerCase()} <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ul className="col-span-8 grid grid-cols-2 gap-x-8 border-l border-bone/10 pl-8">
              {group.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group flex items-start justify-between gap-4 border-b border-bone/10 py-4 transition-colors hover:text-signal">
                    <span>
                      <span className="block text-lg font-medium">{l.label}</span>
                      {l.description && <span className="mt-0.5 block text-sm text-bone/65 group-hover:text-bone/70">{l.description}</span>}
                    </span>
                    <ArrowUpRight aria-hidden className="mt-1 size-4 shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Mobile sheet */}
      <div
        id={`${baseId}-mobile`}
        hidden={!mobileOpen}
        className="fixed inset-x-0 top-(--header-h) bottom-0 overflow-y-auto bg-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x pb-16">
          <ul>
            {primaryNav.map((group) => (
              <li key={group.label} className="border-b border-bone/10">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-display text-2xl font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                    {group.label}
                    <ChevronDown aria-hidden className="size-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="pb-5">
                    <li>
                      <Link href={group.href} className="block py-2.5 text-signal">Overview</Link>
                    </li>
                    {group.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="block py-2.5 text-bone/80">{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/request-a-quote" className="flex h-14 items-center justify-center bg-signal font-medium text-white">Request a quote</Link>
            <a href={company.phones[0].href} className="flex h-14 items-center justify-center border border-bone/25">Call {company.phones[0].display}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
