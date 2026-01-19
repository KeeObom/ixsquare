"use client";

import Image from "next/image";

export default function WhatsAppFloat() {
  const phone = "2349049279525"; // no +
  const url = `https://wa.me/${phone}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full bg-[#25D366]
        shadow-lg transition
        hover:scale-105
      "
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp"
        width={28}
        height={28}
        priority
      />
    </a>
  );
}



// "use client";

// export default function WhatsAppFloat() {
//   const phone = "2349049279525"; // remove +
//   const url = `https://wa.me/${phone}`;

//   return (
//     <a
//       href={url}
//       target="_blank"
//       rel="noreferrer"
//       className="hidden md:inline-flex rounded-2xl border border-[oklch(var(--brand2))] bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
//       // className="fixed bottom-5 right-5 z-50 rounded-full bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20"
//       aria-label="Chat with us on WhatsApp"
//     >
//       WhatsApp
//     </a>
//   );
// }
