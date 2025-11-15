# Guide Développeur - Thercal Énergie

Ce guide explique l'architecture, les choix techniques et le fonctionnement du site web Thercal Énergie pour t'aider à comprendre et maintenir le code.

## 📚 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture du projet](#architecture-du-projet)
3. [Concepts clés](#concepts-clés)
4. [Composants principaux](#composants-principaux)
5. [Formulaires et validation](#formulaires-et-validation)
6. [Optimisations](#optimisations)
7. [Comment ajouter...](#comment-ajouter)

## 🎯 Vue d'ensemble

### Stack technique

- **Next.js 16** : Framework React avec le nouveau App Router (pas de pages/)
- **TypeScript** : Pour la sécurité du typage et l'auto-complétion
- **Tailwind CSS** : Framework CSS utilitaire pour le style
- **Shadcn UI** : Composants UI réutilisables basés sur Radix UI
- **React Hook Form** : Gestion performante des formulaires
- **Zod** : Validation de schémas côté client et serveur

### Principe de base : Server Components par défaut

Next.js 16 utilise les **React Server Components (RSC)** par défaut. Cela signifie que :

- ✅ **Tous les composants sont des Server Components** sauf si tu mets `"use client"` en haut du fichier
- ✅ **Les Server Components** s'exécutent sur le serveur uniquement (bon pour le SEO et les performances)
- ⚠️ **Tu dois utiliser `"use client"`** seulement si tu as besoin de :
  - `useState`, `useEffect`, ou autres hooks React
  - Event handlers (`onClick`, `onChange`, etc.)
  - Browser APIs (`window`, `localStorage`, etc.)

## 🏗️ Architecture du projet

```
thercal-energie/
│
├── app/                           # Routes Next.js (App Router)
│   ├── layout.tsx                 # Layout racine (Header + Footer)
│   ├── page.tsx                   # Page d'accueil (/)
│   ├── globals.css                # Styles globaux Tailwind
│   │
│   ├── contact/
│   │   └── page.tsx               # Route /contact
│   │
│   ├── devis/
│   │   └── page.tsx               # Route /devis (formulaire)
│   │
│   ├── realisations/
│   │   └── page.tsx               # Route /realisations
│   │
│   └── services/
│       ├── page.tsx               # Route /services
│       ├── isolation-combles/
│       │   └── page.tsx           # Route /services/isolation-combles
│       ├── isolation-murs/
│       ├── isolation-sols/
│       └── isolation-toiture/
│
├── components/
│   ├── layout/                    # Composants de mise en page
│   │   ├── header.tsx             # En-tête avec navigation
│   │   ├── footer.tsx             # Pied de page
│   │   └── mobile-nav.tsx         # Menu mobile (burger)
│   │
│   ├── sections/                  # Sections réutilisables
│   │   ├── hero-section.tsx
│   │   ├── services-section.tsx
│   │   ├── about-section.tsx
│   │   └── ...
│   │
│   └── ui/                        # Composants Shadcn UI
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
│
├── lib/                           # Utilitaires et configuration
│   ├── constants.ts               # Constantes globales du site
│   ├── schemas.ts                 # Schémas de validation Zod
│   └── utils.ts                   # Fonctions utilitaires (cn, etc.)
│
└── public/                        # Fichiers statiques (images, fonts)
```

### Pourquoi cette structure ?

1. **`app/`** : C'est le nouveau système de routing de Next.js. Chaque dossier = une route.
2. **`components/`** : Tous les composants réutilisables. Séparés en layout, sections et UI.
3. **`lib/`** : Code utilitaire qui n'est pas un composant React.
4. **`public/`** : Assets statiques accessibles via `/image.jpg`

## 🧩 Concepts clés

### 1. React Server Components (RSC)

**Exemple : Hero Section (Server Component)**

```typescript
// components/sections/hero-section.tsx
// Pas de "use client" = Server Component

export function HeroSection() {
  // Ce code s'exécute UNIQUEMENT sur le serveur
  // Pas besoin de useState ou useEffect ici
  
  return (
    <section className="py-20">
      <h1>Expert en isolation thermique</h1>
      <Button asChild>
        <Link href="/devis">Demander un devis</Link>
      </Button>
    </section>
  );
}
```

**Pourquoi c'est bien ?**
- ✅ Moins de JavaScript envoyé au client
- ✅ Meilleur pour le SEO (le contenu est déjà dans le HTML)
- ✅ Performances améliorées

### 2. Client Components

**Exemple : Formulaire de devis (Client Component)**

```typescript
// app/devis/page.tsx
"use client"; // <-- OBLIGATOIRE pour useState et les formulaires

import { useState } from "react";

export default function DevisPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Ce code s'exécute sur le client (navigateur)
  
  return (
    <form onSubmit={handleSubmit}>
      {/* ... */}
    </form>
  );
}
```

**Quand utiliser `"use client"` ?**
- ❌ Pour afficher du texte statique → Server Component
- ✅ Pour un formulaire interactif → Client Component
- ✅ Pour un menu burger qui s'ouvre/ferme → Client Component
- ❌ Pour une liste de services → Server Component

### 3. Composition de composants

**Pattern important : Server + Client ensemble**

```typescript
// app/page.tsx (Server Component)
export default function HomePage() {
  return (
    <>
      <HeroSection />        {/* Server Component */}
      <ServicesSection />    {/* Server Component */}
      <ContactSection />     {/* Client Component (formulaire) */}
    </>
  );
}
```

## 🎨 Composants principaux

### Header avec navigation

```typescript
// components/layout/header.tsx
export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Logo />
      <Navigation />        {/* Menu desktop */}
      <ContactButtons />
      <MobileNav />        {/* Menu mobile - Client Component */}
    </header>
  );
}
```

**Explications ligne par ligne :**

```typescript
<header className="sticky top-0 z-50">
```
- `sticky top-0` : Le header reste collé en haut quand on scroll
- `z-50` : Au-dessus des autres éléments (z-index élevé)

### Mobile Navigation (Menu Burger)

```typescript
// components/layout/mobile-nav.tsx
"use client"; // <-- Client car on utilise useState

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Menu />
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* Contenu du menu mobile */}
      </Dialog>
    </>
  );
}
```

**Explications :**
1. `useState(false)` : État pour savoir si le menu est ouvert ou fermé
2. `onClick={() => setIsOpen(true)}` : Ouvre le menu quand on clique
3. `Dialog` : Composant Shadcn UI qui affiche un panneau modal
4. `onOpenChange` : Ferme automatiquement quand on clique en dehors

## 📝 Formulaires et validation

### Structure d'un formulaire avec React Hook Form + Zod

**1. Définir le schéma de validation (lib/schemas.ts)**

```typescript
import { z } from "zod";

export const devisFormSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  // ...
});

export type DevisFormData = z.infer<typeof devisFormSchema>;
```

**Explications :**
- `z.string()` : Le champ doit être une chaîne de caractères
- `.min(2, "...")` : Minimum 2 caractères avec message d'erreur personnalisé
- `.email()` : Validation automatique du format email
- `z.infer` : TypeScript déduit automatiquement le type depuis le schéma Zod

**2. Utiliser le formulaire dans un composant (app/devis/page.tsx)**

```typescript
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function DevisPage() {
  // 1. Initialiser le formulaire avec le schéma Zod
  const {
    register,      // Fonction pour lier les inputs
    handleSubmit,  // Fonction pour gérer la soumission
    formState: { errors, isSubmitting }, // État du formulaire
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisFormSchema), // Valide avec Zod
  });

  // 2. Fonction appelée à la soumission (seulement si valide)
  const onSubmit = async (data: DevisFormData) => {
    console.log("Données validées:", data);
    // Ici tu peux envoyer à une API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("firstName")} />
      {errors.firstName && (
        <p className="text-red-600">{errors.firstName.message}</p>
      )}
      
      <Button type="submit" disabled={isSubmitting}>
        Envoyer
      </Button>
    </form>
  );
}
```

**Flux de validation :**
1. L'utilisateur remplit le formulaire
2. Il clique sur "Envoyer"
3. React Hook Form + Zod valident automatiquement
4. Si erreur → affiche les messages d'erreur
5. Si OK → appelle `onSubmit(data)`

## ⚡ Optimisations

### 1. Images optimisées

Next.js optimise automatiquement les images avec le composant `Image` :

```typescript
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Isolation thermique"
  width={1200}
  height={800}
  loading="lazy"        // Lazy loading automatique
  quality={85}          // Compression automatique
/>
```

**Avantages :**
- Conversion automatique en WebP/AVIF
- Lazy loading (charge seulement quand visible)
- Responsive automatique

### 2. SEO optimisé

Chaque page a des métadonnées optimisées :

```typescript
// app/services/isolation-combles/page.tsx
export const metadata: Metadata = {
  title: "Isolation des Combles | Thercal Énergie",
  description: "Expert en isolation des combles...",
};
```

**Fichiers SEO générés automatiquement :**
- `app/sitemap.ts` → Génère `/sitemap.xml`
- `app/robots.ts` → Génère `/robots.txt`

### 3. Lazy loading des composants

Pour les composants lourds, tu peux utiliser le lazy loading :

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./heavy-component"), {
  loading: () => <p>Chargement...</p>,
  ssr: false, // Ne charge pas côté serveur
});
```

## 🛠️ Comment ajouter...

### Une nouvelle page

1. Crée un dossier dans `app/` avec le nom de la route :

```
app/
  └── ma-nouvelle-page/
      └── page.tsx
```

2. Exporte un composant React par défaut :

```typescript
// app/ma-nouvelle-page/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ma Nouvelle Page | Thercal Énergie",
  description: "Description de ma page",
};

export default function MaNouvellePagePage() {
  return (
    <div>
      <h1>Ma nouvelle page</h1>
    </div>
  );
}
```

3. La page est automatiquement accessible sur `/ma-nouvelle-page`

### Un nouveau service

1. Crée un dossier dans `app/services/` :

```
app/services/
  └── mon-nouveau-service/
      └── page.tsx
```

2. Copie le contenu d'une page service existante et adapte :

```typescript
export const metadata: Metadata = {
  title: "Mon Nouveau Service | Thercal Énergie",
  description: "Description du service",
};

export default function MonNouveauServicePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CTASection />
    </>
  );
}
```

3. Ajoute le service dans la navigation (`components/layout/header.tsx`)

### Un nouveau champ au formulaire

1. Ajoute le champ au schéma Zod (`lib/schemas.ts`) :

```typescript
export const devisFormSchema = z.object({
  // ... champs existants
  monNouveauChamp: z.string().min(5, "Minimum 5 caractères"),
});
```

2. Ajoute l'input dans le formulaire :

```typescript
<div className="space-y-2">
  <Label htmlFor="monNouveauChamp">Mon Nouveau Champ *</Label>
  <Input id="monNouveauChamp" {...register("monNouveauChamp")} />
  {errors.monNouveauChamp && (
    <p className="text-sm text-red-600">{errors.monNouveauChamp.message}</p>
  )}
</div>
```

## 🎨 Personnalisation du style

### Couleurs

Modifier les couleurs dans `app/globals.css` :

```css
:root {
  --primary: oklch(0.205 0 0);          /* Couleur principale */
  --primary-foreground: oklch(0.985 0 0);  /* Texte sur fond primaire */
  /* ... */
}
```

### Classes Tailwind courantes

```typescript
// Espacement
className="p-4"        // padding 1rem (16px)
className="mt-8"       // margin-top 2rem (32px)
className="gap-6"      // gap entre éléments flex/grid

// Layout
className="flex items-center justify-between"
className="grid grid-cols-3 gap-4"

// Responsive
className="text-sm md:text-base lg:text-lg"
// sm: mobile, md: tablette, lg: desktop

// Couleurs
className="bg-blue-600 text-white"
className="hover:bg-blue-700"  // Au survol
```

## 🐛 Débogage

### Erreur : "useState is not a function"

**Problème :** Tu utilises `useState` dans un Server Component

**Solution :** Ajoute `"use client"` en haut du fichier

### Erreur : "Module not found"

**Problème :** Chemin d'import incorrect

**Solution :** Utilise les alias :
- `@/components/...` au lieu de `../../components/...`
- `@/lib/...` au lieu de `../../../lib/...`

### Le formulaire ne se soumet pas

**Problème :** Validation Zod échoue

**Solution :** Regarde la console pour voir les erreurs de validation

## 📞 Support

Si tu as des questions sur le code :
1. Lis d'abord ce guide et le README.md
2. Regarde les exemples de code similaires dans le projet
3. Consulte la documentation officielle :
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind CSS](https://tailwindcss.com/docs)
   - [Shadcn UI](https://ui.shadcn.com)

---

**Bon développement ! 🚀**

