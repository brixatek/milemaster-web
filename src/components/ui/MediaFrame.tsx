import Image from "next/image";
import { resolveMedia } from "@/lib/media";
import { cn } from "@/lib/cn";
import { ArtPanel, type ArtVariant } from "./ArtPanel";

type Props = {
  mediaKey?: string;
  fallback: ArtVariant;
  label?: string;
  index?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** "cover" for photography, "contain" for product cut-outs. */
  fit?: "cover" | "contain";
};

/**
 * Renders a migrated image when it exists in /public, otherwise a designed
 * ArtPanel. Illustrative stock photography is labelled for transparency.
 */
export function MediaFrame({ mediaKey, fallback, label, index, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority, fit = "cover" }: Props) {
  const m = resolveMedia(mediaKey);
  // Callers may position the frame absolutely; otherwise it establishes its own context.
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className ?? "") ? "" : "relative";
  if (!m) {
    return (
      <div className={cn(positioned, "overflow-hidden", className)}>
        <ArtPanel variant={fallback} label={label} index={index} className="absolute inset-0" />
      </div>
    );
  }
  return (
    <figure className={cn(positioned, "overflow-hidden bg-ink-2", className)}>
      <Image
        src={m.src}
        alt={m.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(fit === "cover" ? "grade object-cover" : "object-contain p-8")}
      />
      {m.illustrative && (
        <figcaption className="eyebrow absolute bottom-3 left-3 bg-ink/70 px-2 py-1 text-[0.625rem] text-bone/80">Illustrative image</figcaption>
      )}
    </figure>
  );
}
