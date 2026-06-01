"use client";

import { Fragment, type Ref } from "react";
import { type IntakeData } from "@/lib/intake";
import { summarizeIntake } from "@/lib/summary";
import { Icon } from "./icons";
import { Spinner } from "./Spinner";

interface ReviewScreenProps {
  data: IntakeData;
  onEdit: (stepIndex: number) => void;
  onBack: () => void;
  onSubmit: () => void;
  busy: boolean;
  submitError: string | null;
  headingRef?: Ref<HTMLHeadingElement>;
}

export function ReviewScreen({
  data,
  onEdit,
  onBack,
  onSubmit,
  busy,
  submitError,
  headingRef,
}: ReviewScreenProps) {
  const groups = summarizeIntake(data);

  return (
    <div className="animate-fade-up motion-reduce:animate-none">
      <div className="flex items-start gap-3.5">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-hero text-accent-strong">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <div className="pt-0.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
            Last step
          </p>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="text-xl font-bold leading-snug text-text outline-none sm:text-[22px]"
          >
            Quick review
          </h2>
        </div>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
        Take a look before sending. You can edit any section — nothing&rsquo;s locked in.
      </p>

      <div className="mt-6 space-y-3">
        {groups.map((g) => (
          <div key={g.stepIndex} className="rounded-card border border-border bg-bg/50 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-hero text-accent-strong">
                  <Icon name={g.icon} className="h-4 w-4" />
                </span>
                <h3 className="text-[15px] font-semibold text-text">{g.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => onEdit(g.stepIndex)}
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-semibold text-accent-strong transition hover:bg-muted focus-visible:ring-4 focus-visible:ring-accent/25"
              >
                <Icon name="edit" className="h-3.5 w-3.5" />
                Edit
                <span className="sr-only"> {g.title}</span>
              </button>
            </div>
            {g.rows.length ? (
              <dl className="mt-3 grid gap-x-4 gap-y-2 sm:grid-cols-[150px_1fr]">
                {g.rows.map((r) => (
                  <Fragment key={r.label}>
                    <dt className="text-sm text-text-secondary">{r.label}</dt>
                    <dd className="break-words text-sm text-text">{r.value}</dd>
                  </Fragment>
                ))}
              </dl>
            ) : (
              <p className="mt-2 text-sm text-text-secondary">
                Nothing added — that&rsquo;s okay.
              </p>
            )}
          </div>
        ))}
      </div>

      {submitError && (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-control border border-danger/40 bg-danger/10 px-3.5 py-3 text-sm font-medium text-danger"
        >
          <Icon name="shield-check" className="mt-0.5 h-4 w-4 flex-none" />
          <span>{submitError}</span>
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:ring-4 focus-visible:ring-accent/25"
        >
          <Icon name="arrow-left" className="h-4 w-4" />
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={busy}
          className="inline-flex items-center justify-center gap-2 rounded-control bg-accent-strong px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#0b6864] focus-visible:ring-4 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? (
            <>
              <Spinner />
              Submitting&hellip;
            </>
          ) : (
            <>
              Submit intake
              <Icon name="check" className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
