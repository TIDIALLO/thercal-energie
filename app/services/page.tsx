import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/services-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Nos Services d'Isolation Thermique | THERCAL ENERGIES",
  description: "Découvrez nos services d'isolation : combles, murs, sols et toiture. Expertise professionnelle et matériaux certifiés.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 py-20 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
              Expertise isolations
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Isolation tuyauteries / Isolation bâtiment
            </h1>
            <p className="text-lg text-blue-100">
              Des solutions complètes et personnalisées pour optimiser vos performances thermiques, du calorifugeage industriel à l’enveloppe du bâtiment.
            </p>
          </div>
        </div>
      </section>
      <ServicesSection showHeader={false} />
      <CTASection />
    </>
  );
}

