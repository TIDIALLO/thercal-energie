import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Isolation des Murs - Intérieure & Extérieure | THERCAL ENERGIES",
  description: "Expert en isolation des murs par l'intérieur (ITI) et l'extérieur (ITE). Améliorez votre confort thermique et valorisez votre bien. Devis gratuit.",
};

export default function IsolationMursPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TechniquesSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Isolation des murs
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Isolation par l'intérieur (ITI) ou l'extérieur (ITE) pour améliorer
            votre confort thermique et valoriser votre bien immobilier
          </p>
          <Button size="lg" asChild>
            <Link href="/devis">
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Les avantages de l'isolation des murs
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <Card key={benefit}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechniquesSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Nos techniques d'isolation
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {TECHNIQUES.map((technique) => (
            <TechniqueCard key={technique.title} {...technique} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TechniqueCardProps {
  readonly title: string;
  readonly description: string;
  readonly advantages: readonly string[];
}

function TechniqueCard({ title, description, advantages }: TechniqueCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div>
          <h4 className="mb-3 font-semibold text-gray-900">Avantages :</h4>
          <ul className="space-y-2">
            {advantages.map((advantage) => (
              <li key={advantage} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-gray-700">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Notre processus d'intervention
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep key={step.title} number={index + 1} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  readonly number: number;
  readonly title: string;
  readonly description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
        {number}
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-blue-600 px-8 py-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Prêt à isoler vos murs ?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Demandez votre devis gratuit et sans engagement
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/devis">Demander un devis gratuit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  "Réduction jusqu'à 25% des déperditions thermiques",
  "Amélioration significative du confort thermique",
  "Suppression des ponts thermiques et des parois froides",
  "Valorisation de votre patrimoine immobilier",
  "Réduction de vos factures de chauffage",
  "Isolation acoustique renforcée",
] as const;

const TECHNIQUES = [
  {
    title: "Isolation par l'intérieur (ITI)",
    description:
      "Pose d'isolant sur les murs intérieurs de votre habitation. Solution idéale pour les rénovations sans modifier l'aspect extérieur.",
    advantages: [
      "Coût plus économique que l'ITE",
      "Pas de modification de façade",
      "Travaux réalisables pièce par pièce",
      "Pas de déclaration préalable de travaux",
    ],
  },
  {
    title: "Isolation par l'extérieur (ITE)",
    description:
      "Enveloppe isolante posée sur les murs extérieurs. Solution la plus performante pour traiter les ponts thermiques.",
    advantages: [
      "Performance thermique optimale",
      "Traitement complet des ponts thermiques",
      "Pas de réduction de surface habitable",
      "Modernisation de la façade",
      "Valorisation importante du bien",
    ],
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Diagnostic et étude thermique",
    description:
      "Analyse complète de vos murs pour déterminer la solution d'isolation la plus adaptée (ITI ou ITE).",
  },
  {
    title: "Devis détaillé",
    description:
      "Proposition personnalisée avec choix des matériaux isolants et estimation précise des économies d'énergie.",
  },
  {
    title: "Préparation des supports",
    description:
      "Traitement des surfaces, rebouchage des fissures et préparation des murs pour une isolation optimale.",
  },
  {
    title: "Installation de l'isolant",
    description:
      "Pose professionnelle de l'isolant selon la technique choisie (ITI ou ITE) dans le respect des normes.",
  },
  {
    title: "Finitions et contrôle qualité",
    description:
      "Application des finitions (plâtre, enduit, bardage) et vérification de la conformité des travaux.",
  },
] as const;
