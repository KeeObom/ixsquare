"use client";

export default function WhatsAppFloat() {
  const phone = "2349049279525"; // remove +
  const url = `https://wa.me/${phone}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20"
      aria-label="Chat with us on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
