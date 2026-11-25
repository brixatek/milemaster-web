import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { brand, site } from "@/config/site";
import { organizationLd } from "@/lib/seo";
import { mono, sans } from "@/config/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.defaultTitle, template: site.titleTemplate },
  description: site.defaultDescription,
  applicationName: `${brand.name} by Milemaster`,
  formatDetection: { telephone: false },
  openGraph: { siteName: `${brand.name} · Milemaster Integrated Services`, locale: site.locale, type: "website" },
};

export const viewport: Viewport = {
  themeColor: brand.colors.ink,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppLink />
        <RevealObserver />
        <JsonLd data={organizationLd()} />
      </body>
    </html>
  );
}
