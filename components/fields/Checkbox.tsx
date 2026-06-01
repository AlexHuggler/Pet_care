"use client";

import { type ReactNode, useId } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/icons";
import { FieldError, OptionalBadge } from "./FieldLabel";

interface CheckboxProps {
  label: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  optional?: boolean;
}

export function Checkbox({ label, checked, onChange, error, optional }: CheckboxProps) {
  const id = useId();
  const errId = error ? `${id}-err` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className={cn(
          "flex cursor-pointer items-start gap-3 rounded-control border p-3.5 transition",
          checked ? "border-accent bg-muted" : "border-border bg-surface hover:border-accent/50",
          error && "border-danger",
        )}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
          aria-describedby={errId}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={cn(
            "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-[6px] border-2 transition",
            "peer-focus-visible:ring-4 peer-focus-visible:ring-accent/30",
            checked ? "border-accent-strong bg-accent-strong text-white" : "border-border bg-surface",
          )}
        >
          {checked && <Icon name="check" className="h-3.5 w-3.5" />}
        </span>
        <span className="text-[15px] leading-snug text-text">
          {label}
          {optional && <OptionalBadge />}
        </span>
      </label>
      <FieldError id={errId}>{error}</FieldError>
    </div>
  );
}
