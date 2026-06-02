import { type ReactNode } from "react";

/** Small "Optional" pill so nothing ever feels mandatory by surprise. */
export function OptionalBadge() {
  return (
    <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-text-secondary">
      Optional
    </span>
  );
}

export function FieldHint({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1 text-sm leading-relaxed text-text-secondary">
      {children}
    </p>
  );
}

export function FieldError({ id, children }: { id?: string; children?: ReactNode }) {
  if (!children) return null;
  return (
    <p
      id={id}
      role="alert"
      className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-danger"
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 flex-none"
        fill="currentColor"
      >
        <path d="M8 1.5 15 14H1L8 1.5Z" opacity="0.18" />
        <path
          d="M8 6v3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="8" cy="11.4" r="0.9" />
      </svg>
      <span>{children}</span>
    </p>
  );
}
