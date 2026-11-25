import { Star } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { VideoFacade } from "@/components/sections/VideoFacade";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { allTestimonials, customerVideos, fieldTestVideos, reviewSummary, writtenTestimonials } from "@/content/evidence";
import { pageMetadata } from "@/lib/seo";
import { resolveMedia } from "@/lib/media";

export const metadata = pageMetadata({
  title: "Tests & Testimonials — Field Results and Customer Reviews",
  description: "Watch field-test videos, read verified customer reviews and see the organisations that have provided written testimonials for X-Tend.",
  path: "/tests-and-testimonials",
});

export default function TestsPage() {
  const charts = ["chart-diesel-quality", "chart-nigeria-vs-other", "chart-poc-results"].filter((k) => resolveMedia(k));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Tests & testimonials", href: "/tests-and-testimonials" }]}
        eyebrow="Evidence"
        title="Don’t take our word for it. Watch the tests."
        intro={`${fieldTestVideos.length} field-test videos from prospects, ${customerVideos.length} customer video testimonials and ${reviewSummary.count} verified written reviews.`}
      >
        <ButtonLink href="#tests" size="lg" arrow={false}>Field tests</ButtonLink>
        <ButtonLink href="#reviews" variant="secondary" size="lg" arrow={false}>Customer reviews</ButtonLink>
      </PageHero>

      {/* Proof-of-concept charts from the legacy site */}
      {charts.length > 0 && <section className="container-x py-20 md:py-28" aria-labelledby="poc-t">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-signal">Proof of concept</p>
            <h2 id="poc-t" className="display mt-4 text-display-s">Measured before and after.</h2>
            <p className="mt-5 text-ink/70">Diesel quality comparisons and proof-of-concept results published by X-Tend. Ask us to set up a measured trial on your own equipment.</p>
          </div>
          <div className="col-span-12 grid gap-4 sm:grid-cols-3 lg:col-span-8">
            {charts.map((k) => (
              <MediaFrame key={k} mediaKey={k} fallback="signal" fit="contain" className="aspect-[3/4] bg-white" sizes="(min-width:640px) 22vw, 100vw" />
            ))}
          </div>
        </div>
      </section>}

      <section id="tests" className="on-dark bg-ink py-20 text-bone md:py-28" aria-labelledby="tests-t">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-signal">Tests by prospects</p>
              <h2 id="tests-t" className="display mt-4 text-display-s">Field tests</h2>
            </div>
            <p className="max-w-md text-bone/60">Short recordings made by prospects and customers during trials. Videos load from YouTube only when you press play.</p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {fieldTestVideos.map((id, i) => (
              <li key={id}><VideoFacade id={id} title={`Field test ${String(i + 1).padStart(2, "0")}`} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="video-testimonials" className="py-20 md:py-28" aria-labelledby="vt-t">
        <div className="container-x">
          <p className="eyebrow text-signal">Field responses</p>
          <h2 id="vt-t" className="display mt-4 text-display-s">Customer video testimonials</h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {customerVideos.map((id, i) => (
              <li key={id}><VideoFacade id={id} title={`Customer testimonial ${i + 1}`} /></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="reviews" className="border-t border-ink/10 bg-bone py-20 md:py-28" aria-labelledby="rev-t">
        <div className="container-x">
          <div className="grid-12 gap-y-8">
            <div className="col-span-12 lg:col-span-4">
              <p className="eyebrow text-signal">Written reviews</p>
              <h2 id="rev-t" className="display mt-4 text-display-s">In customers’ own words</h2>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="display text-6xl">{reviewSummary.rating}</span>
                <span className="text-ink/60">/ 5 from {reviewSummary.count} reviews</span>
              </div>
              <div className="mt-2 flex gap-1 text-amber" aria-hidden>
                {Array.from({ length: 5 }, (_, k) => <Star key={k} className="size-5" fill="currentColor" strokeWidth={0} />)}
              </div>
            </div>
            <ul className="col-span-12 columns-1 gap-8 md:columns-2 lg:col-span-8">
              {allTestimonials.map((t) => (
                <li key={t.name} className="mb-8 break-inside-avoid border-t border-ink/15 pt-6">
                  <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
                  <p className="mt-4 font-medium">{t.name}{t.location ? `, ${t.location}` : ""}</p>
                  {t.product && <p className="eyebrow mt-1 text-ink/60">{t.product}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="written-testimonials" className="py-20 md:py-28" aria-labelledby="wt-t">
        <div className="container-x grid-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-signal">Organisations</p>
            <h2 id="wt-t" className="display mt-4 text-display-s">Written testimonials on file</h2>
            <p className="mt-5 text-ink/70">Testimonial letters from these organisations were published on the original X-Tend website.</p>
          </div>
          <ul className="col-span-12 grid grid-cols-2 border-t border-l border-ink/12 sm:grid-cols-3 lg:col-span-8">
            {writtenTestimonials.map((name) => (
              <li key={name} className="flex min-h-28 items-center border-r border-b border-ink/12 p-6 font-display text-xl font-medium tracking-tight">{name}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Run your own trial." body="We’ll help you measure baseline consumption, treat, and measure again — so the numbers are yours, not ours." />
    </>
  );
}
