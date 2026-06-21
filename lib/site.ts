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
    "Furmacy is a privacy-first iOS app for pet medication reminders, dose history, refills, weight and symptom tracking, vet records, and Pro upgrades for unlimited chronic-care routines.",
  url: SITE_URL,

  // Company / legal. TODO: confirm entity details and governing law with counsel.
  company: "Huggler Holdings LLC",
  jurisdiction: "State of Texas, United States",
  legalEffectiveDate: "June 21, 2026",

  // Public contact alias (forwards to the team inbox). Configure the alias at your
  // email provider; the site only ever shows this address.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@furmacy.org",

  // App Store. Keep the URL empty until the app is live so primary CTAs stay
  // in a "Coming soon" state. Campaign redirect pages use their own map.
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "",
  appleAppId: process.env.NEXT_PUBLIC_APPLE_APP_ID ?? "6767069388",

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
    title: "Medication reminders that create a care trail",
    body: "Schedule meds and mark each dose Given or Skipped, so the next caregiver can see exactly what happened.",
  },
  {
    icon: "check",
    title: "Status clarity for high-stakes routines",
    body: "Pending, missed, given, and skipped states reduce the daily question: did someone already give it?",
  },
  {
    icon: "calendar",
    title: "Refills and routine care in context",
    body: "Track refill counts, prescribing vets, instructions, and recurring care beside the schedule itself.",
  },
  {
    icon: "chart",
    title: "Weight and symptom history",
    body: "Capture changes over time so vet visits start with a clearer record instead of scattered memory.",
  },
  {
    icon: "folder",
    title: "Expanded vet document vault",
    body: "Keep labs, prescriptions, vaccines, discharge notes, insurance, boarding, and travel records together.",
  },
  {
    icon: "users",
    title: "Pro-ready household handoff",
    body: "Pro is built for multi-pet households, long histories, iCloud sync, and future sitter sharing.",
  },
];
