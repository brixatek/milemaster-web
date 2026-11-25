"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 1200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className={cn(
        "fixed right-4 bottom-4 z-40 grid size-12 place-items-center bg-ink text-bone transition-all duration-300 hover:bg-signal md:right-6 md:bottom-6",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  );
}
