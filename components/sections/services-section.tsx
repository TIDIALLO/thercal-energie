import Link from "next/link";
import { Home, Layers, Building2, Warehouse, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20 py-10 sm:py-14">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 opacity-10 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-300 to-blue-300 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <SectionHeader />
        <ServiceGrid />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Nos services d'isolation
      </h2>
      <p className="text-lg text-gray-600">
        Des solutions complètes et personnalisées pour tous vos besoins
        d'isolation thermique
      </p>
    </div>
  );
}

function ServiceGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}

interface ServiceCardProps {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white border border-gray-100">
      <CardHeader className="pb-3 flex flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 text-white shadow-xl transition-all duration-500 group-hover:scale-125 group-hover:shadow-2xl group-hover:rotate-12">
          <Icon className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-110" />
        </div>
        <CardTitle className="text-lg font-bold transition-colors duration-300 group-hover:text-blue-600">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-center">
        <Button variant="link" className="p-0 text-sm font-semibold transition-all duration-300 group-hover:translate-x-2" asChild>
          <Link href={href}>
            En savoir plus 
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

const SERVICES = [
  {
    icon: Home,
    title: "Isolation des combles",
    description: "Combles perdus ou aménagés, nous optimisons l'isolation de votre toiture pour réduire jusqu'à 30% vos déperditions thermiques.",
    href: "/services/isolation-combles",
  },
  {
    icon: Layers,
    title: "Isolation des murs",
    description: "Isolation par l'intérieur ou l'extérieur pour améliorer votre confort et valoriser votre bien immobilier.",
    href: "/services/isolation-murs",
  },
  {
    icon: Building2,
    title: "Isolation des sols",
    description: "Supprimez les sensations de froid au sol et améliorez l'efficacité énergétique de votre habitation.",
    href: "/services/isolation-sols",
  },
  {
    icon: Warehouse,
    title: "Isolation de toiture",
    description: "Protection optimale contre les intempéries et amélioration de l'isolation thermique et acoustique.",
    href: "/services/isolation-toiture",
  },
] as const;

