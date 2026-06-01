"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";
import { FieldError, FieldHint, OptionalBadge } from "./FieldLabel";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  placeholder?: string;
  hint?: string;
  optional?: boolean;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}

export function TextField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  hint,
  optional,
  required,
  error,
  autoComplete,
}: TextFieldProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errId = error ? `${id}-err` : undefined;
  const describedBy = cn(hintId, errId) || undefined;

  return (
    <div>
      <label htmlFor={id} className="flex items-center text-[15px] font-semibold text-text">
        <span>{label}</span>
        {optional && <OptionalBadge />}
        {required && (
          <span className="ml-1 text-danger" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && <FieldHint id={hintId}>{hint}</FieldHint>}
      <input
        id={id}
        type={type}
        inputMode={type === "email" ? "email" : "text"}
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "mt-2 w-full rounded-control border bg-surface px-3.5 py-3 text-[16px] text-text outline-none transition",
          "placeholder:text-text-secondary/60 focus:ring-4 focus:ring-accent/20",
          error ? "border-danger focus:border-danger" : "border-border focus:border-accent",
        )}
      />
      <FieldError id={errId}>{error}</FieldError>
    </div>
  );
}
