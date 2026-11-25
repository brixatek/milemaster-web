import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/cn";

type Props = {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  size?: "l" | "m";
};

/** Dark editorial page header shared by every internal page. */
export function PageHero({ crumbs, eyebrow, title, intro, aside, children, size = "l" }: Props) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink text-bone">
      <div aria-hidden className="blueprint absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div aria-hidden className="absolute -top-1/3 right-0 -z-10 size-[60vw] rounded-full bg-signal/10 blur-[120px]" />
      <div className="container-x pt-[calc(var(--header-h)+2.5rem)] pb-14 md:pt-[calc(var(--header-h)+4rem)] md:pb-20">
        <Breadcrumbs items={crumbs} />
        <div className={cn("grid-12 mt-10 gap-y-10 md:mt-14", aside && "items-end")}>
          <div className={cn("col-span-12", aside ? "lg:col-span-7" : "lg:col-span-10")}>
            {eyebrow && <p className="eyebrow mb-5 text-signal">{eyebrow}</p>}
            <h1 className={cn("display", size === "l" ? "text-display-l" : "text-display-m")}>{title}</h1>
            {intro && <div className="mt-7 max-w-2xl text-lead leading-relaxed text-bone/75">{intro}</div>}
            {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
          </div>
          {aside && <div className="col-span-12 lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
