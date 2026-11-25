import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "l" | "m" | "s";
  className?: string;
  align?: "split" | "stack";
};

const sizes = { l: "text-display-l", m: "text-display-m", s: "text-display-s" };

/** Editorial section heading: mono index + eyebrow, large display title, optional intro. */
export function SectionHeading({ index, eyebrow, title, intro, as: Tag = "h2", size = "m", className, align = "stack" }: Props) {
  return (
    <div className={cn(align === "split" ? "grid-12 items-end gap-y-6" : "max-w-4xl", className)} data-reveal>
      <div className={cn(align === "split" && "col-span-12 lg:col-span-7")}>
        {(index || eyebrow) && (
          <p className="eyebrow mb-5 flex items-center gap-3 opacity-80">
            {index && <span className="text-signal">{index}</span>}
            {index && eyebrow && <span aria-hidden className="h-px w-8 bg-current opacity-40" />}
            {eyebrow && <span>{eyebrow}</span>}
          </p>
        )}
        <Tag className={cn("display", sizes[size])}>{title}</Tag>
      </div>
      {intro && (
        <div className={cn("text-lead leading-relaxed opacity-80", align === "split" ? "col-span-12 lg:col-span-5 lg:pb-2" : "mt-6 max-w-2xl")}>
          {intro}
        </div>
      )}
    </div>
  );
}
