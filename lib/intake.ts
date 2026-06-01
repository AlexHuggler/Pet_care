import { z } from "zod";

/**
 * Furmacy beta-intake data model — the single source of truth.
 *
 * The zod schema below is intentionally *lenient* (every field has a default and
 * single-selects allow an empty string) so that partially-filled drafts always
 * parse cleanly. Friendly "this is required" checks live in `lib/steps.ts`, close
 * to the UI, so we can show warm, specific messages instead of zod errors.
 */

export type Option<V extends string = string> = { value: V; label: string };

/** Pull a zod-friendly literal tuple of `value`s out of an options list. */
function enumValues<T extends readonly Option[]>(opts: T) {
  return opts.map((o) => o.value) as [T[number]["value"], ...T[number]["value"][]];
}

/* ----------------------------- Option lists ------------------------------ */

export const TESTFLIGHT_OPTIONS = [
  { value: "yes", label: "Yes, I've used it" },
  { value: "no", label: "No" },
  { value: "not_sure", label: "Not sure" },
] as const;

export const YES_NO_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
] as const;

export const PET_COUNT_OPTIONS = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5 or more" },
] as const;

export const SPECIES_OPTIONS = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "bird", label: "Bird" },
  { value: "rabbit", label: "Rabbit" },
  { value: "reptile", label: "Reptile" },
  { value: "other", label: "Other" },
] as const;

export const CARE_GOAL_OPTIONS = [
  { value: "med_reminders", label: "Medication reminders & dose tracking" },
  { value: "refills_routine", label: "Refills & routine care" },
  { value: "weight_symptom", label: "Weight or symptom tracking" },
  { value: "vet_records", label: "Vet records, labs & prescriptions" },
  { value: "care_handoff", label: "Care handoff with another person" },
  { value: "exploring", label: "Just exploring" },
] as const;

export const COMPLEXITY_OPTIONS = [
  { value: "medications", label: "Medications" },
  { value: "fluids", label: "Fluids" },
  { value: "supplements", label: "Supplements" },
  { value: "injections", label: "Injections" },
  { value: "topicals_drops", label: "Topicals / drops" },
  { value: "as_needed", label: "As-needed meds" },
  { value: "multiple_daily", label: "Multiple times per day" },
  { value: "weekly_monthly", label: "Weekly / monthly care" },
  { value: "unsure_varies", label: "Unsure / varies" },
] as const;

export const CHRONIC_OPTIONS = [
  { value: "diabetes", label: "Diabetes" },
  { value: "ckd", label: "CKD / kidney disease" },
  { value: "seizures", label: "Seizures" },
  { value: "cushings", label: "Cushing's" },
  { value: "arthritis", label: "Arthritis / mobility" },
  { value: "senior", label: "Senior care" },
  { value: "multiple_conditions", label: "Multiple conditions" },
  { value: "post_surgery", label: "Post-surgery / recovery" },
  { value: "prefer_not", label: "Prefer not to say" },
  { value: "other", label: "Other" },
] as const;

export const TRACK_TODAY_OPTIONS = [
  { value: "paper", label: "Paper" },
  { value: "notes_app", label: "Notes app" },
  { value: "spreadsheet", label: "Spreadsheet" },
  { value: "calendar", label: "Calendar" },
  { value: "reminders", label: "Reminders" },
  { value: "another_app", label: "Another app" },
  { value: "memory", label: "Memory" },
  { value: "shared_texts", label: "Shared texts" },
  { value: "other", label: "Other" },
] as const;

export const TEST_FREQUENCY_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "few_weekly", label: "A few times a week" },
  { value: "weekly", label: "Weekly" },
  { value: "one_time", label: "One-time" },
] as const;

/* ------------------------------- Schema ---------------------------------- */

const single = <T extends readonly Option[]>(opts: T) =>
  z.enum(enumValues(opts)).or(z.literal("")).default("");

const multi = <T extends readonly Option[]>(opts: T) =>
  z.array(z.enum(enumValues(opts))).default([]);

export const intakeSchema = z.object({
  // 1 · Tester basics
  name: z.string().default(""),
  email: z.string().default(""),
  device: z.string().default(""),
  testflightComfort: single(TESTFLIGHT_OPTIONS),

  // 2 · Pet household
  petCount: single(PET_COUNT_OPTIONS),
  species: multi(SPECIES_OPTIONS),
  petNames: z.string().default(""),
  multiPet: single(YES_NO_OPTIONS),
  caregiverRole: z.string().default(""),

  // 3 · Primary care goal
  careGoal: single(CARE_GOAL_OPTIONS),

  // 4 · Routine care complexity
  complexity: multi(COMPLEXITY_OPTIONS),

  // 5 · Chronic-care context (optional + sensitive)
  chronic: multi(CHRONIC_OPTIONS),
  chronicOther: z.string().default(""),

  // 6 · Current workflow
  trackToday: multi(TRACK_TODAY_OPTIONS),
  painPoint: z.string().default(""),
  missedDoseCauses: z.string().default(""),
  multipleHelpers: single(YES_NO_OPTIONS),

  // 7 · Beta feedback fit
  testFrequency: single(TEST_FREQUENCY_OPTIONS),
  willingScreenshots: single(YES_NO_OPTIONS),
  whyRecommend: z.string().default(""),

  // 8 · Consent & expectations
  consentNotVetAdvice: z.boolean().default(false),
  consentFollowVet: z.boolean().default(false),
  consentEmails: z.boolean().default(false),
  interestedInCall: z.boolean().default(false),
});

export type IntakeData = z.infer<typeof intakeSchema>;

/** A fully-defaulted, empty intake object. */
export const defaultIntake: IntakeData = intakeSchema.parse({});

/** Lenient, friendly email check used by the basics step. */
export const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

/** Safely coerce arbitrary (e.g. persisted/draft) data into a full IntakeData. */
export function coerceIntake(input: unknown): IntakeData {
  const parsed = intakeSchema.safeParse(input);
  if (parsed.success) return parsed.data;
  // Merge whatever valid keys we can over the defaults.
  if (input && typeof input === "object") {
    return intakeSchema.parse({ ...(input as Record<string, unknown>) });
  }
  return defaultIntake;
}
