import { type IntakeData } from "./intake";

export interface SubmitResult {
  ok: boolean;
  /** Which backend stored the submission: "formspree" | "none". */
  stored?: string;
  error?: string;
}

/**
 * Client-side submit for a STATIC build (GitHub Pages has no server, so there
 * is no /api route). Submissions are posted directly from the browser to
 * Formspree. Create a form at https://formspree.io, then set the form ID below
 * or provide it at build time via NEXT_PUBLIC_FORMSPREE_FORM_ID.
 *
 * The ID is the part after /f/ in your Formspree endpoint, e.g. for
 * https://formspree.io/f/abcdwxyz the ID is "abcdwxyz".
 */
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";

export async function submitIntake(data: IntakeData): Promise<SubmitResult> {
  const record = {
    data,
    meta: {
      submittedAt: new Date().toISOString(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    },
  };

  // No backend configured yet — don't block the tester; succeed silently.
  if (!FORMSPREE_FORM_ID) {
    if (typeof console !== "undefined") {
      console.warn(
        "[furmacy] NEXT_PUBLIC_FORMSPREE_FORM_ID is not set — the submission was not delivered anywhere.",
      );
    }
    return { ok: true, stored: "none" };
  }

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(record),
    });

    if (!res.ok) {
      return {
        ok: false,
        error: "Something went wrong submitting your intake. Please try again.",
      };
    }
    return { ok: true, stored: "formspree" };
  } catch {
    return {
      ok: false,
      error:
        "We couldn't reach the server. Please check your connection and try again.",
    };
  }
}
