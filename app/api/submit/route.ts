import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

// Use the Node.js runtime so we can write files in local dev and read server-only env.
export const runtime = "nodejs";

interface Payload {
  data?: unknown;
  meta?: unknown;
}

/**
 * Submission endpoint with a pluggable backend.
 *
 * It checks env vars in order and uses the first configured provider. With NO
 * env configured, it falls back to writing JSON locally in development so you
 * can see real submissions while building — and still returns success so a beta
 * tester is never blocked by our backend setup.
 *
 * No secrets live in this file. Configure a provider via .env.local (see
 * .env.example). Server-only secrets must NOT use the NEXT_PUBLIC_ prefix.
 */
export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || !payload.data) {
    return NextResponse.json({ ok: false, error: "Missing intake data." }, { status: 400 });
  }

  const record = { ...payload, receivedAt: new Date().toISOString() };

  // 1) Generic webhook / serverless endpoint (Zapier, Make, an n8n flow, your own function…).
  // TODO: set SUBMIT_WEBHOOK_URL to your endpoint to start receiving submissions.
  const webhookUrl = process.env.SUBMIT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const r = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!r.ok) throw new Error(`Webhook responded ${r.status}`);
      return NextResponse.json({ ok: true, stored: "webhook" });
    } catch (err) {
      console.error("[furmacy] webhook submission failed:", err);
      return NextResponse.json(
        { ok: false, error: "Submission service is unavailable. Please try again shortly." },
        { status: 502 },
      );
    }
  }

  // 2) Formspree (https://formspree.io). TODO: create a form and set FORMSPREE_FORM_ID.
  const formspreeId = process.env.FORMSPREE_FORM_ID;
  if (formspreeId) {
    try {
      const r = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(record),
      });
      if (!r.ok) throw new Error(`Formspree responded ${r.status}`);
      return NextResponse.json({ ok: true, stored: "formspree" });
    } catch (err) {
      console.error("[furmacy] Formspree submission failed:", err);
      return NextResponse.json(
        { ok: false, error: "Submission service is unavailable. Please try again shortly." },
        { status: 502 },
      );
    }
  }

  // 3) TODO: Supabase — insert with the service-role key (server-only, never NEXT_PUBLIC_).
  //    npm i @supabase/supabase-js
  //    import { createClient } from "@supabase/supabase-js";
  //    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  //    await supabase.from(process.env.SUPABASE_TABLE ?? "furmacy_beta_intake").insert(record);
  //    return NextResponse.json({ ok: true, stored: "supabase" });

  // 4) TODO: Airtable — POST to the REST API with AIRTABLE_API_KEY (server-only).
  //    await fetch(
  //      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE ?? "Beta Intake")}`,
  //      { method: "POST", headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`, "Content-Type": "application/json" },
  //        body: JSON.stringify({ records: [{ fields: record }] }) },
  //    );
  //    return NextResponse.json({ ok: true, stored: "airtable" });

  // Default — no provider configured.
  if (process.env.NODE_ENV !== "production") {
    // Local dev: persist as JSON so you can inspect submissions while building.
    try {
      const dir = path.join(process.cwd(), "submissions");
      await fs.mkdir(dir, { recursive: true });
      const file = path.join(dir, `intake-${Date.now()}.json`);
      await fs.writeFile(file, JSON.stringify(record, null, 2), "utf8");
      console.info(`[furmacy] saved submission to ${file}`);
      return NextResponse.json({ ok: true, stored: "local" });
    } catch (err) {
      console.error("[furmacy] failed to save local submission:", err);
      // fall through to soft-ok below
    }
  } else {
    console.warn(
      "[furmacy] No submission provider configured. Set SUBMIT_WEBHOOK_URL or FORMSPREE_FORM_ID (see .env.example). Submission was NOT persisted.",
    );
  }

  // Soft-ok: never block a beta tester on our backend configuration.
  return NextResponse.json({ ok: true, stored: "none" });
}
