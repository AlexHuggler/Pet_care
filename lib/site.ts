import type { IconName } from "@/components/icons";

/**
 * Single source of truth for site identity, contact, legal, and App Store config.
 * Static values live here; a few read from public (non-secret) env vars so they
 * can be set per-environment. Never put secrets in this file.
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://furmacy.org").replace(/\/+$/, "");

export const site = {
  name: "Furmacy",
  tagline: "Your pet's health, simplified.",
  // One-sentence, entity-clear description reused in metadata, JSON-LD, and llms.txt.
  description:
    "Furmacy is a privacy-first iOS app that helps pet caregivers manage medications and doses, refills and routine care, weight and symptom tracking, and vet records — with care handoff for households and sitters.",
  url: SITE_URL,

  // Company / legal. TODO: confirm entity details and governing law with counsel.
  company: "Huggler Holdings LLC",
  jurisdiction: "State of Texas, United States",
  legalEffectiveDate: "June 13, 2026",

  // Public contact alias (forwards to the team inbox). Configure the alias at your
  // email provider; the site only ever shows this address.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@furmacy.org",

  // App Store. Empty until the app is live → CTAs render a "Coming soon" state.
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "",
  appleAppId: process.env.NEXT_PUBLIC_APPLE_APP_ID ?? "",

  // Social profiles (add as they go live; rendered into Organization sameAs).
  social: {} as Record<string, string>,
} as const;

export const absoluteUrl = (path = "/") =>
  `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

export interface Feature {
  icon: IconName;
  title: string;
  body: string;
}

/** App capabilities — reused by the features grid, JSON-LD featureList, and llms.txt. */
export const features: readonly Feature[] = [
  {
    icon: "pill",
    title: "Medication reminders & dose tracking",
    body: "Schedule every med and mark each dose Given or Skipped, so anyone helping knows exactly what's done.",
  },
  {
    icon: "check",
    title: "Clear Given / Skip actions",
    body: "Big, obvious dose actions answer the daily question: did someone already give it?",
  },
  {
    icon: "calendar",
    title: "Refills & routine care",
    body: "Track refills and recurring care — daily, weekly, or monthly — so nothing quietly runs out.",
  },
  {
    icon: "chart",
    title: "Weight & symptom logging",
    body: "Note weight changes and symptoms over time to share a clearer picture with your vet.",
  },
  {
    icon: "folder",
    title: "Vet records, all in one place",
    body: "Keep labs, prescriptions, vaccines, discharge notes, insurance, boarding, and travel records together.",
  },
  {
    icon: "users",
    title: "Care handoff for your household",
    body: "Share the routine with family, sitters, and boarders so care continues smoothly when you're away.",
  },
];
