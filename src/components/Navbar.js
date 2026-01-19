import Link from "next/link";
import Image from "next/image";
import { ButtonPrimary } from "@/components/BrandUI";

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Visa & Immigration", href: "/visa-immigration" },
  { label: "Education & Travel", href: "/education-travel" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
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
            <div className="text-sm font-semibold text-foreground">
              DiAnixSquare
            </div>
            <div className="text-xs text-muted-foreground">
              International Agency
            </div>
          </div>
        </Link>

        {/* Navigation */}
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

        {/* CTA */}
        <div className="flex items-center gap-2">
        <ButtonPrimary
            href="/book"
            className="!bg-[var(--accent)] !text-[var(--accent-foreground)] hover:opacity-95"
            >
            Book Consultation
        </ButtonPrimary>

          {/* Blue Book Button in navbar below, gold above */}
          {/* <ButtonPrimary href="/book" className="px-4 py-2">
            Book Consultation
          </ButtonPrimary> */}
        </div>
      </div>

      {/* gold hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
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
//     <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
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
//             <div className="text-sm font-semibold text-zinc-900">DiAnixSquare</div>
//             <div className="text-xs text-zinc-500">International Agency</div>
//           </div>
//         </Link>

//         <nav className="hidden items-center gap-6 md:flex">
//           {nav.map((x) => (
//             <Link
//               key={x.href}
//               href={x.href}
//               className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
//             >
//               {x.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-2">
//           <ButtonPrimary href="/book" className="px-4 py-2">
//             Book Consultation
//           </ButtonPrimary>
//         </div>
//       </div>

//       {/* subtle brand accent line */}
//       <div className="h-px w-full bg-[oklch(var(--brand2))/0.22]" />
//     </header>
//   );
// }

