import SearchClient from "./SearchClient";

export const dynamic = "force-dynamic"; // ✅ prevents build/prerender issues

export default function EducationSearchPage() {
  return <SearchClient />;
}
