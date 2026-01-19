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

  const canSubmit = useMemo(() => {
    return Object.values(form).every((v) => String(v).trim().length > 0);
  }, [form]);

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
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: Bold modern intro */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Consultation & Inquiry
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Move beyond borders with confidence.
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Tell us what you need and we’ll guide you through the best pathway,
              documentation, timelines, and next steps.
            </p>

            <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-zinc-50 p-6">
              <div className="text-sm font-medium text-foreground">
                What happens next
              </div>

              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>We review your request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>We contact you via WhatsApp/phone/email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>We recommend the best pathway and required documents</span>
                </li>
              </ul>

              <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

              <p className="text-xs text-muted-foreground">
                We do not guarantee approvals. Decisions are made by relevant authorities.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="mb-4">
              <div className="text-sm font-semibold text-foreground">Send an inquiry</div>
              <p className="mt-1 text-sm text-muted-foreground">
                This request is sent directly to{" "}
                <span className="font-semibold text-primary">info@dianixsquare.com</span>.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
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
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us your goals, timeline, and any details…"
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
            </form>
          </div>
        </div>
      </section>

      <StyleHelpers />
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

// Simple input styles, now wired to theme tokens
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
        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.06);
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
//             <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-zinc-700">
//               <span className="h-2 w-2 rounded-full bg-zinc-900" />
//               Consultation & Inquiry
//             </div>

//             <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
//               Move beyond borders with confidence.
//             </h1>
//             <p className="mt-4 text-lg text-zinc-600">
//               Tell us what you need and we’ll guide you through the best pathway,
//               documentation, timelines, and next steps.
//             </p>

//             <div className="mt-8 grid gap-3 rounded-2xl border bg-zinc-50 p-6">
//               <div className="text-sm font-medium text-zinc-900">What happens next</div>
//               <ul className="space-y-2 text-sm text-zinc-700">
//                 <li>1) We review your request</li>
//                 <li>2) We contact you via WhatsApp/phone/email</li>
//                 <li>3) We recommend the best pathway and required documents</li>
//               </ul>
//               <p className="text-xs text-zinc-500">
//                 We do not guarantee approvals. Decisions are made by relevant authorities.
//               </p>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div className="rounded-3xl border bg-white p-6 shadow-sm">
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
//                 className="group relative w-full rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition disabled:opacity-50"
//               >
//                 {status === "loading" ? "Sending..." : "Send request"}
//                 <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-[92%] bg-white/20" />
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
//       <span className="text-sm font-medium text-zinc-900">{label}</span>
//       {children}
//     </label>
//   );
// }

// // Tailwind "input" helper via global style injection (simple + quick).
// // You can move these into globals.css later.
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
