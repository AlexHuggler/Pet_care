import type { IconName } from "@/components/icons";

/**
 * Single source of truth for site identity, contact, legal, and App Store config.
 * Static values live here; a few read from public (non-secret) env vars so they
 * can be set per-environment. Never put secrets in this file.
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://furmacy.org").replace(/\/+$/, "");
const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() ||
  "https://apps.apple.com/us/app/furmacy-pet-med-tracker/id6767069388?uo=4";

export const site = {
  name: "Furmacy",
  tagline: "Pet meds, refills, and vet records, easier to keep up with.",
  // One-sentence, entity-clear description reused in metadata, JSON-LD, and llms.txt.
  description:
    "Furmacy is a free-to-download iPhone pet medication reminder app for dose history, refills, weight and symptom logs, vet records, senior pet care, chronic routines, and multi-pet households.",
  url: SITE_URL,

  // Company / legal. TODO: confirm entity details and governing law with counsel.
  company: "Huggler Holdings LLC",
  jurisdiction: "State of Texas, United States",
  legalEffectiveDate: "June 21, 2026",

  // Public contact alias (forwards to the team inbox). Configure the alias at your
  // email provider; the site only ever shows this address.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@furmacy.org",

  // Public App Store listing. NEXT_PUBLIC_APP_STORE_URL may override this at build time.
  appStoreUrl: APP_STORE_URL,
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
    title: "Medication reminders with a care trail",
    body: "Schedule meds and mark each dose Given or Skipped so you and the next helper can see what happened.",
  },
  {
    icon: "check",
    title: "Dose status at a glance",
    body: "Pending, Missed, Given, and Skipped states answer the daily question: did someone already give it?",
  },
  {
    icon: "calendar",
    title: "Refills beside the routine",
    body: "Track refill counts, prescribing vets, instructions, and recurring care beside the schedule itself.",
  },
  {
    icon: "chart",
    title: "Weight and symptom history",
    body: "Capture changes over time so vet visits start with a clearer record instead of scattered memory.",
  },
  {
    icon: "folder",
    title: "Vet records in the right place",
    body: "Keep labs, prescriptions, vaccines, discharge notes, insurance, boarding, and travel records together.",
  },
  {
    icon: "users",
    title: "Pro when care needs more room",
    body: "Upgrade for unlimited pets and medications, full history, iCloud sync, and expanded records.",
  },
];
