/**
 * Configuration centrale du site
 * Les valeurs peuvent être surchargées par les variables d'environnement
 */

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "THERCAL ENERGIES",
  description: "Expert en isolation thermique depuis plus de 15 ans",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thercal-energie.fr",
  phone: process.env.NEXT_PUBLIC_PHONE || "+33 1 23 45 67 89",
  email: process.env.NEXT_PUBLIC_EMAIL || "contact@thercal-energie.fr",
  address: process.env.NEXT_PUBLIC_ADDRESS || "123 Rue de l'Isolation, 75001 Paris",
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/thercal-energie",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/thercal-energie",
  },
} as const;

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
  { href: "/devis", label: "Devis gratuit", highlight: true },
] as const;

export const SERVICE_TYPES = {
  combles: "Isolation des combles",
  murs: "Isolation des murs",
  sols: "Isolation des sols",
  toiture: "Isolation de toiture",
} as const;

export const SERVICES_LIST = [
  {
    slug: "isolation-combles",
    title: "Isolation des combles",
    shortDescription: "Combles perdus ou aménagés",
    icon: "home",
  },
  {
    slug: "isolation-murs",
    title: "Isolation des murs",
    shortDescription: "Intérieure ou extérieure",
    icon: "layers",
  },
  {
    slug: "isolation-sols",
    title: "Isolation des sols",
    shortDescription: "Planchers et sous-sols",
    icon: "building2",
  },
  {
    slug: "isolation-toiture",
    title: "Isolation de toiture",
    shortDescription: "Sarking et rampants",
    icon: "warehouse",
  },
] as const;

export const COMPANY_INFO = {
  legalName: "THERCAL ENERGIES SARL",
  capital: "50 000 €",
  siret: "123 456 789 00012",
  rcs: "Paris B 123 456 789",
  tva: "FR 12 123456789",
  director: "[Nom du directeur]",
} as const;

export const BUSINESS_HOURS = {
  weekdays: "Lundi - Vendredi : 8h00 - 18h00",
  saturday: "Samedi : 9h00 - 12h00",
  sunday: "Dimanche : Fermé",
} as const;

