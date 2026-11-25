import Image from "next/image";
import { brand } from "@/config/site";
import { cn } from "@/lib/cn";

/** Brand wordmark. Uses `brand.logoSrc` when configured, otherwise a typographic mark. */
export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  if (brand.logoSrc) {
    return <Image src={brand.logoSrc} alt={brand.name} width={140} height={40} className={cn("h-9 w-auto", className)} priority />;
  }
  return (
    <span className={cn("inline-flex items-baseline gap-2 select-none", className)}>
      <span
        aria-hidden
        className="font-display text-[1.75rem] leading-none font-bold text-signal"
      >
        {brand.wordmark.mark}
      </span>
      <span
        aria-hidden
        className={cn("font-display -ml-1.5 text-[1.15rem] leading-none font-bold tracking-[0.12em]", tone === "light" ? "text-bone" : "text-ink")}
      >
        -{brand.wordmark.rest}
      </span>
      <span className="sr-only">{brand.name}</span>
    </span>
  );
}
