"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";
import { type Option } from "@/lib/intake";
import { FieldError, FieldHint, OptionalBadge } from "./FieldLabel";

interface RadioChipsProps<V extends string> {
  legend: string;
  /** Hide the legend visually (kept for screen readers) when the step title already asks the question. */
  legendHidden?: boolean;
  options: readonly Option<V>[];
  value: V | "";
  onChange: (value: V) => void;
  hint?: string;
  optional?: boolean;
  error?: string;
  /** Render as full-width stacked rows instead of wrapping chips. */
  stacked?: boolean;
}

export function RadioChips<V extends string>({
  legend,
  legendHidden,
  options,
  value,
  onChange,
  hint,
  optional,
  error,
  stacked,
}: RadioChipsProps<V>) {
  const name = useId();
  const hintId = hint ? `${name}-hint` : undefined;
  const errId = error ? `${name}-err` : undefined;

  return (
    <fieldset
      aria-describedby={cn(hintId, errId) || undefined}
      aria-invalid={error ? true : undefined}
    >
      <legend
        className={cn(
          "flex items-center text-[15px] font-semibold text-text",
          legendHidden && "sr-only",
        )}
      >
        <span>{legend}</span>
        {optional && <OptionalBadge />}
      </legend>
      {hint && <FieldHint id={hintId}>{hint}</FieldHint>}
      <div className={cn("mt-2.5", stacked ? "grid gap-2 sm:grid-cols-2" : "flex flex-wrap gap-2")}>
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <label
              key={opt.value}
              className={cn(
                "inline-flex cursor-pointer items-center gap-2.5 rounded-chip border px-3.5 py-2.5 text-[15px] transition",
                stacked && "w-full",
                selected
                  ? "border-accent bg-muted font-semibold text-text"
                  : "border-border bg-surface text-text hover:border-accent/55",
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={selected}
                onChange={() => onChange(opt.value)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full border-2 transition",
                  "peer-focus-visible:ring-4 peer-focus-visible:ring-accent/30",
                  selected ? "border-accent-strong" : "border-border",
                )}
              >
                <span
                  className={cn(
                    "h-2 w-2 rounded-full bg-accent-strong transition",
                    selected ? "scale-100" : "scale-0",
                  )}
                />
              </span>
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
      <FieldError id={errId}>{error}</FieldError>
    </fieldset>
  );
}
