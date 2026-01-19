import Link from "next/link";

export default function EducationTravelPage() {
  const countries = [
    "UK", "Ireland", "Canada", "USA", "Belize", "Hungary", "Malta", "Germany", "Italy", "Portugal",
    "Spain", "Luxembourg", "Greece", "Switzerland", "Finland", "Denmark", "Cyprus", "Brazil", "Russia",
    "South Africa", "France", "India",
  ];

  const education = [
    "Course and institution selection",
    "Admission processing",
    "Visa application guidance",
    "Travel planning and flight booking",
    "Pre-departure briefing",
  ];

  const travel = [
    "Business travel coordination",
    "Leisure travel planning",
    "Visa assistance",
    "Local and international flight booking",
    "Travel advisory and support",
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-zinc-700">
          <span className="h-2 w-2 rounded-full bg-zinc-900" />
          Service Detail
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          Education & Travel
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-zinc-600">
          We support students seeking international education opportunities and assist professionals and tourists with end-to-end travel planning.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border p-7">
            <div className="text-sm font-semibold text-zinc-900">Education support services</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {education.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border bg-zinc-50 p-4">
              <div className="text-sm font-semibold text-zinc-900">Study destinations</div>
              <p className="mt-2 text-sm text-zinc-600">
                Subject to program availability and admission requirements.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span key={c} className="rounded-full border bg-white px-3 py-1 text-xs text-zinc-700">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-zinc-50 p-7">
            <div className="text-sm font-semibold text-zinc-900">Business & leisure travel services</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {travel.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border bg-white p-4 text-sm text-zinc-700">
              <div className="font-semibold text-zinc-900">Need help choosing a pathway?</div>
              <p className="mt-1">We’ll assess your profile and recommend the best option based on your goals and budget.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/book" className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white">
            Book a Consultation
          </Link>
          <Link href="/services" className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-zinc-900">
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
