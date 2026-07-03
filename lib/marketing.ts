import type { IconName } from "@/components/icons";

export const launchPricing = {
  weekly: "Weekly Pro",
  annual: "Annual Pro",
  annualTrial: "14-day annual trial",
  summary: "Weekly and annual Pro options; annual includes a 14-day trial for eligible subscribers.",
} as const;

export const heroScreenshots = [
  {
    src: "/screenshots/furmacy-today-clean.png",
    alt: "Furmacy Today screen showing upcoming pet medication doses",
  },
  {
    src: "/screenshots/furmacy-today-cat-avatar.png",
    alt: "Furmacy Today screen with a cat profile photo mockup",
  },
  {
    src: "/screenshots/furmacy-today-dog-avatar.png",
    alt: "Furmacy Today screen with a dog profile photo mockup",
  },
] as const;

export const launchHighlights = [
  "Now on the App Store",
  "One pet free",
  "Built for iPhone",
  "No account required",
] as const;

export const productTour = [
  {
    src: "/screenshots/furmacy-today-clean.png",
    alt: "Furmacy Today screen showing missed, pending, and upcoming pet medication doses",
    kicker: "Daily plan",
    title: "See what is due before the routine drifts",
    body: "The Today view turns a pet's medication schedule into a short action list with timing, pet, medication, and dose state in one place.",
    points: ["Missed and pending states", "Next-dose timing", "Dose history starts from daily action"],
  },
  {
    src: "/screenshots/furmacy-today-cat-avatar.png",
    alt: "Furmacy Today screen using a stock cat avatar for a pet medication routine",
    kicker: "Care context",
    title: "Keep the right details attached to the right pet",
    body: "Pet profiles, medication names, instructions, refills, symptoms, weight, and vet records stay organized around the care routine.",
    points: ["One pet included free", "Refill and vet-record context", "Weight and symptom logs"],
  },
  {
    src: "/screenshots/furmacy-today-dog-avatar.png",
    alt: "Furmacy Today screen using a stock dog avatar for a pet medication routine",
    kicker: "Pro path",
    title: "Upgrade when the household needs more room",
    body: "Pro is positioned for larger routines: unlimited pets and medications, iCloud sync, full history, and expanded document storage.",
    points: ["Unlimited pets and meds", "iCloud sync", "Full history and expanded documents"],
  },
] as const;

export const marketingMedia = [
  {
    src: "/social/furmacy-og-product-card.png",
    width: 1200,
    height: 630,
    alt: "Furmacy public launch card with App Store CTA and product UI",
    useCase: "Open Graph, Twitter, and link previews",
    disclosure: "Public-launch graphic using drafted UI illustration and verified positioning.",
    status: "current",
  },
  {
    src: "/social/furmacy-share-square.png",
    width: 1080,
    height: 1080,
    alt: "Square Furmacy public launch card",
    useCase: "Manual social posts and lightweight launch outreach",
    disclosure: "Public-launch graphic using drafted UI illustration and verified positioning.",
    status: "current",
  },
  ...heroScreenshots.map((screenshot) => ({
    ...screenshot,
    width: 736,
    height: 1600,
    useCase: "Website product proof",
    disclosure: "Fictional pet data and stock-photo avatars; not customer pets or outcome evidence.",
    status: "current",
  })),
] as const;

export interface StatePair {
  current: string;
  solution: string;
}

export const statePairs: readonly StatePair[] = [
  {
    current: "Phone alarms, sticky notes, and memory all disagree about the next dose.",
    solution: "One Today view shows what is due, what is pending, and what already happened.",
  },
  {
    current: "Refills sneak up after the bottle is already low.",
    solution: "Medication details keep refill counts and reminders beside the care routine.",
  },
  {
    current: "Vet records, labs, prescriptions, and notes live in different places.",
    solution: "Documents, symptoms, weight, and dose history stay attached to the right pet.",
  },
  {
    current: "Family or sitters ask the same question: did someone already give it?",
    solution: "Given and Skip actions create a shared care trail without guesswork.",
  },
] as const;

export interface ValuePoint {
  icon: IconName;
  title: string;
  body: string;
}

export const valuePoints: readonly ValuePoint[] = [
  {
    icon: "heart",
    title: "Calmer daily routines",
    body: "Keep the medication plan visible for pets who need consistency, records, and follow-through.",
  },
  {
    icon: "shield-check",
    title: "Visible dose states",
    body: "Given, Skipped, Pending, and Missed states make handoffs easier to understand.",
  },
  {
    icon: "calendar",
    title: "Useful on day one",
    body: "Add a pet, add meds, see today, and mark Given or Skip without building a whole system first.",
  },
  {
    icon: "check",
    title: "History when it matters",
    body: "Daily actions build the fuller record you may need for refills, vet visits, and ongoing care.",
  },
] as const;

export const proBenefits = [
  "Unlimited pets",
  "Unlimited active medications",
  "Full adherence history",
  "Expanded document vault",
  "iCloud sync across Apple devices",
  "Fuller records for ongoing care",
] as const;
