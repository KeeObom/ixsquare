import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Education & Study Abroad",
    desc: "School selection, admission processing, visa support, and pre-departure preparation.",
    img: "/images/education.jpg",
    href: "/education-travel",
    tag: "Study • Admissions • Pre-departure",
  },
  {
    title: "Visa & Immigration",
    desc: "Transparent, compliant support for temporary visas, migration pathways, and applications.",
    img: "/images/visa.jpg",
    href: "/visa-immigration",
    tag: "Eligibility • Documents • Submission",
  },
  {
    title: "Permanent Residence & Citizenship",
    desc: "Strategic pathways for long-term settlement and citizenship programs (where applicable).",
    img: "/images/pr-citizenship.jpg",
    href: "/book",
    tag: "PR • Investment • Settlement",
  },
  {
    title: "Business & Leisure Travel",
    desc: "Corporate and personal travel planning, visa assistance, and itinerary coordination.",
    img: "/images/travel.jpg",
    href: "/book",
    tag: "Planning • Advisory • Support",
  },
  {
    title: "Local & International Flight Booking",
    desc: "Reliable reservations for domestic and international flights with professional assistance.",
    img: "/images/flights.jpg",
    href: "/book",
    tag: "Competitive fares • Fast support",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Header pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Our Services
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Integrated international solutions under five pillars
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          DiAnixSquare International Agency delivers professional, transparent, and compliant international mobility
          services designed to help individuals, families, and organizations move confidently across borders.
        </p>

        {/* Accent hairline */}
        <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* subtle accent line on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/60 to-transparent transition group-hover:scale-x-100" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-base font-semibold text-foreground">{p.title}</div>

                  <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs text-foreground">
                    {p.tag}
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 text-sm font-semibold text-primary">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-zinc-50 p-8">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Not sure what you need?
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            Book a consultation and we’ll recommend the best pathway based on your goals, timeline, and eligibility.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
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
              className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/60"
            >
              Chat on WhatsApp
            </a>
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
//         <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-zinc-700">
//           <span className="h-2 w-2 rounded-full bg-zinc-900" />
//           Our Services
//         </div>

//         <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
//           Integrated international solutions under five pillars
//         </h1>
//         <p className="mt-4 max-w-3xl text-lg text-zinc-600">
//           DiAnixSquare International Agency delivers professional, transparent, and compliant international mobility
//           services designed to help individuals, families, and organizations move confidently across borders.
//         </p>

//         <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {pillars.map((p) => (
//             <Link
//               key={p.title}
//               href={p.href}
//               className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md"
//             >
//               <div className="relative h-44">
//                 <Image src={p.img} alt={p.title} fill className="object-cover transition group-hover:scale-[1.03]" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 via-transparent to-transparent" />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center justify-between gap-3">
//                   <div className="text-base font-semibold text-zinc-900">{p.title}</div>
//                   <span className="rounded-full border bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
//                     {p.tag}
//                   </span>
//                 </div>
//                 <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>
//                 <div className="mt-4 text-sm font-semibold text-zinc-900">Explore →</div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="mt-12 rounded-3xl border bg-zinc-50 p-8">
//           <div className="text-sm font-semibold text-zinc-900">Not sure what you need?</div>
//           <p className="mt-2 text-sm text-zinc-600">
//             Book a consultation and we’ll recommend the best pathway based on your goals, timeline, and eligibility.
//           </p>
//           <div className="mt-5 flex flex-wrap gap-3">
//             <Link href="/book" className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white">
//               Book a Consultation
//             </Link>
//             <a
//               href="https://wa.me/2349049279525"
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-zinc-900"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
