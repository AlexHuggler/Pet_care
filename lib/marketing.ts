import type { IconName } from "@/components/icons";

export const launchPricing = {
  weekly: "Weekly Pro",
  annual: "Annual Pro",
  annualTrial: "14-day annual trial",
  summary: "Weekly and annual Pro options; annual includes a 14-day trial for eligible subscribers.",
} as const;

export const heroScreenshots = [
  {
    src: "/screenshots/scenarios/maple-dog-today-plan.png",
    alt: "Furmacy Today screen showing Maple's dog medication plan with pending and given doses",
  },
  {
    src: "/screenshots/scenarios/olive-cat-vet-records.png",
    alt: "Furmacy Documents screen showing Olive's cat vet records and prescriptions",
  },
  {
    src: "/screenshots/scenarios/scout-dog-medication-detail.png",
    alt: "Furmacy medication detail screen showing Scout's anti-seizure med schedule and refills",
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
    src: "/screenshots/scenarios/maple-dog-today-plan.png",
    alt: "Furmacy Today screen for Maple showing a household plan, next dose, Given action, and today's doses",
    kicker: "Today plan",
    title: "See what is due before the day gets away from you",
    body: "Maple's Today view shows what is pending, what was already given, and the next dose in one calm place.",
    points: ["Pending, Given, Skipped, and Missed states", "Next-dose timing", "A care trail for later"],
  },
  {
    src: "/screenshots/scenarios/scout-dog-medication-detail.png",
    alt: "Furmacy medication detail screen for Scout showing schedule, adherence, refills, and vet notes",
    kicker: "Medication details",
    title: "Keep chronic-care timing from living in your head",
    body: "Scout's med screen keeps the schedule, refill count, instructions, and vet note beside the medication itself.",
    points: ["Schedule and next dose", "Refill tracking", "Vet and note context"],
  },
  {
    src: "/screenshots/scenarios/olive-cat-vet-records.png",
    alt: "Furmacy Documents screen for Olive showing kidney panel results, thyroid prescription label, and recheck records",
    kicker: "Vet records",
    title: "Keep the paperwork with the pet who needs it",
    body: "Olive's lab results, prescription labels, and recheck notes stay easy to find when the clinic asks.",
    points: ["Labs and prescriptions", "Expanded documents with Pro", "Records tied to the right pet"],
  },
  {
    src: "/screenshots/scenarios/kiwi-bird-health-trends.png",
    alt: "Furmacy health screen for Kiwi showing weight trend, symptoms, medications, and documents",
    kicker: "Health notes",
    title: "Notice small changes sooner",
    body: "Kiwi's weight and symptom logs make it easier to bring clear notes into the next check-in.",
    points: ["Weight trends", "Symptom logs", "Helpful context between visits"],
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
    current: "You are trying to remember whether the morning dose actually happened.",
    solution: "Furmacy gives the day one place to show what is due, what is pending, and what was already marked.",
  },
  {
    current: "The bottle is getting low, but the refill reminder lives somewhere in your head.",
    solution: "Refill counts, instructions, and vet details stay beside the medication instead of in a text thread.",
  },
  {
    current: "The clinic asks about a trend, and the notes are scattered across photos, paper, and memory.",
    solution: "Weight, symptoms, documents, and dose history stay attached to the pet they belong to.",
  },
  {
    current: "Someone else helps for the day, and everyone is checking the same thing by text.",
    solution: "A clearer care trail makes handoffs feel less risky for family, sitters, and busy households.",
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
    title: "Less to hold in your head",
    body: "Keep the routine visible when your pet needs consistency, follow-through, and a little extra care.",
  },
  {
    icon: "shield-check",
    title: "Clearer handoffs",
    body: "Given, Skipped, Pending, and Missed states help the next caregiver see what already happened.",
  },
  {
    icon: "calendar",
    title: "Useful without a project",
    body: "Add one pet, add the meds, see today, and mark Given or Skip without rebuilding your whole routine.",
  },
  {
    icon: "check",
    title: "Better notes for later",
    body: "Small daily actions build a record you can use for refills, vet conversations, and ongoing care.",
  },
] as const;

export const proBenefits = [
  "Unlimited pets",
  "Unlimited active medications",
  "Full dose history",
  "More room for vet documents",
  "iCloud sync across Apple devices",
  "Fuller records for ongoing care",
] as const;
