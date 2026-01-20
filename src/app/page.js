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
    href: "/visa-immigration",
  },
  {
    title: "Permanent Residence & Citizenship",
    desc: "Structured pathways for settlement and investment migration.",
    img: "/images/pr-citizenship.jpg",
    href: "/book",
  },
  {
    title: "Business & Leisure Travel",
    desc: "Corporate and personal travel support end-to-end.",
    img: "/images/travel.jpg",
    href: "/education-travel",
  },
  {
    title: "Local & International Flight Booking",
    desc: "Competitive fares with professional assistance.",
    img: "/images/flights.jpg",
    href: "/book",
  },
];

/**
 * You already have these images in /public/images/
 * Make sure each image is decent resolution and ideally landscape for cards
 */
const destinationImages = [
  { name: "United Kingdom", img: "/images/uk_flag.jpg" },
  { name: "Ireland", img: "/images/ireland_flag.jpg" },
  { name: "Canada", img: "/images/canada_flag.jpg" },
  { name: "USA", img: "/images/usa_landmark.jpg" },
  { name: "Belize", img: "/images/belize_landmark.jpg" },
  { name: "Hungary", img: "/images/hungary_landmark.jpg" },
  { name: "Germany", img: "/images/germany_landmark.jpg" },
  { name: "Italy", img: "/images/italy_landmark.jpg" },
  { name: "Portugal", img: "/images/portugal_landmark.jpg" },
  { name: "Spain", img: "/images/spain_school.jpg" },
];

const whoWeHelp = [
  {
    title: "Students",
    desc: "School selection, admissions, and pre-departure support for global education pathways.",
  },
  {
    title: "Professionals",
    desc: "Work/relocation guidance (where applicable), travel coordination, and document support.",
  },
  {
    title: "Families",
    desc: "Structured pathways for travel, visas, and long-term settlement planning.",
  },
  {
    title: "Investors",
    desc: "Program guidance for qualifying investment migration and settlement pathways.",
  },
  {
    title: "Travelers",
    desc: "Visa assistance, itinerary coordination, and flight bookings with fast support.",
  },
];

const howItWorks = [
  {
    title: "Eligibility assessment",
    desc: "We review your goals, documents, timeline, and constraints to understand your best options.",
  },
  {
    title: "Pathway recommendation",
    desc: "We suggest the best country/program/visa route based on rules, requirements, and fit.",
  },
  {
    title: "Documentation guidance",
    desc: "We provide a clear checklist and review your documents to reduce avoidable issues.",
  },
  {
    title: "Submission support",
    desc: "We guide your application preparation and submission process (where applicable).",
  },
  {
    title: "Pre-departure & follow-up",
    desc: "Briefing, travel support, and next steps after a decision is issued.",
  },
];

export default function HomePage() {
  // Pick a few hero-like destination visuals for “freestyle” layouts
  const circlesTop = destinationImages.slice(0, 2); // UK + Ireland (nice as circles)
  const circlesBottom = destinationImages.slice(2, 4); // Canada + USA (circles)
  const featuredLandmarks = destinationImages.slice(4, 7); // Belize, Hungary, Germany (3 big cards)
  const morePlaces = destinationImages.slice(7); // Italy, Portugal, Spain (extra cards)

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-white" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 md:pb-16 md:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
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
              className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
            >
              Book a Consultation
            </Link>

            <a
              href="https://wa.me/2349049279525"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-accent/60 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Who we help
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Built for students, families, professionals, investors, and travelers
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            We combine clarity, compliance, and responsive support so you can move confidently across borders.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whoWeHelp.map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {x.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Our pillars
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Trusted global solutions under five pillars
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Clarity, compliance, and client-focused support for individuals,
              families, and organizations.
            </p>
          </div>

          <Link
            href="/services"
            className="hidden text-sm font-semibold text-primary md:block hover:opacity-90 transition"
          >
            View all services →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/60 to-transparent transition group-hover:scale-x-100" />
              </div>

              <div className="p-6">
                <div className="text-base font-semibold text-foreground">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 text-sm font-semibold text-primary">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VISA & IMMIGRATION / EDUCATION & TRAVEL EXPLAINERS (with circular image on top) */}
      <section className="border-t border-border bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Visa explainer */}
            <div className="rounded-3xl border border-border bg-white p-7">
              {/* Circular image on top */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-accent/30 bg-white">
                  <Image
                    src="/images/visa.jpg"
                    alt="Visa & Immigration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Visa & Immigration
                  </div>
                  <div className="mt-2 text-xl font-semibold text-foreground">
                    Clear pathways, strong documentation
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                We provide compliant guidance for study, visitor, business, and
                long-term migration pathways. Our focus is eligibility clarity,
                documentation quality, and timelines you can trust.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  "Eligibility assessment and pathway recommendation",
                  "Document checklist + review (reduce avoidable errors)",
                  "Submission guidance and next steps",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-zinc-50 p-4"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div className="text-sm font-semibold text-foreground">
                      {x}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/visa-immigration"
                  className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                >
                  Explore Visa Services
                </Link>
                <Link
                  href="/book"
                  className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-zinc-50 transition"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Education & travel explainer */}
            <div className="rounded-3xl border border-border bg-white p-7">
              {/* Circular image on top */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-accent/30 bg-white">
                  <Image
                    src="/images/education.jpg"
                    alt="Education & Travel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Education & Travel
                  </div>
                  <div className="mt-2 text-xl font-semibold text-foreground">
                    Study planning + end-to-end travel support
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                We match your profile and budget with suitable institutions
                abroad and support your travel planning, itinerary coordination,
                and flight booking needs.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  "Institution + course selection and admission processing",
                  "Pre-departure briefing and travel planning",
                  "Business & leisure travel coordination",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-zinc-50 p-4"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div className="text-sm font-semibold text-foreground">
                      {x}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/education-travel"
                  className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                >
                  Explore Education & Travel
                </Link>
                <Link
                  href="/book"
                  className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-zinc-50 transition"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR PLACES (3 hero cards, not squeezed) */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Popular places
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Destinations clients ask for the most
            </h2>

            <p className="mt-2 max-w-2xl text-muted-foreground">
              Use landmarks or flags. These are intentionally large so the images show clearly.
            </p>
          </div>

          <Link
            href="/education-travel"
            className="hidden text-sm font-semibold text-primary md:block hover:opacity-90 transition"
          >
            See education & travel →
          </Link>
        </div>

        {/* 3 large destination cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredLandmarks.map((d) => (
            <div
              key={d.name}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-64">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {d.name}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-foreground">
                  Study • Visa • Travel support
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  We’ll advise based on eligibility, requirements, timelines, and your budget.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Freestyle row: circles + one landmark */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {/* Left: 2 circles stacked */}
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-foreground">Quick highlights</div>
          

            <div className="mt-6 grid gap-5">
              {circlesTop.map((d) => (
                <div key={d.name} className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-accent/30 bg-white">
                    <Image src={d.img} alt={d.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{d.name}</div>
                    <div className="text-xs text-muted-foreground">Popular pathway inquiries</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            <div className="mt-6 grid gap-5">
              {circlesBottom.map((d) => (
                <div key={d.name} className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-accent/30 bg-white">
                    <Image src={d.img} alt={d.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{d.name}</div>
                    <div className="text-xs text-muted-foreground">Study, travel, and visa guidance</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle: one tall landmark card */}
          <div className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md lg:col-span-2">
            <div className="relative h-72 lg:h-full lg:min-h-[360px]">
              <Image
                src={morePlaces[0]?.img || destinationImages[0].img}
                alt={morePlaces[0]?.name || destinationImages[0].name}
                fill
                className="object-cover transition group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 max-w-md">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {morePlaces[0]?.name || destinationImages[0].name}
                </div>
                <div className="mt-3 text-xl font-semibold text-white">
                  Build a plan that fits your timeline
                </div>
                <p className="mt-2 text-sm text-white/80">
                  Share your country of interest and we’ll recommend the best pathway with a clear document checklist.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
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
                    className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra small grid (optional) */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {morePlaces.slice(1).map((d) => (
            <div
              key={d.name}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44">
                <Image src={d.img} alt={d.name} fill className="object-cover transition group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {d.name}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-foreground">Guidance • Documentation • Next steps</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  We’ll help you understand requirements and move with clarity.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            How it works
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            A clear, compliant process from first call to next steps
          </h2>

          <p className="mt-2 max-w-2xl text-muted-foreground">
            We keep it structured and transparent, so you always know what’s required and what comes next.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

          {/* Freestyle after how-it-works: circular image + landmark under it */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
            <div className="rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-accent/30 bg-white">
                  <Image
                    src="/images/flights.jpg"
                    alt="Flights support"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Fast support</div>
                  <div className="text-xs text-muted-foreground">
                    Flights + coordination when you need it most.
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Need a quick plan? We can guide your next steps and help coordinate travel logistics with responsive communication.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/disclaimer"
                  className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-zinc-50 transition"
                >
                  Read Disclaimer
                </Link>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md lg:col-span-2">
              <div className="relative h-72">
                <Image
                  src={destinationImages[3].img} // USA landmark (swap as you like)
                  alt={destinationImages[3].name}
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 max-w-md">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Next Steps
                  </div>
                  <div className="mt-3 text-xl font-semibold text-white">
                    Your journey deserves clarity, not confusion.
                  </div>
                  <p className="mt-2 text-sm text-white/80">
                    Tell us your goal and destination. We’ll recommend the best pathway and what documents you need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance note */}
          <div className="mt-10 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
            <div className="text-sm font-semibold text-foreground">Transparency & Compliance</div>
            <p className="mt-2 text-sm text-muted-foreground">
              We do not guarantee visa approvals. Decisions are made solely by relevant authorities and institutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


// import Image from "next/image";
// import Link from "next/link";

// const services = [
//   {
//     title: "Study Abroad & Education Placement",
//     desc: "Universities, colleges, and pathway programs worldwide.",
//     img: "/images/education.jpg",
//     href: "/services",
//   },
//   {
//     title: "Visa & Immigration Services",
//     desc: "Transparent, compliant, and up-to-date guidance.",
//     img: "/images/visa.jpg",
//     href: "/visa-immigration",
//   },
//   {
//     title: "Permanent Residence & Citizenship",
//     desc: "Structured pathways for settlement and investment migration.",
//     img: "/images/pr-citizenship.jpg",
//     href: "/book",
//   },
//   {
//     title: "Business & Leisure Travel",
//     desc: "Corporate and personal travel support end-to-end.",
//     img: "/images/travel.jpg",
//     href: "/education-travel",
//   },
//   {
//     title: "Local & International Flight Booking",
//     desc: "Competitive fares with professional assistance.",
//     img: "/images/flights.jpg",
//     href: "/book",
//   },
// ];

// // Add 8–12 images in /public/images/destinations/ (you can swap landmarks/flags)
// const destinationImages = [
//   { name: "United Kingdom", img: "/images/uk_flag.jpg" },
//   { name: "Ireland", img: "/images/ireland_flag.jpg" },
//   { name: "Canada", img: "/images/canada_flag.jpg" },
//   { name: "USA", img: "/images/usa_landmark.jpg" },
//   { name: "Belize", img: "/images/belize_landmark.jpg" },
//   { name: "Hungary", img: "/images/hungary_landmark.jpg" },
//   { name: "Germany", img: "/images/germany_landmark.jpg" },
//   { name: "Italy", img: "/images/italy_landmark.jpg" },
//   { name: "Portugal", img: "/images/portugal_landmark.jpg" },
//   { name: "Spain", img: "/images/spain_school.jpg" },
// ];

// const whoWeHelp = [
//   {
//     title: "Students",
//     desc: "School selection, admissions, and pre-departure support for global education pathways.",
//   },
//   {
//     title: "Professionals",
//     desc: "Work/relocation guidance (where applicable), travel coordination, and document support.",
//   },
//   {
//     title: "Families",
//     desc: "Structured pathways for travel, visas, and long-term settlement planning.",
//   },
//   {
//     title: "Investors",
//     desc: "Program guidance for qualifying investment migration and settlement pathways.",
//   },
//   {
//     title: "Travelers",
//     desc: "Visa assistance, itinerary coordination, and flight bookings with fast support.",
//   },
// ];

// const howItWorks = [
//   {
//     title: "Eligibility assessment",
//     desc: "We review your goals, documents, timeline, and constraints to understand your best options.",
//   },
//   {
//     title: "Pathway recommendation",
//     desc: "We suggest the best country/program/visa route based on rules, requirements, and fit.",
//   },
//   {
//     title: "Documentation guidance",
//     desc: "We provide a clear checklist and review your documents to reduce avoidable issues.",
//   },
//   {
//     title: "Submission support",
//     desc: "We guide your application preparation and submission process (where applicable).",
//   },
//   {
//     title: "Pre-departure & follow-up",
//     desc: "Briefing, travel support, and next steps after a decision is issued.",
//   },
// ];

// export default function HomePage() {
//   return (
//     <main className="bg-white text-zinc-900">
//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/images/hero.jpg"
//             alt="DiAnixSquare hero background"
//             fill
//             priority
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-white" />
//           <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/35 blur-3xl" />
//           <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
//         </div>

//         <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 md:pb-16 md:pt-24">
//           <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
//             <span className="h-2 w-2 rounded-full bg-accent" />
//             Global Education • Travel • Immigration
//           </div>

//           <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
//             Move Beyond Borders With Confidence
//           </h1>

//           <p className="mt-4 max-w-2xl text-lg text-white/85">
//             Study, travel, invest, relocate, and fly globally with expert guidance every step of the way.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
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
//               className="rounded-2xl border border-accent/60 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>

//           <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
//         </div>
//       </section>

//       {/* WHO WE HELP */}
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         <div className="flex items-end justify-between gap-6">
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//               <span className="h-2 w-2 rounded-full bg-accent" />
//               Who we help
//             </div>
//             <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
//               Built for students, families, professionals, investors, and travelers
//             </h2>
//             <p className="mt-2 max-w-2xl text-muted-foreground">
//               We combine clarity, compliance, and responsive support so you can move confidently across borders.
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {whoWeHelp.map((x) => (
//             <div key={x.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//               <div className="flex items-start gap-3">
//                 <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
//                 <div>
//                   <div className="text-sm font-semibold text-foreground">{x.title}</div>
//                   <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="mx-auto max-w-6xl px-4 pb-14">
//         <div className="flex items-end justify-between gap-6">
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//               <span className="h-2 w-2 rounded-full bg-accent" />
//               Our pillars
//             </div>
//             <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
//               Trusted global solutions under five pillars
//             </h2>
//             <p className="mt-2 max-w-2xl text-muted-foreground">
//               Clarity, compliance, and client-focused support for individuals, families, and organizations.
//             </p>
//           </div>

//           <Link href="/services" className="hidden text-sm font-semibold text-primary md:block hover:opacity-90 transition">
//             View all services →
//           </Link>
//         </div>

//         <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((s) => (
//             <Link
//               key={s.title}
//               href={s.href}
//               className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
//             >
//               <div className="relative h-44">
//                 <Image src={s.img} alt={s.title} fill className="object-cover transition group-hover:scale-[1.03]" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
//                 <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/60 to-transparent transition group-hover:scale-x-100" />
//               </div>

//               <div className="p-6">
//                 <div className="text-base font-semibold text-foreground">{s.title}</div>
//                 <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
//                 <div className="mt-4 text-sm font-semibold text-primary">Learn more →</div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* VISA & IMMIGRATION / EDUCATION & TRAVEL EXPLAINERS */}
//       <section className="border-t border-border bg-zinc-50">
//         <div className="mx-auto max-w-6xl px-4 py-14">
//           <div className="grid gap-6 lg:grid-cols-2">
//             {/* Visa explainer */}
//             <div className="rounded-3xl border border-border bg-white p-7">
//               <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//                 <span className="h-2 w-2 rounded-full bg-accent" />
//                 Visa & Immigration
//               </div>

//               <h3 className="mt-4 text-xl font-semibold text-foreground">
//                 Clear pathways, strong documentation, honest expectations
//               </h3>

//               <p className="mt-3 text-sm text-muted-foreground">
//                 We provide compliant guidance for study, visitor, business, and long-term migration pathways. Our focus is
//                 eligibility clarity, documentation quality, and timelines you can trust.
//               </p>

//               <div className="mt-5 grid gap-3">
//                 {[
//                   "Eligibility assessment and pathway recommendation",
//                   "Document checklist + review (to reduce avoidable errors)",
//                   "Submission guidance and next steps",
//                 ].map((x) => (
//                   <div key={x} className="flex items-start gap-3 rounded-2xl border border-border bg-zinc-50 p-4">
//                     <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
//                     <div className="text-sm font-semibold text-foreground">{x}</div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 <Link
//                   href="/visa-immigration"
//                   className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
//                 >
//                   Explore Visa Services
//                 </Link>
//                 <Link
//                   href="/book"
//                   className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-zinc-50 transition"
//                 >
//                   Book Consultation
//                 </Link>
//               </div>
//             </div>

//             {/* Education & travel explainer */}
//             <div className="rounded-3xl border border-border bg-white p-7">
//               <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//                 <span className="h-2 w-2 rounded-full bg-accent" />
//                 Education & Travel
//               </div>

//               <h3 className="mt-4 text-xl font-semibold text-foreground">
//                 Study destination planning + end-to-end travel support
//               </h3>

//               <p className="mt-3 text-sm text-muted-foreground">
//                 We match your profile and budget with suitable institutions abroad and support your travel planning,
//                 itinerary coordination, and flight booking needs.
//               </p>

//               <div className="mt-5 grid gap-3">
//                 {[
//                   "Institution + course selection and admission processing",
//                   "Pre-departure briefing and travel planning",
//                   "Business & leisure travel coordination",
//                 ].map((x) => (
//                   <div key={x} className="flex items-start gap-3 rounded-2xl border border-border bg-zinc-50 p-4">
//                     <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
//                     <div className="text-sm font-semibold text-foreground">{x}</div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 <Link
//                   href="/education-travel"
//                   className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
//                 >
//                   Explore Education & Travel
//                 </Link>
//                 <Link
//                   href="/book"
//                   className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-zinc-50 transition"
//                 >
//                   Book Consultation
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* DESTINATIONS (mixed shapes: circles + rectangles) */}
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         <div className="flex items-end justify-between gap-6">
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//               <span className="h-2 w-2 rounded-full bg-accent" />
//               Destinations
//             </div>

//             <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
//               Popular study & travel destinations
//             </h2>

           
//           </div>

//           <Link href="/education-travel" className="hidden text-sm font-semibold text-primary md:block hover:opacity-90 transition">
//             See education & travel →
//           </Link>
//         </div>

//         {/* Top: 3 circular highlights */}
//         <div className="mt-8 grid gap-5 md:grid-cols-3">
//           {destinationImages.slice(0, 3).map((d) => (
//             <div key={d.name} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//               <div className="mx-auto relative h-40 w-40 overflow-hidden rounded-full border border-accent/30">
//                 <Image src={d.img} alt={d.name} fill className="object-cover" />
//               </div>
//               <div className="mt-5 text-center">
//                 <div className="text-sm font-semibold text-foreground">{d.name}</div>
//                 <div className="mt-1 text-xs text-muted-foreground">Landmarks • Pathways • Guidance</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom: mixed grid */}
//         <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//           {destinationImages.slice(3).map((d, idx) => (
//             <div
//               key={d.name}
//               className={`group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md ${
//                 idx % 5 === 0 ? "lg:col-span-2" : ""
//               }`}
//             >
//               <div className={`relative ${idx % 5 === 0 ? "h-44" : "h-40"}`}>
//                 <Image src={d.img} alt={d.name} fill className="object-cover transition group-hover:scale-[1.03]" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                 <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent/60 to-transparent transition group-hover:scale-x-100" />
//                 <div className="absolute bottom-4 left-4">
//                   <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
//                     <span className="h-1.5 w-1.5 rounded-full bg-accent" />
//                     {d.name}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-10 rounded-3xl border border-border bg-zinc-50 p-8">
//           <div className="text-sm font-semibold text-foreground">Want a destination not listed?</div>
//           <p className="mt-2 text-sm text-muted-foreground">
//             Book a consultation and tell us your country of interest. We’ll advise based on eligibility, requirements,
//             timelines, and your budget.
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
//               className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/60 transition"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="border-t border-border bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-14">
//           <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//             <span className="h-2 w-2 rounded-full bg-accent" />
//             How it works
//           </div>

//           <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
//             A clear, compliant process from first call to next steps
//           </h2>

//           <p className="mt-2 max-w-2xl text-muted-foreground">
//             We keep it structured and transparent, so you always know what’s required and what comes next.
//           </p>

//           <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {howItWorks.map((s, i) => (
//               <div key={s.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//                 <div className="flex items-start gap-3">
//                   <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-accent/35 bg-accent/10 text-xs font-semibold text-foreground">
//                     {i + 1}
//                   </span>
//                   <div>
//                     <div className="text-sm font-semibold text-foreground">{s.title}</div>
//                     <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-10 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
//             <div className="text-sm font-semibold text-foreground">Transparency & Compliance</div>
//             <p className="mt-2 text-sm text-muted-foreground">
//               We do not guarantee visa approvals. Decisions are made solely by relevant authorities and institutions.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <Link
//                 href="/book"
//                 className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
//               >
//                 Book a Consultation
//               </Link>

//               <Link
//                 href="/disclaimer"
//                 className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-zinc-50 transition"
//               >
//                 Read Disclaimer
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

