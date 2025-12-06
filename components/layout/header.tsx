import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="header-sticky">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="pl-4 sm:pl-6 md:pl-10 transition-transform duration-200 hover:scale-105">
            <Logo />
          </div>
          <Navigation />
          <div className="flex items-center gap-2">
            <ContactButtons />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center group smooth-transition hover:scale-105">
      <div className="relative h-11 w-auto">
        <Image
          src="/thercal_energies_logo_blanc.png"
          alt="THERCAL ENERGIES - Expert en calorifugeage et isolation thermique"
          width={160}
          height={44}
          className="object-contain smooth-transition group-hover:brightness-110"
          priority
        />
      </div>
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className={`${navigationMenuTriggerStyle()} text-base`}>
                Accueil
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base">Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <ServiceItem
                  href="/services"
                  title="Isolation tuyauteries / Isolation bâtiment"
                  description="Calorifugeage industriel et enveloppe thermique complète"
                />
                <ServiceItem
                  href="/services/isolation-combles"
                  title="Isolation des combles"
                  description="Perdus ou aménagés, optimisez votre isolation"
                />
                <ServiceItem
                  href="/services/isolation-murs"
                  title="Isolation des murs"
                  description="Intérieure ou extérieure pour plus de confort"
                />
                <ServiceItem
                  href="/services/isolation-sols"
                  title="Isolation des sols"
                  description="Réduisez les déperditions thermiques"
                />
                <ServiceItem
                  href="/services/isolation-toiture"
                  title="Isolation de toiture"
                  description="Protection optimale contre les intempéries"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/#qui-sommes-nous" className={`${navigationMenuTriggerStyle()} text-base`}>
                Qui sommes-nous
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/blog" className={`${navigationMenuTriggerStyle()} text-base`}>
                Blog
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className={`${navigationMenuTriggerStyle()} text-base`}>
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

function ContactButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
        <a href="tel:+33786025197" aria-label="Téléphone">
          <Phone className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
        <a href="mailto:contact@thercal-energie.fr" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </Button>
      <Button asChild className="hidden lg:flex">
        <Link href="/devis">Devis gratuit</Link>
      </Button>
    </div>
  );
}

interface ServiceItemProps {
  readonly href: string;
  readonly title: string;
  readonly description: string;
}

function ServiceItem({ href, title, description }: ServiceItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none smooth-transition hover:bg-blue-50 hover:border-l-4 hover:border-blue-600 hover:pl-4 focus:bg-blue-50"
      >
        <div className="text-base font-semibold leading-none text-gray-900">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600">
          {description}
        </p>
      </Link>
    </li>
  );
}

