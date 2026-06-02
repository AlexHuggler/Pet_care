import { type IconName } from "@/components/icons";
import {
  CARE_GOAL_OPTIONS,
  CHRONIC_OPTIONS,
  COMPLEXITY_OPTIONS,
  type IntakeData,
  type Option,
  PET_COUNT_OPTIONS,
  SPECIES_OPTIONS,
  TEST_FREQUENCY_OPTIONS,
  TESTFLIGHT_OPTIONS,
  TRACK_TODAY_OPTIONS,
  YES_NO_OPTIONS,
} from "./intake";

const labelOf = (opts: readonly Option[], value: string) =>
  opts.find((o) => o.value === value)?.label ?? value;

const labelsOf = (opts: readonly Option[], values: string[]) =>
  values.map((v) => labelOf(opts, v)).join(", ");

export interface ReviewRow {
  label: string;
  value: string;
}

export interface ReviewGroup {
  stepIndex: number;
  title: string;
  icon: IconName;
  rows: ReviewRow[];
}

const row = (label: string, value: string): ReviewRow | null =>
  value && value.trim() ? { label, value } : null;

const compact = (rows: (ReviewRow | null)[]): ReviewRow[] =>
  rows.filter((r): r is ReviewRow => r !== null);

/** Build a readable, section-by-section summary used by the review screen. */
export function summarizeIntake(d: IntakeData): ReviewGroup[] {
  const yn = (v: string) => (v ? labelOf(YES_NO_OPTIONS, v) : "");

  return [
    {
      stepIndex: 0,
      title: "Tester basics",
      icon: "user",
      rows: compact([
        row("Name", d.name),
        row("Email", d.email),
        row("Device", d.device),
        row("TestFlight", d.testflightComfort ? labelOf(TESTFLIGHT_OPTIONS, d.testflightComfort) : ""),
      ]),
    },
    {
      stepIndex: 1,
      title: "Pet household",
      icon: "paw",
      rows: compact([
        row("Pets", d.petCount ? labelOf(PET_COUNT_OPTIONS, d.petCount) : ""),
        row("Species", d.species.length ? labelsOf(SPECIES_OPTIONS, d.species) : ""),
        row("Names", d.petNames),
        row("Multi-pet", yn(d.multiPet)),
        row("Role", d.caregiverRole),
      ]),
    },
    {
      stepIndex: 2,
      title: "Primary care goal",
      icon: "compass",
      rows: compact([row("Goal", d.careGoal ? labelOf(CARE_GOAL_OPTIONS, d.careGoal) : "")]),
    },
    {
      stepIndex: 3,
      title: "Routine care",
      icon: "pill",
      rows: compact([
        row("Involves", d.complexity.length ? labelsOf(COMPLEXITY_OPTIONS, d.complexity) : ""),
      ]),
    },
    {
      stepIndex: 4,
      title: "Chronic-care context",
      icon: "heart",
      rows: compact([
        row("Context", d.chronic.length ? labelsOf(CHRONIC_OPTIONS, d.chronic) : ""),
        row("Notes", d.chronicOther),
      ]),
    },
    {
      stepIndex: 5,
      title: "Current workflow",
      icon: "clipboard",
      rows: compact([
        row("Tracks with", d.trackToday.length ? labelsOf(TRACK_TODAY_OPTIONS, d.trackToday) : ""),
        row("Pain point", d.painPoint),
        row("Past confusion", d.missedDoseCauses),
        row("Shared care", yn(d.multipleHelpers)),
      ]),
    },
    {
      stepIndex: 6,
      title: "Beta feedback fit",
      icon: "chat",
      rows: compact([
        row("Cadence", d.testFrequency ? labelOf(TEST_FREQUENCY_OPTIONS, d.testFrequency) : ""),
        row("Shares feedback", yn(d.willingScreenshots)),
        row("Worth recommending", d.whyRecommend),
      ]),
    },
    {
      stepIndex: 7,
      title: "Consent",
      icon: "shield-check",
      rows: compact([
        row("Not vet advice", d.consentNotVetAdvice ? "Agreed" : ""),
        row("Follow vet guidance", d.consentFollowVet ? "Agreed" : ""),
        row("Beta emails", d.consentEmails ? "Agreed" : ""),
        row("Feedback call", d.interestedInCall ? "Interested" : ""),
      ]),
    },
  ];
}
