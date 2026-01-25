import Link from "next/link";
import CountryExplorer from "./CountryExplorer";

const COUNTRY_META = {
  uk: { name: "United Kingdom", flag: "/images/flags/gb.png" },
  ireland: { name: "Ireland", flag: "/images/flags/ireland.png" },
  canada: { name: "Canada", flag: "/images/flags/canada.png" },
  usa: { name: "United States", flag: "/images/flags/united-states.png" },
  germany: { name: "Germany", flag: "/images/flags/germany.png" },
  france: { name: "France", flag: "/images/flags/france.png" },
  italy: { name: "Italy", flag: "/images/flags/italy.png" },
  spain: { name: "Spain", flag: "/images/flags/spain.png" },
  // add more...
};

export default async function CountryPage({ params }) {
  const { country: key } = await params; // ✅ unwrap the Promise
  const meta = COUNTRY_META[key];

  if (!meta) {
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-2xl font-semibold text-foreground">Destination not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Please go back and select a supported country.
          </p>
          <Link href="/education-travel" className="mt-6 inline-block text-sm font-semibold text-primary">
            ← Back
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-semibold text-foreground">Study in {meta.name}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Choose level + intake, then browse universities.
        </p>

        <div className="mt-10">
          <CountryExplorer countryKey={key} countryName={meta.name} flagSrc={meta.flag} />
        </div>
      </section>
    </main>
  );
}
