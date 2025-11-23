import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50/30 to-blue-100/20 py-8 sm:py-12 lg:py-16">
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
    <div className="flex flex-col justify-center space-y-6">
      {/* Badge 15 ans */}
      <div className="animate-fade-in-up">
        <span className="badge-premium">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          15 ans d'expertise certifiée
        </span>
      </div>
      
      <div className="space-y-4">
        <h1 className="animate-fade-in-up stagger-1">
          Calorifugeage & Isolation
          <br />
        </h1>
        <p className="text-lead animate-fade-in-up stagger-2">
          Solutions professionnelles d'isolation thermique et calorifugeage industriel. Confort optimal + économies garanties.
        </p>
      </div>

      <BenefitsList />

      <div className="flex flex-col gap-3 sm:flex-row animate-fade-in-up stagger-3">
        <Button size="lg" asChild>
          <Link href="/devis">      
            Devis gratuit 24h
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/services">Nos services</Link>
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
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl image-border smooth-transition hover:scale-[1.02] image-overlay">
        <Image
          src="/images/thercal1.jpg"
          alt="Installation d'isolation thermique professionnelle - Équipements modernes et performants"
          width={800}
          height={600}
          className="h-full w-full object-cover smooth-transition hover:scale-110"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />
      </div>
      {/* Badge de certification */}
      <div className="absolute bottom-4 right-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm smooth-transition hover:scale-105 border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 smooth-transition hover:rotate-12">
            <CheckCircle2 className="h-7 w-7 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Certifié RGE</p>
            <p className="text-xs text-gray-600">Qualité garantie</p>
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

