import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Nos Réalisations | Thercal Énergie",
  description: "Découvrez nos projets d'isolation thermique réalisés avec succès. Plus de 2000 clients satisfaits.",
};

export default function RealisationsPage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nos réalisations
          </h1>
          <p className="text-lg text-gray-600">
            Découvrez quelques-uns de nos projets d'isolation thermique réalisés
            avec succès
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  readonly title: string;
  readonly location: string;
  readonly type: string;
  readonly description: string;
  readonly results: readonly string[];
}

function ProjectCard({ title, location, type, description, results }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="mb-2 text-4xl">🏠</div>
            <p className="text-xs text-gray-600">Photo à venir</p>
          </div>
        </div>
      </div>
      <CardHeader>
        <div className="mb-2">
          <Badge>{type}</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">{description}</p>
        <div>
          <h4 className="mb-2 text-sm font-semibold text-gray-900">Résultats :</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            {results.map((result) => (
              <li key={result} className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

const PROJECTS = [
  {
    title: "Maison individuelle - Paris 15ème",
    location: "Paris, Île-de-France",
    type: "Isolation des combles",
    description: "Isolation de combles perdus de 120m² avec laine de roche soufflée.",
    results: [
      "Réduction de 35% de la facture énergétique",
      "Amélioration du confort thermique",
      "Travaux réalisés en 1 journée",
    ],
  },
  {
    title: "Immeuble collectif - Lyon",
    location: "Lyon, Auvergne-Rhône-Alpes",
    type: "Isolation des murs",
    description: "Isolation thermique par l'extérieur d'un immeuble de 6 étages.",
    results: [
      "Suppression des ponts thermiques",
      "Modernisation de la façade",
      "Valorisation du bien immobilier",
    ],
  },
  {
    title: "Villa - Marseille",
    location: "Marseille, Provence-Alpes-Côte d'Azur",
    type: "Isolation complète",
    description: "Isolation des combles, murs et sols d'une villa de 200m².",
    results: [
      "Économie annuelle de 1200€",
      "Confort optimal été comme hiver",
      "Certification énergétique améliorée",
    ],
  },
  {
    title: "Maison ancienne - Bordeaux",
    location: "Bordeaux, Nouvelle-Aquitaine",
    type: "Isolation des murs",
    description: "Isolation par l'intérieur d'une maison de caractère du 19ème siècle.",
    results: [
      "Préservation du cachet architectural",
      "Réduction de 30% des déperditions",
      "Amélioration acoustique notable",
    ],
  },
  {
    title: "Appartement - Toulouse",
    location: "Toulouse, Occitanie",
    type: "Isolation des sols",
    description: "Isolation du plancher d'un appartement au rez-de-chaussée.",
    results: [
      "Suppression des sensations de froid",
      "Isolation phonique renforcée",
      "Travaux sans gêne pour les voisins",
    ],
  },
  {
    title: "Pavillon - Nantes",
    location: "Nantes, Pays de la Loire",
    type: "Isolation de toiture",
    description: "Réfection et isolation complète de la toiture d'un pavillon.",
    results: [
      "Protection optimale contre les intempéries",
      "Économie de chauffage de 40%",
      "Garantie décennale",
    ],
  },
] as const;

