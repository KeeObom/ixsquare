"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

/**
 * ✅ Add these 2 images to /public/images/contact/
 * - /images/contact/contact-hero.jpg    (clean travel/airport/desk vibe)
 * - /images/contact/office.jpg          (professional office / meeting / consultation)
 *
 * Unsplash search ideas:
 * - "travel agency consultation"
 * - "airport terminal modern"
 * - "customer service office"
 * - "passport laptop desk"
 */

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

export default function ContactPage() {
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
            src="/images/contact/contact-hero.jpg"
            alt="Contact DiAnixSquare"
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
            Contact Us
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Let’s plan your next step
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85">
            We’re ready to guide you through education, travel, and immigration pathways with clarity and compliance.
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

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="text-sm font-semibold text-foreground">Office Address</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Queens Park Estate by Eze Wali Trade Center, Port Harcourt
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://wa.me/message/YGZ2HIIOHE7SJ1"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-accent/60 bg-accent/10 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent/15"
                >
                  Chat on WhatsApp (Fastest)
                </a>

                <a
                  href="tel:+2347026326003"
                  className="rounded-2xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
                >
                  Call Center: 07026326003
                </a>

                <a
                  href="mailto:info@dianixsquare.com"
                  className="rounded-2xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
                >
                  Email: info@dianixsquare.com
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-zinc-50 p-5">
                <div className="text-sm font-semibold text-foreground">Social Media</div>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://instagram.com/dianixsquare"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:opacity-90"
                  >
                    Instagram: @dianixsquare
                  </a>
                  <a
                    href="https://tiktok.com/@dianixsquare0"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary hover:opacity-90"
                  >
                    TikTok: @dianixsquare0
                  </a>
                </div>
              </div>

              {/* IMAGE CARD */}
              <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white">
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/contact/office.jpg"
                    alt="Consultation support"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Professional support • Fast response
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-sm font-semibold text-foreground">What happens next</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>We review your request and reply via WhatsApp/phone/email.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>We recommend the best pathway and required documents.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>We guide next steps with clear timelines and expectations.</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground">
                    We do not guarantee approvals. Decisions are made solely by relevant authorities and institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Send an inquiry
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Tell us what you need
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                This will be sent directly to{" "}
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
                    placeholder="Tell us your goals, timeline, and any details…"
                  />
                </Field>

                <button
                  disabled={!canSubmit || status === "loading"}
                  className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send request"}
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

                <div className="rounded-2xl border border-accent/25 bg-accent/10 p-4 text-xs text-muted-foreground">
                  By submitting, you confirm the details provided are accurate to the best of your knowledge.
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

// export default function ContactPage() {
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

//   const canSubmit = useMemo(
//     () => Object.values(form).every((v) => String(v).trim().length > 0),
//     [form]
//   );

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
//     <main className="bg-white">
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         {/* Header pill */}
//         <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//           <span className="h-2 w-2 rounded-full bg-accent" />
//           Contact Us
//         </div>

//         <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
//           Get in touch
//         </h1>

//         <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
//           We are ready to guide you through your international journey. Reach us
//           via WhatsApp, call center, or email.
//         </p>

//         {/* Accent hairline */}
//         <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />

//         <div className="mt-10 grid gap-6 lg:grid-cols-2">
//           {/* Contact details */}
//           <div className="rounded-3xl border border-border bg-white p-7">
//             <div className="text-sm font-semibold text-foreground">
//               Office Address
//             </div>
//             <p className="mt-2 text-sm text-zinc-700">
//               Queens Park Estate by Eze Wali Trade Center, Port Harcourt
//             </p>

//             <div className="mt-6 grid gap-3">
//               <a
//                 href="https://wa.me/message/YGZ2HIIOHE7SJ1"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="rounded-2xl border border-accent/60 bg-accent/10 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent/15"
//               >
//                 Chat on WhatsApp (Fastest)
//               </a>

//               <a
//                 href="tel:+2347026326003"
//                 className="rounded-2xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
//               >
//                 Call Center: 07026326003
//               </a>

//               <a
//                 href="mailto:info@dianixsquare.com"
//                 className="rounded-2xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
//               >
//                 Email: info@dianixsquare.com
//               </a>
//             </div>

//             <div className="mt-8 rounded-2xl border border-border bg-zinc-50 p-5">
//               <div className="text-sm font-semibold text-foreground">
//                 Social Media
//               </div>
//               <div className="mt-3 flex flex-wrap gap-3 text-sm">
//                 <a
//                   href="https://instagram.com/dianixsquare"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="font-semibold text-primary hover:opacity-90"
//                 >
//                   Instagram: @dianixsquare
//                 </a>
//                 <a
//                   href="https://tiktok.com/@dianixsquare0"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="font-semibold text-primary hover:opacity-90"
//                 >
//                   TikTok: @dianixsquare0
//                 </a>
//               </div>
//             </div>

//             <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/10 p-5 text-sm">
//               <div className="font-semibold text-foreground">Call to Action</div>
//               <p className="mt-1 text-muted-foreground">
//                 Book a consultation today or chat with us instantly on WhatsApp.
//               </p>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
//             <div className="text-sm font-semibold text-foreground">
//               Send an inquiry
//             </div>
//             <p className="mt-2 text-sm text-muted-foreground">
//               This will be sent directly to{" "}
//               <span className="font-semibold text-primary">
//                 info@dianixsquare.com
//               </span>
//               .
//             </p>

//             <form onSubmit={onSubmit} className="mt-6 space-y-4">
//               <div className="grid gap-4 md:grid-cols-2">
//                 <Field label="Name">
//                   <input
//                     className="input"
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({ ...form, name: e.target.value })
//                     }
//                     placeholder="Your full name"
//                   />
//                 </Field>

//                 <Field label="Email">
//                   <input
//                     className="input"
//                     type="email"
//                     value={form.email}
//                     onChange={(e) =>
//                       setForm({ ...form, email: e.target.value })
//                     }
//                     placeholder="you@example.com"
//                   />
//                 </Field>
//               </div>

//               <Field label="Phone / WhatsApp">
//                 <input
//                   className="input"
//                   value={form.phone}
//                   onChange={(e) =>
//                     setForm({ ...form, phone: e.target.value })
//                   }
//                   placeholder="+234..."
//                 />
//               </Field>

//               <div className="grid gap-4 md:grid-cols-2">
//                 <Field label="Service interest">
//                   <select
//                     className="input"
//                     value={form.service}
//                     onChange={(e) =>
//                       setForm({ ...form, service: e.target.value })
//                     }
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
//                   onChange={(e) =>
//                     setForm({ ...form, message: e.target.value })
//                   }
//                   placeholder="Tell us your goals, timeline, and any details…"
//                 />
//               </Field>

//               <button
//                 disabled={!canSubmit || status === "loading"}
//                 className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50"
//               >
//                 {status === "loading" ? "Sending..." : "Send request"}
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

//         <StyleHelpers />
//       </section>
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
//         box-shadow: 0 0 0 4px rgba(0,0,0,0.06);
//       }
//     `}</style>
//   );
// }
