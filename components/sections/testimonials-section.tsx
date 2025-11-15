import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 py-10 sm:py-14">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 bottom-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-300 to-purple-200 opacity-10 blur-3xl animate-pulse" />
        <div className="absolute right-1/3 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-300 to-blue-300 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <SectionHeader />
        <TestimonialGrid />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Ce que disent nos clients
      </h2>
      <p className="text-lg text-gray-600">
        La satisfaction de nos clients est notre priorité
      </p>
    </div>
  );
}

function TestimonialGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((testimonial) => (
        <TestimonialCard key={testimonial.author} {...testimonial} />
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  readonly author: string;
  readonly role: string;
  readonly content: string;
  readonly rating: number;
}

function TestimonialCard({ author, role, content, rating }: TestimonialCardProps) {
  return (
    <Card className="group bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white border border-gray-100">
      <CardContent className="pt-5 pb-5">
        <div className="mb-3 flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" style={{ transitionDelay: `${i * 50}ms` }} />
          ))}
        </div>
        <p className="mb-4 text-sm text-gray-600 italic leading-relaxed">&ldquo;{content}&rdquo;</p>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 text-white font-bold text-base shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
            {author.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">{author}</div>
            <div className="text-xs text-gray-500">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const TESTIMONIALS = [
  {
    author: "Marie Dupont",
    role: "Propriétaire à Paris",
    content: "Excellente prestation ! L'équipe a été professionnelle et le résultat est au-delà de mes attentes. Ma facture de chauffage a diminué de 35%.",
    rating: 5,
  },
  {
    author: "Jean Martin",
    role: "Propriétaire à Lyon",
    content: "Travail soigné et respect des délais. Je recommande vivement Thercal Énergie pour tous vos travaux d'isolation.",
    rating: 5,
  },
  {
    author: "Sophie Bernard",
    role: "Propriétaire à Marseille",
    content: "Un confort thermique incomparable depuis l'isolation de mes combles. L'équipe a été à l'écoute et de bon conseil.",
    rating: 5,
  },
] as const;

