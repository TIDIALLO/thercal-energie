import Link from "next/link";
import Image from "next/image";
import { Award, Users, Shield, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#eef6ff,_#dff6ff_50%,_#f6fbff)] py-8 sm:py-12">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-200 to-blue-100 opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="space-y-6 max-w-5xl mx-auto">
          <AboutContent />
          <FeatureCards />
          
          {/* Boutons CTA */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row animate-fade-in-up stagger-3">
            <Button size="lg" className="smooth-transition" asChild>
              <Link href="/devis">
                Devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="smooth-transition" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
        
        {/* Mini CTA discret */}
        <div className="mt-8 text-center">
          <Link href="/realisations" className="inline-flex items-center gap-2 text-sm text-blue-600 font-semibold hover:text-blue-700 smooth-transition hover:gap-3">
            Découvrez nos réalisations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <div className="space-y-4 animate-fade-in-up text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Pourquoi choisir <span className="text-blue-600">THERCAL ENERGIES</span> ?
      </h2>
      <p className="text-lead font-semibold text-gray-800">
        Nous concevons des solutions d'isolation simples à comprendre : diagnostic rapide, matériaux premium, équipe engagée.
      </p>
      <p className="font-semibold text-gray-800">
        Chaque chantier suit une feuille de route claire pour livrer un confort durable.
      </p>
    </div>
  );
}

function FeatureCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 animate-fade-in-up stagger-2">
      {FEATURES.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

interface FeatureCardProps {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
  readonly index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const colorSets = [
    { border: "border-blue-200", gradient: "from-blue-600 to-cyan-500", hoverBg: "hover:bg-blue-50" },
    { border: "border-cyan-200", gradient: "from-cyan-500 to-emerald-400", hoverBg: "hover:bg-cyan-50" },
    { border: "border-indigo-200", gradient: "from-indigo-500 to-blue-400", hoverBg: "hover:bg-indigo-50" },
    { border: "border-purple-200", gradient: "from-purple-500 to-pink-400", hoverBg: "hover:bg-pink-50" },
  ];

  const colors = colorSets[index % colorSets.length];

  return (
    <div
      className={`group rounded-2xl bg-white p-5 shadow-sm smooth-transition hover:shadow-2xl hover:-translate-y-2 border ${colors.border} ${colors.hoverBg}`}
    >
      <div
        className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} text-white shadow-md smooth-transition group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-xl`}
      >
        <Icon className="h-5 w-5 smooth-transition" />
      </div>
      <h3 className="mb-1.5 text-base font-bold text-gray-900 smooth-transition group-hover:text-blue-700">{title}</h3>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

const FEATURES = [
  {
    icon: Award,
    title: "Expertise reconnue",
    description: "Plusieurs années d'expérience et un pilotage rigoureux.",
  },
  {
    icon: Users,
    title: "Équipe qualifiée",
    description: "Artisans spécialisés et interlocuteur unique par projet.",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description: "Travaux sécurisés et suivis après livraison.",
  },
  {
    icon: Leaf,
    title: "Matériaux écologiques",
    description: "Solutions performantes et responsables.",
  },
] as const;

