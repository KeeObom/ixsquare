// /data/universities.js

/**
 * ✅ Recommended canonical dataset:
 * - Use UNIVERSITIES_LIST for search + filtering (best structure)
 * - UNIVERSITIES (map) is derived for backward compatibility with your current country flow
 *
 * Notes:
 * - country keys are lowercase: "uk", "canada", "usa", etc.
 * - levels are lowercase-friendly but displayed as Title Case in UI if you want
 * - intakes are normalized to: "fall", "winter", "spring", "summer"
 */

export const UNIVERSITIES_LIST = [
  // =========================
  // UK
  // =========================
  {
    country: "uk",
    name: "University of Manchester",
    city: "Manchester",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall", "spring"],
    fields: ["nursing", "data science", "business", "public health", "engineering"],
  },
  {
    country: "uk",
    name: "University of Birmingham",
    city: "Birmingham",
    levels: ["undergrad", "masters"],
    intakes: ["fall"],
    fields: ["business", "computer science", "law", "engineering", "public health"],
  },
  {
    country: "uk",
    name: "University of Leeds",
    city: "Leeds",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall", "spring"],
    fields: ["data science", "computer science", "engineering", "business"],
  },
  {
    country: "uk",
    name: "University of Glasgow",
    city: "Glasgow",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall", "spring"],
    fields: ["public health", "business", "engineering", "law"],
  },
  {
    country: "uk",
    name: "University of Nottingham",
    city: "Nottingham",
    levels: ["undergrad", "masters"],
    intakes: ["fall", "spring"],
    fields: ["nursing", "public health", "business", "computer science"],
  },

  // =========================
  // Canada
  // =========================
  {
    country: "canada",
    name: "University of Toronto",
    city: "Toronto",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall", "winter"],
    fields: ["data science", "computer science", "public health", "business", "engineering"],
  },
  {
    country: "canada",
    name: "University of Alberta",
    city: "Edmonton",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall", "winter"],
    fields: ["engineering", "computer science", "business", "public health"],
  },
  {
    country: "canada",
    name: "York University",
    city: "Toronto",
    levels: ["undergrad", "masters"],
    intakes: ["fall", "winter"],
    fields: ["business", "computer science", "law", "data science"],
  },
  {
    country: "canada",
    name: "Toronto Metropolitan University (TMU)",
    city: "Toronto",
    levels: ["undergrad", "masters"],
    intakes: ["fall", "winter"],
    fields: ["nursing", "business", "computer science", "public health"],
  },
  {
    country: "canada",
    name: "University of Waterloo",
    city: "Waterloo",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall", "winter", "spring"],
    fields: ["computer science", "data science", "engineering", "business"],
  },

  // =========================
  // USA
  // =========================
  {
    country: "usa",
    name: "Arizona State University",
    city: "Tempe",
    levels: ["undergrad", "masters"],
    intakes: ["fall", "spring"],
    fields: ["business", "computer science", "engineering", "data science"],
  },
  {
    country: "usa",
    name: "Northeastern University",
    city: "Boston",
    levels: ["undergrad", "masters"],
    intakes: ["fall", "spring"],
    fields: ["data science", "computer science", "business", "public health"],
  },
  {
    country: "usa",
    name: "University of Illinois Urbana-Champaign",
    city: "Champaign",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall", "spring"],
    fields: ["computer science", "engineering", "data science"],
  },
  {
    country: "usa",
    name: "University of South Florida",
    city: "Tampa",
    levels: ["undergrad", "masters"],
    intakes: ["fall", "spring", "summer"],
    fields: ["public health", "business", "computer science"],
  },

  // =========================
  // Ireland
  // =========================
  {
    country: "ireland",
    name: "University College Dublin (UCD)",
    city: "Dublin",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall", "spring"],
    fields: ["business", "data science", "computer science", "public health"],
  },
  {
    country: "ireland",
    name: "Trinity College Dublin",
    city: "Dublin",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall"],
    fields: ["computer science", "engineering", "business", "law"],
  },

  // =========================
  // Germany
  // =========================
  {
    country: "germany",
    name: "Technical University of Munich (TUM)",
    city: "Munich",
    levels: ["masters", "phd"],
    intakes: ["fall", "spring"],
    fields: ["engineering", "computer science", "data science"],
  },
  {
    country: "germany",
    name: "RWTH Aachen University",
    city: "Aachen",
    levels: ["masters", "phd"],
    intakes: ["fall", "spring"],
    fields: ["engineering", "computer science", "data science"],
  },

  // =========================
  // France
  // =========================
  {
    country: "france",
    name: "Université Paris-Saclay",
    city: "Paris",
    levels: ["masters", "phd"],
    intakes: ["fall"],
    fields: ["data science", "computer science", "engineering"],
  },
  {
    country: "france",
    name: "Université de Lille",
    city: "Lille",
    levels: ["undergrad", "masters"],
    intakes: ["fall"],
    fields: ["business", "computer science", "public health"],
  },

  // =========================
  // Italy
  // =========================
  {
    country: "italy",
    name: "University of Bologna",
    city: "Bologna",
    levels: ["undergrad", "masters", "phd"],
    intakes: ["fall"],
    fields: ["business", "law", "engineering", "public health"],
  },
  {
    country: "italy",
    name: "Sapienza University of Rome",
    city: "Rome",
    levels: ["undergrad", "masters"],
    intakes: ["fall"],
    fields: ["business", "engineering", "computer science"],
  },

  // =========================
  // Spain
  // =========================
  {
    country: "spain",
    name: "University of Barcelona",
    city: "Barcelona",
    levels: ["undergrad", "masters"],
    intakes: ["fall"],
    fields: ["business", "public health", "computer science"],
  },
  {
    country: "spain",
    name: "Universidad Autónoma de Madrid",
    city: "Madrid",
    levels: ["undergrad", "masters"],
    intakes: ["fall"],
    fields: ["business", "law", "public health"],
  },
];

/**
 * ✅ Backward-compatible structure (like your current file):
 * UNIVERSITIES = { uk: [{name, levels, intakes}], canada: [...], ... }
 * This is derived from UNIVERSITIES_LIST so you maintain ONE source of truth.
 */
export const UNIVERSITIES = UNIVERSITIES_LIST.reduce((acc, u) => {
  const key = u.country;
  if (!acc[key]) acc[key] = [];
  acc[key].push({
    name: u.name,
    levels: u.levels,
    intakes: u.intakes,
    // If your current country pages don't need these, fine. They’re safe to keep.
    city: u.city,
    fields: u.fields,
  });
  return acc;
}, {});


// // /data/universities.js
// export const UNIVERSITIES = {
//     uk: [
//       {
//         name: "University of Manchester",
//         levels: ["undergrad", "masters", "phd"],
//         intakes: ["fall", "spring"],
//       },
//       {
//         name: "University of Birmingham",
//         levels: ["undergrad", "masters"],
//         intakes: ["fall"],
//       },
//     ],
//     canada: [
//       {
//         name: "University of Toronto",
//         levels: ["undergrad", "masters", "phd"],
//         intakes: ["fall", "winter"],
//       },
//       {
//         name: "University of Alberta",
//         levels: ["undergrad", "masters"],
//         intakes: ["fall", "winter"],
//       },
//     ],
//     usa: [
//       {
//         name: "Arizona State University",
//         levels: ["undergrad", "masters"],
//         intakes: ["fall", "spring"],
//       },
//     ],
//   };
  