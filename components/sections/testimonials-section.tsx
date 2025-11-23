"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16 sm:py-20">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15 blur-3xl animate-pulse" />
        <div className="absolute right-1/3 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>
      
      <div className="container relative mx-auto px-4">
        <SectionHeader />
        
        {/* Slider d'avis */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <TestimonialCard {...TESTIMONIALS[currentIndex]} />
            
            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-white border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-500 shadow-lg smooth-transition hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Dots indicateurs */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all smooth-transition ${
                      index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Aller à l'avis ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-white border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-500 shadow-lg smooth-transition hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center animate-fade-in-up">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Ce que disent nos clients
      </h2>
      <p className="text-lg text-gray-700">
        Plus de 2000 clients satisfaits nous font confiance
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-sm"></span>
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm"></span>
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-sm"></span>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  readonly author: string;
  readonly role: string;
  readonly content: string;
  readonly rating: number;
  readonly avatar?: string;
}

function TestimonialCard({ author, role, content, rating, avatar }: TestimonialCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <Card className="relative bg-white shadow-2xl border border-blue-200 animate-fade-in-up overflow-hidden group hover:shadow-blue-500/30 smooth-transition hover:border-blue-500/50">
      {/* Effet de décoration au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 smooth-transition" />
      
      <CardContent className="relative pt-8 pb-8 px-8">
        {/* Guillemet décoratif */}
        <div className="absolute top-4 right-6 text-6xl text-blue-500/10 font-serif">"</div>
        
        {/* Photo + Info */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-xl smooth-transition group-hover:scale-110 group-hover:shadow-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            {avatar ? (
              <User className="h-8 w-8 relative z-10" />
            ) : (
              <span className="text-2xl font-bold relative z-10">{author.charAt(0)}</span>
            )}
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900 smooth-transition group-hover:text-blue-600">{author}</div>
            <div className="text-sm text-gray-600">{role}</div>
          </div>
        </div>
        
        {/* Étoiles avec animation */}
        <div className="mb-6 flex gap-1">
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star 
              key={i} 
              className="h-5 w-5 fill-yellow-400 text-yellow-400 smooth-transition group-hover:scale-110" 
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
          {hasHalfStar && (
            <div className="relative h-5 w-5">
              <Star className="absolute h-5 w-5 text-yellow-400" />
              <div className="absolute overflow-hidden w-1/2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          )}
        </div>
        
        {/* Contenu */}
        <p className="text-base text-gray-700 leading-relaxed italic relative z-10">
          {content}
        </p>
        
        {/* Barre décorative en bas */}
        <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full smooth-transition group-hover:w-full" />
      </CardContent>
    </Card>
  );
}

const TESTIMONIALS = [
  {
    author: "Marie Dupont",
    role: "Propriétaire - Paris 15ème",
    content: "Excellente prestation ! L'équipe a été professionnelle et le résultat est au-delà de mes attentes. Ma facture de chauffage a diminué de 35%.",
    rating: 5,
    avatar: "user",
  },
  {
    author: "Jean Martin",
    role: "Gérant PME - Lyon",
    content: "Travail soigné et respect des délais. Le calorifugeage de nos installations a permis des économies significatives. Je recommande vivement.",
    rating: 4.5,
    avatar: "user",
  },
  {
    author: "Sophie Bernard",
    role: "Architecte - Marseille",
    content: "Un confort thermique incomparable depuis l'isolation de mes combles. L'équipe a été à l'écoute, professionnelle et de très bon conseil.",
    rating: 5,
    avatar: "user",
  },
  {
    author: "Pierre Lefevre",
    role: "Propriétaire - Bordeaux",
    content: "Projet d'isolation des murs par l'extérieur réalisé dans les temps. Équipe sérieuse, résultat impeccable. Très satisfait du rapport qualité-prix.",
    rating: 4.5,
    avatar: "user",
  },
] as const;

