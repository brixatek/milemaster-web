import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-3 font-medium tracking-tight transition-[background-color,color,border-color] duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-50 min-h-11";

const variants: Record<Variant, string> = {
  primary: "bg-signal text-white hover:bg-signal-deep",
  secondary: "border border-current/25 text-current hover:border-current hover:bg-current/5",
  ghost: "text-current underline-offset-4 hover:underline px-0!",
  inverse: "bg-bone text-ink hover:bg-white",
};
const sizes: Record<Size, string> = { md: "h-11 px-5 text-[0.9375rem]", lg: "h-14 px-7 text-base" };

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-300 ease-(--ease-out-expo) group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
        />
      )}
    </>
  );
}

type Common = { variant?: Variant; size?: Size; arrow?: boolean; className?: string; children: ReactNode };

export function ButtonLink({ variant = "primary", size = "md", arrow = true, className, children, ...rest }: Common & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}

export function Button({ variant = "primary", size = "md", arrow = false, className, children, ...rest }: Common & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
