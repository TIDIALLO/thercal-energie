import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-16 sm:py-20">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ExpertiseImage />
            <ExpertiseContent />
          </div>
        </div>
        
        {/* Mini CTA discret */}
        <div className="mt-8 text-center animate-fade-in-up stagger-4">
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-cyan-400 font-semibold hover:text-cyan-300 smooth-transition hover:gap-3">
            Parlons de votre projet d'isolation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ExpertiseImage() {
  return (
    <div className="relative animate-scale-in w-full h-full flex items-center justify-center lg:justify-start">
      {/* Effet de décoration flottant */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl smooth-transition hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.4)] hover:-translate-y-2 hover:rotate-1 border-4 border-blue-400/30">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-cyan-600/30 opacity-0 hover:opacity-100 smooth-transition z-10" />
        <Image
          src="/images/thercal2.jpg"
          alt="Expertise en calorifugeage et installations thermiques complexes - Système de tuyauterie industrielle"
          width={600}
          height={700}
          className="h-full w-full object-cover smooth-transition hover:scale-105"
          sizes="(max-width: 768px) 100vw, 600px"
        />
        
        {/* Statistiques en surimpression avec animations */}
        <div className="absolute -bottom-4 -right-4 grid grid-cols-2 gap-3 animate-fade-in-up stagger-2">
          <StatCard value="2000+" label="Projets" />
          <StatCard value="98%" label="Satisfaction" />
        </div>
      </div>
    </div>
  );
}

function ExpertiseContent() {
  return (
    <div className="flex flex-col justify-center h-full space-y-6">
      <div className="animate-fade-in-up space-y-4">
        <h2 className="smooth-transition hover:text-cyan-300 leading-tight text-white">
          Une expertise en <span className="text-cyan-400 animate-pulse" style={{ animationDuration: '3s' }}>calorifugeage</span> reconnue
        </h2>
        <p className="text-lg text-slate-200 leading-relaxed animate-fade-in-up stagger-1">
          Nos installations de <span className="font-semibold text-cyan-400">calorifugeage</span> et d'<span className="font-semibold text-cyan-400">isolation thermique</span> répondent aux normes les plus strictes. Nous intervenons sur tous types de bâtiments, des maisons individuelles aux grandes infrastructures industrielles.
        </p>
      </div>

      <div className="space-y-3 animate-fade-in-up stagger-2">
        <ExpertisePoint text="Diagnostic thermique et calorifugeage complet" index={0} />
        <ExpertisePoint text="Matériaux haute performance certifiés" index={1} />
        <ExpertisePoint text="Installation par des techniciens qualifiés RGE" index={2} />
        <ExpertisePoint text="Suivi et maintenance de vos équipements" index={3} />
      </div>

      <div className="animate-fade-in-up stagger-3">
        <Button size="lg" className="smooth-transition hover:scale-105 hover:shadow-xl bg-cyan-500 hover:bg-cyan-400" asChild>
          <Link href="/realisations">
            Voir nos réalisations
            <ArrowRight className="ml-2 h-5 w-5 smooth-transition group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { readonly value: string; readonly label: string }) {
  return (
    <div className="rounded-xl bg-white/95 backdrop-blur-sm p-4 shadow-xl smooth-transition hover:shadow-2xl hover:scale-110 hover:-translate-y-1 hover:bg-cyan-50 border border-cyan-200/50">
      <div className="text-2xl font-bold text-cyan-600 smooth-transition hover:scale-105">{value}</div>
      <div className="text-xs text-slate-700 font-medium">{label}</div>
    </div>
  );
}

function ExpertisePoint({ text, index }: { readonly text: string; readonly index: number }) {
  const colors = [
    { bg: "bg-cyan-500/20", dot: "bg-cyan-400", hover: "group-hover:bg-cyan-500/30" },
    { bg: "bg-blue-500/20", dot: "bg-blue-400", hover: "group-hover:bg-blue-500/30" },
    { bg: "bg-sky-500/20", dot: "bg-sky-400", hover: "group-hover:bg-sky-500/30" },
    { bg: "bg-teal-500/20", dot: "bg-teal-400", hover: "group-hover:bg-teal-500/30" }
  ];

  return (
    <div className={`flex items-start gap-3 group p-3 rounded-lg smooth-transition hover:bg-slate-600/50 hover:-translate-x-2 hover:shadow-md cursor-pointer`}>
      <div className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${colors[index].bg} ${colors[index].hover} smooth-transition group-hover:scale-125 group-hover:rotate-12`}>
        <div className={`h-2.5 w-2.5 rounded-full ${colors[index].dot} smooth-transition group-hover:scale-110`} />
      </div>
      <p className="text-slate-200 smooth-transition group-hover:text-white group-hover:translate-x-1">{text}</p>
    </div>
  );
}

