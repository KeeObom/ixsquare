import Image from "next/image";
import Link from "next/link";

const COUNTRIES = [
  { key: "uk", name: "United Kingdom", flag: "/images/flags/gb.png" },
  { key: "canada", name: "Canada", flag: "/images/flags/canada.png" },
  { key: "australia", name: "Australia", flag: "/images/flags/australia.png" },
  { key: "usa", name: "United States", flag: "/images/flags/united-states.png" },
  { key: "ireland", name: "Ireland", flag: "/images/flags/ireland.png" },
  { key: "germany", name: "Germany", flag: "/images/flags/germany.png" },
  { key: "france", name: "France", flag: "/images/flags/france.png" },
  { key: "italy", name: "Italy", flag: "/images/flags/italy.png" },
  { key: "spain", name: "Spain", flag: "/images/flags/spain.png" },
  { key: "portugal", name: "Portugal", flag: "/images/flags/portugal.png" },
  { key: "hungary", name: "Hungary", flag: "/images/flags/hungary.png" },
  { key: "cyprus", name: "Cyprus", flag: "/images/flags/cyprus.png" },
  { key: "sweden", name: "Sweden", flag: "/images/flags/sweden.png" },
  { key: "finland", name: "Finland", flag: "/images/flags/finland.png" },
  { key: "denmark", name: "Denmark", flag: "/images/flags/denmark.png" },
  { key: "norway", name: "Norway", flag: "/images/flags/norway.png" },
  { key: "malta", name: "Malta", flag: "/images/flags/malta.png" },
  { key: "russia", name: "Russia", flag: "/images/flags/russia.png" },
  { key: "belize", name: "Belize", flag: "/images/flags/belize.png" },
  { key: "south-africa", name: "South Africa", flag: "/images/flags/south-africa.png" },
  { key: "egypt", name: "Egypt", flag: "/images/flags/egypt.png" },
];

const VISA_OVERVIEW = {
  uk: {
    title: "🇬🇧 United Kingdom — Student Visa",
    bullets: [
      "Visa category: Student Visa",
      "Eligibility: Offer letter (CAS), English proficiency, financial evidence",
      "Financials: Tuition balance + living cost funds",
      "Work rights: Up to 20 hrs/week during term; full-time in holidays; post-study work available",
      "Common refusals: Insufficient funds, credibility concerns, document inconsistencies",
    ],
  },
  canada: {
    title: "🇨🇦 Canada — Study Permit",
    bullets: [
      "Visa category: Study Permit",
      "Eligibility: Letter of Acceptance, financial capacity, ties to home country",
      "Financials: Tuition + living expenses + return travel",
      "Work rights: Up to 20 hrs/week during study; post-graduation work permit available",
      "Common refusals: Weak travel history, insufficient funds, unclear study plan",
    ],
  },
  australia: {
    title: "🇦🇺 Australia — Student Visa (Subclass 500)",
    bullets: [
      "Visa category: Student Visa (Subclass 500)",
      "Eligibility: COE, Genuine Student requirement, financial proof",
      "Financials: Tuition + living costs",
      "Work rights: Limited hours during study; post-study work available",
      "Common refusals: GS concerns, financial shortfall, weak academic progression",
    ],
  },
  spain: {
    title: "🇪🇸 Spain — Student Visa",
    bullets: [
      "Visa category: Long-Stay Student Visa",
      "Eligibility: Admission letter, accommodation, insurance",
      "Financials: Proof of sufficient living funds",
      "Work rights: Limited part-time work (with authorization)",
      "Common refusals: Incomplete documentation, insufficient funds",
    ],
  },
  hungary: {
    title: "🇭🇺 Hungary — Student Residence Permit",
    bullets: [
      "Visa category: Student Residence Permit",
      "Eligibility: Admission letter, accommodation, health insurance",
      "Financials: Proof of subsistence",
      "Work rights: Limited student work allowed",
      "Common refusals: Missing documents, unclear study intent",
    ],
  },
  italy: {
    title: "🇮🇹 Italy — Study Visa",
    bullets: [
      "Visa category: Type D Study Visa",
      "Eligibility: University admission, accommodation, insurance",
      "Financials: Proof of living expenses",
      "Work rights: Limited hours during study",
      "Common refusals: Incomplete paperwork, financial gaps",
    ],
  },
  portugal: {
    title: "🇵🇹 Portugal — Study Visa / Residence Permit",
    bullets: [
      "Visa category: Student Visa (D4/D5)",
      "Eligibility: Admission, accommodation, insurance",
      "Financials: Proof of sufficient means",
      "Work rights: Part-time work permitted",
      "Common refusals: Inadequate documentation, financial issues",
    ],
  },
  germany: {
    title: "🇩🇪 Germany — Student Visa",
    bullets: [
      "Visa category: National Student Visa",
      "Eligibility: University admission, language requirement",
      "Financials: Blocked account or equivalent proof",
      "Work rights: Limited number of workdays per year",
      "Common refusals: Incomplete financial proof, unclear study relevance",
    ],
  },
  cyprus: {
    title: "🇨🇾 Cyprus — Student Visa",
    bullets: [
      "Visa category: Student Visa / Temporary Residence",
      "Eligibility: Admission letter, medicals",
      "Financials: Proof of funds",
      "Work rights: Limited student work allowed",
      "Common refusals: Documentation gaps, financial insufficiency",
    ],
  },
  sweden: {
    title: "🇸🇪 Sweden — Residence Permit for Studies",
    bullets: [
      "Visa category: Student Residence Permit",
      "Eligibility: Admission, health insurance",
      "Financials: Proof of living funds",
      "Work rights: No official hour limit, but study must remain priority",
      "Common refusals: Insufficient funds, missing insurance",
    ],
  },
  finland: {
    title: "🇫🇮 Finland — Residence Permit for Studies",
    bullets: [
      "Visa category: Student Residence Permit",
      "Eligibility: Admission, insurance",
      "Financials: Proof of sufficient funds",
      "Work rights: Limited hours during study",
      "Common refusals: Financial shortfall, incomplete documents",
    ],
  },
  denmark: {
    title: "🇩🇰 Denmark — Residence Permit for Studies",
    bullets: [
      "Visa category: Student Residence Permit",
      "Eligibility: Admission, accommodation",
      "Financials: Proof of maintenance funds",
      "Work rights: Limited part-time work",
      "Common refusals: Inadequate funds, missing paperwork",
    ],
  },
  norway: {
    title: "🇳🇴 Norway — Student Residence Permit",
    bullets: [
      "Visa category: Study Residence Permit",
      "Eligibility: Admission, accommodation",
      "Financials: Proof of sufficient funds",
      "Work rights: Limited part-time work",
      "Common refusals: Financial issues, documentation gaps",
    ],
  },
  russia: {
    title: "🇷🇺 Russia — Student Visa",
    bullets: [
      "Visa category: Student Visa",
      "Eligibility: University invitation, medical clearance",
      "Financials: Proof of funds",
      "Work rights: Restricted; special permission required",
      "Common refusals: Incomplete medicals, documentation issues",
    ],
  },
  malta: {
    title: "🇲🇹 Malta — Study Visa",
    bullets: [
      "Visa category: Long-Stay Study Visa",
      "Eligibility: Admission, accommodation",
      "Financials: Proof of sufficient funds",
      "Work rights: Limited student work allowed",
      "Common refusals: Incomplete documents, financial concerns",
    ],
  },
  france: {
    title: "🇫🇷 France — Student Visa",
    bullets: [
      "Visa category: Long-Stay Student Visa",
      "Eligibility: Admission, Campus France process",
      "Financials: Proof of living funds",
      "Work rights: Limited part-time work",
      "Common refusals: Campus France issues, insufficient funds",
    ],
  },
  ireland: {
    title: "🇮🇪 Ireland — Student Visa",
    bullets: [
      "Visa category: Long-Stay Study Visa (D)",
      "Eligibility: Admission, English proficiency",
      "Financials: Proof of tuition + living funds",
      "Work rights: Limited hours during term; post-study option available",
      "Common refusals: Weak academic progression, insufficient funds",
    ],
  },
  belize: {
    title: "🇧🇿 Belize — Student Visa",
    bullets: [
      "Visa category: Student Visa",
      "Eligibility: Admission letter, police clearance",
      "Financials: Proof of financial support",
      "Work rights: Generally not permitted",
      "Common refusals: Incomplete documentation",
    ],
  },
  usa: {
    title: "🇺🇸 United States — F-1 Student Visa",
    bullets: [
      "Visa category: F-1 Student Visa",
      "Eligibility: I-20, SEVIS payment, interview",
      "Financials: Proof of tuition + living expenses",
      "Work rights: On-campus work; limited post-study options",
      "Common refusals: Non-immigrant intent concerns, weak ties",
    ],
  },
  "south-africa": {
    title: "🇿🇦 South Africa — Study Visa",
    bullets: [
      "Visa category: Study Visa",
      "Eligibility: Admission, medicals",
      "Financials: Proof of funds",
      "Work rights: Limited part-time work",
      "Common refusals: Incomplete documents, medical issues",
    ],
  },
  egypt: {
    title: "🇪🇬 Egypt — Student Visa",
    bullets: [
      "Visa category: Student Visa / Residence Permit",
      "Eligibility: Admission letter",
      "Financials: Proof of sponsorship or funds",
      "Work rights: Generally restricted",
      "Common refusals: Documentation inconsistencies",
    ],
  },
};

const PROCESS = [
  {
    title: "Visa Route Assessment",
    desc: "Confirm the correct visa type and alignment with your admission route/offer; review risks and eligibility.",
  },
  {
    title: "Document Guidance & Checklist",
    desc: "Country-specific checklist, sponsorship/financial guidance, translation/format rules where applicable.",
  },
  {
    title: "Financial & Compliance Review",
    desc: "Proof of funds guidance, source of funds explanation, and timing alignment with immigration requirements.",
  },
  {
    title: "Application Form Guidance",
    desc: "Step-by-step form guidance and consistency checks to reduce avoidable errors.",
  },
  {
    title: "Pre-Submission Review",
    desc: "Final compliance review and readiness confirmation before you submit.",
  },
];

export default function VisaGuidancePage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Education • Visa
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
          Visa Application Guidance
        </h1>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Aligned support based on your study route, destination country, and immigration requirements.
        </p>

        {/* Country selector */}
        <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
          <div className="text-sm font-semibold text-foreground">Select your study destination</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tap a country to view an indicative overview. Requirements can change — always confirm with official sources.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {COUNTRIES.map((c) => (
              <a
                key={c.key}
                href={`#${c.key}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3 transition hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="relative h-9 w-9 overflow-hidden rounded-full border border-accent/25 bg-white">
                    <Image src={c.flag} alt={`${c.name} flag`} fill className="object-cover" />
                  </span>
                  <div className="text-sm font-semibold text-foreground">{c.name}</div>
                </div>
                <span className="text-sm font-semibold text-primary group-hover:opacity-90">View →</span>
              </a>
            ))}
          </div>
        </div>

        {/* Overviews */}
        <div className="mt-8 grid gap-4">
          {Object.entries(VISA_OVERVIEW).map(([key, v]) => (
            <div key={key} id={key} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-foreground">{v.title}</div>
              <div className="mt-3 grid gap-2">
                {v.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <div className="text-sm text-muted-foreground">{b}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-muted-foreground">
                Indicative only. Visa requirements and policies can change.
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-12 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
          <div className="text-sm font-semibold text-foreground">How we guide you through the visa process</div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <div key={p.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 text-xs font-semibold text-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{p.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-white p-6">
            <div className="text-sm font-semibold text-foreground">Disclaimer</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Visa approvals are decided solely by immigration authorities. We provide guidance and readiness support only and
              do not guarantee approvals.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Book Visa Consultation
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


// import Image from "next/image";
// import Link from "next/link";

// const COUNTRIES = [
//   { key: "uk", name: "United Kingdom", flag: "/images/flags/gb.png" },
//   { key: "canada", name: "Canada", flag: "/images/flags/canada.png" },
//   { key: "usa", name: "United States", flag: "/images/flags/united-states.png" },
//   { key: "ireland", name: "Ireland", flag: "/images/flags/ireland.png" },
//   { key: "germany", name: "Germany", flag: "/images/flags/germany.png" },
//   { key: "france", name: "France", flag: "/images/flags/france.png" },
//   { key: "italy", name: "Italy", flag: "/images/flags/italy.png" },
//   { key: "spain", name: "Spain", flag: "/images/flags/spain.png" },
// ];

// const VISA_OVERVIEW = {
//   uk: {
//     title: "United Kingdom — Student Visa",
//     bullets: [
//       "Visa category: Student Visa",
//       "Eligibility: Offer letter (CAS), English proficiency, financial evidence",
//       "Financials: Tuition balance + living cost funds",
//       "Work rights: Up to 20 hrs/week during term; full-time in holidays; post-study work available",
//       "Common refusals: Insufficient funds, credibility concerns, document inconsistencies",
//     ],
//   },
//   canada: {
//     title: "Canada — Study Permit",
//     bullets: [
//       "Visa category: Study Permit",
//       "Eligibility: Letter of Acceptance, financial capacity, ties to home country",
//       "Financials: Tuition + living expenses + return travel",
//       "Work rights: Up to 20 hrs/week during study; post-graduation work permit available",
//       "Common refusals: Weak travel history, insufficient funds, unclear study plan",
//     ],
//   },
//   usa: {
//     title: "United States — F-1 Student Visa",
//     bullets: [
//       "Visa category: F-1 Student Visa",
//       "Eligibility: I-20, SEVIS payment, interview",
//       "Financials: Proof of tuition + living expenses",
//       "Work rights: On-campus work; limited post-study options",
//       "Common refusals: Non-immigrant intent concerns, weak ties",
//     ],
//   },
//   ireland: {
//     title: "Ireland — Long-Stay Study Visa (D)",
//     bullets: [
//       "Visa category: Long-Stay Study Visa (D)",
//       "Eligibility: Admission, English proficiency (where required)",
//       "Financials: Proof of tuition + living funds",
//       "Work rights: Limited hours during term; post-study options may apply",
//       "Common refusals: Weak academic progression, insufficient funds",
//     ],
//   },
//   germany: {
//     title: "Germany — National Student Visa",
//     bullets: [
//       "Visa category: National Student Visa",
//       "Eligibility: University admission, language requirement (as applicable)",
//       "Financials: Blocked account or equivalent proof",
//       "Work rights: Limited number of workdays per year",
//       "Common refusals: Incomplete financial proof, unclear study relevance",
//     ],
//   },
//   france: {
//     title: "France — Long-Stay Student Visa",
//     bullets: [
//       "Visa category: Long-Stay Student Visa",
//       "Eligibility: Admission, Campus France process (where applicable)",
//       "Financials: Proof of living funds",
//       "Work rights: Limited part-time work",
//       "Common refusals: Campus France issues, insufficient funds",
//     ],
//   },
//   italy: {
//     title: "Italy — Type D Study Visa",
//     bullets: [
//       "Visa category: Type D Study Visa",
//       "Eligibility: University admission, accommodation, insurance",
//       "Financials: Proof of living expenses",
//       "Work rights: Limited hours during study",
//       "Common refusals: Incomplete paperwork, financial gaps",
//     ],
//   },
//   spain: {
//     title: "Spain — Long-Stay Student Visa",
//     bullets: [
//       "Visa category: Long-Stay Student Visa",
//       "Eligibility: Admission letter, accommodation, insurance",
//       "Financials: Proof of sufficient living funds",
//       "Work rights: Limited part-time work (with authorization)",
//       "Common refusals: Incomplete documentation, insufficient funds",
//     ],
//   },
// };

// const PROCESS = [
//   {
//     title: "Visa Route Assessment",
//     desc: "Confirm correct visa type and alignment with your admission route/offer; review risks and eligibility.",
//   },
//   {
//     title: "Document Guidance & Checklist",
//     desc: "Country-specific checklist, sponsorship/financial guidance, translation/format rules where applicable.",
//   },
//   {
//     title: "Financial & Compliance Review",
//     desc: "Proof of funds guidance, source of funds explanation, and timing alignment with immigration requirements.",
//   },
//   {
//     title: "Application Form Guidance",
//     desc: "Step-by-step form guidance and consistency checks to reduce avoidable errors.",
//   },
//   {
//     title: "Pre-Submission Review",
//     desc: "Final compliance review and readiness confirmation before you submit.",
//   },
// ];

// export default function VisaGuidancePage() {
//   return (
//     <main className="bg-white">
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//           <span className="h-2 w-2 rounded-full bg-accent" />
//           Education • Visa
//         </div>

//         <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
//           Visa Application Guidance
//         </h1>

//         <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
//           Aligned support based on your study route, destination country, and immigration requirements.
//         </p>

//         {/* Country selector */}
//         <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
//           <div className="text-sm font-semibold text-foreground">Select your study destination</div>
//           <p className="mt-2 text-sm text-muted-foreground">
//             Tap a country to view an indicative overview. Requirements can change — always confirm with official sources.
//           </p>

//           <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//             {COUNTRIES.map((c) => (
//               <a
//                 key={c.key}
//                 href={`#${c.key}`}
//                 className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3 transition hover:shadow-sm"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="relative h-9 w-9 overflow-hidden rounded-full border border-accent/25 bg-white">
//                     <Image src={c.flag} alt={`${c.name} flag`} fill className="object-cover" />
//                   </span>
//                   <div className="text-sm font-semibold text-foreground">{c.name}</div>
//                 </div>
//                 <span className="text-sm font-semibold text-primary group-hover:opacity-90">View →</span>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Overviews */}
//         <div className="mt-8 grid gap-4">
//           {Object.entries(VISA_OVERVIEW).map(([key, v]) => (
//             <div key={key} id={key} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//               <div className="text-sm font-semibold text-foreground">{v.title}</div>
//               <div className="mt-3 grid gap-2">
//                 {v.bullets.map((b) => (
//                   <div key={b} className="flex items-start gap-3">
//                     <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
//                     <div className="text-sm text-muted-foreground">{b}</div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-5 text-xs text-muted-foreground">
//                 Indicative only. Visa requirements and policies can change.
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Process */}
//         <div className="mt-12 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
//           <div className="text-sm font-semibold text-foreground">How we guide you through the visa process</div>

//           <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {PROCESS.map((p, i) => (
//               <div key={p.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//                 <div className="flex items-start gap-3">
//                   <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 text-xs font-semibold text-foreground">
//                     {i + 1}
//                   </span>
//                   <div>
//                     <div className="text-sm font-semibold text-foreground">{p.title}</div>
//                     <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 rounded-3xl border border-border bg-white p-6">
//             <div className="text-sm font-semibold text-foreground">Disclaimer</div>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Visa approvals are decided solely by immigration authorities. We provide guidance and readiness support only and
//               do not guarantee approvals.
//             </p>

//             <div className="mt-5 flex flex-wrap gap-3">
//               <Link
//                 href="/book"
//                 className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
//               >
//                 Book Visa Consultation
//               </Link>
//               <Link
//                 href="/education-travel"
//                 className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
//               >
//                 ← Back to Education
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
