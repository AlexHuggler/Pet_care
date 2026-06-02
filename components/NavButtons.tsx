"use client";

import { Icon } from "./icons";
import { Spinner } from "./Spinner";

interface NavButtonsProps {
  onBack?: () => void;
  showBack?: boolean;
  backLabel?: string;
  nextLabel?: string;
  /** When true, the Next button is a submit button (Enter advances the step). */
  isFinal?: boolean;
  busy?: boolean;
}

export function NavButtons({
  onBack,
  showBack = true,
  backLabel = "Back",
  nextLabel = "Continue",
  isFinal = false,
  busy = false,
}: NavButtonsProps) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
      {showBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center gap-1.5 rounded-control border border-border bg-surface px-5 py-3 text-[15px] font-semibold text-text transition hover:border-accent/60 hover:bg-muted focus-visible:ring-4 focus-visible:ring-accent/25"
        >
          <Icon name="arrow-left" className="h-4 w-4" />
          {backLabel}
        </button>
      ) : (
        <span className="hidden sm:block" aria-hidden="true" />
      )}

      <button
        type="submit"
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
            {nextLabel}
            <Icon name={isFinal ? "check" : "arrow-right"} className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  );
}
