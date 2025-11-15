"use client";

import { useEffect, useRef } from "react";

export function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-10 sm:py-14">
      {/* Motif de fond décoratif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 opacity-5 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-300 to-purple-300 opacity-5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <SectionHeader />
        <PartnersCarousel />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Nos partenaires de confiance
      </h2>
      <p className="text-base text-gray-600">
        Nous collaborons avec les meilleures marques du secteur pour vous garantir
        des matériaux de qualité supérieure
      </p>
    </div>
  );
}

function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1; // Vitesse du défilement
    const scrollInterval = 30; // Intervalle en ms

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollAmount += scrollStep;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset quand on atteint la moitié (duplication des logos)
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, scrollInterval);

    // Pause au hover
    scrollContainer.addEventListener("mouseenter", () => clearInterval(interval));
    scrollContainer.addEventListener("mouseleave", () => {
      const newInterval = setInterval(scroll, scrollInterval);
      return () => clearInterval(newInterval);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Gradients de fade sur les côtés */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

      {/* Container de défilement */}
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden py-8"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplication des logos pour un défilement infini */}
        {[...PARTNERS, ...PARTNERS].map((partner, index) => (
          <PartnerLogo key={`${partner.name}-${index}`} {...partner} />
        ))}
      </div>
    </div>
  );
}

interface PartnerLogoProps {
  readonly name: string;
  readonly color: string;
}

function PartnerLogo({ name, color }: PartnerLogoProps) {
  return (
    <div className="group flex shrink-0 items-center justify-center">
      <div className="flex h-24 w-40 items-center justify-center rounded-xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:scale-110 hover:border-blue-400 hover:shadow-xl">
        <div className="text-center">
          <div
            className="mb-2 text-3xl font-bold transition-all duration-500 group-hover:scale-110"
            style={{ color }}
          >
            {name.substring(0, 2).toUpperCase()}
          </div>
          <p className="text-xs font-semibold text-gray-600 transition-colors duration-300 group-hover:text-blue-600">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

// Logos des partenaires (à remplacer par de vraies images)
const PARTNERS = [
  { name: "Isover", color: "#0066CC" },
  { name: "Rockwool", color: "#E31E24" },
  { name: "Knauf", color: "#005AA0" },
  { name: "Ursa", color: "#00A651" },
  { name: "Saint-Gobain", color: "#0066B3" },
  { name: "Actis", color: "#FF6B00" },
  { name: "Recticel", color: "#009FE3" },
  { name: "Soprema", color: "#005AA9" },
] as const;

