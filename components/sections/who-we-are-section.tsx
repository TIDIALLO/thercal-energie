import Image from "next/image";
import { Award, Target, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function WhoWeAreSection() {
  return (
    <section id="qui-sommes-nous" className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30 py-16 sm:py-20">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <SectionHeader />
        
        {/* Contenu principal : Image + Description */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <CompanyImage />
          <CompanyDescription />
        </div>
        
        {/* Valeurs de l'entreprise */}
        <ValuesSection />
        
        {/* Points forts */}
        <StrengthsSection />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Qui sommes-nous ?
      </h2>
      <p className="text-lg text-gray-700">
        Découvrez Thercal Énergies, votre partenaire de confiance en isolation thermique
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-sm"></span>
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm"></span>
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-sm"></span>
      </div>
    </div>
  );
}

function CompanyImage() {
  return (
    <div className="relative animate-scale-in max-w-lg mx-auto lg:mx-0">
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      
      <div className="relative overflow-hidden rounded-2xl shadow-2xl smooth-transition hover:shadow-3xl hover:-translate-y-2 border-3 border-white">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-600/10 opacity-0 hover:opacity-100 smooth-transition z-10" />
        <Image
          src="/images/thercal3.jpg"
          alt="Équipe Thercal Énergies - Experts en isolation thermique et calorifugeage"
          width={480}
          height={320}
          className="h-full w-full object-cover smooth-transition hover:scale-105"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        
        {/* Badge certifié */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-xl border border-blue-100 animate-fade-in-up stagger-1">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 shadow-md">
              <CheckCircle2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Certifié RGE</p>
              <p className="text-[10px] text-gray-600">+ 15 ans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyDescription() {
  return (
    <div className="space-y-6 animate-fade-in-up stagger-1">
      <div>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 smooth-transition hover:text-blue-600">
          Expert en isolation thermique depuis plus de 15 ans
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed text-base">
          <p>
            <span className="font-semibold text-blue-600">Thercal Énergies</span> est un acteur majeur de la transition énergétique en France. 
            Nous accompagnons les entreprises et les collectivités dans le financement de leurs projets d'efficacité énergétique 
            en les aidant à réduire leurs consommations énergétiques.
          </p>
          <p>
            Notre équipe d'ingénieurs qualifiés combine expertise technique et expérience opérationnelle pour conseiller nos clients 
            tout au long de leurs projets. Nous disposons d'une expertise unique dans le domaine de l'isolation thermique et du 
            calorifugeage industriel.
          </p>
          
          {/* Statistiques en badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                2K+
              </div>
              <span className="text-sm font-semibold text-blue-900">Projets réalisés</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-4 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-white font-bold text-sm">
                98%
              </div>
              <span className="text-sm font-semibold text-cyan-900">Satisfaction client</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 sm:flex-row pt-2">
        <Button size="lg" className="smooth-transition hover:scale-105 shadow-lg" asChild>
          <Link href="/contact">
            Nous contacter
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="smooth-transition hover:scale-105 border-2" asChild>
          <Link href="/realisations">Nos réalisations</Link>
        </Button>
      </div>
    </div>
  );
}

function ValuesSection() {
  return (
    <div className="mb-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h3 className="mb-3 text-2xl font-bold text-gray-900">Nos valeurs, nos engagements</h3>
        <p className="text-gray-600 text-base">
          Nous sommes pleinement engagés dans la transition énergétique et apportons des réponses concrètes 
          à tous les professionnels désireux de réaliser des économies d'énergie.
        </p>
      </div>
      
      <div className="relative mx-auto max-w-6xl">
        {/* Grille de valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <ValueCard
            icon={Award}
            title="EXPERTISE"
            description="Nous mettons notre expertise au profit de nos clients en les conseillant sur les solutions énergétiques permettant de réduire leurs consommations énergétiques."
            color="from-red-500 to-orange-500"
            delay="0s"
          />
          <ValueCard
            icon={Target}
            title="EFFICACITÉ"
            description="Nous optimisons avec rigueur vos process afin d'accroître leurs performances."
            color="from-amber-500 to-yellow-500"
            delay="0.2s"
          />
          <ValueCard
            icon={Zap}
            title="RÉACTIVITÉ"
            description="Parce que nous sommes attentifs à la satisfaction de nos clients, nous avons développé des outils et des process innovants permettant de répondre rapidement à vos sollicitations."
            color="from-green-500 to-emerald-500"
            delay="0.4s"
          />
        </div>
      </div>
    </div>
  );
}

interface ValueCardProps {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
  readonly color: string;
  readonly delay: string;
}

function ValueCard({ icon: Icon, title, description, color, delay }: ValueCardProps) {
  return (
    <div 
      className="group relative animate-fade-in-up h-full"
      style={{ animationDelay: delay }}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-6 shadow-xl smooth-transition hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col`}>
        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 smooth-transition" />
        
        <div className="relative z-10 flex-1">
          {/* Icône */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-lg smooth-transition group-hover:scale-110 group-hover:rotate-12">
            <Icon className="h-7 w-7 text-white" />
          </div>
          
          {/* Titre */}
          <h4 className="mb-3 text-lg font-bold text-white tracking-wide">{title}</h4>
          
          {/* Description */}
          <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        </div>
        
        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </div>
  );
}

function StrengthsSection() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 sm:p-10 shadow-lg border border-blue-100">
        <h3 className="mb-8 text-2xl font-bold text-gray-900 text-center">Pourquoi nous choisir ?</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
          {STRENGTHS.map((strength, index) => (
            <StrengthItem key={strength} text={strength} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StrengthItem({ text, index }: { readonly text: string; readonly index: number }) {
  return (
    <div 
      className="flex items-start gap-3 group p-3 rounded-lg smooth-transition hover:bg-white hover:shadow-md cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 smooth-transition group-hover:scale-125 group-hover:rotate-12 shadow-sm">
        <CheckCircle2 className="h-4 w-4 text-white" />
      </div>
      <p className="text-sm text-gray-700 smooth-transition group-hover:text-gray-900 group-hover:translate-x-1 leading-relaxed">{text}</p>
    </div>
  );
}

const STRENGTHS = [
  "Diagnostic thermique et calorifugeage complet",
  "Matériaux haute performance certifiés",
  "Installation par des techniciens qualifiés RGE",
  "Suivi et maintenance de vos équipements",
  "Devis gratuit sous 24h",
  "Intervention dans toute l'Île-de-France",
  "Garantie décennale sur tous nos travaux",
  "Plus de 2000 clients satisfaits",
] as const;

