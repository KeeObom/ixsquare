import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Integrity & Compliance",
      desc: "We operate ethically and follow verified, up-to-date guidance.",
    },
    {
      title: "Client-Centered Service",
      desc: "Your goals, budget, and timeline shape our recommendations.",
    },
    {
      title: "Transparency & Accountability",
      desc: "Clear steps, documentation guidance, and honest expectations.",
    },
    {
      title: "Professional Excellence",
      desc: "We deliver structured processes and responsive communication.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Header pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          About DiAnixSquare
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Global education, travel & immigration solutions you can trust
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          DiAnixSquare International Agency is a professional international education, travel, and immigration consulting
          firm based in Port Harcourt, Nigeria. We serve clients locally and internationally with reliable guidance for
          study, travel, relocation, and flight bookings.
        </p>

        {/* Accent hairline */}
        <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Mission/Vision */}
          <div className="rounded-3xl border border-border bg-white p-7">
            <div className="text-sm font-semibold text-foreground">Our Mission</div>
            <p className="mt-3 text-sm text-zinc-700">
              To provide ethical, transparent, and reliable international mobility solutions that empower individuals and
              organizations to achieve their global goals.
            </p>

            <div className="mt-7 text-sm font-semibold text-foreground">Our Vision</div>
            <p className="mt-3 text-sm text-zinc-700">
              To become a trusted global brand in education, travel, and immigration consulting.
            </p>

            <div className="mt-7 rounded-2xl border border-accent/25 bg-zinc-50 p-4 text-sm text-zinc-700">
              <div className="font-semibold text-foreground">Trust & Transparency</div>
              <p className="mt-1">
                We provide advisory and support services only. Outcomes are determined solely by relevant authorities and
                institutions.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="rounded-3xl border border-border bg-zinc-50 p-7">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold text-foreground">Our Values</div>
              <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-foreground">
                Trust • Transparency • Global Access
              </span>
            </div>

            <div className="mt-4 grid gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-white p-5 transition hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{v.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-white p-5">
              <div className="text-sm font-semibold text-foreground">Accreditation & Partnerships</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Relevant licenses, affiliations, and institutional partnerships will be displayed where applicable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
          >
            Book a Consultation
          </Link>

          <a
            href="https://wa.me/2349049279525"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}


// import Link from "next/link";

// export default function AboutPage() {
//   const values = [
//     { title: "Integrity & Compliance", desc: "We operate ethically and follow verified, up-to-date guidance." },
//     { title: "Client-Centered Service", desc: "Your goals, budget, and timeline shape our recommendations." },
//     { title: "Transparency & Accountability", desc: "Clear steps, documentation guidance, and honest expectations." },
//     { title: "Professional Excellence", desc: "We deliver structured processes and responsive communication." },
//   ];

//   return (
//     <main className="bg-white">
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-zinc-700">
//           <span className="h-2 w-2 rounded-full bg-zinc-900" />
//           About DiAnixSquare
//         </div>

//         <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
//           Global education, travel & immigration solutions you can trust
//         </h1>

//         <p className="mt-4 max-w-3xl text-lg text-zinc-600">
//           DiAnixSquare International Agency is a professional international education, travel, and immigration consulting
//           firm based in Port Harcourt, Nigeria. We serve clients locally and internationally with reliable guidance for
//           study, travel, relocation, and flight bookings.
//         </p>

//         <div className="mt-10 grid gap-6 lg:grid-cols-2">
//           <div className="rounded-3xl border p-7">
//             <div className="text-sm font-semibold text-zinc-900">Our Mission</div>
//             <p className="mt-3 text-sm text-zinc-700">
//               To provide ethical, transparent, and reliable international mobility solutions that empower individuals and
//               organizations to achieve their global goals.
//             </p>

//             <div className="mt-7 text-sm font-semibold text-zinc-900">Our Vision</div>
//             <p className="mt-3 text-sm text-zinc-700">
//               To become a trusted global brand in education, travel, and immigration consulting.
//             </p>

//             <div className="mt-7 rounded-2xl border bg-zinc-50 p-4 text-sm text-zinc-700">
//               <div className="font-semibold text-zinc-900">Trust & Transparency</div>
//               <p className="mt-1">
//                 We provide advisory and support services only. Outcomes are determined solely by relevant authorities and
//                 institutions.
//               </p>
//             </div>
//           </div>

//           <div className="rounded-3xl border bg-zinc-50 p-7">
//             <div className="text-sm font-semibold text-zinc-900">Our Values</div>
//             <div className="mt-4 grid gap-4">
//               {values.map((v) => (
//                 <div key={v.title} className="rounded-2xl border bg-white p-5">
//                   <div className="text-sm font-semibold text-zinc-900">{v.title}</div>
//                   <p className="mt-2 text-sm text-zinc-600">{v.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 rounded-2xl border bg-white p-5">
//               <div className="text-sm font-semibold text-zinc-900">Accreditation & Partnerships</div>
//               <p className="mt-2 text-sm text-zinc-600">
//                 Relevant licenses, affiliations, and institutional partnerships will be displayed where applicable.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 flex flex-wrap gap-3">
//           <Link href="/book" className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white">
//             Book a Consultation
//           </Link>
//           <a
//             href="https://wa.me/2349049279525"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-zinc-900"
//           >
//             Chat on WhatsApp
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }
