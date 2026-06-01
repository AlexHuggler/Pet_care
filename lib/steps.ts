import { type IntakeData, isValidEmail } from "./intake";
import { type IconName } from "@/components/icons";

export type StepErrors = Partial<Record<keyof IntakeData, string>>;
export type StepValidator = (data: IntakeData) => StepErrors;

export interface StepMeta {
  id: string;
  /** Eyebrow shown above the title, e.g. "Step 1 of 8". */
  title: string;
  description: string;
  iconKey: IconName;
  /** Whole step is optional — surfaced to the user so nothing feels mandatory. */
  optional?: boolean;
  validate: StepValidator;
}

const noErrors: StepValidator = () => ({});

export const STEPS: StepMeta[] = [
  {
    id: "basics",
    title: "Tester basics",
    description:
      "Just enough to send your TestFlight invite to the right place.",
    iconKey: "user",
    validate: (d) => {
      const e: StepErrors = {};
      if (!d.name.trim()) e.name = "Add your name so we know who we're talking to.";
      if (!d.email.trim()) e.email = "We'll need an email to send your TestFlight invite.";
      else if (!isValidEmail(d.email)) e.email = "That email looks off — mind double-checking it?";
      if (!d.testflightComfort) e.testflightComfort = "Let us know how you feel about TestFlight.";
      return e;
    },
  },
  {
    id: "household",
    title: "Your pet household",
    description: "A little about who you care for. Everything here is optional.",
    iconKey: "paw",
    optional: true,
    validate: noErrors,
  },
  {
    id: "goal",
    title: "What would make Furmacy most useful for you?",
    description: "Pick the one that fits best — you can explore the rest in the app.",
    iconKey: "compass",
    validate: (d) =>
      d.careGoal ? {} : { careGoal: "Choose the goal that fits you best." },
  },
  {
    id: "complexity",
    title: "Your routine care",
    description:
      "What does day-to-day care involve? Choose anything that applies — all optional.",
    iconKey: "pill",
    optional: true,
    validate: noErrors,
  },
  {
    id: "chronic",
    title: "Chronic-care context",
    description:
      "Only share what feels useful. This helps us prioritize beta feedback, not diagnose anything.",
    iconKey: "heart",
    optional: true,
    validate: noErrors,
  },
  {
    id: "workflow",
    title: "How you manage care today",
    description:
      "This helps us understand what to improve. Everything here is optional.",
    iconKey: "clipboard",
    optional: true,
    validate: noErrors,
  },
  {
    id: "feedback",
    title: "Beta feedback fit",
    description:
      "A quick sense of how you'd like to help shape Furmacy. All optional.",
    iconKey: "chat",
    optional: true,
    validate: noErrors,
  },
  {
    id: "consent",
    title: "A few things to agree on",
    description: "Furmacy helps you stay organized — it isn't veterinary advice.",
    iconKey: "shield-check",
    validate: (d) => {
      const e: StepErrors = {};
      if (!d.consentNotVetAdvice)
        e.consentNotVetAdvice = "Please confirm you understand this.";
      if (!d.consentFollowVet)
        e.consentFollowVet = "Please confirm you understand this.";
      if (!d.consentEmails)
        e.consentEmails = "We need this to send you beta updates.";
      return e;
    },
  },
];

export const STEP_COUNT = STEPS.length;
