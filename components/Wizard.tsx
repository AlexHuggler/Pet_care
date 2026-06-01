"use client";

import { type FormEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  coerceIntake,
  defaultIntake,
  type IntakeData,
} from "@/lib/intake";
import { STEP_COUNT, STEPS, type StepErrors } from "@/lib/steps";
import { useLocalStorageDraft } from "@/lib/useLocalStorageDraft";
import { submitIntake } from "@/lib/submit";
import { STEP_COMPONENTS } from "./IntakeSteps";
import { Icon } from "./icons";
import { NavButtons } from "./NavButtons";
import { ProgressBar } from "./ProgressBar";
import { ReviewScreen } from "./ReviewScreen";
import { StepShell } from "./StepShell";
import { SuccessScreen } from "./SuccessScreen";

const DRAFT_KEY = "furmacy_intake_draft";
const DRAFT_VERSION = 1;

type Phase = "form" | "review" | "success";

interface DraftShape {
  data: IntakeData;
  stepIndex: number;
}

export function Wizard() {
  const [data, setData] = useState<IntakeData>(defaultIntake);
  const [stepIndex, setStepIndex] = useState(0);
  const [errors, setErrors] = useState<StepErrors>({});
  const [phase, setPhase] = useState<Phase>("form");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hydratedRef = useRef(false);
  const skipFocusRef = useRef(true);

  const { stored, ready, savedAt, save, clear } = useLocalStorageDraft<DraftShape>(
    DRAFT_KEY,
    DRAFT_VERSION,
  );

  // Hydrate from a saved draft once storage has been read (after mount).
  useEffect(() => {
    if (!ready || hydratedRef.current) return;
    hydratedRef.current = true;
    if (stored && stored.data) {
      setData(coerceIntake(stored.data));
      const idx = typeof stored.stepIndex === "number" ? stored.stepIndex : 0;
      setStepIndex(Math.min(Math.max(0, idx), STEP_COUNT - 1));
    }
  }, [ready, stored]);

  // Persist on change (but never after a successful submit).
  useEffect(() => {
    if (!ready || phase === "success") return;
    // Don't write an empty draft before the tester has entered anything.
    if (data === defaultIntake && stepIndex === 0) return;
    save({ data, stepIndex });
  }, [ready, phase, data, stepIndex, save]);

  // Move focus to the current heading whenever the step or phase changes
  // (skipped on first render so we don't steal focus on load).
  useEffect(() => {
    if (skipFocusRef.current) {
      skipFocusRef.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [stepIndex, phase]);

  const update = useCallback((patch: Partial<IntakeData>) => {
    setData((d) => ({ ...d, ...patch }));
    setErrors((prev) => {
      if (Object.keys(prev).length === 0) return prev;
      const next = { ...prev };
      let changed = false;
      for (const key of Object.keys(patch)) {
        if (key in next) {
          delete next[key as keyof StepErrors];
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, []);

  const focusFirstInvalid = useCallback(() => {
    const root = containerRef.current;
    if (!root) return;
    const invalid = root.querySelector<HTMLElement>('[aria-invalid="true"]');
    if (!invalid) return;
    // Text inputs/checkboxes carry aria-invalid directly; radio groups carry it
    // on the fieldset, so focus the first control inside instead.
    if (invalid.matches("input, textarea, select")) {
      invalid.focus();
    } else {
      invalid.querySelector<HTMLElement>("input, textarea, select")?.focus();
    }
  }, []);

  const handleNext = useCallback(
    (e?: FormEvent) => {
      e?.preventDefault();
      const stepErrors = STEPS[stepIndex].validate(data);
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        window.setTimeout(focusFirstInvalid, 0);
        return;
      }
      setErrors({});
      if (stepIndex >= STEP_COUNT - 1) {
        setPhase("review");
      } else {
        setStepIndex((i) => i + 1);
      }
    },
    [data, stepIndex, focusFirstInvalid],
  );

  const handleBack = useCallback(() => {
    setErrors({});
    setStepIndex((i) => Math.max(0, i - 1));
  }, []);

  const editFromReview = useCallback((i: number) => {
    setErrors({});
    setStepIndex(Math.min(Math.max(0, i), STEP_COUNT - 1));
    setPhase("form");
  }, []);

  const backFromReview = useCallback(() => {
    setPhase("form");
    setStepIndex(STEP_COUNT - 1);
  }, []);

  const submit = useCallback(async () => {
    setSubmitting(true);
    setSubmitError(null);
    const result = await submitIntake(data);
    setSubmitting(false);
    if (result.ok) {
      clear();
      setPhase("success");
    } else {
      setSubmitError(result.error ?? "Something went wrong. Please try again.");
    }
  }, [data, clear]);

  const resetAll = useCallback(() => {
    clear();
    setData(defaultIntake);
    setErrors({});
    setSubmitError(null);
    setStepIndex(0);
    setPhase("form");
  }, [clear]);

  const meta = STEPS[stepIndex];
  const StepComponent = STEP_COMPONENTS[stepIndex];
  const isFinalStep = stepIndex === STEP_COUNT - 1;

  return (
    <section aria-label="Furmacy beta intake form">
      <div
        ref={containerRef}
        className="rounded-card border border-border bg-surface p-5 shadow-card sm:p-7"
      >
        {phase === "form" && (
          <>
            <div className="mb-7">
              <ProgressBar current={stepIndex + 1} total={STEP_COUNT} />
            </div>
            <form onSubmit={handleNext} noValidate key={stepIndex}>
              <div className="animate-fade-up motion-reduce:animate-none">
                <StepShell
                  icon={meta.iconKey}
                  eyebrow={meta.optional ? "Optional section" : undefined}
                  title={meta.title}
                  description={meta.description}
                  headingRef={headingRef}
                >
                  <StepComponent data={data} update={update} errors={errors} />
                </StepShell>
              </div>
              <NavButtons
                onBack={handleBack}
                showBack={stepIndex > 0}
                nextLabel={isFinalStep ? "Review" : "Continue"}
                isFinal={isFinalStep}
              />
            </form>
          </>
        )}

        {phase === "review" && (
          <ReviewScreen
            data={data}
            onEdit={editFromReview}
            onBack={backFromReview}
            onSubmit={submit}
            busy={submitting}
            submitError={submitError}
            headingRef={headingRef}
          />
        )}

        {phase === "success" && <SuccessScreen onReset={resetAll} />}
      </div>

      {phase !== "success" && (
        <p className="mt-3 flex items-center justify-center gap-1.5 px-2 text-center text-xs text-text-secondary">
          <Icon name="lock" className="h-3.5 w-3.5 flex-none" />
          <span>
            Your answers stay on this device until you submit
            {savedAt ? " · draft saved" : ""}. This intake isn&rsquo;t veterinary
            advice.
          </span>
        </p>
      )}
    </section>
  );
}
