import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Isolation des Sols & Planchers | Thercal Énergie",
  description: "Expert en isolation des sols et planchers. Supprimez les sensations de froid et améliorez votre confort thermique. Devis gratuit.",
};

export default function IsolationSolsPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <SolutionsSection />
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
            Isolation des sols
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Supprimez les sensations de froid au sol et améliorez l'efficacité
            énergétique de votre habitation
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
          Les avantages de l'isolation des sols
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

function SolutionsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Nos solutions d'isolation
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SolutionCardProps {
  readonly title: string;
  readonly description: string;
  readonly applications: readonly string[];
}

function SolutionCard({ title, description, applications }: SolutionCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-gray-900">
            Applications :
          </h4>
          <ul className="space-y-2">
            {applications.map((app) => (
              <li key={app} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600" />
                <span className="text-sm text-gray-700">{app}</span>
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
            Prêt à isoler vos sols ?
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
  "Suppression des sensations de froid au sol",
  "Réduction jusqu'à 10% des déperditions thermiques",
  "Amélioration du confort thermique général",
  "Isolation acoustique des bruits d'impact",
  "Économies sur les factures de chauffage",
  "Valorisation de votre bien immobilier",
] as const;

const SOLUTIONS = [
  {
    title: "Isolation par le dessous",
    description:
      "Pose d'isolant sous le plancher, depuis le vide sanitaire ou le sous-sol.",
    applications: [
      "Maisons avec vide sanitaire",
      "Appartements au-dessus d'un sous-sol",
      "Pas de réduction de hauteur sous plafond",
    ],
  },
  {
    title: "Isolation par le dessus",
    description:
      "Pose d'isolant sur le plancher existant avant la pose d'un nouveau revêtement.",
    applications: [
      "Rénovation complète",
      "Absence de vide sanitaire accessible",
      "Planchers chauffants",
    ],
  },
  {
    title: "Isolation entre solives",
    description:
      "Remplissage de l'espace entre les solives avec un isolant performant.",
    applications: [
      "Planchers en bois",
      "Rénovation de maisons anciennes",
      "Optimisation thermique et acoustique",
    ],
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Diagnostic de votre plancher",
    description:
      "Analyse de la structure existante pour déterminer la meilleure technique d'isolation adaptée à votre situation.",
  },
  {
    title: "Proposition technique et devis",
    description:
      "Choix des matériaux isolants et méthode d'installation optimale avec estimation précise des coûts.",
  },
  {
    title: "Préparation du chantier",
    description:
      "Protection des espaces, dépose éventuelle du revêtement existant et préparation du support.",
  },
  {
    title: "Pose de l'isolant",
    description:
      "Installation professionnelle de l'isolant selon la technique choisie, en respectant les normes thermiques.",
  },
  {
    title: "Finitions et remise en état",
    description:
      "Pose du nouveau revêtement de sol, vérification de la conformité et nettoyage complet du chantier.",
  },
] as const;
