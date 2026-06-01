import { cn } from "@/lib/cn";

/**
 * Hand-crafted, brand-tinted inline SVGs. No external image requests, fully
 * themeable, crisp at any size. All are decorative (aria-hidden).
 */

/** Furmacy app-icon mark: rounded teal square with a soft white paw. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("h-11 w-11", className)}>
      <rect width="48" height="48" rx="13" fill="#1FA19C" />
      <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="12.4" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1.5" />
      <g fill="#FFFFFF">
        <circle cx="17" cy="20.6" r="2.9" />
        <circle cx="24" cy="17.4" r="3.1" />
        <circle cx="31" cy="20.6" r="2.9" />
        <path d="M24 23.1c-4.3 0-7.4 3-7.4 6.1 0 2.5 3.1 3.6 7.4 3.6s7.4-1.1 7.4-3.6c0-3.1-3.1-6.1-7.4-6.1Z" />
      </g>
    </svg>
  );
}

/** Calm app-style scene: a med schedule card with a Given / upcoming dose. */
export function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 300"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      {/* soft background shapes */}
      <circle cx="300" cy="72" r="78" fill="#E8FAF7" />
      <circle cx="54" cy="232" r="60" fill="#EDF7F5" />
      <circle cx="320" cy="214" r="13" fill="#F0BA8F" opacity="0.55" />
      <circle cx="40" cy="78" r="8" fill="#5ECFC9" opacity="0.6" />

      {/* main app card */}
      <rect x="64" y="48" width="232" height="206" rx="24" fill="#FFFFFF" stroke="#D1E6E3" strokeWidth="1.5" />

      {/* header: pet avatar + name lines */}
      <circle cx="98" cy="86" r="19" fill="#E8FAF7" stroke="#D1E6E3" strokeWidth="1.5" />
      <g fill="#1FA19C">
        <circle cx="93" cy="84" r="1.9" />
        <circle cx="98" cy="82" r="2.1" />
        <circle cx="103" cy="84" r="1.9" />
        <path d="M98 86.5c-2.9 0-5 2-5 4.1 0 1.7 2.1 2.4 5 2.4s5-.7 5-2.4c0-2.1-2.1-4.1-5-4.1Z" />
      </g>
      <rect x="128" y="78" width="92" height="10" rx="5" fill="#0D3B47" opacity="0.82" />
      <rect x="128" y="95" width="58" height="8" rx="4" fill="#636E75" opacity="0.45" />

      {/* dose row 1 — given */}
      <rect x="84" y="130" width="192" height="38" rx="13" fill="#EDF7F5" />
      <circle cx="106" cy="149" r="11" fill="#54BA73" />
      <path d="m101.5 149 3 3 6-6" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="126" y="144" width="86" height="9" rx="4" fill="#0D3B47" opacity="0.62" />
      <rect x="222" y="140" width="40" height="18" rx="9" fill="#54BA73" opacity="0.18" />
      <rect x="230" y="148" width="24" height="3" rx="1.5" fill="#2f8f4f" opacity="0.5" />

      {/* dose row 2 — upcoming */}
      <rect x="84" y="176" width="192" height="38" rx="13" fill="#FFFFFF" stroke="#D1E6E3" strokeWidth="1.5" />
      <rect x="95" y="184" width="22" height="22" rx="8" fill="#F0BA8F" opacity="0.9" />
      <path d="M100 195h12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <rect x="126" y="190" width="68" height="9" rx="4" fill="#0D3B47" opacity="0.5" />
      <rect x="222" y="186" width="40" height="18" rx="9" fill="#F0BA8F" opacity="0.28" />

      {/* floating capsule */}
      <g transform="rotate(-24 286 60)">
        <rect x="266" y="50" width="40" height="20" rx="10" fill="#FFFFFF" stroke="#D1E6E3" strokeWidth="1.5" />
        <path d="M286 50v20" stroke="#D1E6E3" strokeWidth="1.5" />
        <rect x="266" y="50" width="20" height="20" rx="10" fill="#5ECFC9" opacity="0.5" />
      </g>
    </svg>
  );
}

/** Gentle success mark: a teal ring, a check, and a couple of sparkles. */
export function SuccessArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" aria-hidden="true" className={cn("h-auto w-40", className)}>
      <circle cx="100" cy="82" r="62" fill="#E8FAF7" />
      <circle cx="100" cy="78" r="36" fill="#FFFFFF" stroke="#D1E6E3" strokeWidth="1.5" />
      <circle cx="100" cy="78" r="36" fill="none" stroke="#1FA19C" strokeWidth="3" strokeDasharray="170 60" strokeLinecap="round" transform="rotate(-90 100 78)" />
      <path d="m86 79 9 9 19-20" fill="none" stroke="#54BA73" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M156 46c.5 3 1 3.5 4 4-3 .5-3.5 1-4 4-.5-3-1-3.5-4-4 3-.5 3.5-1 4-4Z" fill="#5ECFC9" />
      <path d="M42 60c.4 2.4.8 2.8 3.2 3.2-2.4.4-2.8.8-3.2 3.2-.4-2.4-.8-2.8-3.2-3.2 2.4-.4 2.8-.8 3.2-3.2Z" fill="#1FA19C" opacity="0.7" />
      <circle cx="150" cy="104" r="5" fill="#F0BA8F" opacity="0.8" />
    </svg>
  );
}
