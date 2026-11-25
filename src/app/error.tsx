"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <section className="on-dark flex min-h-[80svh] items-center bg-ink text-bone">
      <div className="container-x pt-(--header-h)">
        <p className="eyebrow text-signal">Something went wrong</p>
        <h1 className="display mt-6 text-display-m">We hit an unexpected problem.</h1>
        <p className="mt-5 max-w-xl text-bone/70">Please try again. If it keeps happening, contact us and quote reference {error.digest ?? "N/A"}.</p>
        <button type="button" onClick={reset} className="mt-10 inline-flex h-14 items-center bg-signal px-7 font-medium text-white hover:bg-signal-deep">Try again</button>
      </div>
    </section>
  );
}
