import type { IconName } from "@/components/icons";

export const launchPricing = { price: "$4.99", summary: "One-time U.S. App Store download. All features included." } as const;
export const offerCopy = {
  highlights: ["Pay once", "All features included", "iPhone and iPad", "No Furmacy account"],
  heroBody: "When your dog or cat needs ongoing care, Furmacy keeps the prescribed routine, dose history, refills, weight and symptom notes, and vet records together. Pay once to download the app and use every feature.",
  heroBullets: ["See what needs attention today", "Record Given or Skip and review dose history", "Prepare a veterinary PDF with selected records", "One purchase. No subscription."],
  heroFinePrint: "$4.99 once in the U.S. App Store. Local prices are shown by Apple before purchase. Furmacy is an organization tool, not veterinary advice.",
  screenshotCalloutTitle: "Care routines, easier to follow",
  screenshotCalloutBody: "A clear place for doses, refills, notes, weight, symptoms, and records when your pet needs steady follow-through.",
  proHeading: "Pay once. All features included.",
  proSubtitle: "Download Furmacy for $4.99 in the U.S. App Store. No subscription, trial, or in-app upgrade.",
  ctaTitle: "Ready for a clearer care routine?",
  ctaBody: "One app purchase includes medications, reminders, full recorded history, documents, veterinary PDFs, and optional private iCloud sync.",
} as const;

export const heroScreenshots = [
  {
    src: "/screenshots/paid-1.0.5/today.png",
    alt: "Furmacy Today screen showing Olive's cat medication plan with pending and given doses",
  },
  {
    src: "/screenshots/paid-1.0.5/records.png",
    alt: "Furmacy Documents screen showing Olive's cat vet records and prescriptions",
  },
  {
    src: "/screenshots/paid-1.0.5/medications.png",
    alt: "Furmacy medication detail screen showing Olive's blood pressure medication schedule and refills",
  },
] as const;

export const launchHighlights = [
  ...offerCopy.highlights,
] as const;

export const productTour = [
  {
    src: "/screenshots/paid-1.0.5/today.png",
    alt: "Furmacy Today screen for Olive showing a household plan, next dose, Given action, and today's doses",
    kicker: "Today plan",
    title: "See what is due before the day gets away from you",
    body: "Olive's Today view shows what is pending, what was already given, and the next dose in one calm place.",
    points: ["Pending, Given, Skipped, and Missed states", "Next-dose timing", "A care trail for later"],
  },
  {
    src: "/screenshots/paid-1.0.5/medications.png",
    alt: "Furmacy medication detail screen for Olive showing schedule, recorded completion, refills, and vet notes",
    kicker: "Medication details",
    title: "Keep chronic-care timing from living in your head",
    body: "Olive's med screen keeps the schedule, refill count, instructions, and vet note beside the medication itself.",
    points: ["Schedule and next dose", "Refill tracking", "Vet and note context"],
  },
  {
    src: "/screenshots/paid-1.0.5/records.png",
    alt: "Furmacy Documents screen for Olive showing kidney panel results, thyroid prescription label, and recheck records",
    kicker: "Vet records",
    title: "Keep the paperwork with the pet who needs it",
    body: "Olive's lab results, prescription labels, and recheck notes stay easy to find when the clinic asks.",
    points: ["Labs and prescriptions", "Documents included", "Records tied to the right pet"],
  },
  {
    src: "/screenshots/paid-1.0.5/health.png",
    alt: "Furmacy health screen for Olive showing weight trend, symptoms, medications, and documents",
    kicker: "Health notes",
    title: "Notice small changes sooner",
    body: "Olive's weight and symptom logs make it easier to bring clear notes into the next check-in.",
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
    solution: "Share a dated PDF of selected records with a caregiver; coordinate new doses directly with them.",
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
    body: "Share selected history in a PDF so another caregiver can review what was recorded. Live household updates are not available.",
  },
  {
    icon: "calendar",
    title: "Useful without a project",
    body: "Add the pet you are caring for, add the meds, see today, and mark Given or Skip without rebuilding your whole routine.",
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
