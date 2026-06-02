import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furmacy Beta · Your pet's health, simplified.",
  description:
    "Join the Furmacy private beta. A short, mostly-optional intake to help us tailor the beta to how you care for your pets. This is for beta fit and feedback — not veterinary advice.",
  applicationName: "Furmacy Beta Intake",
  // A private beta intake reached by email link — keep it out of search engines.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg font-sans text-text antialiased">
        <a
          href="#intake-main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text focus:shadow-card focus:ring-4 focus:ring-accent/30"
        >
          Skip to the form
        </a>
        {children}
      </body>
    </html>
  );
}
