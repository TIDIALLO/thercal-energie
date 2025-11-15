import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50/30 to-blue-100/20 py-12 sm:py-16 lg:py-20">
      {/* Dégradés modernes en arrière-plan */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-blue-400/10 via-cyan-400/5 to-transparent" />
        <div className="absolute right-0 bottom-0 h-full w-1/2 bg-gradient-to-tl from-blue-400/10 via-purple-400/5 to-transparent" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="animate-slide-in-left">
            <HeroContent />
          </div>
          <div className="animate-slide-in-right">
            <HeroImage />
          </div>
        </div>
      </div>
      <BackgroundPattern />
    </section>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Expert en{" "}
          <span className="text-blue-600">isolation thermique</span>
        </h1>
        <p className="text-lg text-gray-600 sm:text-xl">
          Améliorez votre confort et réduisez vos factures d'énergie grâce à
          nos solutions d'isolation professionnelles et durables.
        </p>
      </div>

      <BenefitsList />

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/devis">
            Demander un devis gratuit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/services">Découvrir nos services</Link>
        </Button>
      </div>

      <TrustIndicators />
    </div>
  );
}

function BenefitsList() {
  return (
    <ul className="space-y-3">
      {BENEFITS.map((benefit) => (
        <BenefitItem key={benefit} text={benefit} />
      ))}
    </ul>
  );
}

function BenefitItem({ text }: { readonly text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function TrustIndicators() {
  return (
    <div className="flex flex-wrap items-center gap-6 border-t pt-6">
      <TrustItem value="15+" label="ans d'expérience" />
      <TrustItem value="2000+" label="projets réalisés" />
      <TrustItem value="98%" label="clients satisfaits" />
    </div>
  );
}

function TrustItem({
  value,
  label,
}: {
  readonly value: string;
  readonly label: string;
}) {
  return (
    <div>
      <div className="text-2xl font-bold text-blue-600">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative lg:flex lg:items-center">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
        <Image
          src="/images/calo1.jpg"
          alt="Installation d'isolation thermique professionnelle - Équipements modernes et performants"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />
      </div>
      {/* Badge de certification */}
      <div className="absolute bottom-4 right-4 rounded-lg bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 transition-all duration-300 hover:rotate-12">
            <CheckCircle2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900">Certifié RGE</p>
            <p className="text-[10px] text-gray-600">Qualité garantie</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-100 opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-100 opacity-20 blur-3xl" />
    </div>
  );
}

const BENEFITS = [
  "Jusqu'à 30% d'économies sur vos factures d'énergie",
  "Confort thermique optimal été comme hiver",
  "Matériaux écologiques et certifiés",
  "Garantie décennale sur tous nos travaux",
] as const;

