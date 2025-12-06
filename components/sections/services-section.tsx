import Link from "next/link";
import { Home, Layers, Building2, Warehouse, ArrowRight, Factory } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  readonly showHeader?: boolean;
}

export function ServicesSection({ showHeader = true }: ServicesSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-white py-8 sm:py-10">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-cyan-400 opacity-20 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-blue-400 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08),_transparent_60%)]" />
      </div>
      
      <div className="container relative mx-auto px-4">
        {showHeader && <SectionHeader />}
        <ServiceGrid />
        
        {/* Mini CTA discret */}
        <div className="mt-8 text-center">
          <Link href="/devis" className="inline-flex items-center gap-2 text-sm text-blue-600 font-semibold hover:text-blue-700 smooth-transition hover:gap-3">
            Une question sur nos services ? Contactez-nous
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
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
      <p className="text-lg text-gray-700">
        Des solutions complètes et personnalisées pour tous vos besoins
        d'isolation thermique
      </p>
    </div>
  );
}

function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {SERVICES.map((service, index) => (
        <ServiceCard key={service.title} {...service} index={index} />
      ))}
    </div>
  );
}

interface ServiceCardProps {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly index: number;
}

function ServiceCard({ icon: Icon, title, description, href, index }: ServiceCardProps) {
  return (
    <Card className="group card-spaced overflow-hidden bg-white shadow-xl border-blue-100 smooth-transition hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}>
      <CardHeader className="pb-3 flex flex-col items-center text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg smooth-transition group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-6 group-hover:from-white group-hover:to-white group-hover:text-gray-900">
          <Icon className="h-10 w-10 smooth-transition group-hover:scale-110" />
        </div>
        <CardTitle className="text-lg font-bold smooth-transition text-gray-900 group-hover:text-white mb-2">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed text-gray-600 smooth-transition group-hover:text-white/90">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-center">
        <Button variant="link" className="p-0 text-sm font-semibold text-blue-600 smooth-transition group-hover:translate-x-1 group-hover:text-white" asChild>
          <Link href={href}>
            En savoir plus 
            <ArrowRight className="ml-1 h-4 w-4 smooth-transition group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

const SERVICES = [
  {
    icon: Factory,
    title: "Isolation tuyauteries / Isolation bâtiment",
    description: "Solutions globales pour les réseaux industriels et l'enveloppe thermique du bâtiment.",
    href: "/services",
  },
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

