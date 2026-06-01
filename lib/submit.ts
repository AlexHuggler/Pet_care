import { type IntakeData } from "./intake";

export interface SubmitResult {
  ok: boolean;
  /** Which backend stored the submission: "local" | "webhook" | "formspree" | "none". */
  stored?: string;
  error?: string;
}

/**
 * Client-side submit. Posts to our own API route, which decides where the data
 * actually goes (see app/api/submit/route.ts). Keeping the provider logic on the
 * server means no secrets or third-party endpoints are ever exposed to the browser.
 */
export async function submitIntake(data: IntakeData): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data,
        meta: {
          submittedAt: new Date().toISOString(),
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        },
      }),
    });

    const json = (await res.json().catch(() => ({}))) as SubmitResult;

    if (!res.ok || !json.ok) {
      return {
        ok: false,
        error: json.error || "Something went wrong submitting your intake. Please try again.",
      };
    }
    return json;
  } catch {
    return {
      ok: false,
      error: "We couldn't reach the server. Please check your connection and try again.",
    };
  }
}
