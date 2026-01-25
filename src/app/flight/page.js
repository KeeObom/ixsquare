"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const domesticAirlines = [
  { name: "Air Peace", logo: "/images/airlines/airpeace.png" },
  { name: "Arik Air", logo: "/images/airlines/arik.jpg" },
  { name: "Ibom Air", logo: "/images/airlines/ibomair.png" },
  { name: "Aero Contractors", logo: "/images/airlines/aero.svg" },
  { name: "Overland Airways", logo: "/images/airlines/overland.png" },
  { name: "United Nigeria", logo: "/images/airlines/united.png" },
  { name: "NG Eagle", logo: "/images/airlines/ngeagle.png" },
  { name: "Green Africa", logo: "/images/airlines/greenafrica.svg" },
  { name: "ValueJet", logo: "/images/airlines/valuejet.png" },
  { name: "Max Air", logo: "/images/airlines/maxair.jpg" },

];

const internationalAirlines = [
  { name: "British Airways", logo: "/images/airlines/britishairways.png" },
  { name: "Qatar Airways", logo: "/images/airlines/qatar.jpg" },
  { name: "Emirates", logo: "/images/airlines/emirates.webp" },
  { name: "Lufthansa", logo: "/images/airlines/lufthansa.jpg" },
  { name: "Virgin Atlantic", logo: "/images/airlines/virginatlantic.jpg" },
  { name: "Delta", logo: "/images/airlines/delta.webp" },
  { name: "Air Peace", logo: "/images/airlines/airpeace.png" },
  { name: "Kenya Airways", logo: "/images/airlines/kenyaairways.jpg" },
  { name: "Ibom Air", logo: "/images/airlines/ibomair.png" },
  { name: "Turkish Airlines", logo: "/images/airlines/turkishairlines.png" },
];

const cabinOptions = ["Economy", "Premium Economy", "Business", "First"];
const tripTypes = ["One-way", "Round trip"];

export default function FlightsPage() {
  const router = useRouter();

  const [tripType, setTripType] = useState("Round trip");
  const [flightType, setFlightType] = useState("International"); // Domestic | International
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [cabin, setCabin] = useState("Economy");
  const [airline, setAirline] = useState(""); // selected preference
  const [budget, setBudget] = useState(""); // optional

  const airlines = flightType === "Domestic" ? domesticAirlines : internationalAirlines;

  const canContinue = useMemo(() => {
    if (!from.trim() || !to.trim() || !departDate) return false;
    if (tripType === "Round trip" && !returnDate) return false;
    return true;
  }, [from, to, departDate, returnDate, tripType]);

  function onContinue() {
    const qs = new URLSearchParams({
      tripType,
      flightType,
      from,
      to,
      departDate,
      returnDate: tripType === "Round trip" ? returnDate : "",
      passengers: String(passengers),
      cabin,
      airline,
      budget,
    });

    router.push(`/book/flights?${qs.toString()}`);
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/airlines/flights-hero.jpg"
            alt="Flight booking"
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
            Service Detail • Flight Booking
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Local & International Flight Booking
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Tell us your route and dates — we’ll send the best options and help you book quickly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/2349049279525"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
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

      {/* MAIN */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Flight request
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Enter your travel details
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                We’ll use this to prepare options and contact you with the best fares.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Flight type">
                    <select
                      className="input"
                      value={flightType}
                      onChange={(e) => {
                        setFlightType(e.target.value);
                        setAirline("");
                      }}
                    >
                      <option value="International">International</option>
                      <option value="Domestic">Domestic (Nigeria)</option>
                    </select>
                  </Field>

                  <Field label="Trip type">
                    <select
                      className="input"
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                    >
                      {tripTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="From (Departure city/airport)">
                    <input
                      className="input"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      placeholder="e.g., Lagos (LOS)"
                    />
                  </Field>

                  <Field label="To (Destination city/airport)">
                    <input
                      className="input"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      placeholder="e.g., London (LHR)"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Departure date">
                    <input
                      className="input"
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                    />
                  </Field>

                  <Field label="Return date">
                    <input
                      className="input"
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      disabled={tripType !== "Round trip"}
                    />
                    {tripType !== "Round trip" && (
                      <div className="mt-2 text-xs text-muted-foreground">
                        Return date is only needed for round trip.
                      </div>
                    )}
                  </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Field label="Passengers">
                    <input
                      className="input"
                      type="number"
                      min={1}
                      value={passengers}
                      onChange={(e) => setPassengers(Number(e.target.value || 1))}
                    />
                  </Field>

                  <Field label="Cabin class">
                    <select className="input" value={cabin} onChange={(e) => setCabin(e.target.value)}>
                      {cabinOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Budget (optional)">
                    <input
                      className="input"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="e.g., ₦750,000"
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6">
                <div className="text-sm font-semibold text-foreground">
                  Airline preference (optional)
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose an airline you prefer — we’ll try to match it based on availability and price.
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {airlines.map((a) => {
                    const active = airline === a.name;
                    return (
                      <button
                        key={a.name}
                        type="button"
                        onClick={() => setAirline(active ? "" : a.name)}
                        className={[
                          "text-left rounded-3xl border bg-white p-4 shadow-sm transition hover:shadow-md",
                          active ? "border-accent" : "border-border",
                        ].join(" ")}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border bg-white">
                            <Image
                              src={a.logo}
                              alt={a.name}
                              fill
                              className="object-contain p-1"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">{a.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {active ? "Selected" : "Tap to select"}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                disabled={!canContinue}
                onClick={onContinue}
                className="mt-6 w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50"
              >
                Continue to Booking Form →
              </button>

              {!canContinue && (
                <div className="mt-3 text-xs text-muted-foreground">
                  Please fill From, To, and Departure date (and Return date if round trip).
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: info card */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="text-sm font-semibold text-foreground">What you get</div>

              <div className="mt-4 grid gap-3">
                {[
                  { t: "Fast response", d: "We review your request and contact you quickly." },
                  { t: "Best options", d: "We share price + timing options you can choose from." },
                  { t: "Support to ticketing", d: "Once you confirm, we guide payment and ticket issuance." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-border bg-zinc-50 p-4">
                    <div className="text-sm font-semibold text-foreground">{x.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-xs text-muted-foreground">
                Note: We provide booking support and advisory only. Final ticketing depends on airline availability and fare rules.
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/services/flights-wide.jpg"
                  alt="Flight support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            </div>
          </aside>
        </div>

        <style>{`
          .input {
            width: 100%;
            border-radius: 16px;
            border: 1px solid hsl(var(--border));
            background: white;
            padding: 12px 14px;
            font-size: 14px;
            color: hsl(var(--foreground));
            outline: none;
          }
          .input::placeholder {
            color: rgba(113,113,122,0.9);
          }
          .input:focus {
            border-color: hsl(var(--primary));
            box-shadow: 0 0 0 4px rgba(0,0,0,0.06);
          }
          select.input {
            padding-right: 34px;
          }
        `}</style>
      </section>
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  );
}
