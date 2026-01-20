import Image from "next/image";
import Link from "next/link";

/**
 * ✅ Images to add (or reuse)
 * Put these in /public/images/visa/
 *
 * Required:
 * - /images/visa/visa-hero.jpg   (nice premium hero: passport + airport / consultation)
 * - /images/visa/visa-side.jpg   (side card: documents / desk / pen / laptop)
 *
 * Optional (you can reuse your existing):
 * - /images/visa.jpg (already in your project)
 *
 * Unsplash search ideas:
 * - "passport stamp visa"
 * - "airport lounge passport"
 * - "consultation documents"
 * - "immigration office documents"
 */

const solutions = [
  { title: "Study visas", desc: "Guidance for study visa pathways and requirements, aligned with your program and destination." },
  { title: "Tourist & visitor visas", desc: "Support for short-stay travel applications with clear documentation and timelines." },
  { title: "Business visas", desc: "Assistance for business travel routes, invitation documents, and application readiness." },
  { title: "Work & relocation support", desc: "Where applicable, we advise on relocation steps and document preparation." },
  { title: "Permanent residence applications", desc: "Structured planning and documentation guidance for long-term settlement pathways." },
  { title: "Citizenship by Investment", desc: "Program guidance for qualifying investment-based migration and settlement routes." },
];

const process = [
  { title: "Eligibility assessment", desc: "We review your profile, goal, destination, and timeline to identify realistic options." },
  { title: "Pathway recommendation", desc: "We recommend the best route based on requirements, fit, and compliant guidance." },
  { title: "Document checklist + review", desc: "You receive a clear checklist; we help reduce avoidable gaps and inconsistencies." },
  { title: "Submission support", desc: "We guide the preparation process and next steps (where applicable)." },
  { title: "Pre-departure & post-decision guidance", desc: "Briefing, travel planning support, and what to do after a decision is issued." },
];

const trustPoints = [
  "We do not guarantee approvals",
  "We do not influence government decisions",
  "We focus on clarity, compliance, and documentation quality",
  "We communicate timelines and expectations upfront",
];

export default function VisaImmigrationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/visa/visa-hero.jpg"
            alt="Visa & Immigration services"
            fill
            priority
            className="object-cover"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-white" />

          {/* brand glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Service Detail • Visa & Immigration
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Visa & Immigration Services
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Transparent, compliant guidance to help you navigate requirements with confidence
            from eligibility to documentation and next steps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
            >
              Book a Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Back to Services
            </Link>
          </div>

          <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: Solutions */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              What we support
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Clear pathways + strong documentation support
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Our work focuses on eligibility clarity, document readiness, and realistic timelines.
              This reduces avoidable mistakes and helps you approach the process with confidence.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {solutions.map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{s.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Best practice card */}
            <div className="mt-8 rounded-3xl border border-accent/25 bg-accent/10 p-6">
              <div className="text-sm font-semibold text-foreground">Best practice</div>
              <p className="mt-2 text-sm text-muted-foreground">
                We help you prepare a clean, consistent application story. That means: correct documents,
                clear timelines, and realistic expectations.
              </p>
            </div>
          </div>

          {/* RIGHT: Side visual + trust */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-zinc-50">
              <div className="relative h-[280px] w-full">
                <Image
                  src="/images/visa/visa-side.jpg"
                  alt="Document review and consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Transparency & Compliance
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  We provide advisory and support services only. Decisions are made solely by relevant authorities.
                </p>

                <div className="mt-4 grid gap-2">
                  {trustPoints.map((t) => (
                    <div key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <div className="text-sm font-semibold text-foreground">{t}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/disclaimer"
                    className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
                  >
                    Read Disclaimer
                  </Link>
                  <Link
                    href="/book"
                    className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                  >
                    Start with a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROCESS (clean steps with accent) */}
        <div className="mt-14 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Our process
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                Structured support from eligibility to next steps
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                A simple, transparent workflow that keeps you informed at every stage.
              </p>
            </div>

            <Link
              href="/book"
              className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((s, i) => (
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

          {/* final CTA strip */}
          <div className="mt-10 rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="text-sm font-semibold text-foreground">Ready to begin?</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your destination, timeline, and goal. We’ll advise the most realistic pathway and documentation needs.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                View all services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL: small reuse of existing visa.jpg as a subtle footer band */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-zinc-950">
          <div className="absolute inset-0">
            <Image
              src="/images/visa.jpg"
              alt="Visa support"
              fill
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          </div>

          <div className="relative p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Compliance-first guidance
            </div>

            <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Strong documentation + honest expectations
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-white/80">
              We focus on what you can control: eligibility clarity, a clean checklist, and a structured approach.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Book a Consultation
              </Link>
              <Link
                href="/disclaimer"
                className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Read Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


// import Link from "next/link";

// export default function VisaImmigrationPage() {
//   const solutions = [
//     "Study visas",
//     "Tourist and visitor visas",
//     "Business visas",
//     "Work and relocation support (where applicable)",
//     "Permanent residence applications",
//     "Citizenship by Investment programs",
//   ];

//   const process = [
//     "Initial eligibility assessment",
//     "Country and visa pathway recommendation",
//     "Document preparation and review",
//     "Application submission support",
//     "Pre-departure and post-decision guidance",
//   ];

//   return (
//     <main className="bg-white">
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         {/* Header pill */}
//         <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//           <span className="h-2 w-2 rounded-full bg-accent" />
//           Service Detail
//         </div>

//         <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
//           Visa & Immigration Services
//         </h1>

//         <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
//           Transparent and compliant visa and immigration consulting to help you navigate complex requirements with confidence.
//         </p>

//         {/* Accent hairline */}
//         <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />

//         <div className="mt-10 grid gap-6 lg:grid-cols-2">
//           {/* Solutions */}
//           <div className="rounded-3xl border border-border bg-white p-7">
//             <div className="text-sm font-semibold text-foreground">
//               Our immigration solutions include
//             </div>

//             <ul className="mt-4 space-y-2 text-sm text-zinc-700">
//               {solutions.map((x) => (
//                 <li key={x} className="flex gap-3">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
//                   <span>{x}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-7 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-sm text-foreground">
//               <div className="font-semibold">Best practice</div>
//               <p className="mt-1 text-muted-foreground">
//                 We focus on eligibility clarity, documentation quality, and accurate timelines to reduce avoidable errors.
//               </p>
//             </div>
//           </div>

//           {/* Process */}
//           <div className="rounded-3xl border border-border bg-zinc-50 p-7">
//             <div className="text-sm font-semibold text-foreground">Our process</div>

//             <ol className="mt-4 space-y-3 text-sm text-zinc-700">
//               {process.map((x, i) => (
//                 <li key={x} className="flex gap-3">
//                   <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl border border-accent/35 bg-white text-xs font-semibold text-foreground">
//                     {i + 1}
//                   </span>
//                   <span className="pt-1">{x}</span>
//                 </li>
//               ))}
//             </ol>

//             <div className="mt-6 rounded-2xl border border-border bg-white p-4 text-sm text-zinc-700">
//               <div className="font-semibold text-foreground">Transparency & Compliance</div>
//               <p className="mt-1 text-muted-foreground">
//                 We do not guarantee visa approvals. Applications are assessed based on eligibility, documentation,
//                 and decisions by relevant authorities.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTAs */}
//         <div className="mt-12 flex flex-wrap gap-3">
//           <Link
//             href="/book"
//             className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
//           >
//             Book a Consultation
//           </Link>

//           <Link
//             href="/services"
//             className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
//           >
//             Back to Services
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

