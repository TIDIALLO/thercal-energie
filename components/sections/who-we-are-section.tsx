import Image from "next/image";
import { Award, Target, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function WhoWeAreSection() {
  return (
    <section id="qui-sommes-nous" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff,_#eaf6ff_55%,_#ffffff)] py-16 sm:py-20">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-40 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 opacity-40 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <SectionHeader />
        
        {/* Contenu principal : Image + Description */}
        <div className="mb-16 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6 items-center">
          <CompanyImage />
          <CompanyDescription />
        </div>
        
        <ValuesSection />
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
        Après plusieurs années passées dans les métiers du contrôle de projets et de la prévention des risques industriels et conscients des enjeux environnementaux, nos porteurs de projets sont des professionnels passionnés, engagés à concevoir des solutions innovantes pour optimiser la performance énergétique et la sécurité des installations industrielles.
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
    <div className="relative animate-scale-in w-full max-w-2xl mx-auto lg:ml-auto lg:max-w-[720px]">
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      
      <div className="relative overflow-hidden rounded-2xl shadow-2xl smooth-transition hover:shadow-3xl hover:-translate-y-2 border-3 border-white">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-600/10 opacity-0 hover:opacity-100 smooth-transition z-10" />
        <Image
          src="/images/thercal3.jpg"
          alt="Équipe THERCAL ENERGIES - Experts en isolation thermique et calorifugeage"
          width={720}
          height={480}
          className="h-full w-full object-cover smooth-transition hover:scale-105"
          sizes="(max-width: 768px) 100vw, 560px"
        />
      </div>
    </div>
  );
}

function CompanyDescription() {
  return (
    <div className="space-y-6 animate-fade-in-up stagger-1 lg:pl-2">
      <div>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 smooth-transition hover:text-blue-600">
          Expert en isolation thermique depuis plusieurs années
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed text-base">
          <p>
            <span className="font-semibold text-blue-600">THERCAL ENERGIES</span> est un acteur majeur de la transition énergétique en France. 
            Nous accompagnons les entreprises et les collectivités dans le financement de leurs projets d'efficacité énergétique 
            en les aidant à réduire leurs consommations énergétiques.
          </p>
          <p>
            Notre équipe d'ingénieurs qualifiés combine expertise technique et expérience opérationnelle pour conseiller nos clients 
            tout au long de leurs projets. Nous disposons d'une expertise unique dans le domaine de l'isolation thermique et du 
            calorifugeage industriel.
          </p>
          
          {/* Mise en avant qualitative */}
          <div className="rounded-2xl bg-white/90 border border-blue-100 px-5 py-4 shadow-sm">
            <p className="text-sm text-gray-700">
              Nous orchestrons chaque projet avec une approche fluide : analyse, conception, réalisation et suivi, pour garantir des chantiers rapides et parfaitement coordonnés.
            </p>
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
  const values = [
    {
      icon: Award,
      title: "Expertise",
      description: "Pilotage agile de vos projets d'isolation.",
      colors: "from-blue-600 to-cyan-500",
      delay: "0s",
    },
    {
      icon: Target,
      title: "Efficacité",
      description: "Process rapides et fluides pour chaque chantier.",
      colors: "from-cyan-500 to-emerald-400",
      delay: "0.1s",
    },
    {
      icon: Zap,
      title: "Réactivité",
      description: "Un contact unique, disponible en moins de 24h.",
      colors: "from-indigo-500 to-purple-500",
      delay: "0.2s",
    },
  ];

  return (
    <div className="mx-auto mt-12 grid gap-5 rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-blue-100 sm:grid-cols-3">
      {values.map(({ icon: Icon, title, description, colors, delay }) => (
        <div
          key={title}
          className={`group relative flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br ${colors} p-6 text-center text-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:saturate-150`}
          style={{ animationDelay: delay }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-6 w-6" />
          </div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  );
}

