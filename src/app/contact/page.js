"use client";

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
      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* Header pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Contact Us
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Get in touch
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          We are ready to guide you through your international journey. Reach us
          via WhatsApp, call center, or email.
        </p>

        {/* Accent hairline */}
        <div className="mt-8 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Contact details */}
          <div className="rounded-3xl border border-border bg-white p-7">
            <div className="text-sm font-semibold text-foreground">
              Office Address
            </div>
            <p className="mt-2 text-sm text-zinc-700">
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
              <div className="text-sm font-semibold text-foreground">
                Social Media
              </div>
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

            <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/10 p-5 text-sm">
              <div className="font-semibold text-foreground">Call to Action</div>
              <p className="mt-1 text-muted-foreground">
                Book a consultation today or chat with us instantly on WhatsApp.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-foreground">
              Send an inquiry
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              This will be sent directly to{" "}
              <span className="font-semibold text-primary">
                info@dianixsquare.com
              </span>
              .
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name">
                  <input
                    className="input"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your full name"
                  />
                </Field>

                <Field label="Email">
                  <input
                    className="input"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                  />
                </Field>
              </div>

              <Field label="Phone / WhatsApp">
                <input
                  className="input"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="+234..."
                />
              </Field>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Service interest">
                  <select
                    className="input"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
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
                    onChange={(e) =>
                      setForm({ ...form, destination: e.target.value })
                    }
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
                  className="input min-h-[120px]"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
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
            </form>
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
      .input:focus {
        border-color: hsl(var(--primary));
        box-shadow: 0 0 0 4px rgba(0,0,0,0.06);
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
//   "United Kingdom", "Ireland", "Canada", "USA", "Belize", "Hungary", "Malta",
//   "Germany", "Italy", "Portugal", "Spain", "Luxembourg", "Greece", "Switzerland",
//   "Finland", "Denmark", "Cyprus", "Brazil", "Russia", "South Africa", "France",
//   "India", "Other",
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

//   const canSubmit = useMemo(() => Object.values(form).every((v) => String(v).trim().length > 0), [form]);

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
//         <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm text-zinc-700">
//           <span className="h-2 w-2 rounded-full bg-zinc-900" />
//           Contact Us
//         </div>

//         <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
//           Get in touch
//         </h1>
//         <p className="mt-4 max-w-3xl text-lg text-zinc-600">
//           We are ready to guide you through your international journey. Reach us via WhatsApp, call center, or email.
//         </p>

//         <div className="mt-10 grid gap-6 lg:grid-cols-2">
//           {/* Contact details */}
//           <div className="rounded-3xl border p-7">
//             <div className="text-sm font-semibold text-zinc-900">Office Address</div>
//             <p className="mt-2 text-sm text-zinc-700">
//               Queens Park Estate by Eze Wali Trade Center, Port Harcourt
//             </p>

//             <div className="mt-6 grid gap-3">
//               <a
//                 href="https://wa.me/message/YGZ2HIIOHE7SJ1"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="rounded-2xl border bg-zinc-50 px-5 py-3 text-sm font-semibold text-zinc-900"
//               >
//                 Chat on WhatsApp (Fastest)
//               </a>

//               <a
//                 href="tel:+2347026326003"
//                 className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-zinc-900"
//               >
//                 Call Center: 07026326003
//               </a>

//               <a
//                 href="mailto:info@dianixsquare.com"
//                 className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-zinc-900"
//               >
//                 Email: info@dianixsquare.com
//               </a>
//             </div>

//             <div className="mt-8 rounded-2xl border bg-zinc-50 p-5">
//               <div className="text-sm font-semibold text-zinc-900">Social Media</div>
//               <div className="mt-3 flex flex-wrap gap-3 text-sm">
//                 <a
//                   href="https://instagram.com/dianixsquare"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="font-semibold text-zinc-900 hover:underline"
//                 >
//                   Instagram: @dianixsquare
//                 </a>
//                 <a
//                   href="https://tiktok.com/@dianixsquare0"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="font-semibold text-zinc-900 hover:underline"
//                 >
//                   TikTok: @dianixsquare0
//                 </a>
//               </div>
//             </div>

//             <div className="mt-8 rounded-2xl border bg-white p-5 text-sm text-zinc-700">
//               <div className="font-semibold text-zinc-900">Call to Action</div>
//               <p className="mt-1">
//                 Book a consultation today or chat with us instantly on WhatsApp.
//               </p>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="rounded-3xl border bg-white p-6 shadow-sm">
//             <div className="text-sm font-semibold text-zinc-900">Send an inquiry</div>
//             <p className="mt-2 text-sm text-zinc-600">
//               This will be sent directly to <span className="font-semibold">info@dianixsquare.com</span>.
//             </p>

//             <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                 </Field>

//                 <Field label="Destination country">
//                   <select
//                     className="input"
//                     value={form.destination}
//                     onChange={(e) => setForm({ ...form, destination: e.target.value })}
//                   >
//                     {destinations.map((d) => (
//                       <option key={d} value={d}>{d}</option>
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
//                 className="w-full rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-50"
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
//       <span className="text-sm font-medium text-zinc-900">{label}</span>
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
//         border: 1px solid rgb(228 228 231);
//         background: white;
//         padding: 12px 14px;
//         font-size: 14px;
//         color: rgb(24 24 27);
//         outline: none;
//       }
//       .input:focus {
//         border-color: rgb(24 24 27);
//         box-shadow: 0 0 0 4px rgba(24,24,27,0.08);
//       }
//     `}</style>
//   );
// }
