import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type IconName =
  | "user"
  | "paw"
  | "compass"
  | "pill"
  | "heart"
  | "clipboard"
  | "chat"
  | "shield-check"
  | "check"
  | "calendar"
  | "lock"
  | "sparkle"
  | "arrow-left"
  | "arrow-right"
  | "edit"
  | "mail"
  | "save"
  | "chart"
  | "folder"
  | "users"
  | "download"
  | "menu"
  | "chevron-down";

const PATHS: Record<IconName, ReactNode> = {
  user: (
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  paw: (
    <>
      <circle cx="8" cy="9.5" r="1.5" />
      <circle cx="12" cy="8" r="1.6" />
      <circle cx="16" cy="9.5" r="1.5" />
      <path d="M12 11.4c-2.6 0-4.5 1.9-4.5 3.8 0 1.6 1.9 2.6 4.5 2.6s4.5-1 4.5-2.6c0-1.9-1.9-3.8-4.5-3.8Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.9 9.1-1.9 4.7-4.7 1.9 1.9-4.7 4.7-1.9Z" />
    </>
  ),
  pill: (
    <>
      <rect x="3.5" y="8.5" width="17" height="7" rx="3.5" />
      <path d="M12 8.6v6.8" />
    </>
  ),
  heart: (
    <path d="M12 19s-6.6-4.2-6.6-9A3.8 3.8 0 0 1 12 7.4 3.8 3.8 0 0 1 18.6 10c0 4.8-6.6 9-6.6 9Z" />
  ),
  clipboard: (
    <>
      <rect x="5.5" y="5" width="13" height="15" rx="2.5" />
      <path d="M9.5 5v-.8A1.7 1.7 0 0 1 11.2 2.5h1.6A1.7 1.7 0 0 1 14.5 4.2V5" />
      <path d="M9 11.5h6M9 15h4" />
    </>
  ),
  chat: (
    <path d="M5 6h14a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 19 15h-6l-4 3.5V15H5A1.5 1.5 0 0 1 3.5 13.5v-6A1.5 1.5 0 0 1 5 6Z" />
  ),
  "shield-check": (
    <>
      <path d="M12 3 5.5 5.5v5c0 4 2.8 6.8 6.5 8 3.7-1.2 6.5-4 6.5-8v-5L12 3Z" />
      <path d="m9.3 11.9 1.9 1.9 3.5-3.7" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  calendar: (
    <>
      <rect x="4.5" y="5.5" width="15" height="14" rx="2.5" />
      <path d="M4.5 9.5h15M9 3.5v4M15 3.5v4" />
    </>
  ),
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9" rx="2.5" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5c.6 3.7 1.3 4.4 5 5-3.7.6-4.4 1.3-5 5-.6-3.7-1.3-4.4-5-5 3.7-.6 4.4-1.3 5-5Z" />
  ),
  "arrow-left": <path d="M14 6l-6 6 6 6" />,
  "arrow-right": <path d="M10 6l6 6-6 6" />,
  edit: (
    <>
      <path d="M5 19h3l9-9-3-3-9 9v3Z" />
      <path d="m13.5 6.5 3 3" />
    </>
  ),
  mail: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2.5" />
      <path d="m5 8.5 7 4.5 7-4.5" />
    </>
  ),
  save: (
    <>
      <path d="M6 4.5h9L18.5 8v10.5A1.5 1.5 0 0 1 17 20H6a1.5 1.5 0 0 1-1.5-1.5V6A1.5 1.5 0 0 1 6 4.5Z" />
      <path d="M8.5 4.5v4h6" />
    </>
  ),
  chart: (
    <>
      <path d="M5 4v15a1 1 0 0 0 1 1h14" />
      <path d="m8.5 14 2.5-3 2.5 2 3.5-4.5" />
    </>
  ),
  folder: (
    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 6h3.1a1.5 1.5 0 0 1 1.2.6l.9 1.2a1.5 1.5 0 0 0 1.2.6H18A1.5 1.5 0 0 1 19.5 10v6A1.5 1.5 0 0 1 18 17.5H6A1.5 1.5 0 0 1 4.5 16Z" />
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.6 19a5.5 5.5 0 0 1 10.8 0" />
      <path d="M16 6.6a3 3 0 0 1 0 5.8" />
      <path d="M17.2 14.3A5.5 5.5 0 0 1 20.4 19" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v10" />
      <path d="m8 11 4 4 4-4" />
      <path d="M5 19h14" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("h-5 w-5", className)}
    >
      {PATHS[name]}
    </svg>
  );
}
