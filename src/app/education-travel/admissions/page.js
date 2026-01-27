import Link from "next/link";

const steps = [
  {
    title: "Eligibility & Course Confirmation",
    desc: "Review selected course/institution, confirm entry requirements, and identify gaps or risks early.",
  },
  {
    title: "Application Guidance",
    desc: "Walkthrough of application requirements, clarifications for institution-specific rules, SOP guidance (not ghostwriting).",
  },
  {
    title: "Document Readiness",
    desc: "Transcripts/certificates checks, CV format review, references guidance, and proof of funds document readiness support.",
  },
  {
    title: "Quality & Compliance Check",
    desc: "Final checks for completeness, consistency, and avoidable errors before submission.",
  },
  {
    title: "Submission & Follow-Up",
    desc: "Submission support, monitoring, and follow-up guidance until next steps (offer letter / updates).",
  },
];

const requiredDocs = [
  "Academic certificates and transcripts",
  "CV / résumé (if applicable)",
  "Passport data page",
  "English test result (if required)",
  "Other documents may be needed depending on course/institution",
];

export default function AdmissionsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Education • Admissions
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
          Admission Processing
        </h1>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Structured application guidance and document readiness support to reduce errors, delays, and missed opportunities.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 text-xs font-semibold text-foreground">
                  {i + 1}
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-zinc-50 p-6">
            <div className="text-sm font-semibold text-foreground">What you’ll need (initial stage)</div>
            <div className="mt-3 grid gap-2">
              {requiredDocs.map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-foreground">Responsibility clarity</div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-zinc-50 p-4">
                <div className="text-sm font-semibold text-foreground">We provide</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Guidance, document review, compliance checks, and support with institutional communication (where applicable).
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-zinc-50 p-4">
                <div className="text-sm font-semibold text-foreground">You provide</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Genuine documents, timely responses, and final decisions on course acceptance and next steps.
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Start Admission Process
              </Link>
              <Link
                href="/education-travel"
                className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                ← Back to Education
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
