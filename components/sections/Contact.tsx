"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/layout/Container";
import { profile } from "@/content/profile";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [startTime] = useState(() => Date.now());

  function validate(form: FormData) {
    const next: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (name.length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (message.length < 10) next.message = "Say a little more — a few words is enough.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (String(form.get("website") || "").length > 0) return; // honeypot
    if (Date.now() - startTime < 3000) return; // too fast, likely a bot

    if (!validate(form)) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" bg="white" ariaLabel="Contact">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-6 order-2 lg:order-1">
          {status === "success" ? (
            <div className="bg-cream rounded-[20px] p-8">
              <p className="text-[17px] leading-relaxed">
                Thanks — that&apos;s in my inbox. I&apos;ll reply within a day
                or two.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              {/* Honeypot */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <Field
                label="Name"
                name="name"
                type="text"
                error={errors.name}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                error={errors.email}
                required
              />
              <div>
                <label htmlFor="message" className="block text-[13px] font-mono uppercase tracking-[0.08em] text-slate mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full bg-transparent border-b border-hairline focus:border-b-2 focus:border-violet outline-none py-3 text-[16px] resize-none transition-colors"
                />
                {errors.message && (
                  <p id="message-error" className="text-[13px] text-error mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p role="alert" className="text-[14px] text-error">
                  That didn&apos;t send. Email me directly at{" "}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="inline-flex items-center justify-center rounded-full bg-violet text-white px-7 py-3.5 text-[15px] font-display font-bold hover:bg-violet-deep transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <Eyebrow>Contact</Eyebrow>
          <h2
            id="contact-heading"
            className="font-display font-extrabold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] mb-5"
          >
            Let&apos;s <span className="font-accent text-violet">talk</span>
          </h2>
          <p className="text-slate leading-relaxed max-w-[46ch] mb-10">
            I&apos;m actively looking for data science and ML roles. If
            you&apos;re hiring, or you just want to talk about a project, the
            form goes straight to my inbox — or reach me directly below.
          </p>
          <div className="space-y-4 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="block py-1 text-ink underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-violet">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="block py-1 text-ink underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-violet">
              {profile.phone}
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 py-1 text-ink underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-violet">
              LinkedIn
              <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 py-1 text-ink underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-violet">
              GitHub
              <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
            </a>
            <p className="text-slate pt-4 leading-relaxed">
              {profile.location.city}, {profile.location.state},{" "}
              {profile.location.country} · {profile.location.timezone}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type,
  error,
  required,
}: {
  label: string;
  name: string;
  type: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-mono uppercase tracking-[0.08em] text-slate mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full bg-transparent border-b border-hairline focus:border-b-2 focus:border-violet outline-none h-12 text-[16px] transition-colors"
      />
      {error && (
        <p id={`${name}-error`} className="text-[13px] text-error mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}
