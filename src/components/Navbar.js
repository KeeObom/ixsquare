import Link from "next/link";

const nav = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Visa & Immigration", href: "/visa-immigration" }, // if top-level
    { label: "Education & Travel", href: "/education-travel" }, // if top-level
    { label: "Contact", href: "/contact" },
  ];
  


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white font-semibold">
            D
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-zinc-900">DiAnixSquare</div>
            <div className="text-xs text-zinc-500">International Agency</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((x) => (
            <Link key={x.href} href={x.href} className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
              {x.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/2349049279525"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-2xl border px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 md:inline-flex"
          >
            WhatsApp
          </a>
          <Link
            href="/book"
            className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
