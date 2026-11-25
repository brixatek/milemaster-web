import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { company } from "@/config/site";
import { stockists } from "@/content/evidence";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Where to Buy X-Tend — Stockists in Lagos, Abuja, Port Harcourt & Kano",
  description: "Buy X-Tend fuel and oil conditioners from stockists in Lagos, Abuja, Rivers and Kano, or online from Konga and ETH10k.",
  path: "/where-to-buy",
});

const states = ["Lagos", "Abuja", "Rivers", "Kano"] as const;

export default function WhereToBuyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Where to buy", href: "/where-to-buy" }]}
        eyebrow="Stockists"
        title="Find X-Tend near you."
        intro={`${stockists.length} stockists across four states, plus online ordering. For bulk and fleet supply, request a quote directly.`}
      />
      <section className="container-x py-16 md:py-24" aria-labelledby="online-t">
        <div className="grid-12 gap-y-6">
          <h2 id="online-t" className="eyebrow col-span-12 text-signal lg:col-span-3">Buy online</h2>
          <ul className="col-span-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:col-span-9">
            {company.online.map((o) => (
              <li key={o.href} className="bg-paper">
                <a href={o.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-6 pr-4 text-2xl font-medium transition-colors hover:text-signal sm:pl-0">
                  {o.label}
                  <span className="flex items-center gap-2 text-sm font-normal text-ink/65 group-hover:text-signal">Opens in new tab <ArrowUpRight className="size-4" aria-hidden /></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {states.map((state) => (
          <div key={state} className="grid-12 mt-16 gap-y-6 border-t border-ink/12 pt-10">
            <h2 className="col-span-12 font-display text-4xl font-medium tracking-tight lg:col-span-3">{state}</h2>
            <ul className="col-span-12 grid gap-10 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
              {stockists.filter((s) => s.state === state).map((s) => (
                <li key={s.name}>
                  <h3 className="text-xl font-medium">{s.name}</h3>
                  <address className="mt-3 text-ink/70 not-italic">{s.address.map((l) => <span key={l} className="block">{l}</span>)}</address>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {s.phones.map((p) => (
                      <li key={p} className="flex items-center gap-2"><Phone className="size-4 text-signal" aria-hidden /><a href={`tel:${p.replace(/[^\d+]/g, "").replace("+2340", "+234")}`} className="link-underline tabular">{p}</a></li>
                    ))}
                    <li className="flex items-center gap-2"><Mail className="size-4 text-signal" aria-hidden /><a href={`mailto:${s.email}`} className="link-underline break-all">{s.email}</a></li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <CtaBand title="Buying for a fleet or facility?" body="Bulk, drum and programme pricing is available directly from Milemaster." />
    </>
  );
}
