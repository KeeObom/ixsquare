import Image from "next/image";
import Link from "next/link";

import { testimonials } from "@/data/testimonials";

const TESTIMONIAL_FORM_URL = "https://forms.gle/7AKjoZzyumBMn9ez9";


/**
 * ✅ Add these images to /public/images/about/
 * Recommended:
 * - /images/about/about-hero.jpg     (premium global mobility / consultation vibe)
 * - /images/about/verified.jpg       (trust/verification vibe)
 *
 * Optional:
 * - /images/about/global.jpg         (map / passport / skyline)
 * - /images/about/office.jpg         (team/office consultation)
 */

const values = [
  {
    title: "Transparency",
    desc: "Clear, honest, and reliable guidance at every step.",
  },
  {
    title: "Client-Centricity",
    desc: "Tailored solutions built around your unique needs and goals.",
  },
  {
    title: "Professionalism",
    desc: "Expertise, accuracy, and excellence in every service we deliver.",
  },
  {
    title: "Responsiveness",
    desc: "Timely communication and proactive support throughout your process.",
  },
  {
    title: "Integrity",
    desc: "Ethical practice and strict compliance with legal standards.",
  },
  {
    title: "Innovation",
    desc: "Continuously evolving solutions to deliver modern, effective support.",
  },
];

const focusAreas = [
  {
    title: "Visa & Immigration Services",
    desc: "Structured guidance, documentation support, and compliant application preparation.",
    href: "/visa-immigration",
  },
  {
    title: "Study Abroad Support",
    desc: "Country selection, program matching, admissions guidance, and pre-departure planning.",
    href: "/education-travel", // keeps your existing route
  },
  {
    title: "Tourism & Travel Assistance",
    desc: "Trip planning, itinerary coordination, and advisory support for leisure or business travel.",
    href: "/travel", // or "/book" if you don't have the page yet
  },
  {
    title: "Flight Bookings",
    desc: "Fast quotation support for local and international flights with professional assistance.",
    href: "/flight", // or "/book/flights" depending on your structure
  },
  {
    title: "Citizenship by Investment Advisory",
    desc: "Guidance on CBI/PR pathways aligned to mobility, security, and legacy goals.",
    href: "/investment", // the page you said you want to create
  },
];


export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* TOP HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              About DiAnixSquare
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              A premier global services firm for seamless international opportunities
            </h1>

            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              <b>DiAnixSquare International Agency</b> is dedicated to empowering individuals, families, and businesses
              with secure, structured, and personalized international solutions. We provide comprehensive support across
              visa and immigration services, study abroad, tourism and travel assistance, flight bookings, and citizenship
              by investment advisory.
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
                className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                Explore Services
              </Link>

              <a
                href="https://wa.me/2349049279525"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Right: hero image */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-zinc-50">
            <div className="relative h-[320px] w-full md:h-[380px]">
              <Image
                src="/images/about/about-hero.jpg"
                alt="DiAnixSquare consultation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>

            {/* floating brand tag */}
            <div className="absolute bottom-5 left-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Transparent • Ethical • Innovative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + FOCUS AREAS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              What we do
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              We simplify complex processes — so you can move with confidence
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              Our mission is to simplify complex international processes and ensure clients achieve their global goals
              efficiently, securely, and with clarity. Through expert guidance and personalized service, we help clients
              navigate legal, educational, and investment pathways to unlock global mobility, financial growth, and
              long-term stability.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {focusAreas.map((x) => (
                <Link
                  key={x.title}
                  href={x.href}
                  className="group rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground">{x.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>

                      <div className="mt-4 text-sm font-semibold text-primary group-hover:opacity-90">
                        Explore →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>


            <div className="mt-10 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">What to expect</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Clear steps and timelines",
                  "Document checklists and guidance",
                  "Compliance-focused support",
                  "Honest expectations (no false promises)",
                  "Responsive communication",
                  "Client-first recommendations",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <div className="text-sm text-muted-foreground">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Trust & Compliance
              </div>

              <h3 className="mt-4 text-xl font-semibold text-foreground">Transparent, ethical, and compliant</h3>

              <p className="mt-3 text-sm text-muted-foreground">
                We provide advisory and support services only. Outcomes are determined solely by relevant authorities,
                institutions, and program administrators. We do not guarantee approvals and we do not support false or
                altered documentation.
              </p>

              <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-zinc-50">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/about/verified.jpg"
                    alt="DiAnixSquare verification"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Clear guidance • Structured support
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                >
                  Contact Us
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
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="border-t border-border bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-foreground">
                Vision
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                To be a trusted global partner, enabling individuals, families, and businesses to explore, invest, and thrive
                internationally through transparent, ethical, and innovative solutions.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                We envision a world where access to education, travel, investment, and citizenship opportunities is seamless,
                empowering clients to achieve global mobility, financial security, and lasting legacy.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-foreground">
                Mission
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                To provide expert, personalized, and fully compliant international services that empower clients to live, study,
                travel, work, and invest across borders with confidence.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  "Deliver end-to-end guidance for visas, immigration, study abroad, and travel processes",
                  "Advise on Citizenship by Investment (CBI) and Permanent Residence (PR) programs for long-term mobility and stability",
                  "Provide tailored solutions aligned with personal, business, and legacy goals",
                  "Maintain transparency, professionalism, and regulatory compliance in all services",
                ].map((x) => (
                  <div key={x} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <div className="text-sm text-muted-foreground">{x}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Testimonials
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                What clients say about working with us
              </h2>

              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                We focus on clarity, structure, and compliance — and we keep communication honest.
              </p>
            </div>

            <a
              href={TESTIMONIAL_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl border border-accent/60 bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-zinc-50 md:inline-flex"
            >
              Share a review →
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(testimonials || []).slice(0, 6).map((t) => (
              <div
                key={`${t.name}-${t.title}`}
                className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">“{t.quote}”</p>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

                    <div className="mt-4 text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
            <div className="text-sm font-semibold text-foreground">Worked with us before?</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Your feedback helps new clients trust the process and understand what to expect.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={TESTIMONIAL_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Share a testimonial
              </a>
              <Link
                href="/contact"
                className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/60"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              Testimonials reflect individual experiences and may vary.
            </div>
          </div>
        </div>
      </section>


      {/* CORE VALUES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Core Values
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              The standards behind every case we support
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              We combine client-first service with ethical, compliant processes — and we keep communication clear.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
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

        {/* CTA */}
        <div className="mt-10 rounded-3xl border border-border bg-zinc-50 p-6 md:p-8">
          <div className="text-sm font-semibold text-foreground">Ready to start?</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Book a consultation and we’ll guide you through the best pathway for your goal, timeline, and destination.
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
              className="rounded-2xl border border-accent/60 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/60"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
