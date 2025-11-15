import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact | Thercal Énergie",
  description: "Contactez-nous pour votre projet d'isolation thermique. Devis gratuit sous 24h.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-600">
              Une question ? Un projet d'isolation ? Notre équipe est à votre
              écoute pour vous accompagner
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
}

