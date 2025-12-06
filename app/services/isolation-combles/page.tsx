import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Isolation des Combles - Perdus & Aménagés | THERCAL ENERGIES",
  description: "Expert en isolation des combles perdus et aménagés. Réduisez jusqu'à 30% vos déperditions thermiques. Devis gratuit.",
};

export default function IsolationComblesPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
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
            Isolation des combles
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Combles perdus ou aménagés, optimisez l'isolation de votre toiture
            pour réduire jusqu'à 30% vos déperditions thermiques
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
          Les avantages de l'isolation des combles
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

function ProcessSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
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
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-blue-600 px-8 py-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Prêt à isoler vos combles ?
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
  "Réduction jusqu'à 30% des déperditions thermiques",
  "Économies significatives sur vos factures de chauffage",
  "Amélioration du confort thermique été comme hiver",
  "Valorisation de votre bien immobilier",
  "Isolation phonique renforcée",
  "Matériaux écologiques et certifiés",
] as const;

const PROCESS_STEPS = [
  {
    title: "Diagnostic gratuit",
    description: "Visite technique pour évaluer l'état actuel de vos combles et définir la solution adaptée.",
  },
  {
    title: "Devis personnalisé",
    description: "Proposition détaillée avec choix des matériaux et estimation précise du coût.",
  },
  {
    title: "Préparation du chantier",
    description: "Protection des zones de passage et préparation de l'espace de travail.",
  },
  {
    title: "Pose de l'isolant",
    description: "Installation professionnelle de l'isolant selon les normes en vigueur.",
  },
  {
    title: "Contrôle qualité",
    description: "Vérification de la conformité et nettoyage complet du chantier.",
  },
] as const;

