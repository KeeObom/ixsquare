import Image from "next/image";
import Link from "next/link";

/**
 * ✅ Add these images to /public/images/pr/
 *
 * Recommended:
 * 1) /images/pr/pr-hero.jpg        (passport + skyline / premium global mobility vibe)
 * 2) /images/pr/investment.jpg     (business handshake / real estate / skyline)
 * 3) /images/pr/family.jpg         (family travel / airport / lifestyle)
 *
 * Optional:
 * - /images/pr/map.jpg
 */

const cbiHow = [
  { title: "Discovery & goal-mapping", desc: "We clarify your objectives: mobility, lifestyle, legacy, taxes, business expansion, and timeline." },
  { title: "Program selection", desc: "We shortlist government-approved options aligned to your profile and risk tolerance." },
  { title: "Document readiness", desc: "Structured checklist, review, and consistency checks to reduce delays." },
  { title: "Application management", desc: "End-to-end coordination and submission support with clear milestones." },
  { title: "Post-approval next steps", desc: "We guide onboarding steps, travel readiness, and practical settlement planning (as needed)." },
];

const prHow = [
  { title: "Eligibility assessment", desc: "We identify suitable PR routes based on country requirements and your profile." },
  { title: "Strategy + plan", desc: "A step-by-step plan including documents, timeline, and common pitfalls to avoid." },
  { title: "Application guidance", desc: "Form guidance, supporting evidence structure, and compliance checks." },
  { title: "Submission + follow-up", desc: "We support submission readiness and help you understand what to expect next." },
];

const investmentOptions = [
  { title: "Real estate investment", desc: "Qualifying property routes approved by participating governments." },
  { title: "Government-approved development funds", desc: "Economic contribution options tied to national development." },
  { title: "Strategic business investments", desc: "Business expansion and investment pathways (where available)." },
  { title: "Job creation initiatives", desc: "Programs that reward investment linked to local employment growth." },
];

const benefits = [
  "Enhanced global access and visa-free travel (program-dependent)",
  "Long-term security for you and your family",
  "International business and investment flexibility",
  "Access to quality healthcare and education (program-dependent)",
  "Clear pathways to long-term settlement and, in some cases, citizenship",
];

export default function PRCitizenshipPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pr/pr-hero.jpg"
            alt="Permanent residence and citizenship by investment"
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
            Service Detail • PR & Citizenship by Investment
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Permanent Residence & Citizenship by Investment
          </h1>

          {/* <p className="mt-4 max-w-3xl text-lg text-white/85">
            Comprehensive global mobility solutions for individuals and families seeking to live, work, or invest internationally —
            guided with clarity, compliance, and end-to-end support.
          </p> */}

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
              className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Chat on WhatsApp
            </a>

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

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              What we do
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Expert guidance for PR and investment-based mobility pathways
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              DiAnixSquare International Agency provides comprehensive global mobility solutions for individuals and families.
              We specialize in guiding clients through <b>Citizenship by Investment (CBI)</b> and <b>Permanent Residence (PR)</b> programs,
              offering expert advice, personalized planning, and end-to-end application management.
            </p>

            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">Key benefits</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <div className="text-sm text-muted-foreground">{b}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-xs text-muted-foreground">
                Benefits vary by country and program. We’ll explain requirements and realistic timelines during consultation.
              </div>
            </div>
          </div>

          {/* Right: image card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[360px] w-full">
                <Image src="/images/pr/family.jpg" alt="Global mobility for families" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-foreground">Client-first planning</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  We help you compare options and choose pathways that align with your goals — with clear checklists and a structured process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CBI + PR sections */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* CBI */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Citizenship by Investment (CBI)
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Second citizenship solutions aligned to your legacy goals
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              Our CBI services help high-net-worth individuals and families identify, select, and secure second citizenship or residency
              solutions aligned with personal, business, and long-term legacy objectives. Clients can obtain citizenship through
              <b> government-sanctioned programs</b> in exchange for qualifying economic contributions.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {investmentOptions.map((x) => (
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

            <div className="mt-8 rounded-3xl border border-accent/25 bg-accent/10 p-6">
              <div className="text-sm font-semibold text-foreground">What you gain</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Enhanced global access, greater mobility, new financial opportunities, and improved security for your family —
                with a process managed carefully for compliance and clarity.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">How we support your CBI journey</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {cbiHow.map((s, i) => (
                  <div key={s.title} className="rounded-3xl border border-border bg-white p-5 shadow-sm">
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

              <div className="mt-5 text-xs text-muted-foreground">
                Note: We provide advisory and application support. Approvals and timelines are determined by relevant authorities.
              </div>
            </div>
          </div>

          {/* CBI image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[420px] w-full">
                <Image src="/images/pr/investment.jpg" alt="Investment pathway support" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-foreground">Investment pathways</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  We help you understand what’s required, choose the right route, and keep the process organized end-to-end.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PR */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* PR image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-[420px] w-full">
                <Image src="/images/pr/map.jpg" alt="Permanent residence pathways" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-foreground">Long-term stability</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  PR programs can unlock the right to live and work abroad, access services, and build a path toward future citizenship.
                </p>
              </div>
            </div>
          </div>

          {/* PR copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Permanent Residence (PR)
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Secure pathways to live, work, and invest abroad
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              Our PR services provide structured guidance for clients seeking long-term residency. Depending on the country and route,
              PR can offer the right to reside and work freely, access to healthcare and education, and pathways toward citizenship.
            </p>

            <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-foreground">How we guide your PR process</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {prHow.map((s, i) => (
                  <div key={s.title} className="rounded-3xl border border-border bg-white p-5 shadow-sm">
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

              <div className="mt-5 text-xs text-muted-foreground">
                We do not guarantee approvals. Decisions are made solely by relevant authorities and program administrators.
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-white p-6 md:p-8 shadow-sm">
              <div className="text-sm font-semibold text-foreground">Ready to explore options?</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Book a consultation to review your profile and receive a shortlist of suitable PR or investment-based pathways.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
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
            </div>
          </div>
        </div>

        {/* Compliance footer */}
        <div className="mt-14 rounded-3xl border border-border bg-zinc-50 p-6">
          <div className="text-sm font-semibold text-foreground">Important note</div>
          <p className="mt-2 text-sm text-muted-foreground">
            DiAnixSquare provides advisory and application support services only. Approvals, timelines, and final decisions are made by
            the relevant authorities and program administrators. We do not submit false documents and do not guarantee approvals.
          </p>
        </div>
      </section>
    </main>
  );
}
