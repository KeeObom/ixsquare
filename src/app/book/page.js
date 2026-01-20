"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const services = [
  "Education & Study Abroad",
  "Visa & Immigration",
  "Permanent Residence & Citizenship",
  "Business & Leisure Travel",
  "Local & International Flight Booking",
];

const destinations = [
  "United Kingdom",
  "Ireland",
  "Canada",
  "USA",
  "Belize",
  "Hungary",
  "Malta",
  "Germany",
  "Italy",
  "Portugal",
  "Spain",
  "Luxembourg",
  "Greece",
  "Switzerland",
  "Finland",
  "Denmark",
  "Cyprus",
  "Brazil",
  "Russia",
  "South Africa",
  "France",
  "India",
  "Other",
];

const quickPromises = [
  {
    title: "Clarity first",
    desc: "We explain your options, timelines, and required documents in a simple, structured way.",
  },
  {
    title: "Compliant guidance",
    desc: "We provide advisory and support services only. Decisions are made by relevant authorities.",
  },
  {
    title: "Fast communication",
    desc: "We follow up via WhatsApp/phone/email so you always know the next step.",
  },
];

const faqs = [
  {
    q: "Do you guarantee visa or admission approval?",
    a: "No. We do not guarantee approvals. Outcomes are determined solely by relevant authorities and institutions.",
  },
  {
    q: "How soon will you respond after I submit?",
    a: "We typically respond as soon as possible via WhatsApp/phone/email after reviewing your request.",
  },
  {
    q: "What should I include in my message?",
    a: "Your goal, preferred timeline, destination, and any key details (work/study history, budget range, urgency).",
  },
];

export default function BookPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    destination: destinations[0],
    message: "",
  });

  const canSubmit = useMemo(
    () => Object.values(form).every((v) => String(v).trim().length > 0),
    [form]
  );

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      // ✅ Keep as-is: your existing route handler expects /api/contact
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: services[0],
        destination: destinations[0],
        message: "",
      });
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/book/book-hero.jpg"
            alt="Book a consultation"
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
            Consultation & Inquiry
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Book a consultation with DiAnixSquare
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Tell us your goal and timeline. We’ll guide you through pathways, documentation, and next steps.
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

            <a
              href="mailto:info@dianixsquare.com"
              className="rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Email us
            </a>
          </div>

          <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: Info + visuals */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Quick promises */}
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="text-sm font-semibold text-foreground">What you get</div>

              <div className="mt-4 grid gap-3">
                {quickPromises.map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-border bg-zinc-50 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">{x.title}</div>
                        <p className="mt-1 text-sm text-muted-foreground">{x.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-xs text-muted-foreground">
                We provide advisory and support services only. We do not influence or guarantee outcomes.
              </div>
            </div>

            {/* Image: consultation */}
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/book/consultation.jpg"
                  alt="Consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Clear steps • Honest expectations
                </div>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-foreground">What happens next</div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>We review your request.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>We contact you via WhatsApp/phone/email.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>We recommend the best pathway and required documents.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image: destinations */}
            <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="relative h-44 w-full">
                <Image
                  src="/images/book/destinations.jpg"
                  alt="Destinations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Study • Travel • Migration
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Send an inquiry
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Share your details
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                This request is sent directly to{" "}
                <span className="font-semibold text-primary">info@dianixsquare.com</span>.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name">
                    <input
                      className="input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                    />
                  </Field>

                  <Field label="Email">
                    <input
                      className="input"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>

                <Field label="Phone / WhatsApp">
                  <input
                    className="input"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+234..."
                  />
                </Field>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Service interest">
                    <select
                      className="input"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Destination country">
                    <select
                      className="input"
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    >
                      {destinations.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Message">
                  <textarea
                    className="input min-h-[140px]"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your goal, timeline, destination, and any details…"
                  />
                </Field>

                <button
                  disabled={!canSubmit || status === "loading"}
                  className="group relative w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send request"}
                  <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-[92%] bg-accent/40" />
                </button>

                {status === "success" && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                    Sent successfully. We’ll contact you shortly.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
                    {error}
                  </div>
                )}

                {/* FAQ */}
                <div className="mt-6 rounded-3xl border border-border bg-zinc-50 p-6">
                  <div className="text-sm font-semibold text-foreground">Quick FAQ</div>
                  <div className="mt-4 space-y-4">
                    {faqs.map((f) => (
                      <div key={f.q} className="rounded-2xl border border-border bg-white p-4">
                        <div className="text-sm font-semibold text-foreground">{f.q}</div>
                        <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <StyleHelpers />
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

// Simple input styles wired to theme tokens
function StyleHelpers() {
  return (
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
  );
}



// "use client";

// import { useMemo, useState } from "react";

// const services = [
//   "Education & Study Abroad",
//   "Visa & Immigration",
//   "Permanent Residence & Citizenship",
//   "Business & Leisure Travel",
//   "Local & International Flight Booking",
// ];

// const destinations = [
//   "United Kingdom",
//   "Ireland",
//   "Canada",
//   "USA",
//   "Belize",
//   "Hungary",
//   "Malta",
//   "Germany",
//   "Italy",
//   "Portugal",
//   "Spain",
//   "Luxembourg",
//   "Greece",
//   "Switzerland",
//   "Finland",
//   "Denmark",
//   "Cyprus",
//   "Brazil",
//   "Russia",
//   "South Africa",
//   "France",
//   "India",
//   "Other",
// ];

// export default function BookPage() {
//   const [status, setStatus] = useState("idle");
//   const [error, setError] = useState("");

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: services[0],
//     destination: destinations[0],
//     message: "",
//   });

//   const canSubmit = useMemo(() => {
//     return Object.values(form).every((v) => String(v).trim().length > 0);
//   }, [form]);

//   async function onSubmit(e) {
//     e.preventDefault();
//     setStatus("loading");
//     setError("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json().catch(() => ({}));

//       if (!res.ok) {
//         setStatus("error");
//         setError(data?.error || "Something went wrong. Try again.");
//         return;
//       }

//       setStatus("success");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         service: services[0],
//         destination: destinations[0],
//         message: "",
//       });
//     } catch {
//       setStatus("error");
//       setError("Network error. Please try again.");
//     }
//   }

//   return (
//     <main className="min-h-screen bg-white">
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
//           {/* Left: Bold modern intro */}
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//               <span className="h-2 w-2 rounded-full bg-accent" />
//               Consultation & Inquiry
//             </div>

//             <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
//               Move beyond borders with confidence.
//             </h1>

//             <p className="mt-4 text-lg text-muted-foreground">
//               Tell us what you need and we’ll guide you through the best pathway,
//               documentation, timelines, and next steps.
//             </p>

//             <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-zinc-50 p-6">
//               <div className="text-sm font-medium text-foreground">
//                 What happens next
//               </div>

//               <ul className="space-y-2 text-sm text-zinc-700">
//                 <li className="flex items-start gap-3">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
//                   <span>We review your request</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
//                   <span>We contact you via WhatsApp/phone/email</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
//                   <span>We recommend the best pathway and required documents</span>
//                 </li>
//               </ul>

//               <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

//               <p className="text-xs text-muted-foreground">
//                 We do not guarantee approvals. Decisions are made by relevant authorities.
//               </p>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//             <div className="mb-4">
//               <div className="text-sm font-semibold text-foreground">Send an inquiry</div>
//               <p className="mt-1 text-sm text-muted-foreground">
//                 This request is sent directly to{" "}
//                 <span className="font-semibold text-primary">info@dianixsquare.com</span>.
//               </p>
//             </div>

//             <form onSubmit={onSubmit} className="space-y-4">
//               <div className="grid gap-4 md:grid-cols-2">
//                 <Field label="Name">
//                   <input
//                     className="input"
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                     placeholder="Your full name"
//                   />
//                 </Field>

//                 <Field label="Email">
//                   <input
//                     className="input"
//                     type="email"
//                     value={form.email}
//                     onChange={(e) => setForm({ ...form, email: e.target.value })}
//                     placeholder="you@example.com"
//                   />
//                 </Field>
//               </div>

//               <Field label="Phone / WhatsApp">
//                 <input
//                   className="input"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   placeholder="+234..."
//                 />
//               </Field>

//               <div className="grid gap-4 md:grid-cols-2">
//                 <Field label="Service interest">
//                   <select
//                     className="input"
//                     value={form.service}
//                     onChange={(e) => setForm({ ...form, service: e.target.value })}
//                   >
//                     {services.map((s) => (
//                       <option key={s} value={s}>
//                         {s}
//                       </option>
//                     ))}
//                   </select>
//                 </Field>

//                 <Field label="Destination country">
//                   <select
//                     className="input"
//                     value={form.destination}
//                     onChange={(e) =>
//                       setForm({ ...form, destination: e.target.value })
//                     }
//                   >
//                     {destinations.map((d) => (
//                       <option key={d} value={d}>
//                         {d}
//                       </option>
//                     ))}
//                   </select>
//                 </Field>
//               </div>

//               <Field label="Message">
//                 <textarea
//                   className="input min-h-[120px]"
//                   value={form.message}
//                   onChange={(e) => setForm({ ...form, message: e.target.value })}
//                   placeholder="Tell us your goals, timeline, and any details…"
//                 />
//               </Field>

//               <button
//                 disabled={!canSubmit || status === "loading"}
//                 className="group relative w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50"
//               >
//                 {status === "loading" ? "Sending..." : "Send request"}
//                 <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-[92%] bg-accent/40" />
//               </button>

//               {status === "success" && (
//                 <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
//                   Sent successfully. We’ll contact you shortly.
//                 </div>
//               )}

//               {status === "error" && (
//                 <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
//                   {error}
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </section>

//       <StyleHelpers />
//     </main>
//   );
// }

// function Field({ label, children }) {
//   return (
//     <label className="block space-y-2">
//       <span className="text-sm font-medium text-foreground">{label}</span>
//       {children}
//     </label>
//   );
// }

// // Simple input styles, now wired to theme tokens
// function StyleHelpers() {
//   return (
//     <style>{`
//       .input {
//         width: 100%;
//         border-radius: 16px;
//         border: 1px solid hsl(var(--border));
//         background: white;
//         padding: 12px 14px;
//         font-size: 14px;
//         color: hsl(var(--foreground));
//         outline: none;
//       }
//       .input:focus {
//         border-color: hsl(var(--primary));
//         box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.06);
//       }
//     `}</style>
//   );
// }
