import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff,_#eef7ff_50%,_#ffffff)] py-16 sm:py-20">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-40 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-100 to-blue-50 opacity-35 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-16 items-center">
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
    <div className="relative animate-scale-in w-full h-full flex items-center justify-center lg:justify-end">
      {/* Effet de décoration flottant */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl smooth-transition hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.4)] hover:-translate-y-2 hover:rotate-1 border-4 border-blue-300/40">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-cyan-600/30 opacity-0 hover:opacity-100 smooth-transition z-10" />
        <Image
          src="/images/thercal2.jpg"
          alt="Expertise en calorifugeage et installations thermiques complexes - Système de tuyauterie industrielle"
          width={740}
          height={560}
          className="h-full w-full object-cover smooth-transition hover:scale-105"
          sizes="(max-width: 768px) 100vw, 640px"
        />
        
      </div>
    </div>
  );
}

function ExpertiseContent() {
  return (
    <div className="flex flex-col justify-center h-full space-y-6">
      <div className="animate-fade-in-up space-y-4">
        <h2 className="smooth-transition hover:text-cyan-600 leading-tight text-gray-900">
          Une expertise calorifugeage claire et efficace
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up stagger-1">
          Nous mixons audit thermique, préparation atelier et pose sur site pour livrer un rendu homogène.
        </p>
      </div>

      <div className="space-y-3 animate-fade-in-up stagger-2">
        <ExpertisePoint text="Diagnostic thermique et calorifugeage complet" index={0} />
        <ExpertisePoint text="Matériaux haute performance certifiés" index={1} />
        <ExpertisePoint text="Installation par des techniciens qualifiés" index={2} />
        <ExpertisePoint text="Suivi et maintenance de vos équipements" index={3} />
      </div>

      <div className="animate-fade-in-up stagger-3">
        <Button size="lg" className="smooth-transition hover:scale-105 hover:shadow-xl bg-blue-600 hover:bg-blue-500 text-white" asChild>
          <Link href="/contact">
            Parler à un expert
            <ArrowRight className="ml-2 h-5 w-5 smooth-transition group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
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
    <div className={`flex items-start gap-3 group p-3 rounded-lg smooth-transition hover:bg-white hover:-translate-x-2 hover:shadow-md cursor-pointer`}>
      <div className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${colors[index].bg} ${colors[index].hover} smooth-transition group-hover:scale-125 group-hover:rotate-12`}>
        <div className={`h-2.5 w-2.5 rounded-full ${colors[index].dot} smooth-transition group-hover:scale-110`} />
      </div>
      <p className="text-gray-900 font-semibold smooth-transition group-hover:text-blue-700 group-hover:translate-x-1">{text}</p>
    </div>
  );
}

