"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ButtonPrimary } from "@/components/BrandUI";

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Visa & Immigration", href: "/visa-immigration" },
  { label: "Education", href: "/education-travel" },
  { label: "Tourism", href: "/travel" },
  { label: "Flight Booking", href: "/flight" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when moving to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false); // md breakpoint
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Optional: close on ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-9 w-9 overflow-hidden rounded-xl bg-white">
            <Image
              src="/images/dianixsquare_logo.png"
              alt="DiAnixSquare logo"
              fill
              className="object-contain"
              priority
            />
          </span>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-foreground">DiAnixSquare</div>
            <div className="text-xs text-muted-foreground">International Agency</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              className="
                relative text-sm font-medium text-muted-foreground
                transition hover:text-foreground
                after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
                after:bg-accent after:transition-all
                hover:after:w-full
              "
            >
              {x.label}
            </Link>
          ))}
        </nav>

        {/* Right side: CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <ButtonPrimary
            href="/book"
            className="!bg-[var(--accent)] !text-[var(--accent-foreground)] hover:opacity-95"
          >
            Book Consultation
          </ButtonPrimary>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-white text-foreground transition hover:bg-zinc-50"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* gold hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden border-t border-border bg-white/95 backdrop-blur transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="grid gap-2">
            {nav.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground transition hover:bg-zinc-50"
              >
                {x.label}
              </Link>
            ))}

            {/* Optional extra quick action */}
            <a
              href="https://wa.me/2349049279525"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent/15"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


// import Link from "next/link";
// import Image from "next/image";
// import { ButtonPrimary } from "@/components/BrandUI";

// const nav = [
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Visa & Immigration", href: "/visa-immigration" },
//   { label: "Education & Travel", href: "/education-travel" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <span className="relative h-9 w-9 overflow-hidden rounded-xl bg-white">
//             <Image
//               src="/images/dianixsquare_logo.png"
//               alt="DiAnixSquare logo"
//               fill
//               className="object-contain"
//               priority
//             />
//           </span>

//           <div className="leading-tight">
//             <div className="text-sm font-semibold text-foreground">
//               DiAnixSquare
//             </div>
//             <div className="text-xs text-muted-foreground">
//               International Agency
//             </div>
//           </div>
//         </Link>

//         {/* Navigation */}
//         <nav className="hidden items-center gap-6 md:flex">
//           {nav.map((x) => (
//             <Link
//               key={x.href}
//               href={x.href}
//               className="
//                 relative text-sm font-medium text-muted-foreground
//                 transition hover:text-foreground
//                 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
//                 after:bg-accent after:transition-all
//                 hover:after:w-full
//               "
//             >
//               {x.label}
//             </Link>
//           ))}
//         </nav>

//         {/* CTA */}
//         <div className="flex items-center gap-2">
//         <ButtonPrimary
//             href="/book"
//             className="!bg-[var(--accent)] !text-[var(--accent-foreground)] hover:opacity-95"
//             >
//             Book Consultation
//         </ButtonPrimary>

//           {/* Blue Book Button in navbar below, gold above */}
//           {/* <ButtonPrimary href="/book" className="px-4 py-2">
//             Book Consultation
//           </ButtonPrimary> */}
//         </div>
//       </div>

//       {/* gold hairline accent */}
//       <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
//     </header>
//   );
// }

