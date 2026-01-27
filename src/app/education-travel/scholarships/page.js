"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const TABS = [
  { key: "scholarships", label: "Scholarships & Bursaries" },
  { key: "loans", label: "Student Loans" },
  { key: "combined", label: "Combined Guidance" },
];

const COUNTRIES = [
  { key: "uk", label: "United Kingdom" },
  { key: "ireland", label: "Ireland" },
  { key: "canada", label: "Canada" },
  { key: "usa", label: "United States" },
  { key: "germany", label: "Germany" },
  { key: "france", label: "France" },
  { key: "italy", label: "Italy" },
  { key: "spain", label: "Spain" },
  { key: "cyprus", label: "Cyprus" },
  { key: "sweden", label: "Sweden" },
  { key: "finland", label: "Finland" },
  { key: "denmark", label: "Denmark" },
  { key: "norway", label: "Norway" },
  { key: "malta", label: "Malta" },
  { key: "hungary", label: "Hungary" },
  { key: "portugal", label: "Portugal" },
];

const LEVELS = ["Foundation", "Undergraduate", "Masters", "PhD"];
const FIELDS = [
  "Nursing",
  "Data Science",
  "Business Management",
  "Public Health",
  "Computer Science",
  "Engineering",
  "Law",
  "Other",
];

const scholarships = [
  {
    type: "scholarship",
    name: "MPOWER Global Citizen Scholarship",
    where: ["usa", "canada"],
    who: "International students enrolled at MPOWER-supported institutions (undergrad/graduate).",
    benefit: "Awards up to $10,000 (plus smaller monthly MPOWER scholarships in some cycles).",
    timing: "Annual deadlines often around January (varies by year/program).",
    tip: "Start early and apply to multiple scholarships to increase chances.",
  },
  {
    type: "scholarship",
    name: "Erasmus Mundus Scholarships",
    where: ["uk", "germany", "france", "italy", "spain", "cyprus", "sweden", "finland", "denmark", "norway", "hungary", "portugal", "malta", "ireland"],
    who: "International applicants (mainly Master’s; sometimes PhD) via consortium programs.",
    benefit: "Often fully funded: tuition + travel + monthly stipend (commonly ~€1400–€1800).",
    timing: "Applications commonly open Oct–Jan for Autumn starts (varies by consortium).",
    tip: "Some programs award joint/double degrees across EU institutions.",
  },
  {
    type: "scholarship",
    name: "Commonwealth Scholarships",
    where: ["uk"],
    who: "Citizens of Commonwealth countries (award types/eligibility vary).",
    benefit: "Often covers tuition + living stipend + travel (varies by award).",
    timing: "Deadlines vary by nominating agency and award category.",
    tip: "Check your country’s nominating agency early to avoid missing timelines.",
  },
  {
    type: "scholarship",
    name: "GREAT Scholarships (UK)",
    where: ["uk"],
    who: "International students from participating countries (varies by university).",
    benefit: "Typically £10,000 towards tuition (varies by institution).",
    timing: "Often Spring/Early Summer deadlines for next academic year intakes (varies).",
    tip: "Pair with university-specific awards where possible.",
  },
];

const loanProviders = [
  {
    type: "loan",
    name: "Providus Bank Education Loan",
    coverage: "Nigeria (destination-dependent)",
    eligibility: "Eligibility depends on provider requirements and applicant profile.",
    max: "Varies",
    repayment: "Varies",
    cta: { label: "Request guidance", href: "/book" },
  },
  {
    type: "loan",
    name: "Stanbic IBTC Study Loan",
    coverage: "Nigeria (destination-dependent)",
    eligibility: "Eligibility depends on provider requirements and applicant profile.",
    max: "Varies",
    repayment: "Varies",
    cta: { label: "Request guidance", href: "/book" },
  },
  {
    type: "loan",
    name: "Access Bank Student Financing Scheme",
    coverage: "Nigeria (destination-dependent)",
    eligibility: "Eligibility depends on provider requirements and applicant profile.",
    max: "Varies",
    repayment: "Varies",
    cta: { label: "Request guidance", href: "/book" },
  },
];

const workflow = [
  {
    title: "1) Eligibility Assessment",
    left: ["Academic background (scholarships)", "Programme fit & deadlines"],
    right: ["Financial need & repayment ability (loans)", "Provider criteria review"],
  },
  {
    title: "2) Document Guidance",
    left: ["CV / résumé", "Personal statement support (guidance, not ghostwriting)", "References (where required)"],
    right: ["Proof of income", "Bank statements", "Collateral (if required)"],
  },
  {
    title: "3) Application Submission",
    left: ["Follow institutional timelines & portals", "Submit required supporting documents"],
    right: ["Complete provider forms", "Submit supporting documents + verification"],
  },
  {
    title: "4) Outcome & Next Steps",
    left: ["Award / re-application plan", "How to accept + meet conditions"],
    right: ["Approval + disbursement steps", "Repayment plan + budgeting"],
  },
];

export default function ScholarshipsPage() {
  const [tab, setTab] = useState("scholarships");

  // Optional “filter” for scholarships tab (simple + useful)
  const [country, setCountry] = useState("");
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");

  const filteredScholarships = useMemo(() => {
    return scholarships
      .filter((s) => (country ? (s.where || []).includes(country) : true))
      // level + field are informational here (because each scholarship doesn’t strictly map),
      // but keeping them matches your UX spec and prepares you for richer data later.
      .filter(() => (level ? true : true))
      .filter(() => (field ? true : true));
  }, [country, level, field]);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Education • Funding
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
          Scholarship & Funding Support
        </h1>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Guidance on scholarships, eligibility checks, personal statement support, and financing options (where applicable).
        </p>

        <div className="mt-2 text-sm text-muted-foreground">
          <b className="text-foreground">Optional:</b> Maximise your funding options — scholarships, bursaries, and student loans all in one place.
        </div>

        {/* Quick intro */}
        <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
          <div className="text-sm font-semibold text-foreground">Quick Intro</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Funding your studies can come from multiple sources. We guide you through scholarships, bursaries, and trusted
            loan options so you can pursue your education with confidence.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={[
                  "rounded-2xl px-4 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-white text-foreground hover:bg-zinc-50",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* TAB: Scholarships */}
        {tab === "scholarships" && (
          <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-foreground">Scholarships & Bursaries</div>
                <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                  Find scholarships that match your profile and study goals. Explore merit-based and need-based scholarships
                  offered by universities, governments, and private institutions. Use filters below as a starting point —
                  we’ll guide eligibility checks, deadlines, and document readiness.
                </p>
                <div className="mt-2 text-xs text-muted-foreground">
                  Tip: Start early and apply to multiple scholarships to increase your chances.
                </div>
              </div>

              <Link
                href="/education-travel"
                className="rounded-2xl border border-accent/60 bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                ← Back to Education
              </Link>
            </div>

            {/* Filters */}
            <div className="mt-6 rounded-3xl border border-border bg-zinc-50 p-5">
              <div className="grid gap-3 md:grid-cols-3">
                <select className="input" value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="">Country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.label}
                    </option>
                  ))}
                </select>

                <select className="input" value={level} onChange={(e) => setLevel(e.target.value)}>
                  <option value="">Degree Level</option>
                  {LEVELS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>

                <select className="input" value={field} onChange={(e) => setField(e.target.value)}>
                  <option value="">Course / Field</option>
                  {FIELDS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-muted-foreground">
                  Showing <b className="text-foreground">{filteredScholarships.length}</b> opportunities
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCountry("");
                    setLevel("");
                    setField("");
                  }}
                  className="rounded-2xl border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-white/70"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Scholarship cards */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {filteredScholarships.map((s) => (
                <div key={s.name} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-foreground">{s.name}</div>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-foreground">
                      Scholarship
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-muted-foreground">
                    <div>
                      <b>Where:</b> {(s.where || []).map((k) => prettyCountry(k)).join(" • ") || s.where}
                    </div>
                    <div className="mt-1">
                      <b>Who:</b> {s.who}
                    </div>
                    <div className="mt-1">
                      <b>Benefit:</b> {s.benefit}
                    </div>
                    <div className="mt-1">
                      <b>Timing:</b> {s.timing}
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-muted-foreground">{s.tip}</div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">Next step</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us your destination, degree level, and course interest — we’ll advise which options fit your profile
                and what documents you’ll need to prepare.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                >
                  Check Scholarship Eligibility
                </Link>
                <Link
                  href="/education-travel/search"
                  className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/70"
                >
                  Explore Schools
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB: Loans */}
        {tab === "loans" && (
          <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-foreground">Student Loans</div>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Access trusted student loan providers to cover tuition and living costs. We curate verified options and guide you
              on eligibility, interest rates, coverage, repayment timelines, and the documents you’ll need to provide.
            </p>
            <div className="mt-2 text-xs text-muted-foreground">
              Tip: Compare loan terms carefully and plan for repayment before applying.
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {loanProviders.map((l) => (
                <div key={l.name} className="rounded-3xl border border-border bg-zinc-50 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-foreground">{l.name}</div>
                    <span className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-foreground">
                      Loan
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-muted-foreground">
                    <div>
                      <b>Country coverage:</b> {l.coverage}
                    </div>
                    <div className="mt-1">
                      <b>Eligibility snapshot:</b> {l.eligibility}
                    </div>
                    <div className="mt-1">
                      <b>Max amount:</b> {l.max}
                    </div>
                    <div className="mt-1">
                      <b>Repayment:</b> {l.repayment}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={l.cta.href}
                      className="rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                    >
                      {l.cta.label}
                    </Link>
                    <Link
                      href="/book"
                      className="rounded-2xl border border-accent/60 bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-white/70"
                    >
                      Apply / Enquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Required documents */}
            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">Required Documents (Loans)</div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-foreground">Typical documents</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Proof of income</li>
                    <li>• Bank statements</li>
                    <li>• Valid ID + passport data page</li>
                    <li>• Collateral (if required)</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-foreground">What we help with</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Provider comparison (coverage, terms, repayment)</li>
                    <li>• Checklist and submission readiness</li>
                    <li>• Budget planning (tuition + living costs)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: Combined */}
        {tab === "combined" && (
          <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-foreground">Combined Guidance</div>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Plan your funding strategy effectively. We help you combine scholarships and loans to cover tuition,
              accommodation, visa costs, and living expenses — with a realistic sequence and timeline.
            </p>
            <div className="mt-2 text-xs text-muted-foreground">
              Tip: Combining a partial scholarship with a student loan often reduces financial burden significantly.
            </div>

            {/* Workflow panel */}
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {workflow.map((w) => (
                <div key={w.title} className="rounded-3xl border border-border bg-zinc-50 p-6">
                  <div className="text-sm font-semibold text-foreground">{w.title}</div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-border bg-white p-5 shadow-sm">
                      <div className="text-xs font-semibold text-foreground">Scholarships</div>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {w.left.map((x) => (
                          <li key={x}>• {x}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-3xl border border-border bg-white p-5 shadow-sm">
                      <div className="text-xs font-semibold text-foreground">Loans</div>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {w.right.map((x) => (
                          <li key={x}>• {x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Required documents */}
            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">Required Documents (Updated)</div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-foreground">Scholarships</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Academic transcripts</li>
                    <li>• CV / résumé</li>
                    <li>• Personal statement (guidance & review)</li>
                    <li>• References (where applicable)</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-foreground">Loans</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li>• Bank statements</li>
                    <li>• Proof of income</li>
                    <li>• Identification documents</li>
                    <li>• Collateral (if required)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What we do / don't */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-foreground">What we do</div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Identify scholarships & trusted loan providers</li>
                  <li>• Check eligibility & review documents</li>
                  <li>• Guide how to combine scholarships and loans</li>
                  <li>• Provide structured checklist and timeline support</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-zinc-50 p-6">
                <div className="text-sm font-semibold text-foreground">What we don’t do</div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Guarantee awards or loan approvals</li>
                  <li>• Write personal statements or loan forms on your behalf</li>
                  <li>• Influence decisions by institutions or financial providers</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">Check Scholarship & Loan Eligibility</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your destination, degree level, course interest, and timeline — we’ll recommend options and next steps.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                >
                  Get Personalized Funding Guidance
                </Link>
                <Link
                  href="/education-travel"
                  className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/70"
                >
                  ← Back to Education
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Compliance footer */}
        <div className="mt-10 text-xs text-muted-foreground">
          Scholarship awards and loan approvals are determined solely by institutions or financial providers. Our role is to provide guidance and preparation support only.
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
      </section>
    </main>
  );
}

function prettyCountry(key) {
  const map = {
    uk: "United Kingdom",
    ireland: "Ireland",
    canada: "Canada",
    usa: "United States",
    germany: "Germany",
    france: "France",
    italy: "Italy",
    spain: "Spain",
    cyprus: "Cyprus",
    sweden: "Sweden",
    finland: "Finland",
    denmark: "Denmark",
    norway: "Norway",
    malta: "Malta",
    hungary: "Hungary",
    portugal: "Portugal",
  };
  return map[String(key || "").toLowerCase()] || key || "";
}


// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const TABS = [
//   { key: "scholarships", label: "Scholarships & Bursaries" },
//   { key: "loans", label: "Student Loans" },
//   { key: "combined", label: "Combined Guidance" },
// ];

// const scholarships = [
//   {
//     name: "MPOWER Global Citizen Scholarship",
//     where: "USA & Canada",
//     who: "International students enrolled at supported institutions",
//     benefit: "Awards up to $10,000",
//     tip: "Also check smaller monthly MPOWER scholarships.",
//   },
//   {
//     name: "Erasmus Mundus Scholarships",
//     where: "Europe (multi-country programs)",
//     who: "Master’s (sometimes PhD), international applicants",
//     benefit: "Often fully funded (tuition + stipend + travel)",
//     tip: "Applications typically open Oct–Jan for Autumn start.",
//   },
//   {
//     name: "Commonwealth Scholarships",
//     where: "UK & Commonwealth partners",
//     who: "Citizens of Commonwealth countries (varies by award)",
//     benefit: "Tuition + living stipend + travel (varies)",
//     tip: "Deadlines vary by country nominating agencies.",
//   },
//   {
//     name: "GREAT Scholarships",
//     where: "United Kingdom",
//     who: "International students (participating countries)",
//     benefit: "Often £10,000 towards tuition",
//     tip: "Deadlines usually Spring/Early Summer.",
//   },
// ];

// const loans = [
//   {
//     name: "Student Loan Providers (Examples)",
//     where: "Nigeria / International",
//     who: "Eligibility depends on provider",
//     benefit: "Tuition and/or living cost coverage",
//     tip: "We help compare terms and required documents.",
//   },
// ];

// export default function ScholarshipsPage() {
//   const [tab, setTab] = useState("scholarships");

//   return (
//     <main className="bg-white">
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//           <span className="h-2 w-2 rounded-full bg-accent" />
//           Education • Funding
//         </div>

//         <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
//           Scholarship & Funding Support
//         </h1>

//         <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
//           Guidance on scholarships, eligibility checks, personal statement support, and financing options (where applicable).
//         </p>

//         {/* Tabs */}
//         <div className="mt-8 flex flex-wrap gap-2">
//           {TABS.map((t) => {
//             const active = tab === t.key;
//             return (
//               <button
//                 key={t.key}
//                 type="button"
//                 onClick={() => setTab(t.key)}
//                 className={[
//                   "rounded-2xl px-4 py-2 text-sm font-semibold transition",
//                   active
//                     ? "bg-primary text-primary-foreground shadow-sm"
//                     : "border border-border bg-white text-foreground hover:bg-zinc-50",
//                 ].join(" ")}
//               >
//                 {t.label}
//               </button>
//             );
//           })}
//         </div>

//         {/* Content */}
//         {tab === "scholarships" && (
//           <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
//             <div className="text-sm font-semibold text-foreground">Explore Scholarships</div>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Merit-based or need-based scholarships. Institutional awards and government-funded schemes.

//               {/* Filter by country, degree level, and field of study — we guide eligibility checks and document readiness. */}
//             </p>

//             <div className="mt-6 grid gap-4 md:grid-cols-2">
//               {scholarships.map((s) => (
//                 <div key={s.name} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//                   <div className="text-sm font-semibold text-foreground">{s.name}</div>
//                   <div className="mt-2 text-sm text-muted-foreground">
//                     <div><b>Where:</b> {s.where}</div>
//                     <div><b>Who:</b> {s.who}</div>
//                     <div><b>Benefit:</b> {s.benefit}</div>
//                   </div>
//                   <div className="mt-4 text-xs text-muted-foreground">{s.tip}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {tab === "loans" && (
//           <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
//             <div className="text-sm font-semibold text-foreground">Student Loans</div>
//             <p className="mt-2 text-sm text-muted-foreground">
//               We curate trusted providers and guide eligibility, repayment terms, and required documents.
//             </p>

//             <div className="mt-6 grid gap-4 md:grid-cols-2">
//               {loans.map((l) => (
//                 <div key={l.name} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//                   <div className="text-sm font-semibold text-foreground">{l.name}</div>
//                   <div className="mt-2 text-sm text-muted-foreground">
//                     <div><b>Coverage:</b> {l.where}</div>
//                     <div><b>Eligibility:</b> {l.who}</div>
//                     <div><b>What you get:</b> {l.benefit}</div>
//                   </div>
//                   <div className="mt-4 text-xs text-muted-foreground">{l.tip}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {tab === "combined" && (
//           <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
//             <div className="text-sm font-semibold text-foreground">Combined Guidance</div>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Learn how to combine partial scholarships with student loans to reduce financial burden — and how to budget tuition,
//               visa costs, accommodation, and living expenses.
//             </p>

//             <div className="mt-6 grid gap-4 md:grid-cols-2">
//               {[
//                 {
//                   title: "Funding Strategy Planning",
//                   desc: "We help you decide what to apply for first, and how to stack options safely and realistically.",
//                 },
//                 {
//                   title: "Document Readiness",
//                   desc: "We guide the documents needed for scholarships (CV, references) and loans (income proof, statements).",
//                 },
//                 {
//                   title: "Submission & Next Steps",
//                   desc: "Support with timelines, deadlines, and what to do after you get results (award/approval).",
//                 },
//                 {
//                   title: "Compliance & Limits",
//                   desc: "We do not guarantee scholarship awards or loan approvals. Decisions are made by institutions/providers.",
//                 },
//               ].map((x) => (
//                 <div key={x.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//                   <div className="text-sm font-semibold text-foreground">{x.title}</div>
//                   <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="mt-10 rounded-3xl border border-border bg-white p-6 md:p-8">
//           <div className="text-sm font-semibold text-foreground">Ready to check eligibility?</div>
//           <p className="mt-2 text-sm text-muted-foreground">
//             Tell us your destination, level, course interest, and timeline — we’ll recommend options and next steps.
//           </p>

//           <div className="mt-5 flex flex-wrap gap-3">
//             <Link
//               href="/book"
//               className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
//             >
//               Book Funding Consultation
//             </Link>
//             <Link
//               href="/education-travel"
//               className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
//             >
//               ← Back to Education
//             </Link>
//           </div>

//           <div className="mt-4 text-xs text-muted-foreground">
//             Scholarship awards and loan approvals are determined solely by institutions or providers. We provide guidance and preparation support only.
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
