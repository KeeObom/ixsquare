"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const heardAboutOptions = [
  "Instagram",
  "TikTok",
  "Facebook",
  "Google Search",
  "WhatsApp",
  "Friend / Referral (Person)",
  "Returning Client",
  "Other",
];

export default function EducationBookingInner() {
  const sp = useSearchParams();

  const prefill = {
    country: sp.get("country") || "",
    level: sp.get("level") || "",
    intake: sp.get("intake") || "",
    university: sp.get("university") || "",
  };

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Education & Study Abroad",
    destination: prefill.country || "Other",
    heardAbout: heardAboutOptions[0],
    referralName: "",
    message: "",
  });

  useEffect(() => {
    const base = `University: ${prefill.university || "-"}\nLevel: ${prefill.level || "-"}\nIntake: ${
      prefill.intake || "-"
    }\nCountry: ${prefill.country || "-"}\n\nAdditional details:`;

    setForm((prev) => ({
      ...prev,
      destination: prefill.country || prev.destination || "Other",
      message: prev.message?.trim().length ? prev.message : base,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefill.country, prefill.level, prefill.intake, prefill.university]);

  const needsReferral =
    form.heardAbout === "Friend / Referral (Person)" || form.heardAbout === "Other";

  const canSubmit = useMemo(() => {
    const requiredOk = ["name", "email", "phone", "message", "heardAbout"].every(
      (k) => String(form[k]).trim().length > 0
    );
    if (!requiredOk) return false;
    if (needsReferral && String(form.referralName).trim().length === 0) return false;
    return true;
  }, [form, needsReferral]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const payload = { ...form, prefill };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
        Apply / Ask about this program
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
        Your selection is pre-filled. Add your details and submit — we’ll contact you.
      </p>

      <div className="mt-6 rounded-3xl border border-border bg-zinc-50 p-5 text-sm text-muted-foreground">
        <div><b>Country:</b> {prefill.country || "-"}</div>
        <div><b>University:</b> {prefill.university || "-"}</div>
        <div><b>Level:</b> {prefill.level || "-"}</div>
        <div><b>Intake:</b> {prefill.intake || "-"}</div>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <Field label="Name">
          <input
            className="input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Email">
          <input
            className="input"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Phone / WhatsApp">
          <input
            className="input"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+234..."
          />
        </Field>

        <Field label="How did you hear about us?">
          <select
            className="input"
            value={form.heardAbout}
            onChange={(e) => {
              const next = e.target.value;
              setForm((prev) => ({
                ...prev,
                heardAbout: next,
                referralName:
                  next === "Friend / Referral (Person)" || next === "Other"
                    ? prev.referralName
                    : "",
              }));
            }}
          >
            {heardAboutOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </Field>

        {needsReferral && (
          <Field
            label={form.heardAbout === "Other" ? "Please specify" : "Referral name (who referred you?)"}
          >
            <input
              className="input"
              value={form.referralName}
              onChange={(e) => setForm({ ...form, referralName: e.target.value })}
              placeholder={form.heardAbout === "Other" ? "Where did you find us?" : "e.g., Chinedu Okafor"}
            />
          </Field>
        )}

        <Field label="Message">
          <textarea
            className="input min-h-[160px]"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Add any extra details..."
          />
        </Field>

        <button
          disabled={!canSubmit || status === "loading"}
          className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Submit inquiry"}
        </button>

        {status === "success" && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            Sent successfully. We’ll contact you shortly.
          </div>
        )}

        {status === "error" && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
            {error}
          </div>
        )}
      </form>

      <div className="mt-8">
        <Link href="/education" className="text-sm font-semibold text-primary">
          ← Back to Education
        </Link>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 16px;
          border: 1px solid hsl(var(--border));
          background: white;
          padding: 12px 14px;
          font-size: 14px;
          color: hsl(var(--foreground));
          outline: none;
        }
        .input:focus {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 4px rgba(0,0,0,0.06);
        }
      `}</style>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}
