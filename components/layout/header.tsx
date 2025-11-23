import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthButton } from "@/components/auth/auth-button";
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
        <div className="flex h-16 items-center justify-between">
          <div className="pl-6 sm:pl-8 md:pl-12 transition-transform duration-200 hover:scale-105">
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
      <div className="relative h-9 w-auto">
        <Image
          src="/thercal_energies_logo_blanc.png"
          alt="Thercal Énergies - Expert en calorifugeage et isolation thermique"
          width={130}
          height={36}
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
              <Link href="/" className={navigationMenuTriggerStyle()}>
                Accueil
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
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
              <Link href="/#qui-sommes-nous" className={navigationMenuTriggerStyle()}>
                Qui sommes-nous
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/realisations" className={navigationMenuTriggerStyle()}>
                Réalisations
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/blog" className={navigationMenuTriggerStyle()}>
                Blog
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className={navigationMenuTriggerStyle()}>
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
        <a href="tel:+33134778520" aria-label="Téléphone">
          <Phone className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
        <a href="mailto:contact@thercal-energie.fr" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </Button>
      <AuthButton />
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
        <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-600">
          {description}
        </p>
      </Link>
    </li>
  );
}

