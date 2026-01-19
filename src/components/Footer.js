import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-base font-semibold text-foreground">
              DiAnixSquare International Agency
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Trust. Transparency. Global Access.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Queens Park Estate by Eze Wali Trade Center, Port Harcourt
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-sm font-semibold text-foreground">
              Quick Links
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link href="/services" className="text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/disclaimer" className="text-muted-foreground hover:text-primary">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-foreground">
              Contact
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              <a
                href="mailto:info@dianixsquare.com"
                className="text-muted-foreground hover:text-primary"
              >
                info@dianixsquare.com
              </a>

              <a
                href="tel:+2347026326003"
                className="text-muted-foreground hover:text-primary"
              >
                Call Center: 07026326003
              </a>

              <a
                href="https://wa.me/message/YGZ2HIIOHE7SJ1"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                WhatsApp: 09049279525
              </a>

              <div className="mt-2 flex gap-4 text-sm">
                <a
                  href="https://instagram.com/dianixsquare"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Instagram
                </a>
                <a
                  href="https://tiktok.com/@dianixsquare0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer strip */}
        <div className="mt-10 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-xs text-muted-foreground">
          DiAnixSquare International Agency provides advisory and support services
          only. Visa, admission, permanent residence, and citizenship decisions
          are made solely by relevant authorities and institutions. We do not
          influence or guarantee outcomes.
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} DiAnixSquare International Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="border-t bg-white">
//       <div className="mx-auto max-w-6xl px-4 py-12">
//         <div className="grid gap-10 md:grid-cols-3">
//           <div>
//             <div className="text-base font-semibold text-zinc-900">DiAnixSquare International Agency</div>
//             <p className="mt-3 text-sm text-zinc-600">
//               Trust. Transparency. Global Access.
//             </p>
//             <p className="mt-4 text-sm text-zinc-600">
//               Queens Park Estate by Eze Wali Trade Center, Port Harcourt
//             </p>
//           </div>

//           <div>
//             <div className="text-sm font-semibold text-zinc-900">Quick Links</div>
//             <div className="mt-3 grid gap-2 text-sm text-zinc-700">
//               <Link href="/services" className="hover:text-zinc-900">Services</Link>
//               <Link href="/about" className="hover:text-zinc-900">About</Link>
//               <Link href="/contact" className="hover:text-zinc-900">Contact</Link>
//               <Link href="/disclaimer" className="hover:text-zinc-900">Disclaimer</Link>
//             </div>
//           </div>

//           <div>
//             <div className="text-sm font-semibold text-zinc-900">Contact</div>
//             <div className="mt-3 grid gap-2 text-sm text-zinc-700">
//               <a href="mailto:info@dianixsquare.com" className="hover:text-zinc-900">info@dianixsquare.com</a>
//               <a href="tel:+2347026326003" className="hover:text-zinc-900">Call Center: 07026326003</a>
//               <a href="https://wa.me/message/YGZ2HIIOHE7SJ1" target="_blank" rel="noreferrer" className="hover:text-zinc-900">
//                 WhatsApp: 09049279525
//               </a>
//               <div className="mt-2 flex gap-3">
//                 <a href="https://instagram.com/dianixsquare" target="_blank" rel="noreferrer" className="hover:text-zinc-900">Instagram</a>
//                 <a href="https://tiktok.com/@dianixsquare0" target="_blank" rel="noreferrer" className="hover:text-zinc-900">TikTok</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 rounded-2xl border bg-zinc-50 p-4 text-xs text-zinc-600">
//           DiAnixSquare International Agency provides advisory and support services only. Visa, admission, permanent residence,
//           and citizenship decisions are made solely by relevant authorities and institutions. We do not influence or guarantee outcomes.
//         </div>

//         <div className="mt-6 text-xs text-zinc-500">
//           © {new Date().getFullYear()} DiAnixSquare International Agency. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
