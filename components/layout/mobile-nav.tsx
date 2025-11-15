"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="h-full max-w-full p-0 sm:max-w-md">
          <DialogHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  {/* Placeholder - Remplacer par le vrai logo */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600">
                    <span className="text-xl font-bold text-white">🔥</span>
                  </div>
                </div>
                <span className="font-bold text-gray-900">Thercal Énergie</span>
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </DialogHeader>

          <nav className="overflow-y-auto p-4">
            <ul className="space-y-2">
              <NavItem href="/" onClick={() => setIsOpen(false)}>
                Accueil
              </NavItem>

              <Accordion type="single" collapsible>
                <AccordionItem value="services" className="border-none">
                  <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                    Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-4">
                      <SubNavItem
                        href="/services/isolation-combles"
                        onClick={() => setIsOpen(false)}
                      >
                        Isolation des combles
                      </SubNavItem>
                      <SubNavItem
                        href="/services/isolation-murs"
                        onClick={() => setIsOpen(false)}
                      >
                        Isolation des murs
                      </SubNavItem>
                      <SubNavItem
                        href="/services/isolation-sols"
                        onClick={() => setIsOpen(false)}
                      >
                        Isolation des sols
                      </SubNavItem>
                      <SubNavItem
                        href="/services/isolation-toiture"
                        onClick={() => setIsOpen(false)}
                      >
                        Isolation de toiture
                      </SubNavItem>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <NavItem href="/realisations" onClick={() => setIsOpen(false)}>
                Réalisations
              </NavItem>

              <NavItem href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavItem>
            </ul>

            <div className="mt-6 space-y-3 border-t pt-6">
              <Button asChild className="w-full" size="lg">
                <Link href="/devis" onClick={() => setIsOpen(false)}>
                  Devis gratuit
                </Link>
              </Button>
            </div>
          </nav>
        </DialogContent>
      </Dialog>
    </>
  );
}

interface NavItemProps {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly onClick: () => void;
}

function NavItem({ href, children, onClick }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        {children}
      </Link>
    </li>
  );
}

interface SubNavItemProps {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly onClick: () => void;
}

function SubNavItem({ href, children, onClick }: SubNavItemProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        {children}
      </Link>
    </li>
  );
}

