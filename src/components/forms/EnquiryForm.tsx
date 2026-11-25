"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { enquirySchema, fuelInterests, type EnquiryInput, type Enquiry } from "@/schemas/enquiry";
import { cn } from "@/lib/cn";

type Status =
  | { kind: "idle" }
  | { kind: "success" }
  | { kind: "error"; message: string; unavailable?: boolean };

type Props = {
  variant?: "general" | "quote";
  defaultInterests?: (typeof fuelInterests)[number][];
  contact: { email: string; phone: { display: string; href: string } };
};

/** Wall-clock timestamp, used for the minimum-fill-time spam check. */
const timestamp = () => Date.now();

const field = "mt-2 block w-full border border-ink/20 bg-white px-4 py-3 text-base transition-colors placeholder:text-ink/35 hover:border-ink/40 focus:border-ink focus:outline-none aria-[invalid=true]:border-signal";

export function EnquiryForm({ variant = "general", defaultInterests = [], contact }: Props) {
  const id = useId();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const statusRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput, unknown, Enquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      type: variant === "quote" ? "quote" : "general",
      name: "",
      email: "",
      phone: "",
      company: "",
      interests: defaultInterests,
      equipment: "",
      volume: "",
      message: "",
      website: "",
      startedAt: 0,
      source: "",
    },
  });

  // Set client-only values after mount (keeps SSR markup deterministic)
  useEffect(() => {
    setValue("startedAt", timestamp());
    setValue("source", window.location.pathname);
  }, [setValue]);

  useEffect(() => {
    if (status.kind !== "idle") statusRef.current?.focus();
  }, [status]);

  async function onSubmit(data: Enquiry) {
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; message?: string };
      if (res.ok && body.ok) {
        setStatus({ kind: "success" });
        reset();
        setValue("startedAt", timestamp());
        return;
      }
      setStatus({
        kind: "error",
        unavailable: body.error === "not_configured",
        message: body.message ?? "Something went wrong while sending your message.",
      });
    } catch {
      setStatus({ kind: "error", message: "We couldn't reach the server. Check your connection and try again." });
    }
  }

  const err = (name: keyof EnquiryInput) => {
    const e = errors[name];
    return e?.message ? (
      <p id={`${id}-${name}-error`} role="alert" className="mt-2 text-sm text-signal">
        {String(e.message)}
      </p>
    ) : null;
  };
  const a11y = (name: keyof EnquiryInput) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  if (status.kind === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="border border-ok/30 bg-ok/5 p-8 focus:outline-none md:p-12">
        <CheckCircle2 className="size-10 text-ok" aria-hidden />
        <h2 className="mt-6 text-3xl font-medium">Thank you — your message is on its way.</h2>
        <p className="mt-3 max-w-lg text-ink/70">Our team will reply by email. If it’s urgent, call {contact.phone.display}.</p>
        <button type="button" className="link-underline mt-8 text-signal" onClick={() => setStatus({ kind: "idle" })}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6" aria-describedby={`${id}-req`}>
      <p id={`${id}-req`} className="text-sm text-ink/65">Fields marked * are required.</p>

      {status.kind === "error" && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="flex gap-4 border border-signal/40 bg-signal-soft/50 p-5 focus:outline-none">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-signal" aria-hidden />
          <div>
            <p className="font-medium">{status.message}</p>
            <p className="mt-1 text-sm text-ink/70">
              {status.unavailable ? "Please contact us directly instead: " : "You can also reach us directly: "}
              <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a> or{" "}
              <a className="underline" href={contact.phone.href}>{contact.phone.display}</a>.
            </p>
          </div>
        </div>
      )}

      <input type="hidden" {...register("type")} />
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />
      <input type="hidden" {...register("source")} />
      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="text-sm font-medium">Full name *</label>
          <input id={`${id}-name`} autoComplete="name" className={field} {...register("name")} {...a11y("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${id}-company`} className="text-sm font-medium">Company or organisation</label>
          <input id={`${id}-company`} autoComplete="organization" className={field} {...register("company")} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="text-sm font-medium">Email *</label>
          <input id={`${id}-email`} type="email" autoComplete="email" className={field} {...register("email")} {...a11y("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="text-sm font-medium">Phone</label>
          <input id={`${id}-phone`} type="tel" autoComplete="tel" placeholder="+234" className={field} {...register("phone")} {...a11y("phone")} />
          {err("phone")}
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium">I’m interested in</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {fuelInterests.map((opt) => (
            <label key={opt} className="relative cursor-pointer">
              <input type="checkbox" value={opt} className="peer sr-only" {...register("interests")} />
              <span className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-bone peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-signal hover:border-ink">
                {opt}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {variant === "quote" && (
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-equipment`} className="text-sm font-medium">Equipment</label>
            <input id={`${id}-equipment`} placeholder="e.g. 2 × 500 kVA diesel generators, 12 delivery vans" className={field} {...register("equipment")} />
          </div>
          <div>
            <label htmlFor={`${id}-volume`} className="text-sm font-medium">Approximate fuel volume</label>
            <input id={`${id}-volume`} placeholder="e.g. 20,000 litres / month" className={field} {...register("volume")} />
          </div>
        </div>
      )}

      <div>
        <label htmlFor={`${id}-message`} className="text-sm font-medium">{variant === "quote" ? "Tell us about your requirements *" : "Message *"}</label>
        <textarea id={`${id}-message`} rows={6} className={cn(field, "resize-y")} {...register("message")} {...a11y("message")} />
        {err("message")}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink/75">
          <input type="checkbox" className="mt-0.5 size-5 shrink-0 accent-signal" {...register("consent")} {...a11y("consent")} />
          <span>
            I agree that Milemaster may use these details to respond to my enquiry, as described in the{" "}
            <a href="/privacy" className="underline">privacy policy</a>. *
          </span>
        </label>
        {err("consent")}
      </div>

      <div>
        <button type="submit" disabled={isSubmitting} className="inline-flex h-14 items-center gap-3 bg-signal px-8 font-medium text-white transition-colors hover:bg-signal-deep disabled:opacity-60">
          {isSubmitting && <Loader2 className="size-5 animate-spin" aria-hidden />}
          {isSubmitting ? "Sending…" : variant === "quote" ? "Request my quote" : "Send message"}
        </button>
      </div>
    </form>
  );
}
