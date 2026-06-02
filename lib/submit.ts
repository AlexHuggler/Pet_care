import { type IntakeData } from "./intake";

export interface SubmitResult {
  ok: boolean;
  /** Which backend handled the submission: "formsubmit" | "none". */
  stored?: string;
  error?: string;
}

/**
 * Client-side submit for a STATIC build (GitHub Pages has no server).
 * Uses FormSubmit.co — no account required. Submissions are emailed to the
 * address below. The FIRST submission triggers a one-time activation email to
 * that address; click the link in it once and submissions start flowing.
 *
 * Override the recipient at build time with NEXT_PUBLIC_FORMSUBMIT_EMAIL.
 */
const FORMSUBMIT_EMAIL =
  process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ?? "beta@furmacy.org";

export async function submitIntake(data: IntakeData): Promise<SubmitResult> {
  const record = data as Record<string, unknown>;

  const payload: Record<string, unknown> = {
    name: typeof record.name === "string" ? record.name : "",
    email: typeof record.email === "string" ? record.email : "",
    _subject: "New Furmacy beta-tester intake",
    _template: "table",
    _captcha: "false",
    submittedAt: new Date().toISOString(),
    // Full submission as readable JSON so nothing is lost in the email.
    intake: JSON.stringify(data, null, 2),
  };

  try {
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(FORMSUBMIT_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!res.ok) {
      return {
        ok: false,
        error: "Something went wrong submitting your intake. Please try again.",
      };
    }
    return { ok: true, stored: "formsubmit" };
  } catch {
    return {
      ok: false,
      error:
        "We couldn't reach the server. Please check your connection and try again.",
    };
  }
}
