import localFont from "next/font/local";

/**
 * Poppins for headings and body. Ubuntu Mono for the small uppercase labels
 * and technical data. Self-hosted and preloaded with metric-matched fallbacks.
 * Licences: SIL OFL 1.1 (Poppins), Ubuntu Font Licence 1.0 (Ubuntu Mono) — see src/fonts/.
 */
export const sans = localFont({
  src: [
    { path: "../fonts/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const mono = localFont({
  src: [
    { path: "../fonts/ubuntu-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ubuntu-mono-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-ubuntu-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});
