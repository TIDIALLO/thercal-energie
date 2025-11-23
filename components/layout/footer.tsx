import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Motif de fond décoratif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-10 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CompanyInfo />
          <QuickLinks />
          <Services />
          <ContactInfo />
        </div>
        <Separator className="my-8 bg-slate-800" />
        <SiteMap />
        <Separator className="my-8 bg-slate-800" />
        <BottomBar />
      </div>
    </footer>
  );
}

function CompanyInfo() {
  return (
    <div className="space-y-4">
      <div className="group">
        <div className="relative h-8 w-auto smooth-transition group-hover:scale-105">
          <Image
            src="/thercal_energies_logo.png"
            alt="Thercal Énergies"
            width={100}
            height={32}
            className="object-contain smooth-transition group-hover:brightness-110"
          />
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate-300">
        Expert en calorifugeage et isolation thermique depuis plus de 15 ans.
      </p>
      
      {/* Certifications */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 text-xs font-semibold text-blue-400 smooth-transition hover:bg-blue-500/30 hover:border-blue-400 hover:scale-105">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          RGE
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-green-500/20 border border-green-500/40 text-xs font-semibold text-green-400 smooth-transition hover:bg-green-500/30 hover:border-green-400 hover:scale-105">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Qualibat
        </span>
      </div>
      <div className="flex gap-3">
        <SocialLink href="https://facebook.com" icon={Facebook} label="Facebook" />
        <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
        <span className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        Liens rapides
      </h3>
      <ul className="space-y-3">
        <FooterLink href="/">Accueil</FooterLink>
        <FooterLink href="/realisations">Réalisations</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/devis">Devis gratuit</FooterLink>
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
        <span className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        Nos services
      </h3>
      <ul className="space-y-3">
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
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
        <span className="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        Contact
      </h3>
      <ul className="space-y-4">
        <ContactItem
          icon={Phone}
          href="tel:+33134778520"
          text="+33 1 34 77 85 20"
        />
        <ContactItem
          icon={Mail}
          href="mailto:contact@thercal-energie.fr"
          text="contact@thercal-energie.fr"
        />
        <ContactItem
          icon={MapPin}
          text="2 rue Pierre de RONSARD, 78200 MANTES LA JOLIE"
        />
      </ul>
    </div>
  );
}

function SiteMap() {
  return (
    <div className="text-center">
      <h4 className="text-sm font-semibold text-slate-300 mb-4">Plan du site</h4>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-cyan-400 smooth-transition">Accueil</Link>
        <span className="text-slate-700">•</span>
        <Link href="/services/isolation-combles" className="hover:text-cyan-400 smooth-transition">Isolation Combles</Link>
        <span className="text-slate-700">•</span>
        <Link href="/services/isolation-murs" className="hover:text-cyan-400 smooth-transition">Isolation Murs</Link>
        <span className="text-slate-700">•</span>
        <Link href="/services/isolation-sols" className="hover:text-cyan-400 smooth-transition">Isolation Sols</Link>
        <span className="text-slate-700">•</span>
        <Link href="/services/isolation-toiture" className="hover:text-cyan-400 smooth-transition">Isolation Toiture</Link>
        <span className="text-slate-700">•</span>
        <Link href="/realisations" className="hover:text-cyan-400 smooth-transition">Réalisations</Link>
        <span className="text-slate-700">•</span>
        <Link href="/blog" className="hover:text-cyan-400 smooth-transition">Blog</Link>
        <span className="text-slate-700">•</span>
        <Link href="/contact" className="hover:text-cyan-400 smooth-transition">Contact</Link>
        <span className="text-slate-700">•</span>
        <Link href="/devis" className="hover:text-cyan-400 smooth-transition">Devis Gratuit</Link>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
      <p className="flex items-center gap-2">
        <span>© {new Date().getFullYear()}</span>
        <span className="text-cyan-400 font-semibold">Thercal Énergies</span>
        <span>•</span>
        <span>Tous droits réservés</span>
      </p>
      <div className="flex gap-6">
        <Link href="/mentions-legales" className="hover:text-cyan-400 smooth-transition hover:translate-x-0.5">
          Mentions légales
        </Link>
        <Link href="/politique-confidentialite" className="hover:text-cyan-400 smooth-transition hover:translate-x-0.5">
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
        className="text-sm text-slate-400 transition-all hover:text-cyan-400 hover:translate-x-1 inline-flex items-center gap-2 group"
      >
        <span className="h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 smooth-transition" />
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
    <div className="flex items-center gap-3 p-2 rounded-lg smooth-transition hover:bg-slate-800/50">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 smooth-transition group-hover:from-cyan-500/30 group-hover:to-blue-500/30">
        <Icon className="h-4 w-4 text-cyan-400" />
      </div>
      <span className="text-sm text-slate-300">{text}</span>
    </div>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="block group smooth-transition hover:translate-x-1">
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="group">
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
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400 transition-all hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

