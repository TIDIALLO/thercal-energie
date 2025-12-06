 "use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#e0f2ff_45%,_#f8fbff_100%)] py-10 sm:py-16 lg:py-20">
      {/* Dégradés modernes en arrière-plan */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-20%] h-[460px] w-[460px] rounded-full bg-white opacity-80 blur-3xl" />
        <div className="absolute right-[-5%] bottom-[-25%] h-[420px] w-[420px] rounded-full bg-blue-100 opacity-70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.85),_rgba(219,234,254,0.4),_transparent_60%)]" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="animate-slide-in-left">
            <HeroContent />
          </div>
          <div className="animate-slide-in-right">
            <HeroImage />
          </div>
        </div>
      </div>
      <BackgroundPattern />
    </section>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <div className="space-y-5">
        <h1 className="space-y-2 group">
          <span className="block text-[clamp(2.5rem,5vw,3.7rem)] font-black tracking-tight text-slate-900 animate-fade-in-up">
            Isolation Thermique
          </span>
          <span className="relative inline-flex flex-wrap items-center gap-3 text-[clamp(2.2rem,4.6vw,3.4rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 animate-fade-in-up">
            de Tuyauteries Industrielles
            <span className="absolute -bottom-1 left-0 h-1 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-[0_0_20px_rgba(59,130,246,0.45)] transition-transform duration-700 group-hover:scale-x-100" />
          </span>
        </h1>
        <p className="text-lead animate-fade-in-up stagger-2 text-slate-800">
          Solutions professionnelles d'isolation thermique et calorifugeage industriel. Confort optimal + économies garanties.
        </p>
      </div>

      <BenefitsList />

      <div className="flex flex-col gap-3 sm:flex-row animate-fade-in-up stagger-3">
        <Button size="lg" asChild>
          <Link href="/devis">      
            Devis gratuit 24h
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/services">Nos services</Link>
        </Button>
      </div>
    </div>
  );
}

function BenefitsList() {
  return (
    <ul className="space-y-3">
      {BENEFITS.map((benefit) => (
        <BenefitItem key={benefit} text={benefit} />
      ))}
    </ul>
  );
}

function BenefitItem({ text }: { readonly text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function HeroImage() {
  const images = useMemo(
    () => [
      { src: "/images/thercal1.jpg", alt: "Installation calorifugeage - réseau vapeur" },
      { src: "/images/thercal2.jpg", alt: "Calorifugeage industriel sur site" },
      { src: "/images/thercal3.jpg", alt: "Équipe THERCAL ENERGIES en intervention" },
    ],
    []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative lg:flex lg:items-center">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl image-border smooth-transition">
        {images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-100 opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-100 opacity-20 blur-3xl" />
    </div>
  );
}

const BENEFITS = [
  "Jusqu'à 20% d'économies sur vos factures d'énergie",
  "Confort thermique optimal été comme hiver",
  "Matériaux écologiques et certifiés",
  "Garantie décennale sur tous nos travaux",
] as const;

