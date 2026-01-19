import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Study Abroad & Education Placement",
    desc: "Universities, colleges, and pathway programs worldwide.",
    img: "/images/education.jpg",
    href: "/services",
  },
  {
    title: "Visa & Immigration Services",
    desc: "Transparent, compliant, and up-to-date guidance.",
    img: "/images/visa.jpg",
    href: "/services/visa-immigration",
  },
  {
    title: "Permanent Residence & Citizenship",
    desc: "Structured pathways for settlement and investment migration.",
    img: "/images/pr-citizenship.jpg",
    href: "/services",
  },
  {
    title: "Business & Leisure Travel",
    desc: "Corporate and personal travel support end-to-end.",
    img: "/images/travel.jpg",
    href: "/services",
  },
  {
    title: "Local & International Flight Booking",
    desc: "Competitive fares with professional assistance.",
    img: "/images/flights.jpg",
    href: "/services",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-zinc-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="DiAnixSquare hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/40 to-white" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 md:pb-16 md:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            Global Education • Travel • Immigration
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Move Beyond Borders With Confidence
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Study, travel, invest, relocate, and fly globally with expert guidance every step of the way.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm"
            >
              Book a Consultation
            </Link>

            <a
              href="https://wa.me/2349049279525"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Trusted global solutions under five pillars
            </h2>
            <p className="mt-2 max-w-2xl text-zinc-600">
              Clarity, compliance, and client-focused support for individuals, families, and organizations.
            </p>
          </div>
          <Link href="/services" className="hidden text-sm font-semibold text-zinc-900 md:block">
            View all services →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44">
                <Image src={s.img} alt={s.title} fill className="object-cover transition group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-base font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
                <div className="mt-4 text-sm font-semibold text-zinc-900">Learn more →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Why Choose DiAnixSquare</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Proven expertise across education, travel, and migration sectors",
              "Ethical and compliant processes",
              "Personalized consultations and case-by-case assessment",
              "Clear documentation guidance and timelines",
              "Responsive communication via WhatsApp and call center",
            ].map((x) => (
              <div key={x} className="rounded-2xl border bg-white p-5">
                <div className="text-sm font-semibold">{x}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border bg-white p-6 md:p-8">
            <div className="text-sm font-semibold">Transparency & Compliance</div>
            <p className="mt-2 text-sm text-zinc-600">
              We do not guarantee visa approvals. Decisions are made solely by relevant authorities and institutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.js file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
