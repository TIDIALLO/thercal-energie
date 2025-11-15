import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Isolation de Toiture - Sarking & Rampants | Thercal Énergie",
  description: "Expert en isolation de toiture : sarking, isolation des rampants. Protection optimale contre les intempéries et amélioration thermique. Devis gratuit.",
};

export default function IsolationToiturePage() {
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
            Isolation de toiture
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Protection optimale contre les intempéries et amélioration de
            l'isolation thermique et acoustique de votre habitation
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
          Les avantages de l'isolation de toiture
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
          Nos techniques d'isolation de toiture
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
  readonly applications: readonly string[];
}

function TechniqueCard({
  title,
  description,
  advantages,
  applications,
}: TechniqueCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div>
          <h3 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-gray-900">Avantages :</h4>
          <ul className="space-y-2">
            {advantages.map((advantage) => (
              <li key={advantage} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm text-gray-700">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-gray-900">
            Idéal pour :
          </h4>
          <ul className="space-y-2">
            {applications.map((app) => (
              <li key={app} className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
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
            Prêt à isoler votre toiture ?
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
  "Protection optimale contre les intempéries",
  "Réduction drastique des déperditions thermiques",
  "Amélioration du confort été comme hiver",
  "Isolation acoustique renforcée (pluie, grêle)",
  "Valorisation significative du bien immobilier",
  "Garantie décennale sur les travaux",
] as const;

const TECHNIQUES = [
  {
    title: "Sarking (Isolation par l'extérieur)",
    description:
      "Technique d'isolation continue par l'extérieur, posée sur la charpente. Solution premium pour une performance thermique optimale.",
    advantages: [
      "Suppression totale des ponts thermiques",
      "Pas de réduction de l'espace habitable",
      "Préservation de la charpente apparente",
      "Performance thermique exceptionnelle",
      "Étanchéité à l'air optimale",
    ],
    applications: [
      "Rénovation complète de toiture",
      "Combles aménagés avec charpente apparente",
      "Construction neuve haut de gamme",
    ],
  },
  {
    title: "Isolation des rampants",
    description:
      "Isolation sous la toiture, entre et/ou sous les chevrons de la charpente. Solution idéale pour les combles aménagés.",
    advantages: [
      "Coût plus accessible que le sarking",
      "Installation rapide",
      "Pas de dépose de la couverture",
      "Amélioration thermique immédiate",
      "Possibilité de conserver le volume intérieur",
    ],
    applications: [
      "Combles aménageables",
      "Rénovation sans modification de couverture",
      "Budget maîtrisé",
    ],
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Diagnostic et étude de charpente",
    description:
      "Inspection complète de la toiture et de la charpente pour évaluer l'état et déterminer la solution optimale.",
  },
  {
    title: "Proposition technique et devis",
    description:
      "Choix de la technique d'isolation (sarking ou rampants), sélection des matériaux et estimation détaillée.",
  },
  {
    title: "Préparation du chantier",
    description:
      "Mise en sécurité, installation d'échafaudages si nécessaire, et protection de votre habitation.",
  },
  {
    title: "Pose de l'isolant",
    description:
      "Installation professionnelle de l'isolant selon la technique choisie, avec pare-vapeur et étanchéité à l'air.",
  },
  {
    title: "Couverture et finitions",
    description:
      "Pose ou repose de la couverture, traitement des points singuliers et vérification de l'étanchéité.",
  },
  {
    title: "Contrôle qualité final",
    description:
      "Vérification complète de la conformité des travaux et remise de la garantie décennale.",
  },
] as const;
