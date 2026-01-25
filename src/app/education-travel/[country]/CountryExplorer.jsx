"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { UNIVERSITIES } from "@/data/universities";

const LEVELS = [
  { value: "undergrad", label: "Undergraduate" },
  { value: "masters", label: "Masters" },
  { value: "phd", label: "PhD" },
];

const INTAKES = [
  { value: "fall", label: "Fall" },
  { value: "spring", label: "Spring" },
  { value: "winter", label: "Winter" },
  { value: "summer", label: "Summer" },
];

export default function CountryExplorer({ countryKey, countryName, flagSrc }) {
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState("");
  const [intake, setIntake] = useState("");

  const list = UNIVERSITIES[countryKey] || [];

  const filtered = useMemo(() => {
    return list.filter((u) => {
      if (level && !u.levels.includes(level)) return false;
      if (intake && !u.intakes.includes(intake)) return false;
      return true;
    });
  }, [list, level, intake]);

  return (
    <div className="rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-accent/25 bg-white">
            <Image src={flagSrc} alt={`${countryName} flag`} fill className="object-cover" />
          </span>
          <div>
            <div className="text-sm font-semibold text-foreground">{countryName}</div>
            <div className="text-xs text-muted-foreground">Select your study preferences</div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Step {step} of 3
        </div>
      </div>

      {/* Stepper */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* Step 1: Level */}
        <div className={`rounded-3xl border border-border bg-white p-5 ${step === 1 ? "shadow-sm" : ""}`}>
          <div className="text-sm font-semibold text-foreground">1) Choose level</div>
          <div className="mt-3 grid gap-2">
            {LEVELS.map((x) => (
              <button
                key={x.value}
                type="button"
                onClick={() => {
                  setLevel(x.value);
                  setStep(2);
                }}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                  level === x.value ? "border-accent bg-accent/10" : "border-border bg-white hover:bg-zinc-50"
                }`}
              >
                {x.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Intake */}
        <div className={`rounded-3xl border border-border bg-white p-5 ${step === 2 ? "shadow-sm" : ""}`}>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-foreground">2) Choose intake</div>
            <Link
              href="/education-travel"
              className="text-xs font-semibold text-primary hover:opacity-90"
            >
              ← Back
            </Link>

            {/* <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-semibold text-primary hover:opacity-90"
            >
              Back
            </button> */}
          </div>

          <div className="mt-3 grid gap-2">
            {INTAKES.map((x) => (
              <button
                key={x.value}
                type="button"
                disabled={!level}
                onClick={() => {
                  setIntake(x.value);
                  setStep(3);
                }}
                className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition disabled:opacity-50 ${
                  intake === x.value ? "border-accent bg-accent/10" : "border-border bg-white hover:bg-zinc-50"
                }`}
              >
                {x.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            You can still change this later.
          </p>
        </div>

        {/* Step 3: Universities */}
        <div className={`rounded-3xl border border-border bg-white p-5 ${step === 3 ? "shadow-sm" : ""}`}>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-foreground">3) Universities</div>
            <Link
              href="/education-travel"
              className="text-xs font-semibold text-primary hover:opacity-90"
            >
              ← Back
            </Link>

            {/* <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs font-semibold text-primary hover:opacity-90"
            >
              Back
            </button> */}
          </div>

          <div className="mt-3 space-y-2">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-zinc-50 p-4 text-sm text-muted-foreground">
                No universities found for this filter yet. We can still help—book a consultation.
              </div>
            ) : (
              filtered.map((u) => (
                <Link
                  key={u.name}
                  href={`/book/education?country=${encodeURIComponent(countryName)}&level=${encodeURIComponent(
                    level
                  )}&intake=${encodeURIComponent(intake)}&university=${encodeURIComponent(u.name)}`}
                  className="block rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
                >
                  {u.name} →
                </Link>
              ))
            )}
          </div>

          <div className="mt-4 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-xs text-muted-foreground">
            Selecting a university opens a pre-filled inquiry form that emails our team.
          </div>
        </div>
      </div>
    </div>
  );
}
