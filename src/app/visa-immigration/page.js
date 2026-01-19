import Link from "next/link";

export default function VisaImmigrationPage() {
  const solutions = [
    "Study visas",
    "Tourist and visitor visas",
    "Business visas",
    "Work and relocation support (where applicable)",
    "Permanent residence applications",
    "Citizenship by Investment programs",
  ];

  const process = [
    "Initial eligibility assessment",
    "Country and visa pathway recommendation",
    "Document preparation and review",
    "Application submission support",
    "Pre-departure and post-decision guidance",
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Header pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Service Detail
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Visa & Immigration Services
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Transparent and compliant visa and immigration consulting to help you navigate complex requirements with confidence.
        </p>

        {/* Accent hairline */}
        <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Solutions */}
          <div className="rounded-3xl border border-border bg-white p-7">
            <div className="text-sm font-semibold text-foreground">
              Our immigration solutions include
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {solutions.map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-sm text-foreground">
              <div className="font-semibold">Best practice</div>
              <p className="mt-1 text-muted-foreground">
                We focus on eligibility clarity, documentation quality, and accurate timelines to reduce avoidable errors.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="rounded-3xl border border-border bg-zinc-50 p-7">
            <div className="text-sm font-semibold text-foreground">Our process</div>

            <ol className="mt-4 space-y-3 text-sm text-zinc-700">
              {process.map((x, i) => (
                <li key={x} className="flex gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl border border-accent/35 bg-white text-xs font-semibold text-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1">{x}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-border bg-white p-4 text-sm text-zinc-700">
              <div className="font-semibold text-foreground">Transparency & Compliance</div>
              <p className="mt-1 text-muted-foreground">
                We do not guarantee visa approvals. Applications are assessed based on eligibility, documentation,
                and decisions by relevant authorities.
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-3">
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
            Back to Services
          </Link>
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
//         <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-zinc-700">
//           <span className="h-2 w-2 rounded-full bg-zinc-900" />
//           Service Detail
//         </div>

//         <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
//           Visa & Immigration Services
//         </h1>
//         <p className="mt-4 max-w-3xl text-lg text-zinc-600">
//           Transparent and compliant visa and immigration consulting to help you navigate complex requirements with confidence.
//         </p>

//         <div className="mt-10 grid gap-6 lg:grid-cols-2">
//           <div className="rounded-3xl border p-7">
//             <div className="text-sm font-semibold text-zinc-900">Our immigration solutions include</div>
//             <ul className="mt-4 space-y-2 text-sm text-zinc-700">
//               {solutions.map((x) => (
//                 <li key={x} className="flex gap-2">
//                   <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
//                   <span>{x}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="rounded-3xl border bg-zinc-50 p-7">
//             <div className="text-sm font-semibold text-zinc-900">Our process</div>
//             <ol className="mt-4 space-y-2 text-sm text-zinc-700">
//               {process.map((x, i) => (
//                 <li key={x} className="flex gap-3">
//                   <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white text-xs font-semibold text-zinc-900 border">
//                     {i + 1}
//                   </span>
//                   <span className="pt-1">{x}</span>
//                 </li>
//               ))}
//             </ol>

//             <div className="mt-6 rounded-2xl border bg-white p-4 text-sm text-zinc-700">
//               <div className="font-semibold text-zinc-900">Transparency & Compliance</div>
//               <p className="mt-1">
//                 We do not guarantee visa approvals. Applications are assessed based on eligibility, documentation,
//                 and decisions by relevant authorities.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 flex flex-wrap gap-3">
//           <Link href="/book" className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white">
//             Book a Consultation
//           </Link>
//           <Link href="/services" className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-zinc-900">
//             Back to Services
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }
