"use client";

import { type ComponentType } from "react";
import {
  CARE_GOAL_OPTIONS,
  CHRONIC_OPTIONS,
  COMPLEXITY_OPTIONS,
  type IntakeData,
  PET_COUNT_OPTIONS,
  SPECIES_OPTIONS,
  TEST_FREQUENCY_OPTIONS,
  TESTFLIGHT_OPTIONS,
  TRACK_TODAY_OPTIONS,
  YES_NO_OPTIONS,
} from "@/lib/intake";
import { type StepErrors } from "@/lib/steps";
import { Checkbox } from "./fields/Checkbox";
import { CheckboxChips } from "./fields/CheckboxChips";
import { RadioChips } from "./fields/RadioChips";
import { TextArea } from "./fields/TextArea";
import { TextField } from "./fields/TextField";

export interface StepProps {
  data: IntakeData;
  update: (patch: Partial<IntakeData>) => void;
  errors: StepErrors;
}

/* 1 · Tester basics */
function Basics({ data, update, errors }: StepProps) {
  return (
    <>
      <TextField
        label="Your name"
        value={data.name}
        onChange={(v) => update({ name: v })}
        required
        error={errors.name}
        autoComplete="name"
        placeholder="Jordan"
      />
      <TextField
        label="Email"
        type="email"
        value={data.email}
        onChange={(v) => update({ email: v })}
        required
        error={errors.email}
        autoComplete="email"
        placeholder="you@example.com"
        hint="Where we'll send your TestFlight invite."
      />
      <TextField
        label="Preferred device"
        value={data.device}
        onChange={(v) => update({ device: v })}
        optional
        placeholder="e.g. iPhone 14 Pro · iOS 17.4"
        hint="iPhone model and iOS version, if you know them."
      />
      <RadioChips
        legend="Are you comfortable using TestFlight?"
        options={TESTFLIGHT_OPTIONS}
        value={data.testflightComfort}
        onChange={(v) => update({ testflightComfort: v })}
        error={errors.testflightComfort}
        hint="TestFlight is Apple's app for trying betas — we'll guide you either way."
      />
    </>
  );
}

/* 2 · Pet household */
function Household({ data, update }: StepProps) {
  return (
    <>
      <RadioChips
        legend="How many pets do you care for?"
        options={PET_COUNT_OPTIONS}
        value={data.petCount}
        onChange={(v) => update({ petCount: v })}
        optional
      />
      <CheckboxChips
        legend="Which species?"
        options={SPECIES_OPTIONS}
        values={data.species}
        onChange={(next) => update({ species: next })}
        optional
        hint="Choose all that apply."
      />
      <TextField
        label="Pet names"
        value={data.petNames}
        onChange={(v) => update({ petNames: v })}
        optional
        placeholder="e.g. Biscuit, Mango"
        hint="Some folks like seeing their pets' names in the app."
      />
      <RadioChips
        legend="Is this a multi-pet household?"
        options={YES_NO_OPTIONS}
        value={data.multiPet}
        onChange={(v) => update({ multiPet: v })}
        optional
      />
      <TextField
        label="Your role"
        value={data.caregiverRole}
        onChange={(v) => update({ caregiverRole: v })}
        optional
        placeholder="e.g. foster, rescue, pet sitter, primary caregiver"
        hint="If you foster, rescue, sit, or share care, tell us how."
      />
    </>
  );
}

/* 3 · Primary care goal */
function Goal({ data, update, errors }: StepProps) {
  return (
    <RadioChips
      legend="What would make Furmacy most useful for you?"
      legendHidden
      options={CARE_GOAL_OPTIONS}
      value={data.careGoal}
      onChange={(v) => update({ careGoal: v })}
      error={errors.careGoal}
      stacked
    />
  );
}

/* 4 · Routine care complexity */
function Complexity({ data, update }: StepProps) {
  return (
    <CheckboxChips
      legend="What does your routine care involve?"
      options={COMPLEXITY_OPTIONS}
      values={data.complexity}
      onChange={(next) => update({ complexity: next })}
      optional
      hint="Choose anything that applies."
    />
  );
}

/* 5 · Optional chronic-care context */
function Chronic({ data, update }: StepProps) {
  return (
    <>
      <CheckboxChips
        legend="Any chronic-care context to share?"
        options={CHRONIC_OPTIONS}
        values={data.chronic}
        onChange={(next) => update({ chronic: next })}
        optional
        exclusive={["prefer_not"]}
        hint="Choose any that apply — or skip this step entirely."
      />
      {data.chronic.includes("other") && (
        <TextField
          label="Anything you'd like to add?"
          value={data.chronicOther}
          onChange={(v) => update({ chronicOther: v })}
          optional
          placeholder="Optional"
        />
      )}
    </>
  );
}

/* 6 · Current workflow */
function Workflow({ data, update }: StepProps) {
  return (
    <>
      <CheckboxChips
        legend="How do you track care today?"
        options={TRACK_TODAY_OPTIONS}
        values={data.trackToday}
        onChange={(next) => update({ trackToday: next })}
        optional
        hint="Choose all that apply."
      />
      <TextArea
        label="Biggest pain point"
        value={data.painPoint}
        onChange={(v) => update({ painPoint: v })}
        optional
        placeholder="What's the most frustrating part of managing care right now?"
      />
      <TextArea
        label="What has caused missed doses or confusion before?"
        value={data.missedDoseCauses}
        onChange={(v) => update({ missedDoseCauses: v })}
        optional
        placeholder="No wrong answers — even small things help."
      />
      <RadioChips
        legend="Do multiple people help with care?"
        options={YES_NO_OPTIONS}
        value={data.multipleHelpers}
        onChange={(v) => update({ multipleHelpers: v })}
        optional
      />
    </>
  );
}

/* 7 · Beta feedback fit */
function Feedback({ data, update }: StepProps) {
  return (
    <>
      <RadioChips
        legend="How often could you test?"
        options={TEST_FREQUENCY_OPTIONS}
        value={data.testFrequency}
        onChange={(v) => update({ testFrequency: v })}
        optional
      />
      <RadioChips
        legend="Willing to share screenshots or notes if something's confusing?"
        options={YES_NO_OPTIONS}
        value={data.willingScreenshots}
        onChange={(v) => update({ willingScreenshots: v })}
        optional
      />
      <TextArea
        label="What would make this app worth recommending?"
        value={data.whyRecommend}
        onChange={(v) => update({ whyRecommend: v })}
        optional
        placeholder="What would make you tell a friend about Furmacy?"
      />
    </>
  );
}

/* 8 · Consent & expectations */
function Consent({ data, update, errors }: StepProps) {
  return (
    <>
      <Checkbox
        label="I understand this beta is not veterinary advice."
        checked={data.consentNotVetAdvice}
        onChange={(v) => update({ consentNotVetAdvice: v })}
        error={errors.consentNotVetAdvice}
      />
      <Checkbox
        label="I understand I should follow my veterinarian's instructions for medication and care."
        checked={data.consentFollowVet}
        onChange={(v) => update({ consentFollowVet: v })}
        error={errors.consentFollowVet}
      />
      <Checkbox
        label="I'm okay receiving beta follow-up emails about Furmacy."
        checked={data.consentEmails}
        onChange={(v) => update({ consentEmails: v })}
        error={errors.consentEmails}
      />
      <div className="h-px bg-border" role="presentation" />
      <Checkbox
        label="I'm interested in being contacted for a short feedback call."
        checked={data.interestedInCall}
        onChange={(v) => update({ interestedInCall: v })}
        optional
      />
    </>
  );
}

/** In the same order as STEPS in lib/steps.ts. */
export const STEP_COMPONENTS: ComponentType<StepProps>[] = [
  Basics,
  Household,
  Goal,
  Complexity,
  Chronic,
  Workflow,
  Feedback,
  Consent,
];
