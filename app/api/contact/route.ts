import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limit: 3 submissions per 10 minutes per IP.
// Resets on server restart — fine for a low-traffic portfolio site.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 3;

function rateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_HITS;
}

function validate(body: unknown) {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  const name = String(b.name || "").trim();
  const email = String(b.email || "").trim();
  const message = String(b.message || "").trim();

  if (name.length < 2 || name.length > 80) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (message.length < 10 || message.length > 2000) return null;

  return { name, email, message };
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = validate(body);
  if (!parsed) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL || "jdesai347108@gmail.com";

  if (!apiKey) {
    // No email provider configured yet. Fail loudly rather than pretending
    // to send — the client falls back to a direct mailto link when this
    // happens. Set RESEND_API_KEY (and optionally CONTACT_TO_EMAIL) in the
    // environment to enable real delivery.
    console.warn(
      "[contact] RESEND_API_KEY not set — message not sent:",
      parsed
    );
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured yet." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [toAddress],
        reply_to: parsed.email,
        subject: `Portfolio message from ${parsed.name}`,
        text: `${parsed.message}\n\n— ${parsed.name} (${parsed.email})`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error:", detail);
      return NextResponse.json(
        { ok: false, error: "Could not send right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send right now." },
      { status: 500 }
    );
  }
}
