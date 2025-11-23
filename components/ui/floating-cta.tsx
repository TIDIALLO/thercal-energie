"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare, X } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après 100px de scroll
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {isExpanded && (
        <div className="flex flex-col gap-2 animate-fade-in-up">
          <Link
            href="tel:+33123456789"
            className="flex items-center gap-3 bg-white rounded-full shadow-lg px-5 py-3 smooth-transition hover:shadow-xl hover:scale-105 border border-blue-100"
          >
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-gray-900">Appel rapide</span>
          </Link>
          
          <Link
            href="/devis"
            className="flex items-center gap-3 bg-white rounded-full shadow-lg px-5 py-3 smooth-transition hover:shadow-xl hover:scale-105 border border-blue-100"
          >
            <MessageSquare className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-gray-900">Devis 24h</span>
          </Link>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl smooth-transition hover:scale-110 hover:shadow-2xl hover:bg-blue-700"
        aria-label={isExpanded ? "Fermer" : "Ouvrir le menu"}
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <Phone className="h-6 w-6 animate-pulse" />
        )}
      </button>
    </div>
  );
}

