import Link from "next/link";
import Image from "next/image";
import { Award, Users, Shield, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-blue-50/40 py-10 sm:py-14">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-300 to-cyan-200 opacity-15 blur-3xl animate-pulse" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-300 to-blue-200 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <AboutContent />
          <AboutVisual />
        </div>
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Pourquoi choisir Thercal Énergie ?
      </h2>
      <p className="text-base text-gray-600 leading-relaxed">
        Depuis plus de 15 ans, nous accompagnons les particuliers et les
        professionnels dans leurs projets d'isolation thermique. Notre
        expertise et notre engagement pour la qualité font de nous un
        partenaire de confiance.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed">
        Nous utilisons uniquement des matériaux certifiés et respectueux de
        l'environnement. Notre équipe de professionnels qualifiés assure un
        travail soigné et conforme aux normes en vigueur.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed">
        Chaque projet est unique. C'est pourquoi nous réalisons un diagnostic
        personnalisé et vous proposons les solutions les plus adaptées à vos
        besoins et à votre budget.
      </p>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button asChild>
          <Link href="/devis">
            Demander un devis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#contact">Nous contacter</Link>
        </Button>
      </div>
    </div>
  );
}

function AboutVisual() {
  return (
    <div className="space-y-4">
      {/* Image principale */}
      <div className="overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
        <Image
          src="/images/calo2.jpg"
          alt="Installation thermique avec équipements de pointe - Vannes et tuyauterie professionnelle"
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>
      
      {/* Grille de features */}
      <div className="grid gap-3 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}

interface FeatureCardProps {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-white border border-gray-100">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl">
        <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="mb-1 text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">{title}</h3>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
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

