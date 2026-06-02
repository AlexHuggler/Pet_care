"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";
import { FieldError, FieldHint, OptionalBadge } from "./FieldLabel";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
  optional?: boolean;
  error?: string;
  rows?: number;
}

export function TextArea({
  label,
  value,
  onChange,
  placeholder,
  hint,
  optional,
  error,
  rows = 3,
}: TextAreaProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errId = error ? `${id}-err` : undefined;
  const describedBy = cn(hintId, errId) || undefined;

  return (
    <div>
      <label htmlFor={id} className="flex items-center text-[15px] font-semibold text-text">
        <span>{label}</span>
        {optional && <OptionalBadge />}
      </label>
      {hint && <FieldHint id={hintId}>{hint}</FieldHint>}
      <textarea
        id={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "mt-2 w-full resize-y rounded-control border bg-surface px-3.5 py-3 text-[16px] leading-relaxed text-text outline-none transition",
          "placeholder:text-text-secondary/60 focus:ring-4 focus:ring-accent/20",
          error ? "border-danger focus:border-danger" : "border-border focus:border-accent",
        )}
      />
      <FieldError id={errId}>{error}</FieldError>
    </div>
  );
}
