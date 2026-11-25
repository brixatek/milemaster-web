import { cn } from "@/lib/cn";

export type ArtVariant = "spray" | "lattice" | "flow" | "tank" | "signal" | "contour";

/**
 * Designed fallback for missing photography: a technical drawing on a
 * blueprint field. Deterministic (no randomness) so SSR and hydration match.
 */
export function ArtPanel({ variant, label, index, className }: { variant: ArtVariant; label?: string; index?: string; className?: string }) {
  return (
    <div className={cn("on-dark isolate overflow-hidden bg-ink-2 text-bone", className)} aria-hidden>
      <div className="blueprint absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_10%,rgb(63_167_214/0.18),transparent_60%)]" />
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <Drawing variant={variant} />
      </svg>
      {(label || index) && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
          {label && <span className="eyebrow text-bone/70">{label}</span>}
          {index && <span className="eyebrow text-signal">{index}</span>}
        </div>
      )}
    </div>
  );
}

function Drawing({ variant }: { variant: ArtVariant }) {
  const stroke = "rgb(237 241 246 / 0.55)";
  const faint = "rgb(237 241 246 / 0.18)";
  switch (variant) {
    case "spray": {
      // Injector nozzle atomising fuel into a fine cone
      const rand = (n: number) => {
        const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
        return x - Math.floor(x);
      };
      const dots = Array.from({ length: 260 }, (_, i) => {
        const t = Math.pow(rand(i), 0.7);
        const a = (rand(i + 1000) + rand(i + 2000) + rand(i + 3000) - 1.5) * 0.4;
        const r = 8 + t * 300;
        return { x: 82 + Math.cos(a) * r, y: 150 + Math.sin(a) * r, s: 0.4 + t * 1.8 * (0.5 + rand(i + 4000)) };
      });
      return (
        <g>
          <path d="M20 132 H70 L82 146 V154 L70 168 H20 Z" fill="none" stroke={stroke} strokeWidth="1.2" />
          <line x1="20" y1="150" x2="82" y2="150" stroke={faint} strokeDasharray="3 4" />
          {dots.map((d, i) => (
            <circle key={i} cx={d.x.toFixed(2)} cy={d.y.toFixed(2)} r={d.s.toFixed(2)} fill={i % 15 === 0 ? "#d3241b" : "rgb(237 241 246 / 0.7)"} />
          ))}
          <path d="M82 150 L340 38 M82 150 L340 262" stroke={faint} strokeDasharray="2 6" />
        </g>
      );
    }
    case "lattice": {
      const hex = (cx: number, cy: number, r: number) =>
        Array.from({ length: 6 }, (_, k) => {
          const a = (Math.PI / 3) * k + Math.PI / 6;
          return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
        }).join(" ");
      const cells = [];
      for (let row = 0; row < 6; row++)
        for (let col = 0; col < 9; col++) {
          const cx = 40 + col * 42 + (row % 2) * 21;
          const cy = 40 + row * 36;
          cells.push(<polygon key={`${row}-${col}`} points={hex(cx, cy, 20)} fill="none" stroke={(row + col) % 7 === 0 ? "#d3241b" : faint} strokeWidth="1" />);
        }
      return <g>{cells}<circle cx="250" cy="130" r="5" fill="#d3241b" /><circle cx="250" cy="130" r="40" fill="none" stroke={stroke} strokeDasharray="2 4" /></g>;
    }
    case "flow":
      return (
        <g fill="none">
          {Array.from({ length: 14 }, (_, i) => (
            <path key={i} d={`M-10 ${40 + i * 17} C 120 ${30 + i * 17 + (i % 3) * 12}, 260 ${60 + i * 16 - (i % 4) * 10}, 420 ${44 + i * 17}`} stroke={i === 6 ? "#d3241b" : i % 2 ? faint : stroke} strokeWidth={i === 6 ? 1.6 : 1} />
          ))}
        </g>
      );
    case "tank":
      return (
        <g fill="none" strokeWidth="1.2">
          <ellipse cx="200" cy="70" rx="110" ry="22" stroke={stroke} />
          <path d="M90 70 V230 A110 22 0 0 0 310 230 V70" stroke={stroke} />
          <ellipse cx="200" cy="160" rx="110" ry="22" stroke="#d3241b" strokeDasharray="4 4" />
          <path d="M90 205 A110 22 0 0 0 310 205" stroke={faint} />
          {[100, 130, 160, 190, 220].map((y) => (
            <line key={y} x1="320" x2="336" y1={y} y2={y} stroke={faint} />
          ))}
          <text x="344" y="164" fill="#d3241b" fontSize="10" fontFamily="monospace">LVL</text>
        </g>
      );
    case "signal":
      return (
        <g fill="none" strokeWidth="1.2">
          <polyline points="0,200 40,196 70,190 100,198 130,150 150,210 180,120 210,190 240,170 270,182 300,90 320,200 360,176 400,182" stroke={stroke} />
          <polyline points="0,230 400,230" stroke={faint} strokeDasharray="3 5" />
          <circle cx="300" cy="90" r="6" stroke="#d3241b" />
          <circle cx="300" cy="90" r="18" stroke="#d3241b" strokeOpacity="0.4" />
        </g>
      );
    case "contour":
    default:
      return (
        <g fill="none">
          {Array.from({ length: 11 }, (_, i) => (
            <ellipse key={i} cx="260" cy="170" rx={20 + i * 22} ry={12 + i * 14} stroke={i === 3 ? "#d3241b" : faint} transform="rotate(-18 260 170)" />
          ))}
        </g>
      );
  }
}
