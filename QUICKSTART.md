# 🚀 Démarrage Rapide - THERCAL ENERGIES

Guide en 5 minutes pour démarrer le projet.

## ⚡ Installation Express

```bash
cd thercal-energie
npm install
npm run dev
```

Le site est accessible sur **http://localhost:3000**

## 📱 Commandes Essentielles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Construit l'application pour la production
npm run start    # Démarre le serveur de production
npm run lint     # Vérifie le code
```

## 🎯 Structure Simplifiée

```
thercal-energie/
├── app/                    # Pages du site
│   ├── page.tsx           # Page d'accueil
│   ├── devis/             # Formulaire de devis
│   ├── contact/           # Page contact
│   ├── realisations/      # Portfolio
│   └── services/          # Pages services
│
├── components/
│   ├── layout/            # Header, Footer, Menu mobile
│   ├── sections/          # Sections de la page d'accueil
│   └── ui/                # Composants UI (boutons, cartes, etc.)
│
└── lib/
    ├── constants.ts       # Configuration du site
    └── schemas.ts         # Validation des formulaires
```

## 🔧 Personnalisation Rapide

### 1. Changer les informations de l'entreprise

**Fichier : `lib/constants.ts`**

```typescript
export const SITE_CONFIG = {
  name: "THERCAL ENERGIES",          // ← Nom de l'entreprise
  phone: "+33 7 86 02 51 97",       // ← Téléphone
  email: "contact@thercalenergies.com", // ← Email
  address: "123 Rue..., 75001 Paris",  // ← Adresse
  // ...
};
```

### 2. Modifier les couleurs du site

**Fichier : `app/globals.css`**

Cherche `:root` et change les couleurs :

```css
:root {
  --primary: oklch(0.205 0 0);  /* Bleu foncé */
  /* Change ces valeurs pour modifier les couleurs */
}
```

**Astuce :** Utilise [uicolors.app](https://uicolors.app/create) pour générer une palette.

### 3. Ajouter une page

1. Crée un dossier dans `app/` :
   ```bash
   mkdir app/ma-page
   ```

2. Crée un fichier `page.tsx` :
   ```typescript
   export default function MaPage() {
     return <h1>Ma nouvelle page</h1>;
   }
   ```

3. Accessible sur `/ma-page`

### 4. Modifier le menu de navigation

**Fichier : `components/layout/header.tsx`**

Ajoute un lien dans la navigation :

```typescript
<NavigationMenuItem>
  <Link href="/ma-page">Ma Page</Link>
</NavigationMenuItem>
```

## 🌐 Déploiement Express sur Vercel

### Option A : Interface Web (Le plus simple)

1. Va sur [vercel.com](https://vercel.com)
2. Connecte ton compte GitHub/GitLab
3. Clique "New Project"
4. Importe ton dépôt
5. Clique "Deploy" ✨

**C'est tout !** Vercel détecte automatiquement Next.js et configure tout.

### Option B : CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

Suis les instructions à l'écran.

### Configuration automatique

Vercel configure automatiquement :
- ✅ Build de production optimisé
- ✅ HTTPS avec certificat SSL
- ✅ CDN global
- ✅ Déploiement automatique à chaque push Git

## 📊 Pages Principales

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Page d'accueil avec sections |
| Services | `/services` | Liste des services |
| - Combles | `/services/isolation-combles` | Service isolation combles |
| - Murs | `/services/isolation-murs` | Service isolation murs |
| - Sols | `/services/isolation-sols` | Service isolation sols |
| - Toiture | `/services/isolation-toiture` | Service isolation toiture |
| Réalisations | `/realisations` | Portfolio de projets |
| Devis | `/devis` | Formulaire de devis |
| Contact | `/contact` | Formulaire de contact |
| Mentions légales | `/mentions-legales` | Page légale |
| Confidentialité | `/politique-confidentialite` | RGPD |

## 🎨 Composants Prêts à l'Emploi

### Boutons

```typescript
import { Button } from "@/components/ui/button";

<Button>Mon bouton</Button>
<Button variant="outline">Secondaire</Button>
<Button size="lg">Grand bouton</Button>
```

### Cartes

```typescript
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Titre</CardTitle>
  </CardHeader>
  <CardContent>
    Contenu de la carte
  </CardContent>
</Card>
```

### Formulaire

```typescript
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>
```

## 🔍 Problèmes Fréquents

### Le site ne démarre pas

```bash
# Supprime node_modules et réinstalle
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur de build

```bash
# Nettoie le cache Next.js
rm -rf .next
npm run build
```

### Les images ne s'affichent pas

- Vérifie que les images sont dans `public/`
- Utilise le chemin `/image.jpg` (commence par `/`)

## 📚 Documentation Complète

Pour plus de détails :
- **README.md** : Documentation générale et déploiement
- **GUIDE_DEVELOPPEUR.md** : Explications détaillées du code
- [Next.js Docs](https://nextjs.org/docs) : Documentation officielle

## 💡 Astuces

### Développement mobile

```bash
# Teste sur ton téléphone (même réseau WiFi)
npm run dev -- -H 0.0.0.0
# Ouvre http://[ton-ip-local]:3000 sur ton téléphone
```

### Mode production en local

```bash
npm run build    # Construit l'app
npm run start    # Démarre en mode prod
```

### Hot Reload

Les modifications sont automatiquement reflétées dans le navigateur. Si ça ne marche pas, recharge la page (F5).

## 🎯 Checklist Avant Mise en Production

- [ ] Modifier les informations dans `lib/constants.ts`
- [ ] Remplacer les numéros de téléphone/emails
- [ ] Modifier les pages légales (mentions, confidentialité)
- [ ] Ajouter de vraies images dans `public/`
- [ ] Tester tous les formulaires
- [ ] Vérifier responsive sur mobile
- [ ] Configurer les variables d'environnement (si besoin)
- [ ] Tester le build de production : `npm run build`

## 🆘 Besoin d'Aide ?

1. Consulte **GUIDE_DEVELOPPEUR.md** pour des explications détaillées
2. Lis le **README.md** pour le déploiement
3. Cherche dans la [documentation Next.js](https://nextjs.org/docs)
4. Vérifie les erreurs dans la console du navigateur (F12)

---

**Prêt à coder ! 🎉**

