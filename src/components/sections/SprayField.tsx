/**
 * Hero visual: an injector atomising fuel into a fine cone of droplets —
 * the core idea behind X-Tend (clean nozzles → fine mist → complete burn).
 * A static SVG drawing carries the composition; CSS-animated droplets add
 * life on top and are removed entirely under prefers-reduced-motion.
 */
/** Deterministic pseudo-random in [0,1) — identical on server and client. */
const rand = (n: number) => {
  const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};
const STATIC = Array.from({ length: 240 }, (_, i) => {
  const t = Math.pow(rand(i), 0.7); // distance along the cone, denser near the nozzle
  const spread = (rand(i + 1000) + rand(i + 2000) + rand(i + 3000) - 1.5) * 0.42; // ~gaussian, radians
  const r = 2 + t * 92;
  return {
    x: 10 + Math.cos(spread) * r,
    y: 50 + Math.sin(spread) * r * 1.25,
    s: 0.1 + t * 0.5 * (0.5 + rand(i + 4000)),
    o: 0.25 + (1 - t) * 0.6,
    red: rand(i + 5000) > 0.94,
  };
});
const LIVE = Array.from({ length: 40 }, (_, i) => {
  const spread = ((i * 97.3) % 30) - 15;
  const dist = 30 + ((i * 61) % 60);
  const rad = (spread * Math.PI) / 180;
  return {
    dx: `${(Math.cos(rad) * dist).toFixed(1)}cqw`,
    dy: `${(Math.sin(rad) * dist).toFixed(1)}cqw`,
    size: 2 + ((i * 7) % 4),
    delay: `${((i * 0.173) % 4.2).toFixed(2)}s`,
    dur: `${(3.6 + ((i * 13) % 20) / 10).toFixed(2)}s`,
    red: i % 9 === 0,
  };
});

export function SprayField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-full [container-type:inline-size] lg:w-[52%]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full opacity-40 lg:opacity-100">
        <path d="M0 47.5 H7 L10 49.2 V50.8 L7 52.5 H0" fill="none" stroke="rgb(237 241 246 / .45)" strokeWidth=".15" vectorEffect="non-scaling-stroke" />
        <path d="M10 50 L100 12 M10 50 L100 88" stroke="rgb(237 241 246 / .14)" strokeWidth=".1" strokeDasharray=".6 1.2" vectorEffect="non-scaling-stroke" />
        {STATIC.map((d, i) => (
          <ellipse key={i} cx={d.x.toFixed(2)} cy={d.y.toFixed(2)} rx={(d.s * 0.55).toFixed(3)} ry={(d.s * 0.75).toFixed(3)} fill={d.red ? "#d3241b" : "#edf1f6"} fillOpacity={d.red ? 0.9 : d.o.toFixed(2)} />
        ))}
      </svg>
      <div className="absolute top-1/2 left-[10%] motion-reduce:hidden">
        {LIVE.map((d, i) => (
          <span
            key={i}
            className="absolute block rounded-full"
            style={{
              width: d.size,
              height: d.size,
              background: d.red ? "var(--color-signal)" : "rgb(237 241 246 / 0.8)",
              ["--dx" as string]: d.dx,
              ["--dy" as string]: d.dy,
              animation: `spray ${d.dur} cubic-bezier(.16,1,.3,1) ${d.delay} infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>
      <p className="eyebrow absolute bottom-24 left-[10%] hidden text-bone/60 lg:block">Fig. 01 — Clean injector, fine atomisation, complete burn</p>
    </div>
  );
}
