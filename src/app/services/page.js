import Image from "next/image";
import Link from "next/link";

/**
 * ✅ Add these images to /public/images/services/
 * (Use Unsplash or your own. Names below match the code.)
 *
 * 1) /images/services/services-hero.jpg
 *    Search on Unsplash: "passport airport lounge", "travel consultation office", "visa stamp passport"
 *
 * 2) /images/services/process.jpg
 *    Search: "checking documents", "consultation desk", "business meeting documents"
 *
 * 3) /images/services/flights-wide.jpg
 *    Search: "airplane wing sunrise", "aircraft takeoff", "airport runway night"
 *
 * NOTE: Your existing pillar images stay the same:
 * /images/education.jpg /images/visa.jpg /images/pr-citizenship.jpg /images/travel.jpg /images/flights.jpg
 */

const pillars = [
  {
    title: "Education & Study Abroad",
    desc: "School selection, admission processing, visa support, and pre-departure preparation.",
    img: "/images/education.jpg",
    href: "/education-travel",
    tag: "Study • Admissions • Pre-departure",
    bullets: ["Course + institution fit", "Admissions processing", "Pre-departure briefing"],
  },
  {
    title: "Visa & Immigration",
    desc: "Transparent, compliant support for temporary visas, migration pathways, and applications.",
    img: "/images/visa.jpg",
    href: "/visa-immigration",
    tag: "Eligibility • Documents • Submission",
    bullets: ["Eligibility assessment", "Document checklist + review", "Submission guidance"],
  },
  {
    title: "Permanent Residence & Citizenship",
    desc: "Strategic pathways for long-term settlement and citizenship programs (where applicable).",
    img: "/images/pr-citizenship.jpg",
    href: "/book",
    tag: "PR • Investment • Settlement",
    bullets: ["Settlement planning", "Program guidance", "Step-by-step support"],
  },
  {
    title: "Business & Leisure Travel",
    desc: "Corporate and personal travel planning, visa assistance, and itinerary coordination.",
    img: "/images/travel.jpg",
    href: "/book",
    tag: "Planning • Advisory • Support",
    bullets: ["Itinerary planning", "Visa support (where needed)", "Travel advisory"],
  },
  {
    title: "Local & International Flight Booking",
    desc: "Reliable reservations for domestic and international flights with professional assistance.",
    img: "/images/flights.jpg",
    href: "/book",
    tag: "Competitive fares • Fast support",
    bullets: ["Fast booking support", "Flexible options", "Corporate + personal trips"],
  },
];

const process = [
  { title: "Tell us your goal", desc: "Share your destination, timeline, and what you’re trying to achieve." },
  { title: "We assess eligibility", desc: "We review requirements and advise the best route based on fit." },
  { title: "Documents + checklist", desc: "You get a clear checklist and guidance to reduce avoidable delays." },
  { title: "Support to next steps", desc: "Submission guidance and what to expect after a decision is issued." },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* HERO (like About page) */}
      <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Our Services
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Integrated international solutions under five pillars
            </h1>

            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              DiAnixSquare International Agency delivers professional, transparent, and compliant international mobility
              support designed to help individuals, families, and organizations move confidently across borders.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Book a Consultation
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                Send an Inquiry
              </Link>
            </div>

            <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Right image */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-zinc-50">
            <div className="relative h-[320px] w-full md:h-[380px]">
              <Image
                src="/images/services/services-hero.jpg"
                alt="DiAnixSquare services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>

            <div className="absolute bottom-5 left-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Clarity • Compliance • Client-first
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS GRID (more robust cards) */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-48">
                <Image src={p.img} alt={p.title} fill className="object-cover transition group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-base font-semibold text-white">{p.title}</div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/60 to-transparent transition group-hover:scale-x-100" />
              </div>

              <div className="p-6">
                <p className="text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 grid gap-2">
                  {p.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <div className="text-sm font-semibold text-foreground">{b}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-sm font-semibold text-primary">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS STRIP (with side image) */}
      <section className="border-t border-border bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: steps */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                How our service works
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                A clear process from first message to next steps
              </h2>

              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                We keep it structured and transparent so you always know what’s required and what comes next.
              </p>

              <div className="mt-8 grid gap-4">
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
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/images/services/process.jpg"
                  alt="Consultation process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              <div className="absolute bottom-5 left-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Checklist • Guidance • Support
                </div>
              </div>
            </div>
          </div>

          {/* Transparency block */}
          <div className="mt-10 rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="text-sm font-semibold text-foreground">Transparency & Compliance</div>
            <p className="mt-2 text-sm text-muted-foreground">
              We do not guarantee visa approvals. Decisions are made solely by relevant authorities and institutions.
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
                className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                Read Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FLIGHT BOOKING BANNER (wide image, aesthetic) */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-zinc-950">
          <div className="absolute inset-0">
            <Image
              src="/images/services/flights-wide.jpg"
              alt="Flight booking support"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          </div>

          <div className="relative p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Flight Booking Support
            </div>

            <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Get fast, professional help booking local and international flights
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-white/80">
              Competitive fares, flexible options, and quick support for individuals, families, and corporate trips.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Request a Quote
              </Link>

              <a
                href="https://wa.me/2349049279525"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


// import Image from "next/image";
// import Link from "next/link";

// const pillars = [
//   {
//     title: "Education & Study Abroad",
//     desc: "School selection, admission processing, visa support, and pre-departure preparation.",
//     img: "/images/education.jpg",
//     href: "/education-travel",
//     tag: "Study • Admissions • Pre-departure",
//   },
//   {
//     title: "Visa & Immigration",
//     desc: "Transparent, compliant support for temporary visas, migration pathways, and applications.",
//     img: "/images/visa.jpg",
//     href: "/visa-immigration",
//     tag: "Eligibility • Documents • Submission",
//   },
//   {
//     title: "Permanent Residence & Citizenship",
//     desc: "Strategic pathways for long-term settlement and citizenship programs (where applicable).",
//     img: "/images/pr-citizenship.jpg",
//     href: "/book",
//     tag: "PR • Investment • Settlement",
//   },
//   {
//     title: "Business & Leisure Travel",
//     desc: "Corporate and personal travel planning, visa assistance, and itinerary coordination.",
//     img: "/images/travel.jpg",
//     href: "/book",
//     tag: "Planning • Advisory • Support",
//   },
//   {
//     title: "Local & International Flight Booking",
//     desc: "Reliable reservations for domestic and international flights with professional assistance.",
//     img: "/images/flights.jpg",
//     href: "/book",
//     tag: "Competitive fares • Fast support",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main className="bg-white">
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         {/* Header pill */}
//         <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//           <span className="h-2 w-2 rounded-full bg-accent" />
//           Our Services
//         </div>

//         <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
//           Integrated international solutions under five pillars
//         </h1>

//         <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
//           DiAnixSquare International Agency delivers professional, transparent, and compliant international mobility
//           services designed to help individuals, families, and organizations move confidently across borders.
//         </p>

//         {/* Accent hairline */}
//         <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />

//         <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {pillars.map((p) => (
//             <Link
//               key={p.title}
//               href={p.href}
//               className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
//             >
//               <div className="relative h-44">
//                 <Image
//                   src={p.img}
//                   alt={p.title}
//                   fill
//                   className="object-cover transition group-hover:scale-[1.03]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

//                 {/* subtle accent line on hover */}
//                 <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/60 to-transparent transition group-hover:scale-x-100" />
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center justify-between gap-3">
//                   <div className="text-base font-semibold text-foreground">{p.title}</div>

//                   <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs text-foreground">
//                     {p.tag}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

//                 <div className="mt-4 text-sm font-semibold text-primary">
//                   Explore →
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="mt-12 rounded-3xl border border-border bg-zinc-50 p-8">
//           <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
//             <span className="h-2 w-2 rounded-full bg-accent" />
//             Not sure what you need?
//           </div>

//           <p className="mt-2 text-sm text-muted-foreground">
//             Book a consultation and we’ll recommend the best pathway based on your goals, timeline, and eligibility.
//           </p>

//           <div className="mt-5 flex flex-wrap gap-3">
//             <Link
//               href="/book"
//               className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
//             >
//               Book a Consultation
//             </Link>

//             <a
//               href="https://wa.me/2349049279525"
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/60"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
