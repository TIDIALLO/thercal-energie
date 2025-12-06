"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function PartnersSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
      <div className="absolute inset-0">
        <Image
          src="/images/thercal5.jpg"
          alt="Fond moderne - THERCAL ENERGIES"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/85 via-white/65 to-cyan-50/80" />
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
      <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold text-blue-500 ring-1 ring-blue-200">
        Partenaire exclusif
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Nos partenaires de confiance
      </h2>
      <p className="text-base text-gray-600">
        Une relation de confiance avec Tower-Echaf Isolation pour garantir des chantiers impeccables.
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
    const scrollStep = 0.4; // Vitesse plus lente
    const scrollInterval = 40;
    let interval: NodeJS.Timeout | null = null;

    const startScroll = () => {
      if (interval) return;
      interval = setInterval(() => {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }, scrollInterval);
    };

    const stopScroll = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    startScroll();
    scrollContainer.addEventListener("mouseenter", stopScroll);
    scrollContainer.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      scrollContainer.removeEventListener("mouseenter", stopScroll);
      scrollContainer.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Gradients de fade sur les côtés */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-white via-white/80 to-transparent" />

      {/* Container de défilement */}
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden py-8"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplication des logos pour un défilement infini */}
        {[...PARTNERS, ...PARTNERS].map((partner, index) => (
          <PartnerLogo key={`tower-${partner.id}-${index}`} id={partner.id} />
        ))}
      </div>
    </div>
  );
}

interface PartnerLogoProps {
  readonly id: number;
}

function PartnerLogo({ id }: PartnerLogoProps) {
  return (
    <div className="group flex shrink-0 items-center justify-center">
      <div className="flex h-28 w-48 items-center justify-center rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-lg transition-all duration-700 hover:-translate-y-2 hover:scale-110 hover:border-blue-400 hover:shadow-2xl">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/tower.png"
            alt="Tower-Echaf Isolation"
            width={160}
            height={60}
            className="h-12 w-auto object-contain drop-shadow-[0_8px_20px_rgba(15,118,110,0.25)] transition-transform duration-500 group-hover:scale-110"
            priority={id === 0}
          />
          <p className="text-xs font-semibold text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-blue-600">
            Tower-Echaf Isolation
          </p>
        </div>
      </div>
    </div>
  );
}

const PARTNERS = Array.from({ length: 8 }, (_, index) => ({ id: index }));

