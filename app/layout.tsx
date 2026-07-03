import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import { organizationLd, websiteLd } from "@/lib/structuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Furmacy — Your pet's health, simplified.",
    template: "%s · Furmacy",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "pet medication reminder app",
    "pet health app",
    "dog medication tracker",
    "cat medication tracker",
    "pet medication schedule",
    "vet records app",
    "pet care app",
    "pet medication management",
    "chronic pet care app",
    "pet health records",
  ],
  authors: [{ name: site.company, url: site.url }],
  creator: site.company,
  publisher: site.company,
  category: "health",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Furmacy — Pet medication care without guesswork.",
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: "/social/furmacy-og-product-card.png",
        width: 1200,
        height: 630,
        alt: "Furmacy public launch card showing pet medication care on iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furmacy — Pet medication care without guesswork.",
    description: site.description,
    images: ["/social/furmacy-og-product-card.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/furmacy-app-icon.png", sizes: "1024x1024", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Apple smart app banner once the app is live (set NEXT_PUBLIC_APPLE_APP_ID).
  ...(site.appleAppId ? { itunes: { appId: site.appleAppId } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-bg font-sans text-text antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text focus:shadow-card focus:ring-4 focus:ring-accent/30"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </body>
    </html>
  );
}
