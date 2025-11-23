import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { WhoWeAreSection } from "@/components/sections/who-we-are-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <ServicesSection />
      <AboutSection />
      <WhoWeAreSection />
      <TestimonialsSection />
      <CTASection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
