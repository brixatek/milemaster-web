import "server-only";
import { company } from "@/config/site";
import type { Enquiry } from "@/schemas/enquiry";

export class MailNotConfiguredError extends Error {}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Delivers an enquiry via the Resend HTTP API (no SDK dependency).
 * Requires RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL.
 * Swap this module to use SMTP, a CRM or another provider without touching the UI.
 */
export async function sendEnquiry(e: Enquiry) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? `Website <no-reply@${new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://milemasterintegrated.com").hostname}>`;
  if (!key || !to) throw new MailNotConfiguredError("Mail delivery is not configured");

  const rows: [string, string][] = [
    ["Type", e.type],
    ["Name", e.name],
    ["Email", e.email],
    ["Phone", e.phone],
    ["Company", e.company],
    ["Interested in", e.interests.join(", ")],
    ["Equipment", e.equipment],
    ["Volume", e.volume],
    ["Source page", e.source],
  ].filter((r): r is [string, string] => Boolean(r[1]));

  const html = `<h2>New ${esc(e.type)} enquiry</h2><table>${rows
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${esc(k)}</td><td>${esc(v)}</td></tr>`)
    .join("")}</table><p style="white-space:pre-wrap">${esc(e.message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: e.email,
      subject: `[${company.name}] ${e.type === "quote" ? "Quote request" : "Website enquiry"} — ${e.name}`,
      html,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${e.message}`,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Mail provider responded ${res.status}`);
}
