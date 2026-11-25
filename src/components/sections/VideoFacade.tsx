"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

/** Click-to-load YouTube embed: no third-party requests until the user opts in. */
export function VideoFacade({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);
  if (active) {
    return (
      <iframe
        className="aspect-video w-full bg-ink"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <button type="button" onClick={() => setActive(true)} className="group blueprint relative block aspect-video w-full overflow-hidden bg-ink-2 text-left" aria-label={`Play video: ${title}`}>
      {!thumbFailed && <Image onError={() => setThumbFailed(true)} src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" fill unoptimized sizes="(min-width:1024px) 25vw, 50vw" className="grade object-cover opacity-80 transition-[opacity,transform] duration-500 group-hover:scale-[1.03] group-hover:opacity-100" />}
      <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <span className="absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center bg-signal text-white transition-transform group-hover:scale-110">
        <Play className="size-5 translate-x-0.5" fill="currentColor" aria-hidden />
      </span>
      <span className="eyebrow absolute bottom-3 left-3 text-bone">{title}</span>
    </button>
  );
}
