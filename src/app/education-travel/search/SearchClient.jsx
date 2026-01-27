"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// ✅ NEW: use array dataset for search
import { UNIVERSITIES_LIST } from "@/data/universities";

const COUNTRIES = [
  { key: "uk", label: "United Kingdom" },
  { key: "ireland", label: "Ireland" },
  { key: "canada", label: "Canada" },
  { key: "usa", label: "United States" },
  { key: "germany", label: "Germany" },
  { key: "france", label: "France" },
  { key: "italy", label: "Italy" },
  { key: "spain", label: "Spain" },
];

const LEVELS = [
  { value: "foundation", label: "Foundation" },
  { value: "undergrad", label: "Undergraduate" },
  { value: "masters", label: "Masters" },
  { value: "phd", label: "PhD" },
];

const INTAKES = [
  { value: "fall", label: "Fall" },
  { value: "winter", label: "Winter" },
  { value: "spring", label: "Spring" },
  { value: "summer", label: "Summer" },
];

const FIELDS = [
  "Nursing",
  "Data Science",
  "Business",
  "Public Health",
  "Computer Science",
  "Engineering",
  "Law",
  "Other",
];

export default function SearchClient() {
  const [country, setCountry] = useState("");
  const [level, setLevel] = useState("");
  const [intake, setIntake] = useState("");
  const [field, setField] = useState("");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const list = Array.isArray(UNIVERSITIES_LIST) ? UNIVERSITIES_LIST : [];

    return list
      .filter((u) => (country ? norm(u.country) === norm(country) : true))
      .filter((u) => (level ? (u.levels || []).map(norm).includes(norm(level)) : true))
      .filter((u) => (intake ? (u.intakes || []).map(norm).includes(norm(intake)) : true))
      .filter((u) => {
        if (!field) return true;

        // "Other" means: allow results but don't over-filter hard
        if (norm(field) === "other") return true;

        return (u.fields || []).map(norm).includes(norm(field));
      })
      .filter((u) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
          String(u.name || "").toLowerCase().includes(q) ||
          String(u.city || "").toLowerCase().includes(q)
        );
      })
      .slice(0, 36);
  }, [country, level, intake, field, query]);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Study Search Tool
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
          Find Your Ideal Course & Institution
        </h1>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Search by country, degree level, and course/field of study to view suitable institutions matched to your goals.
        </p>

        {/* Search bar */}
        <div className="mt-8 rounded-3xl border border-border bg-white p-5 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px_180px_120px]">
            <input
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search universities (e.g., University of…, Toronto, London)"
            />

            <select className="input" value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="">Country</option>
              {COUNTRIES.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>

            <select className="input" value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">Degree Level</option>
              {LEVELS.map((x) => (
                <option key={x.value} value={x.value}>
                  {x.label}
                </option>
              ))}
            </select>

            <select className="input" value={field} onChange={(e) => setField(e.target.value)}>
              <option value="">Course / Field</option>
              {FIELDS.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>

            <select className="input" value={intake} onChange={(e) => setIntake(e.target.value)}>
              <option value="">Intake</option>
              {INTAKES.map((x) => (
                <option key={x.value} value={x.value}>
                  {x.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground">
              Showing <b className="text-foreground">{results.length}</b> results
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setCountry("");
                  setLevel("");
                  setIntake("");
                  setField("");
                  setQuery("");
                }}
                className="rounded-2xl border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                Reset
              </button>

              <Link
                href="/education-travel"
                className="rounded-2xl border border-accent/60 bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
              >
                ← Back to Education
              </Link>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((u) => {
            const href = `/book/education?country=${encodeURIComponent(u.country || "")}&level=${encodeURIComponent(
              level || (u.levels?.[0] || "")
            )}&intake=${encodeURIComponent(intake || (u.intakes?.[0] || ""))}&university=${encodeURIComponent(
              u.name || ""
            )}`;

            return (
              <Link
                key={`${u.country}-${u.name}`}
                href={href}
                className="rounded-3xl border border-border bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="text-sm font-semibold text-foreground">{u.name}</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {prettyCountry(u.country)} {u.city ? `• ${u.city}` : ""}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(u.levels || []).slice(0, 3).map((x) => (
                    <span key={x} className="rounded-full border border-accent/30 bg-white px-3 py-1 text-xs text-foreground">
                      {prettyLevel(x)}
                    </span>
                  ))}
                  {(u.intakes || []).slice(0, 2).map((x) => (
                    <span key={x} className="rounded-full border border-border bg-zinc-50 px-3 py-1 text-xs text-foreground">
                      {prettyIntake(x)}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm font-semibold text-primary">
                  Select & continue →
                </div>
              </Link>
            );
          })}
        </div>

        {results.length === 0 && (
          <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6 text-sm text-muted-foreground">
            No results found. Try changing filters or clearing the search.
          </div>
        )}

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
      </section>
    </main>
  );
}

function norm(s) {
  return String(s || "").trim().toLowerCase();
}

function prettyCountry(key) {
  const map = {
    uk: "United Kingdom",
    ireland: "Ireland",
    canada: "Canada",
    usa: "United States",
    germany: "Germany",
    france: "France",
    italy: "Italy",
    spain: "Spain",
  };
  return map[String(key || "").toLowerCase()] || key || "";
}

function prettyLevel(x) {
  const k = norm(x);
  if (k === "undergrad") return "Undergraduate";
  if (k === "masters") return "Masters";
  if (k === "phd") return "PhD";
  if (k === "foundation") return "Foundation";
  return x;
}

function prettyIntake(x) {
  const k = norm(x);
  if (k === "fall") return "Fall";
  if (k === "winter") return "Winter";
  if (k === "spring") return "Spring";
  if (k === "summer") return "Summer";
  return x;
}


// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";

// // ✅ Use your existing data file
// // Update this import path if yours is different.
// import { UNIVERSITIES_LIST } from "@/data/universities";

// const COUNTRIES = [
//   { key: "uk", label: "United Kingdom" },
//   { key: "ireland", label: "Ireland" },
//   { key: "canada", label: "Canada" },
//   { key: "usa", label: "United States" },
//   { key: "germany", label: "Germany" },
//   { key: "france", label: "France" },
//   { key: "italy", label: "Italy" },
//   { key: "spain", label: "Spain" },
// ];

// // const LEVELS = ["Foundation", "Undergraduate", "Masters", "PhD"];
// // const INTAKES = ["Fall", "Winter", "Spring", "Summer"];

// const LEVELS = [
//     { value: "foundation", label: "Foundation" },
//     { value: "undergrad", label: "Undergraduate" },
//     { value: "masters", label: "Masters" },
//     { value: "phd", label: "PhD" },
//   ];
  
// const INTAKES = [
//     { value: "fall", label: "Fall" },
//     { value: "winter", label: "Winter" },
//     { value: "spring", label: "Spring" },
//     { value: "summer", label: "Summer" },
//   ];

// const FIELDS = [
//   "Nursing",
//   "Data Science",
//   "Business Management",
//   "Public Health",
//   "Computer Science",
//   "Engineering",
//   "Law",
//   "Other",
// ];

// export default function SearchClient() {
//   const [country, setCountry] = useState("");
//   const [level, setLevel] = useState("");
//   const [intake, setIntake] = useState("");
//   const [field, setField] = useState("");
//   const [query, setQuery] = useState("");

//   const results = useMemo(() => {
//     const list = Array.isArray(universities) ? universities : [];

//     // NOTE:
//     // This assumes each university object looks like something like:
//     // { country: "uk", name: "University of XYZ", levels: ["Masters"], intakes: ["Fall"], fields: ["Nursing"] }
//     // If your schema differs, tell me your universities.js structure and I’ll adapt instantly.

//     return list
//       .filter((u) => (country ? String(u.country).toLowerCase() === country : true))
//       .filter((u) => (level ? (u.levels || []).map(norm).includes(norm(level)) : true))
//       .filter((u) => (intake ? (u.intakes || []).map(norm).includes(norm(intake)) : true))
//       .filter((u) => (field ? (u.fields || []).map(norm).includes(norm(field)) : true))
//       .filter((u) => {
//         if (!query.trim()) return true;
//         const q = query.toLowerCase();
//         return (
//           String(u.name || "").toLowerCase().includes(q) ||
//           String(u.city || "").toLowerCase().includes(q) ||
//           String(u.state || "").toLowerCase().includes(q)
//         );
//       })
//       .slice(0, 36);
//   }, [country, level, intake, field, query]);

//   return (
//     <main className="bg-white">
//       <section className="mx-auto max-w-6xl px-4 py-14">
//         <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
//           <span className="h-2 w-2 rounded-full bg-accent" />
//           Study Search Tool
//         </div>

//         <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
//           Find Your Ideal Course & Institution
//         </h1>

//         <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
//           Search by country, degree level, and course/field of study to view suitable institutions matched to your goals.
//         </p>

//         {/* Search bar */}
//         <div className="mt-8 rounded-3xl border border-border bg-white p-5 shadow-sm">
//           <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px_180px_120px]">
//             <input
//               className="input"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search universities (e.g., University of…, Toronto, London)"
//             />

//             <select className="input" value={country} onChange={(e) => setCountry(e.target.value)}>
//               <option value="">Country</option>
//               {COUNTRIES.map((c) => (
//                 <option key={c.key} value={c.key}>
//                   {c.label}
//                 </option>
//               ))}
//             </select>

//             <select className="input" value={level} onChange={(e) => setLevel(e.target.value)}>
//               <option value="">Degree Level</option>
//               {LEVELS.map((x) => (
//                 <option key={x} value={x}>
//                   {x}
//                 </option>
//               ))}
//             </select>

//             <select className="input" value={field} onChange={(e) => setField(e.target.value)}>
//               <option value="">Course / Field</option>
//               {FIELDS.map((x) => (
//                 <option key={x} value={x}>
//                   {x}
//                 </option>
//               ))}
//             </select>

//             <select className="input" value={intake} onChange={(e) => setIntake(e.target.value)}>
//               <option value="">Intake</option>
//               {INTAKES.map((x) => (
//                 <option key={x} value={x}>
//                   {x}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
//             <div className="text-sm text-muted-foreground">
//               Showing <b className="text-foreground">{results.length}</b> results
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setCountry("");
//                   setLevel("");
//                   setIntake("");
//                   setField("");
//                   setQuery("");
//                 }}
//                 className="rounded-2xl border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
//               >
//                 Reset
//               </button>

//               <Link
//                 href="/education-travel"
//                 className="rounded-2xl border border-accent/60 bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-zinc-50"
//               >
//                 ← Back to Education
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Results */}
//         <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {results.map((u) => {
//             const href = `/book/education?country=${encodeURIComponent(u.country || "")}&level=${encodeURIComponent(
//               level || (u.levels?.[0] || "")
//             )}&intake=${encodeURIComponent(intake || (u.intakes?.[0] || ""))}&university=${encodeURIComponent(
//               u.name || ""
//             )}`;

//             return (
//               <Link
//                 key={`${u.country}-${u.name}`}
//                 href={href}
//                 className="rounded-3xl border border-border bg-white p-5 shadow-sm transition hover:shadow-md"
//               >
//                 <div className="text-sm font-semibold text-foreground">{u.name}</div>
//                 <div className="mt-2 text-sm text-muted-foreground">
//                   {prettyCountry(u.country)} {u.city ? `• ${u.city}` : ""}
//                 </div>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {(u.levels || []).slice(0, 3).map((x) => (
//                     <span key={x} className="rounded-full border border-accent/30 bg-white px-3 py-1 text-xs text-foreground">
//                       {x}
//                     </span>
//                   ))}
//                   {(u.intakes || []).slice(0, 2).map((x) => (
//                     <span key={x} className="rounded-full border border-border bg-zinc-50 px-3 py-1 text-xs text-foreground">
//                       {x}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-4 text-sm font-semibold text-primary">
//                   Select & continue →
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {results.length === 0 && (
//           <div className="mt-8 rounded-3xl border border-border bg-zinc-50 p-6 text-sm text-muted-foreground">
//             No results found. Try changing filters or clearing the search.
//           </div>
//         )}

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
//           .input:focus {
//             border-color: hsl(var(--primary));
//             box-shadow: 0 0 0 4px rgba(0,0,0,0.06);
//           }
//         `}</style>
//       </section>
//     </main>
//   );
// }

// function norm(s) {
//   return String(s || "").trim().toLowerCase();
// }

// function prettyCountry(key) {
//   const map = {
//     uk: "United Kingdom",
//     ireland: "Ireland",
//     canada: "Canada",
//     usa: "United States",
//     germany: "Germany",
//     france: "France",
//     italy: "Italy",
//     spain: "Spain",
//   };
//   return map[String(key || "").toLowerCase()] || key || "";
// }
