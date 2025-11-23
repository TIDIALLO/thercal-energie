import Link from "next/link";
import Image from "next/image";
import { Award, Users, Shield, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-blue-50/40 py-8 sm:py-10">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-300 to-cyan-200 opacity-15 blur-3xl animate-pulse" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-300 to-blue-200 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
    <div className="space-y-4 animate-fade-in-up">
      <h2>
        Pourquoi choisir Thercal Énergies ?
      </h2>
      <p className="text-lead">
        Experts en <span className="text-highlight">calorifugeage</span> et <span className="text-highlight">isolation thermique</span>. Notre mission : votre confort + vos économies d'énergie.
      </p>
      <p>
        Matériaux certifiés RGE. Équipe qualifiée. Diagnostic personnalisé pour chaque projet.
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
  const hoverColors = [
    "hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600",
    "hover:bg-gradient-to-br hover:from-cyan-600 hover:to-blue-600",
    "hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500",
    "hover:bg-gradient-to-br hover:from-cyan-700 hover:to-cyan-500"
  ];
  
  return (
    <div className={`group rounded-xl bg-white p-4 shadow-sm smooth-transition hover:shadow-2xl hover:-translate-y-2 border border-blue-100/50 ${hoverColors[index]}`}>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-md smooth-transition group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:from-white group-hover:to-white group-hover:text-blue-600">
        <Icon className="h-5 w-5 smooth-transition" />
      </div>
      <h3 className="mb-1.5 text-base font-bold text-gray-900 smooth-transition group-hover:text-white">{title}</h3>
      <p className="text-xs text-gray-600 leading-relaxed smooth-transition group-hover:text-white/90">{description}</p>
    </div>
  );
}

const FEATURES = [
  {
    icon: Award,
    title: "Expertise reconnue",
    description: "Plus de 15 ans d'expérience et des certifications professionnelles",
  },
  {
    icon: Users,
    title: "Équipe qualifiée",
    description: "Des artisans RGE formés aux dernières techniques d'isolation",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description: "Tous nos travaux sont couverts par une garantie décennale",
  },
  {
    icon: Leaf,
    title: "Matériaux écologiques",
    description: "Nous privilégions des solutions respectueuses de l'environnement",
  },
] as const;

