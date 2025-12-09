import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nos Réalisations | THERCAL ENERGIES",
  description: "Nos références sont en cours de mise à jour. Contactez notre équipe pour recevoir un dossier personnalisé de projets comparables.",
};

export default function RealisationsPage() {
  return (
    <>
      <HeroSection />
      <ContactPromptSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      {/* Motif de fond décoratif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl animate-fade-in-up">
            Nos réalisations
          </h1>
          <p className="text-lg text-slate-200 animate-fade-in-up stagger-1">
            Nous finalisons une nouvelle sélection de références détaillées. Partagez votre besoin et nous préparerons
            un dossier photos adapté.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></span>
            <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{ animationDelay: '1s' }}></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPromptSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-xl backdrop-blur">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-cyan-500">Nos références</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Notre galerie est en cours de mise à jour
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Nous préparons une nouvelle sélection de chantiers récents pour illustrer nos expertises. En attendant, nous
            pouvons vous envoyer un dossier photos ou planifier une visite de chantier comparable à votre besoin.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="smooth-transition bg-blue-600 hover:bg-blue-500 text-white" asChild>
              <Link href="/contact" className="inline-flex items-center gap-2">
                Parler à un expert
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="smooth-transition" asChild>
              <Link href="/" className="inline-flex items-center gap-2">
                Retour à l'accueil
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

