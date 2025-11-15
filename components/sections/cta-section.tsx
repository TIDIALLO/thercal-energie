import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 py-12 sm:py-14">
      {/* Motif de fond décoratif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-400 opacity-20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Prêt à améliorer votre confort thermique ?
          </h2>
          <p className="mb-6 text-base text-blue-100">
            Demandez votre devis gratuit et sans engagement. Notre équipe vous
            répondra dans les 24 heures.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl" asChild>
              <Link href="/devis">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white shadow-xl hover:bg-white hover:text-blue-600" asChild>
              <a href="tel:+33123456789">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

