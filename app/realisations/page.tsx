import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Layers, Warehouse } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      {/* Motif de fond décoratif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl animate-fade-in-up">
            Nos réalisations
          </h1>
          <p className="text-lg text-slate-200 animate-fade-in-up stagger-1">
            Découvrez quelques-uns de nos projets d'isolation thermique réalisés
            avec succès. Plus de 2000 clients satisfaits.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></span>
            <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{ animationDelay: '1s' }}></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
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
  readonly index: number;
  readonly icon?: string;
}

function ProjectCard({ title, location, type, description, results, index, icon }: ProjectCardProps) {
  // Définir les icônes en fonction du type
  const getIcon = () => {
    if (type.includes("combles")) return Home;
    if (type.includes("murs")) return Building2;
    if (type.includes("sols")) return Layers;
    if (type.includes("toiture")) return Warehouse;
    return Home;
  };
  
  const Icon = getIcon();
  
  // Couleurs variées pour les backgrounds
  const gradients = [
    "from-cyan-500 via-blue-500 to-blue-600",
    "from-blue-500 via-indigo-500 to-purple-600",
    "from-purple-500 via-pink-500 to-rose-600",
    "from-green-500 via-teal-500 to-cyan-600",
    "from-orange-500 via-amber-500 to-yellow-600",
    "from-pink-500 via-rose-500 to-red-600"
  ];
  
  const gradient = gradients[index % gradients.length];
  
  return (
    <Card className="overflow-hidden group hover:shadow-2xl smooth-transition animate-fade-in-up border-slate-200" style={{ animationDelay: `${index * 100}ms` }}>
      <div className={`aspect-video w-full bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="flex h-full items-center justify-center relative z-10">
          <div className="text-center smooth-transition group-hover:scale-110">
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-white/20 backdrop-blur-sm p-6 shadow-2xl smooth-transition group-hover:bg-white/30 group-hover:rotate-12">
                <Icon className="h-12 w-12 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-white/90 backdrop-blur-sm bg-black/20 px-4 py-1 rounded-full inline-block">Projet d'isolation</p>
          </div>
        </div>
        
        {/* Effet de shine au hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
      <CardHeader className="pb-3">
        <div className="mb-3">
          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 shadow-md">{type}</Badge>
        </div>
        <CardTitle className="smooth-transition group-hover:text-blue-600">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-slate-600">
          <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-700 leading-relaxed">{description}</p>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <h4 className="mb-3 text-sm font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-1 w-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            Résultats obtenus
          </h4>
          <ul className="space-y-2">
            {results.map((result, idx) => (
              <li key={result} className="flex items-start gap-3 text-sm text-slate-700 group/item">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white smooth-transition group-hover/item:scale-110">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="smooth-transition group-hover/item:translate-x-1">{result}</span>
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

