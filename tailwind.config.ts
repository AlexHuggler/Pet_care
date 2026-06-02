import type { Config } from "tailwindcss";

/**
 * Furmacy design tokens.
 *
 * Note on accessibility: the brand teal (`accent`, #1FA19C) only reaches ~3:1
 * contrast against white, which fails WCAG AA for normal-size text. So we use
 * `accent-strong` (#0E7A75, ~5.2:1 on white) for filled buttons / white text,
 * and keep `accent` for borders, icons, rings, and tints. `accent-light`
 * (#5ECFC9) is decorative only — never text on a light surface.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAF7F2",
        surface: "#FFFFFF",
        muted: "#EDF7F5",
        hero: "#E8FAF7",
        border: "#D1E6E3",
        text: {
          DEFAULT: "#0D3B47",
          secondary: "#636E75",
        },
        accent: {
          DEFAULT: "#1FA19C",
          strong: "#0E7A75",
          light: "#5ECFC9",
        },
        warm: "#F0BA8F",
        success: "#54BA73",
        warning: "#F2AB36",
        danger: "#E86861",
      },
      borderRadius: {
        card: "18px",
        control: "14px",
        chip: "12px",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(13, 59, 71, 0.04), 0 12px 32px -16px rgba(13, 59, 71, 0.18)",
        focus: "0 0 0 3px rgba(31, 161, 156, 0.35)",
      },
      maxWidth: {
        intake: "1120px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.28s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
