"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const flyers = [
  {
    src: "/images/event/qatar_package3.jpeg",
    alt: "DiAnixSquare Qatar Package",
  },
  {
    src: "/images/event/qatar_package2.jpeg",
    alt: "DiAnixSquare Qatar Travel Package",
  },
  {
    src: "/images/event/affordable_flight.jpeg",
    alt: "DiAnixSquare Affordable Flight Offer",
  },
];

export default function EventFlyers() {
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  // Close popup with Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedFlyer(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* FLYER SECTION */}
      <div>
        <div className="mb-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-3 py-1 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Current Offers
          </div>

          <h3 className="mt-3 text-xl font-semibold text-foreground">
            Explore our latest travel offers
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Tap any flyer to view the full details.
          </p>
        </div>

        {/* 3 FLYERS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flyers.map((flyer) => (
            <button
              key={flyer.src}
              type="button"
              onClick={() => setSelectedFlyer(flyer)}
              className="group relative overflow-hidden rounded-3xl border border-border bg-zinc-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[2/3] w-full">
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  fill
                  className="object-contain transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Small hover indicator */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-10 text-left opacity-0 transition group-hover:opacity-100">
                <span className="text-xs font-semibold text-white">
                  Click to enlarge
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* POPUP / MODAL */}
      {selectedFlyer && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedFlyer(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedFlyer(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-medium text-black shadow-lg transition hover:scale-105 md:right-8 md:top-8"
            aria-label="Close flyer"
          >
            ×
          </button>

          {/* Full flyer */}
          <div
            className="relative flex max-h-[92vh] max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedFlyer.src}
              alt={selectedFlyer.alt}
              width={1200}
              height={1800}
              className="h-auto max-h-[92vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}