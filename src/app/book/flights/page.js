import { Suspense } from "react";
import FlightsClient from "./FlightsClient";

export default function FlightsPage() {
  return (
    <Suspense fallback={<FlightsLoading />}>
      <FlightsClient />
    </Suspense>
  );
}

function FlightsLoading() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-border bg-zinc-50 p-6">
          <div className="text-sm font-semibold text-foreground">Loading…</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Preparing flight request form.
          </p>
        </div>
      </section>
    </main>
  );
}


// "use client";

// import { useMemo, useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// const heardAboutOptions = [
//   "Instagram",
//   "TikTok",
//   "Facebook",
//   "Google Search",
//   "WhatsApp",
//   "Friend / Referral (Person)",
//   "Returning Client",
//   "Other",
// ];

// export default function FlightsBookingPage() {
//   const sp = useSearchParams();

//   const prefill = {
//     tripType: sp.get("tripType") || "",
//     flightType: sp.get("flightType") || "",
//     from: sp.get("from") || "",
//     to: sp.get("to") || "",
//     departDate: sp.get("departDate") || "",
//     returnDate: sp.get("returnDate") || "",
//     passengers: sp.get("passengers") || "1",
//     cabin: sp.get("cabin") || "",
//     airline: sp.get("airline") || "",
//     budget: sp.get("budget") || "",
//   };

//   const [status, setStatus] = useState("idle");
//   const [error, setError] = useState("");

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "Local & International Flight Booking",
//     destination: prefill.to || "Other",
//     heardAbout: heardAboutOptions[0],
//     referralName: "",
//     message: "",
//   });

//   useEffect(() => {
//     const lines = [
//       `Flight Type: ${prefill.flightType || "-"}`,
//       `Trip Type: ${prefill.tripType || "-"}`,
//       `From: ${prefill.from || "-"}`,
//       `To: ${prefill.to || "-"}`,
//       `Departure Date: ${prefill.departDate || "-"}`,
//       `Return Date: ${prefill.tripType === "Round trip" ? (prefill.returnDate || "-") : "N/A"}`,
//       `Passengers: ${prefill.passengers || "1"}`,
//       `Cabin: ${prefill.cabin || "-"}`,
//       `Airline preference: ${prefill.airline || "No preference"}`,
//       `Budget: ${prefill.budget || "Not specified"}`,
//       "",
//       "Additional notes:",
//     ].join("\n");

//     setForm((prev) => ({
//       ...prev,
//       destination: prefill.to || prev.destination || "Other",
//       message: prev.message?.trim().length ? prev.message : lines,
//     }));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     prefill.tripType,
//     prefill.flightType,
//     prefill.from,
//     prefill.to,
//     prefill.departDate,
//     prefill.returnDate,
//     prefill.passengers,
//     prefill.cabin,
//     prefill.airline,
//     prefill.budget,
//   ]);

//   const needsReferral =
//     form.heardAbout === "Friend / Referral (Person)" || form.heardAbout === "Other";

//   const canSubmit = useMemo(() => {
//     const requiredOk = ["name", "email", "phone", "message", "heardAbout"].every(
//       (k) => String(form[k]).trim().length > 0
//     );
//     if (!requiredOk) return false;
//     if (needsReferral && String(form.referralName).trim().length === 0) return false;
//     return true;
//   }, [form, needsReferral]);

//   async function onSubmit(e) {
//     e.preventDefault();
//     setStatus("loading");
//     setError("");

//     try {
//       const payload = {
//         ...form,
//         prefill, // so your email includes exact travel details too
//       };

//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json().catch(() => ({}));
//       if (!res.ok) {
//         setStatus("error");
//         setError(data?.error || "Something went wrong. Try again.");
//         return;
//       }

//       setStatus("success");
//     } catch {
//       setStatus("error");
//       setError("Network error. Please try again.");
//     }
//   }

//   return (
//     <main className="bg-white">
//       <section className="mx-auto max-w-3xl px-4 py-14">
//         <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//           <span className="h-2 w-2 rounded-full bg-accent" />
//           Flight Booking Request
//         </div>

//         <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
//           Confirm details & submit
//         </h1>

//         <p className="mt-2 text-sm text-muted-foreground">
//           Your flight details are pre-filled. Add your contact info and submit — we’ll respond with options.
//         </p>

//         <div className="mt-6 rounded-3xl border border-border bg-zinc-50 p-5 text-sm text-muted-foreground">
//           <div><b>Type:</b> {prefill.flightType || "-"}</div>
//           <div><b>Trip:</b> {prefill.tripType || "-"}</div>
//           <div><b>From:</b> {prefill.from || "-"}</div>
//           <div><b>To:</b> {prefill.to || "-"}</div>
//           <div><b>Departure:</b> {prefill.departDate || "-"}</div>
//           {prefill.tripType === "Round trip" && (
//             <div><b>Return:</b> {prefill.returnDate || "-"}</div>
//           )}
//           <div><b>Passengers:</b> {prefill.passengers || "1"}</div>
//           <div><b>Cabin:</b> {prefill.cabin || "-"}</div>
//           <div><b>Airline:</b> {prefill.airline || "No preference"}</div>
//         </div>

//         <form onSubmit={onSubmit} className="mt-8 space-y-4">
//           <Field label="Name">
//             <input
//               className="input"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               placeholder="Your full name"
//             />
//           </Field>

//           <Field label="Email">
//             <input
//               className="input"
//               type="email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               placeholder="you@example.com"
//             />
//           </Field>

//           <Field label="Phone / WhatsApp">
//             <input
//               className="input"
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               placeholder="+234..."
//             />
//           </Field>

//           <Field label="How did you hear about us?">
//             <select
//               className="input"
//               value={form.heardAbout}
//               onChange={(e) => {
//                 const next = e.target.value;
//                 setForm((prev) => ({
//                   ...prev,
//                   heardAbout: next,
//                   referralName:
//                     next === "Friend / Referral (Person)" || next === "Other"
//                       ? prev.referralName
//                       : "",
//                 }));
//               }}
//             >
//               {heardAboutOptions.map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>
//           </Field>

//           {needsReferral && (
//             <Field
//               label={form.heardAbout === "Other" ? "Please specify" : "Referral name (who referred you?)"}
//             >
//               <input
//                 className="input"
//                 value={form.referralName}
//                 onChange={(e) => setForm({ ...form, referralName: e.target.value })}
//                 placeholder={form.heardAbout === "Other" ? "Where did you find us?" : "e.g., Chinedu Okafor"}
//               />
//             </Field>
//           )}

//           <Field label="Message / extra notes">
//             <textarea
//               className="input min-h-[180px]"
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//             />
//           </Field>

//           <button
//             disabled={!canSubmit || status === "loading"}
//             className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50"
//           >
//             {status === "loading" ? "Sending..." : "Submit flight request"}
//           </button>

//           {status === "success" && (
//             <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
//               Sent successfully. We’ll contact you shortly.
//             </div>
//           )}

//           {status === "error" && (
//             <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
//               {error}
//             </div>
//           )}
//         </form>

//         <div className="mt-8 flex flex-wrap gap-3">
//           <Link href="/flights" className="text-sm font-semibold text-primary">
//             ← Back to Flight Details
//           </Link>
//           <Link href="/services" className="text-sm font-semibold text-primary">
//             Back to Services →
//           </Link>
//         </div>

//         <style>{`
//           .input {
//             width: 100%;
//             border-radius: 16px;
//             border: 1px solid hsl(var(--border));
//             background: white;
//             padding: 12px 14px;
//             font-size: 14px;
//             color: hsl(var(--foreground));
//             outline: none;
//           }
//           .input::placeholder {
//             color: rgba(113,113,122,0.9);
//           }
//           .input:focus {
//             border-color: hsl(var(--primary));
//             box-shadow: 0 0 0 4px rgba(0,0,0,0.06);
//           }
//           select.input {
//             padding-right: 34px;
//           }
//         `}</style>
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
