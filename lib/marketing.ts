import type { IconName } from "@/components/icons";

export const launchPricing = {
  weekly: "Weekly Pro",
  annual: "Annual Pro",
  annualTrial: "14-day annual trial",
  summary: "Weekly and annual Pro options; annual includes a 14-day trial for eligible subscribers.",
} as const;

export const offerMode = "paidOnly" as const;

export const offerCopyByMode = {
  paidOnly: {
    highlights: [
      "Now on the App Store",
      "Pro access required",
      "Built for iPhone",
      "No Furmacy account",
    ],
    heroBody:
      "When your dog, cat, or other companion needs ongoing care, Furmacy gives you a gentle place to track what is due, what happened, refills, weight and symptom notes, and vet records. Download it on iPhone and choose Pro access to use the care tools.",
    heroBullets: [
      "See what needs attention today",
      "Mark Given, Skip, Pending, or Missed",
      "Keep refills and vet records close",
      "Choose weekly or annual Pro access",
    ],
    heroFinePrint:
      "Furmacy currently requires Pro access. Pro offers weekly and annual options; annual includes a 14-day trial for eligible subscribers. Exact live pricing is shown before purchase in the App Store. Furmacy is not veterinary advice.",
    screenshotCalloutTitle: "Care routines, easier to follow",
    screenshotCalloutBody:
      "A calmer place for doses, refills, notes, weight, symptoms, and records when your pet needs steady follow-through.",
    proHeading: "Furmacy currently requires Pro access.",
    proSubtitle:
      "Download Furmacy from the App Store, then choose weekly or annual Pro access to use reminders, records, history, and sync.",
    planComparison: [
      {
        name: "Pro access",
        note: "Required to use Furmacy",
        items: [
          "Medication reminders",
          "Dose states and history",
          "Refills, weight, symptoms, and vet records",
          "Weekly or annual options",
        ],
      },
      {
        name: "Annual Pro",
        note: "For ongoing care",
        items: [
          "14-day trial for eligible subscribers",
          "Unlimited pets",
          "Unlimited active medications",
          "iCloud sync and expanded documents",
        ],
      },
    ],
    ctaTitle: "Ready for a calmer care routine?",
    ctaBody:
      "Download Furmacy from the App Store and choose Pro access when you are ready to keep meds, refills, history, and records in one place.",
    rollbackNote:
      "Rollback path: change offerMode to onePetFree if the ad test moves back to a free starter plan.",
  },
  onePetFree: {
    highlights: [
      "Now on the App Store",
      "One pet free",
      "Built for iPhone",
      "No account required",
    ],
    heroBody:
      "When your dog, cat, or other companion needs ongoing care, Furmacy gives you a gentle place to track what is due, what happened, refills, weight and symptom notes, and vet records. Download it free on iPhone and start with one pet.",
    heroBullets: [
      "See what needs attention today",
      "Mark Given, Skip, Pending, or Missed",
      "Keep refills and vet records close",
      "Upgrade only when care needs more room",
    ],
    heroFinePrint:
      "Use the free one-pet plan as long as it fits. Pro offers weekly and annual options; annual includes a 14-day trial for eligible subscribers. Exact live pricing is shown before purchase in the App Store. Furmacy is not veterinary advice.",
    screenshotCalloutTitle: "Care routines, easier to follow",
    screenshotCalloutBody:
      "A calmer place for doses, refills, notes, weight, symptoms, and records when your pet needs steady follow-through.",
    proHeading: "Use it free for one pet. Upgrade only when you need more room.",
    proSubtitle:
      "Start with the core routine at no cost. Pro is there for bigger care setups: unlimited pets, unlimited active medications, iCloud sync, full history, and expanded documents.",
    planComparison: [
      {
        name: "Free",
        note: "Start with one pet",
        items: [
          "One pet",
          "Medication reminders",
          "Dose states",
          "Refill, weight, symptom, and vet-record basics",
        ],
      },
      {
        name: "Pro",
        note: "When care needs more room",
        items: [
          "Unlimited pets",
          "Unlimited active medications",
          "Full history",
          "iCloud sync and expanded documents",
        ],
      },
    ],
    ctaTitle: "Care days are a lot. Furmacy helps make them easier to follow.",
    ctaBody:
      "Start free with one pet, then upgrade when unlimited pets, medications, full history, iCloud sync, and expanded documents would make life calmer.",
    rollbackNote:
      "This mode is the rollback option for restoring the free one-pet starter plan.",
  },
} as const;

export const offerCopy = offerCopyByMode[offerMode];

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
  ...offerCopy.highlights,
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
