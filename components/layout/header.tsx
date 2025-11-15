import Link from "next/link";
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="transition-transform duration-200 hover:scale-105">
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
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-10 w-10">
        {/* Placeholder - Remplacer par le vrai logo */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600">
          <span className="text-xl font-bold text-white">🔥</span>
        </div>
        {/* Une fois le logo ajouté dans public/, décommenter :
        <Image
          src="/logo.svg"
          alt="Thercal Énergie"
          width={40}
          height={40}
          className="object-contain"
        />
        */}
      </div>
      <span className="hidden font-bold text-gray-900 sm:inline-block lg:text-lg">
        Thercal Énergie
      </span>
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
              <Link href="/realisations" className={navigationMenuTriggerStyle()}>
                Réalisations
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
        <a href="tel:+33123456789" aria-label="Téléphone">
          <Phone className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
        <a href="mailto:contact@thercal-energie.fr" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </Button>
      <Button asChild>
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
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </Link>
    </li>
  );
}

