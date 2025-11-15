import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CompanyInfo />
          <QuickLinks />
          <Services />
          <ContactInfo />
        </div>
        <Separator className="my-8" />
        <BottomBar />
      </div>
    </footer>
  );
}

function CompanyInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="relative h-10 w-10">
          {/* Placeholder - Remplacer par le vrai logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600">
            <span className="text-xl font-bold text-white">🔥</span>
          </div>
        </div>
        <span className="font-bold text-gray-900">Thercal Énergie</span>
      </div>
      <p className="text-sm text-gray-600">
        Expert en isolation thermique depuis plus de 15 ans. Nous vous
        accompagnons dans vos projets de rénovation énergétique pour un confort
        optimal.
      </p>
      <div className="flex gap-4">
        <SocialLink href="https://facebook.com" icon={Facebook} label="Facebook" />
        <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
        Liens rapides
      </h3>
      <ul className="space-y-2">
        <FooterLink href="/">Accueil</FooterLink>
        <FooterLink href="/realisations">Réalisations</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/devis">Devis gratuit</FooterLink>
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
        Nos services
      </h3>
      <ul className="space-y-2">
        <FooterLink href="/services/isolation-combles">
          Isolation des combles
        </FooterLink>
        <FooterLink href="/services/isolation-murs">
          Isolation des murs
        </FooterLink>
        <FooterLink href="/services/isolation-sols">
          Isolation des sols
        </FooterLink>
        <FooterLink href="/services/isolation-toiture">
          Isolation de toiture
        </FooterLink>
      </ul>
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
        Contact
      </h3>
      <ul className="space-y-3">
        <ContactItem
          icon={Phone}
          href="tel:+33123456789"
          text="+33 1 23 45 67 89"
        />
        <ContactItem
          icon={Mail}
          href="mailto:contact@thercal-energie.fr"
          text="contact@thercal-energie.fr"
        />
        <ContactItem
          icon={MapPin}
          text="123 Rue de l'Isolation, 75001 Paris"
        />
      </ul>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
      <p>© {new Date().getFullYear()} Thercal Énergie. Tous droits réservés.</p>
      <div className="flex gap-4">
        <Link href="/mentions-legales" className="hover:text-gray-900">
          Mentions légales
        </Link>
        <Link href="/politique-confidentialite" className="hover:text-gray-900">
          Politique de confidentialité
        </Link>
      </div>
    </div>
  );
}

interface FooterLinkProps {
  readonly href: string;
  readonly children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-gray-600 transition-colors hover:text-gray-900"
      >
        {children}
      </Link>
    </li>
  );
}

interface ContactItemProps {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly href?: string;
  readonly text: string;
}

function ContactItem({ icon: Icon, href, text }: ContactItemProps) {
  const content = (
    <>
      <Icon className="h-4 w-4 flex-shrink-0" />
      <span className="text-sm text-gray-600">{text}</span>
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="flex items-center gap-2 hover:text-gray-900">
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2">
      {content}
    </li>
  );
}

interface SocialLinkProps {
  readonly href: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly label: string;
}

function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-blue-600 hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

