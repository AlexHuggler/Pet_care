"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/icons";
import { type Option } from "@/lib/intake";
import { FieldError, FieldHint, OptionalBadge } from "./FieldLabel";

interface CheckboxChipsProps<V extends string> {
  legend: string;
  options: readonly Option<V>[];
  values: V[];
  onChange: (next: V[]) => void;
  hint?: string;
  optional?: boolean;
  error?: string;
  /**
   * Optional "exclusive" values (e.g. "Prefer not to say"). Selecting one clears
   * the others, and selecting any other value clears these — so sensitive choices
   * never end up contradicting each other.
   */
  exclusive?: V[];
}

export function CheckboxChips<V extends string>({
  legend,
  options,
  values,
  onChange,
  hint,
  optional,
  error,
  exclusive = [],
}: CheckboxChipsProps<V>) {
  const groupId = useId();
  const hintId = hint ? `${groupId}-hint` : undefined;
  const errId = error ? `${groupId}-err` : undefined;

  function toggle(value: V) {
    const has = values.includes(value);
    if (has) {
      onChange(values.filter((v) => v !== value));
      return;
    }
    if (exclusive.includes(value)) {
      onChange([value]);
      return;
    }
    onChange([...values.filter((v) => !exclusive.includes(v)), value]);
  }

  return (
    <fieldset aria-describedby={cn(hintId, errId) || undefined}>
      <legend className="flex items-center text-[15px] font-semibold text-text">
        <span>{legend}</span>
        {optional && <OptionalBadge />}
      </legend>
      {hint && <FieldHint id={hintId}>{hint}</FieldHint>}
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = values.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={cn(
                "inline-flex cursor-pointer items-center gap-2 rounded-chip border px-3.5 py-2.5 text-[15px] transition",
                selected
                  ? "border-accent bg-muted font-semibold text-text"
                  : "border-border bg-surface text-text hover:border-accent/55",
              )}
            >
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggle(opt.value)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-[18px] w-[18px] flex-none items-center justify-center rounded-[6px] border-2 transition",
                  "peer-focus-visible:ring-4 peer-focus-visible:ring-accent/30",
                  selected ? "border-accent-strong bg-accent-strong text-white" : "border-border",
                )}
              >
                {selected && <Icon name="check" className="h-3 w-3" />}
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
