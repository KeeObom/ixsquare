import Image from "next/image";
import Link from "next/link";

/**
 * ✅ Images to add (recommended)
 * Put these in /public/images/edu/
 *
 * Required:
 * - /images/edu/edu-hero.jpg     (students / campus / modern study vibe)
 * - /images/edu/travel-hero.jpg  (airport / plane window / premium travel vibe)
 * - /images/edu/campus.jpg       (campus or library / admission vibe)
 * - /images/edu/itinerary.jpg    (travel planning / map / desk)
 *
 * Optional (nice-to-have):
 * - /images/edu/dest-uk.jpg
 * - /images/edu/dest-canada.jpg
 * - /images/edu/dest-usa.jpg
 *
 * Unsplash search ideas:
 * - "international students campus"
 * - "university library students"
 * - "airport terminal travel"
 * - "passport boarding pass"
 * - "travel itinerary planning"
 */

const countries = [
  "UK", "Ireland", "Canada", "USA", "Belize", "Hungary", "Malta", "Germany", "Italy",
  "Portugal", "Spain", "Luxembourg", "Greece", "Switzerland", "Finland", "Denmark",
  "Cyprus", "Brazil", "Russia", "South Africa", "France", "India",
];

const education = [
  { title: "Course & institution selection", desc: "We match your profile, goals, and budget with suitable options." },
  { title: "Admission processing", desc: "Application guidance and document readiness to reduce avoidable delays." },
  { title: "Visa application guidance", desc: "Aligned support for your study route and destination requirements." },
  { title: "Travel planning & flight booking", desc: "Travel support to make your move smooth and coordinated." },
  { title: "Pre-departure briefing", desc: "A clear checklist for settlement readiness, timelines, and next steps." },
  {
    title: "Scholarship & Funding Support",
    desc: "Scholarship discovery guidance, eligibility checks, document review, and strong personal statement support (where applicable).",
  },
  
];

const travel = [
  { title: "Business travel coordination", desc: "Corporate travel planning with reliable, responsive support." },
  { title: "Leisure travel planning", desc: "Vacation planning with itinerary coordination and advisory." },
  { title: "Visa assistance", desc: "Where applicable, we help you understand requirements and prepare documents." },
  { title: "Local & international flight booking", desc: "Fast support + competitive fares with professional assistance." },
  { title: "Travel advisory & support", desc: "Guidance before, during, and after travel when you need it." },
];

const howItWorks = [
  { title: "Tell us your goal", desc: "Study, visit, travel, or relocate — with your budget and timeline." },
  { title: "We recommend the best fit", desc: "Destination + pathway suggestion based on requirements and realism." },
  { title: "Prepare documents", desc: "Checklist + review for clean, consistent documentation." },
  { title: "Plan & execute", desc: "Admission/visa guidance + flights + travel coordination (as needed)." },
];

const featuredDestinations = [
  { name: "United Kingdom", img: "/images/edu/dest-uk.jpg" },
  { name: "Canada", img: "/images/edu/dest-canada.jpg" },
  { name: "USA", img: "/images/edu/dest-usa.jpg" },
];

export default function EducationTravelPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            // src="/images/edu/edu-hero.jpg"
            // src="/images/edu/education_and_travel.jpeg"
            src="/images/edu/education_hero_gpt.png"
            alt="Education & Travel"
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
            Service Detail • Education & Travel
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Education & Travel
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Scholarship support, Study destination planning for students, plus end-to-end travel support for professionals and tourists.
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

      {/* MAIN: Education + Travel with visuals */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: Education */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Education support
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Match the right program to your goals and budget
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              We help you plan a realistic study route: school selection, admissions, documentation, and travel support.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {education.map((x) => (
                <div key={x.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{x.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Destinations chips */}
            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">Study destinations</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Subject to program availability and admission requirements.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-accent/30 bg-white px-3 py-1 text-xs text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-accent/25 bg-accent/10 p-6">
              <div className="text-sm font-semibold text-foreground">Quick note</div>
              <p className="mt-2 text-sm text-muted-foreground">
                We align your academic background, career goals, and budget with suitable institutions and pathways — and we can also
                guide scholarship/funding steps where applicable.
              </p>
            </div>
          </div>

          {/* RIGHT: Education visual (sticky-ish card look) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/edu/campus.jpg"
                  alt="Campus and admissions support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Admissions-ready support
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  We help you stay organized with clear checklists, document review, and realistic timelines.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                  >
                    Start a Consultation
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
              </div>
            </div>
          </div>
        </div>

        {/* TRAVEL BLOCK (reversed visual layout) */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: Travel visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/edu/travel-hero.jpg"
                  alt="Travel planning and airport support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Travel support
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  From itinerary planning to flight booking, we help you travel with less stress and better coordination.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Travel services */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Business & leisure travel
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Corporate + personal travel planning, done professionally
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              We coordinate travel for individuals and organizations, with responsive support and reliable booking assistance.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {travel.map((x) => (
                <div key={x.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{x.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Small itinerary card */}
            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="grid gap-4 md:grid-cols-[120px_1fr] md:items-center">
                <div className="relative h-28 w-full overflow-hidden rounded-2xl border border-border bg-white md:h-24">
                  <Image src="/images/edu/itinerary.jpg" alt="Itinerary planning" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Need help choosing a pathway?</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We’ll assess your profile and recommend the best option based on your goals and budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
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
          </div>
        </div>

        {/* FEATURED DESTINATIONS (3 big images, not squeezed) */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Popular destinations
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Explore popular study & travel routes
              </h2>
            
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredDestinations.map((d) => (
              <div
                key={d.name}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-52">
                  <Image src={d.img} alt={d.name} fill className="object-cover transition group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {d.name}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-foreground">Guidance • Planning • Support</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Program selection, document readiness, and travel coordination based on your timeline.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS (simple + clean) */}
        <div className="mt-16 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            How it works
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
            A clear path from planning to action
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Transparent steps, realistic timelines, and responsive communication.
          </p> */}

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                How it works
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                A clear path from planning to action
              </h3>

              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Transparent steps, realistic timelines, and responsive communication.
              </p>
            </div>

            {/* Right: Ambassador image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 max-w-xs w-full overflow-hidden rounded-3xl border border-border shadow-sm">
                <Image
                  src="/images/ambassador.jpg"
                  alt="Student preparing for international study"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>


          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
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

          <div className="mt-10 rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="text-sm font-semibold text-foreground">Ready to start?</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us your destination, timeline, and goals — we’ll recommend the best pathway and next steps.
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
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


// import Link from "next/link";

// export default function EducationTravelPage() {
//   const countries = [
//     "UK",
//     "Ireland",
//     "Canada",
//     "USA",
//     "Belize",
//     "Hungary",
//     "Malta",
//     "Germany",
//     "Italy",
//     "Portugal",
//     "Spain",
//     "Luxembourg",
//     "Greece",
//     "Switzerland",
//     "Finland",
//     "Denmark",
//     "Cyprus",
//     "Brazil",
//     "Russia",
//     "South Africa",
//     "France",
//     "India",
//   ];

//   const education = [
//     "Course and institution selection",
//     "Admission processing",
//     "Visa application guidance",
//     "Travel planning and flight booking",
//     "Pre-departure briefing",
//   ];

//   const travel = [
//     "Business travel coordination",
//     "Leisure travel planning",
//     "Visa assistance",
//     "Local and international flight booking",
//     "Travel advisory and support",
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
//           Education & Travel
//         </h1>

//         <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
//           We support students seeking international education opportunities and assist professionals and tourists with end-to-end travel planning.
//         </p>

//         {/* Accent hairline */}
//         <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />

//         <div className="mt-10 grid gap-6 lg:grid-cols-2">
//           {/* Education */}
//           <div className="rounded-3xl border border-border bg-white p-7">
//             <div className="text-sm font-semibold text-foreground">
//               Education support services
//             </div>

//             <ul className="mt-4 space-y-2 text-sm text-zinc-700">
//               {education.map((x) => (
//                 <li key={x} className="flex gap-3">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
//                   <span>{x}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-6 rounded-2xl border border-border bg-zinc-50 p-4">
//               <div className="text-sm font-semibold text-foreground">
//                 Study destinations
//               </div>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 Subject to program availability and admission requirements.
//               </p>

//               <div className="mt-3 flex flex-wrap gap-2">
//                 {countries.map((c) => (
//                   <span
//                     key={c}
//                     className="rounded-full border border-accent/30 bg-white px-3 py-1 text-xs text-foreground"
//                   >
//                     {c}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-sm">
//               <div className="font-semibold text-foreground">Quick note</div>
//               <p className="mt-1 text-muted-foreground">
//                 We align your academic background, career goals, and budget with suitable institutions and pathways.
//               </p>
//             </div>
//           </div>

//           {/* Travel */}
//           <div className="rounded-3xl border border-border bg-zinc-50 p-7">
//             <div className="text-sm font-semibold text-foreground">
//               Business & leisure travel services
//             </div>

//             <ul className="mt-4 space-y-2 text-sm text-zinc-700">
//               {travel.map((x) => (
//                 <li key={x} className="flex gap-3">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
//                   <span>{x}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-6 rounded-2xl border border-border bg-white p-4 text-sm">
//               <div className="font-semibold text-foreground">
//                 Need help choosing a pathway?
//               </div>
//               <p className="mt-1 text-muted-foreground">
//                 We’ll assess your profile and recommend the best option based on your goals and budget.
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
