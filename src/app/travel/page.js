import Image from "next/image";
import Link from "next/link";

/**
 * ✅ TRAVEL PAGE (Tourism / Visit Visas + Tourism Planning)
 *
 * Put images in /public/images/travel/
 * Required:
 * - /images/travel/travel-hero.jpg     (airport / passport / airplane window)
 * - /images/travel/visit-visa.jpg      (passport + visa stamp / embassy vibe)
 * - /images/travel/tourism.jpg         (tourist landmark / city view)
 * - /images/travel/itinerary.jpg       (map / planning desk)
 *
 * Unsplash search ideas:
 * - "passport boarding pass"
 * - "tourist city skyline"
 * - "airport terminal travel"
 * - "travel itinerary planning"
 */

const services = [
  {
    title: "Tourism & Visit Visa Support",
    desc: "Guidance on requirements, documentation readiness, and application submission support (where applicable).",
  },
  {
    title: "Vacation / Tourism Planning",
    desc: "Destination planning, itinerary structure, hotel guidance, and travel preparation support.",
  },
  {
    title: "Business & Corporate Travel",
    desc: "Structured travel planning for individuals and organizations with responsive assistance.",
  },
  {
    title: "Travel Advisory & Support",
    desc: "Trip readiness guidance, checklists, and support communication when needed.",
  },
];

const visitVisaSupport = [
  "Eligibility guidance based on your profile",
  "Document checklist and review",
  "Purpose of visit clarity (strong application narrative)",
  "Financial documentation guidance (where applicable)",
  "Submission support and next-step guidance",
];

const tourismPlanning = [
  "Best destination recommendations for your budget",
  "Hotel and itinerary guidance (not a booking guarantee)",
  "Day-by-day itinerary structure (optional)",
  "Travel checklist and prep timeline",
  "Safety + travel advisory pointers",
];

const howItWorks = [
  { title: "Tell us your plan", desc: "Destination, travel dates, purpose, and budget." },
  { title: "We review & advise", desc: "We recommend the best route and document checklist." },
  { title: "Prepare documents", desc: "We help reduce avoidable errors with review + clarity." },
  { title: "Submit & travel", desc: "Submission support (where applicable) + trip readiness guidance." },
];

const popularRoutes = [
  { name: "United Kingdom", tag: "Visit • Tourism", img: "/images/travel/dest-uk.jpg" },
  { name: "Canada", tag: "Visit • Family", img: "/images/travel/travel-canada.jpg" },
  { name: "Schengen", tag: "Tourism • Multi-country", img: "/images/travel/dest-schengen.jpg" },
];

export default function TravelPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/travel/travel-hero.jpg"
            alt="Travel & Visit Visas"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-white" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Service Detail • Travel & Visit Visas
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Tourism, Visit Visas & Travel Planning
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Clean documentation, realistic guidance, and professional travel coordination — from visit visa support to tourism planning.
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

            <a
              href="https://wa.me/2349049279525"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Top: cards + right visual */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Travel services
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Professional travel support designed to reduce stress
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              We focus on clarity, documentation readiness, and realistic expectations — so you know what to do next.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {services.map((x) => (
                <div
                  key={x.title}
                  className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
                >
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

            <div className="mt-8 rounded-3xl border border-accent/25 bg-accent/10 p-6">
              <div className="text-sm font-semibold text-foreground">Compliance note</div>
              <p className="mt-2 text-sm text-muted-foreground">
                We provide advisory and support services only. We do not guarantee approvals. Decisions are made by relevant authorities.
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[320px] w-full">
                <Image
                  src="/images/travel.jpg"
                  alt="Visit visa and travel documentation support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Visit visas • Tourism • Advisory
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold text-foreground">Fast next steps</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell us your destination + travel dates. We’ll advise the best route and a clean document checklist.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                  >
                    Start Consultation
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

        {/* Two columns: visit visa + tourism */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: tourism image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/travel/tourism.jpg"
                  alt="Tourism planning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-foreground">Tourism planning</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Destination ideas, itinerary structure, and readiness checklists for a smooth trip.
                </p>
              </div>
            </div>
          </div>

          {/* Right: lists */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-border bg-zinc-50 p-7">
              <div className="text-sm font-semibold text-foreground">Visit visa support includes</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {visitVisaSupport.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="text-sm font-semibold text-foreground">Tourism planning includes</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {tourismPlanning.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="grid gap-4 md:grid-cols-[120px_1fr] md:items-center">
                <div className="relative h-28 w-full overflow-hidden rounded-2xl border border-border bg-white md:h-24">
                  <Image
                    src="/images/travel/itinerary.jpg"
                    alt="Itinerary planning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Prefer us to guide everything?</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Book a consultation and we’ll recommend the best travel route based on your timeline and budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
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

        {/* Popular routes */}
        <div className="mt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Popular routes
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Common travel destinations we support
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            We can support your planning and documentation readiness for these destinations (subject to eligibility and requirements).
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {popularRoutes.map((d) => (
              <div
                key={d.name}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-52">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-cover transition group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {d.name}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm font-semibold text-foreground">{d.tag}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Documentation guidance, purpose clarity, and realistic travel planning support.
                  </p>
                  <div className="mt-4 text-sm font-semibold text-primary">Book consultation →</div>
                </div>
              </div>
            ))}
          </div>

          
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-16 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            How it works
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
            Simple steps, clear support
          </h3>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            We keep it structured and transparent so you always know the next step.
          </p>

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
            <div className="text-sm font-semibold text-foreground">Ready to plan your trip?</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your destination, dates, and purpose — we’ll recommend the best route and next steps.
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
