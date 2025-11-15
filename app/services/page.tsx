import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/services-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Nos Services d'Isolation Thermique | Thercal Énergie",
  description: "Découvrez nos services d'isolation : combles, murs, sols et toiture. Expertise professionnelle et matériaux certifiés.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Nos services d'isolation
            </h1>
            <p className="text-lg text-gray-600">
              Des solutions complètes et sur mesure pour améliorer votre confort
              thermique et réduire vos factures d'énergie
            </p>
          </div>
        </div>
      </div>
      <ServicesSection />
      <CTASection />
    </>
  );
}

