import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="on-dark relative isolate flex min-h-[90svh] items-center overflow-hidden bg-ink text-bone">
      <div aria-hidden className="blueprint absolute inset-0 -z-10" />
      <div className="container-x pt-(--header-h)">
        <p className="eyebrow text-signal">Error 404 · Fuel line disconnected</p>
        <h1 className="display mt-6 text-display-l">This page ran dry.</h1>
        <p className="mt-6 max-w-xl text-lead text-bone/70">The page you’re looking for doesn’t exist or has moved. Pages from our previous website now live in new places.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" size="lg">Back to home</ButtonLink>
          <ButtonLink href="/search" variant="secondary" size="lg">Search the site</ButtonLink>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-bone/70">
          {[["Products", "/products"], ["Applications", "/applications"], ["Where to buy", "/where-to-buy"], ["Contact", "/contact"]].map(([l, h]) => (
            <li key={h}><Link href={h!} className="link-underline hover:text-bone">{l}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
