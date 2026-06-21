import type { IconName } from "@/components/icons";

export const launchPricing = {
  weekly: "Weekly Pro",
  annual: "Annual Pro",
  annualTrial: "7-day annual trial",
  summary: "Weekly and annual Pro options; annual includes a 7-day trial for eligible subscribers.",
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
    title: "Desired outcome",
    body: "A calmer daily care routine for pets who need consistent medication, records, and follow-through.",
  },
  {
    icon: "shield-check",
    title: "Confidence it will work",
    body: "Real product screens, on-device storage, visible dose states, and a focused chronic-care workflow.",
  },
  {
    icon: "calendar",
    title: "Faster relief",
    body: "The first useful loop is simple: add a pet, add meds, see today, mark Given or Skip.",
  },
  {
    icon: "check",
    title: "Low effort",
    body: "Furmacy keeps the daily action small while preserving the history you need for longer-term care.",
  },
] as const;

export const proBenefits = [
  "Unlimited pets",
  "Unlimited active medications",
  "Full adherence history",
  "Expanded document vault",
  "iCloud sync across Apple devices",
  "Future household and sitter sharing",
] as const;
