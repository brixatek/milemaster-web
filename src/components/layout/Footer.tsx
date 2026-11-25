import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { brand, company, primaryNav } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark relative overflow-hidden bg-ink text-bone">
      <div className="container-x border-b border-bone/10 py-16 md:py-24">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow text-signal">Start a conversation</p>
            <p className="display mt-5 text-display-m">
              Measure your baseline.
              <br />
              <span className="text-bone/60">Then measure the difference.</span>
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link href="/request-a-quote" className="inline-flex h-14 items-center justify-center gap-3 bg-signal px-7 font-medium text-white transition-colors hover:bg-signal-deep">
              Request a quote <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <Link href="/contact" className="inline-flex h-14 items-center justify-center gap-3 border border-bone/25 px-7 transition-colors hover:border-bone">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className="container-x grid-12 gap-y-12 py-16">
        <div className="col-span-12 lg:col-span-3">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/60">{company.about}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/60">
            {brand.name} products are supplied in Nigeria by {company.name}.
          </p>
        </div>

        <nav aria-label="Footer" className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-6">
          {primaryNav.slice(0, 3).map((g) => (
            <div key={g.label}>
              <p className="eyebrow mb-4 text-bone/60">{g.label}</p>
              <ul className="space-y-2.5 text-sm">
                {g.links.slice(0, 6).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-underline text-bone/75 hover:text-bone">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="eyebrow mb-4 text-bone/60">Company</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["About", "/about"],
                ["Tests & testimonials", "/tests-and-testimonials"],
                ["Resources", "/resources"],
                ["FAQ", "/faq"],
                ["Where to buy", "/where-to-buy"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href!} className="link-underline text-bone/75 hover:text-bone">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <address className="col-span-12 space-y-5 text-sm not-italic lg:col-span-3">
          <p className="eyebrow text-bone/60">Head office</p>
          <p className="flex gap-3 text-bone/75">
            <MapPin className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
            <span>
              {company.address.street}
              <br />
              {company.address.area}, {company.address.city}
              <br />
              {company.address.country}
            </span>
          </p>
          <ul className="space-y-1.5">
            {company.phones.map((p) => (
              <li key={p.href} className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
                <a href={p.href} className="link-underline tabular text-bone/75 hover:text-bone">{p.display}</a>
              </li>
            ))}
          </ul>
          <p className="flex gap-3">
            <Mail className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
            <a href={`mailto:${company.email}`} className="link-underline break-all text-bone/75 hover:text-bone">{company.email}</a>
          </p>
          {company.social.length > 0 && (
            <ul className="flex gap-4 pt-2">
              {company.social.map((s) => (
                <li key={s.href}><a href={s.href} rel="noopener noreferrer" target="_blank" className="text-bone/70 hover:text-bone">{s.label}</a></li>
              ))}
            </ul>
          )}
        </address>
      </div>

      <div className="container-x flex flex-col gap-4 border-t border-bone/10 py-8 text-xs text-bone/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {company.legalName ?? company.name}. All rights reserved.</p>
        <ul className="flex gap-6">
          <li><Link href="/privacy" className="hover:text-bone">Privacy policy</Link></li>
          <li><Link href="/terms" className="hover:text-bone">Terms of use</Link></li>
          <li><Link href="/search" className="hover:text-bone">Search</Link></li>
        </ul>
      </div>

      <svg aria-hidden viewBox="0 0 1000 190" className="pointer-events-none -mb-[2%] block w-full select-none px-(--gutter)">
        <text x="0" y="178" textLength="1000" lengthAdjust="spacingAndGlyphs" className="display" fill="rgb(237 241 246 / 0.04)" style={{ fontSize: 236 }}>
          X-TEND
        </text>
      </svg>
    </footer>
  );
}
