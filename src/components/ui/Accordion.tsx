import { Plus } from "lucide-react";
import type { ReactNode } from "react";

/** Native <details> accordion: accessible, keyboard-friendly, zero JS. */
export function AccordionItem({ id, title, children, defaultOpen }: { id?: string; title: ReactNode; children: ReactNode; defaultOpen?: boolean }) {
  return (
    <details id={id} open={defaultOpen} className="group border-t border-ink/15 last:border-b [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left transition-colors hover:text-signal">
        <span className="font-display text-xl font-medium tracking-tight md:text-2xl">{title}</span>
        <span className="mt-1 grid size-8 shrink-0 place-items-center border border-current/25 transition-transform duration-300 group-open:rotate-45">
          <Plus aria-hidden className="size-4" />
        </span>
      </summary>
      <div className="pb-8 pr-12">{children}</div>
    </details>
  );
}
