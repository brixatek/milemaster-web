import { NextResponse, type NextRequest } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { enquirySchema } from "@/schemas/enquiry";
import { MailNotConfiguredError, sendEnquiry } from "@/services/mailer";

export const runtime = "nodejs";

const MIN_FILL_MS = 3000;

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.nextUrl.host) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`enquiry:${ip}`).ok) {
    return NextResponse.json({ ok: false, error: "rate_limited", message: "Too many submissions. Please try again later or call us." }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation", issues: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  const data = parsed.data;
  // Spam heuristics: honeypot filled or submitted implausibly fast → accept silently, send nothing.
  if (data.website || Date.now() - data.startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendEnquiry(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof MailNotConfiguredError) {
      return NextResponse.json(
        { ok: false, error: "not_configured", message: "Online enquiries are temporarily unavailable." },
        { status: 503 },
      );
    }
    console.error("[enquiry] delivery failed", err);
    return NextResponse.json({ ok: false, error: "delivery_failed", message: "We couldn't send your message." }, { status: 502 });
  }
}
