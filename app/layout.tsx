import type { Metadata, Viewport } from "next";
import "@fontsource/big-shoulders-display/latin-700";
import "@fontsource/big-shoulders-display/latin-800";
import "@fontsource/big-shoulders-display/latin-900";
import "@fontsource/instrument-sans/latin-400";
import "@fontsource/instrument-sans/latin-500";
import "@fontsource/instrument-sans/latin-600";
import "@fontsource/dm-mono/latin-500";
import "./globals.css";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "ad film production Kerala", "digital marketing agency Kerala", "performance marketing Kerala",
    "Meta ads agency", "Google Ads agency", "SEO services Kerala", "WhatsApp automation",
    "content creation Kerala", "Malayalam ad films", "Break Studio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_IN", url: "/", siteName: SITE.name,
    title: SITE.title, description: SITE.description,
    images: [{ url: "/logo.jpg", width: 240, height: 240, alt: "Break Studio logo" }],
  },
  twitter: { card: "summary", title: SITE.title, description: SITE.description, images: ["/logo.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = { themeColor: "#730000", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="font-sans text-[17px] leading-relaxed">{children}</body>
    </html>
  );
}
