import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-cyan-50/30 to-white py-10 sm:py-14">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <ExpertiseImage />
          <ExpertiseContent />
        </div>
      </div>
    </section>
  );
}

function ExpertiseImage() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl">
        <Image
          src="/images/calo3.jpg"
          alt="Expertise en installations thermiques complexes - Système de tuyauterie industrielle"
          width={700}
          height={500}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
        />
      </div>
      
      {/* Statistiques en surimpression */}
      <div className="absolute -bottom-5 -right-5 grid grid-cols-2 gap-3">
        <StatCard value="2000+" label="Projets" />
        <StatCard value="98%" label="Satisfaction" />
      </div>
    </div>
  );
}

function ExpertiseContent() {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Une expertise technique reconnue
        </h2>
        <p className="text-lg text-gray-600">
          Nos installations d'isolation thermique répondent aux normes les plus
          strictes. Nous intervenons sur tous types de bâtiments, des maisons
          individuelles aux grandes infrastructures industrielles.
        </p>
      </div>

      <div className="space-y-4">
        <ExpertisePoint text="Diagnostic thermique complet et personnalisé" />
        <ExpertisePoint text="Matériaux haute performance certifiés" />
        <ExpertisePoint text="Installation par des techniciens qualifiés RGE" />
        <ExpertisePoint text="Suivi et maintenance de vos équipements" />
      </div>

      <div>
        <Button size="lg" asChild>
          <Link href="/realisations">
            Voir nos réalisations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { readonly value: string; readonly label: string }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-lg">
      <div className="text-2xl font-bold text-blue-600">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function ExpertisePoint({ text }: { readonly text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
        <div className="h-2 w-2 rounded-full bg-blue-600" />
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

