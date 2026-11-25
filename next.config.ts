import type { NextConfig } from "next";
import { legacyRedirects } from "./src/config/redirects";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'" + (process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""),
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://i.ytimg.com",
      "font-src 'self' data:",
      "frame-src https://www.youtube-nocookie.com",
      "connect-src 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default config;
