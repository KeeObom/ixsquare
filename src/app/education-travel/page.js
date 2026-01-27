import Image from "next/image";
import Link from "next/link";

const countries = [
  { key: "uk", name: "United Kingdom", flag: "/images/flags/gb.png" },
  { key: "ireland", name: "Ireland", flag: "/images/flags/ireland.png" },
  { key: "canada", name: "Canada", flag: "/images/flags/canada.png" },
  { key: "usa", name: "United States", flag: "/images/flags/united-states.png" },
  { key: "germany", name: "Germany", flag: "/images/flags/germany.png" },
  { key: "france", name: "France", flag: "/images/flags/france.png" },
  { key: "italy", name: "Italy", flag: "/images/flags/italy.png" },
  { key: "spain", name: "Spain", flag: "/images/flags/spain.png" },
];

const education = [
  {
    title: "Course & institution selection",
    desc: "Use our search tool to explore programs by country, degree level, and course/field.",
    href: "/education-travel/search",
    cta: "Open search tool →",
  },
  {
    title: "Admission processing",
    desc: "Structured guidance + document readiness support to reduce errors and delays.",
    href: "/education-travel/admissions",
    cta: "View admission process →",
  },
  {
    title: "Visa application guidance",
    desc: "Country-aligned support based on your study route and immigration requirements.",
    href: "/education-travel/visa",
    cta: "Explore visa guidance →",
  },
  {
    title: "Scholarship & funding support",
    desc: "Scholarships, bursaries, and trusted loan guidance (where applicable).",
    href: "/education-travel/scholarships",
    cta: "Explore funding options →",
  },
  {
    title: "Pre-departure briefing",
    desc: "Checklists for travel planning, settlement readiness, and timelines.",
    href: "/book",
    cta: "Book a consultation →",
  },
];

export default function EducationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/edu/education_hero_gpt.png"
            alt="Study abroad education support"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-white" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Service Detail • Education
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Study Abroad & Education Placement
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Program matching, admissions guidance, visa alignment, scholarships (where applicable), and pre-departure support.
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

            <Link
              href="/education-travel/search"
              className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Study Search Tool
            </Link>
          </div>

          <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              What we help with
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Clear pathways from program discovery to application readiness
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Start with our Study Search Tool or explore the service pages below.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {education.map((x) => (
                <Link
                  key={x.title}
                  href={x.href}
                  className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground">{x.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                      <div className="mt-4 text-sm font-semibold text-primary">{x.cta}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Countries */}
            <div className="mt-10 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">Pick a destination</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Click a country to explore available universities, degrees, and intake seasons.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {countries.map((c) => (
                  <Link
                    key={c.key}
                    href={`/education-travel/${c.key}`}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3 transition hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="relative h-8 w-8 overflow-hidden rounded-full border border-accent/25 bg-white">
                        <Image src={c.flag} alt={`${c.name} flag`} fill className="object-cover" />
                      </span>
                      <div className="text-sm font-semibold text-foreground">{c.name}</div>
                    </div>

                    <span className="text-sm font-semibold text-primary transition group-hover:opacity-90">
                      Explore →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/education-travel/search"
                  className="rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                >
                  Use Study Search Tool
                </Link>
                <Link
                  href="/book"
                  className="rounded-2xl border border-accent/60 bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[340px] w-full">
                <Image src="/images/edu/campus.jpg" alt="Campus admissions support" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Admissions-ready support
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Structured checklists, document review, and realistic timelines to reduce avoidable errors.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/education-travel/search"
                    className="rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                  >
                    Start searching
                  </Link>
                  <a
                    href="https://wa.me/2349049279525"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-accent/60 bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


// import Image from "next/image";
// import Link from "next/link";

// const countries = [
//   { key: "uk", name: "United Kingdom", flag: "/images/flags/gb.png" },
//   { key: "ireland", name: "Ireland", flag: "/images/flags/ireland.png" },
//   { key: "canada", name: "Canada", flag: "/images/flags/canada.png" },
//   { key: "usa", name: "United States", flag: "/images/flags/united-states.png" },
//   { key: "germany", name: "Germany", flag: "/images/flags/germany.png" },
//   { key: "france", name: "France", flag: "/images/flags/france.png" },
//   { key: "italy", name: "Italy", flag: "/images/flags/italy.png" },
//   { key: "spain", name: "Spain", flag: "/images/flags/spain.png" },
//   // add more...
// ];

// const education = [
//   { title: "Course & institution selection", desc: "We match your profile, goals, and budget with suitable options." },
//   { title: "Admission processing", desc: "Application guidance + document readiness to reduce avoidable delays." },
//   { title: "Visa application guidance", desc: "Aligned support for your study route and destination requirements." },
//   { title: "Scholarship & funding support", desc: "Guidance on scholarships, eligibility checks, and personal statement support (where applicable)." },
//   { title: "Pre-departure briefing", desc: "Clear checklist for travel, settlement readiness, and timelines." },
// ];

// export default function EducationPage() {
//   return (
//     <main className="bg-white">
//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/images/edu/education_hero_gpt.png"
//             alt="Study abroad education support"
//             fill
//             priority
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-white" />
//           <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/35 blur-3xl" />
//           <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
//         </div>

//         <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
//           <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
//             <span className="h-2 w-2 rounded-full bg-accent" />
//             Service Detail • Education
//           </div>

//           <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
//             Study Abroad & Education Placement
//           </h1>

//           <p className="mt-4 max-w-2xl text-lg text-white/85">
//             Program matching, admissions guidance, scholarships (where applicable), and pre-departure support.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <Link
//               href="/book"
//               className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
//             >
//               Book a Consultation
//             </Link>

//             <Link
//               href="/services"
//               className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
//             >
//               Back to Services
//             </Link>
//           </div>

//           <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
//           {/* Left */}
//           <div className="lg:col-span-7">
//             <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//               <span className="h-2 w-2 rounded-full bg-accent" />
//               What we help with
//             </div>

//             <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
//               Find the right country, school, and program pathway
//             </h2>

//             <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
//               Select a destination to explore available universities by level (Undergrad/Masters/PhD) and intake season.
//             </p>

//             <div className="mt-7 grid gap-4 md:grid-cols-2">
//               {education.map((x) => (
//                 <div
//                   key={x.title}
//                   className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
//                 >
//                   <div className="flex items-start gap-3">
//                     <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
//                     <div>
//                       <div className="text-sm font-semibold text-foreground">{x.title}</div>
//                       <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Countries */}
//             <div className="mt-10 rounded-3xl border border-border bg-zinc-50 p-6">
//               <div className="text-sm font-semibold text-foreground">Pick a destination</div>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 Click a country to explore universities, degrees, and intake seasons.
//               </p>

//               <div className="mt-5 grid gap-3 sm:grid-cols-2">
//                 {countries.map((c) => (
//                   <Link
//                     key={c.key}
//                     href={`/education-travel/${c.key}`}
//                     className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3 transition hover:shadow-sm"
//                   >
//                     <div className="flex items-center gap-3">
//                       <span className="relative h-8 w-8 overflow-hidden rounded-full border border-accent/25 bg-white">
//                         <Image src={c.flag} alt={`${c.name} flag`} fill className="object-cover" />
//                       </span>
//                       <div className="text-sm font-semibold text-foreground">{c.name}</div>
//                     </div>

//                     <span className="text-sm font-semibold text-primary transition group-hover:opacity-90">
//                       Explore →
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right visual */}
//           <div className="lg:col-span-5">
//             <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
//               <div className="relative h-[340px] w-full">
//                 <Image src="/images/edu/campus.jpg" alt="Campus admissions support" fill className="object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
//               </div>
//               <div className="p-6">
//                 <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
//                   <span className="h-2 w-2 rounded-full bg-accent" />
//                   Admissions-ready support
//                 </div>
//                 <p className="mt-2 text-sm text-muted-foreground">
//                   Structured checklists, document review, and realistic timelines to reduce avoidable errors.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

