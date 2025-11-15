# Thercal Énergie - Site Web Professionnel

Site web moderne et optimisé pour Thercal Énergie, expert en isolation thermique.

## 🚀 Technologies Utilisées

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Shadcn UI** - Composants UI accessibles
- **Radix UI** - Primitives UI headless
- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation des schémas

## 📁 Structure du Projet

```
thercal-energie/
├── app/                          # Pages Next.js (App Router)
│   ├── (routes)/
│   │   ├── contact/
│   │   ├── devis/
│   │   ├── realisations/
│   │   └── services/
│   ├── layout.tsx               # Layout racine
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Styles globaux
│   ├── sitemap.ts               # Génération du sitemap
│   └── robots.ts                # Configuration robots.txt
├── components/
│   ├── layout/                  # Composants de mise en page
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   ├── sections/                # Sections de page
│   │   ├── hero-section.tsx
│   │   ├── services-section.tsx
│   │   ├── about-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── cta-section.tsx
│   │   └── contact-section.tsx
│   └── ui/                      # Composants UI Shadcn
├── lib/
│   ├── constants.ts             # Constantes globales
│   ├── schemas.ts               # Schémas de validation Zod
│   └── utils.ts                 # Utilitaires
└── public/                      # Assets statiques

```

## 🛠️ Installation et Développement

### Prérequis

- Node.js 20+ 
- npm, pnpm ou yarn

### Installation

```bash
# Cloner le projet
cd thercal-energie

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Commandes Disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Construit l'application pour la production
npm run start        # Démarre le serveur de production
npm run lint         # Vérifie le code avec ESLint
```

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé)

Vercel est la plateforme optimale pour Next.js avec déploiement automatique et optimisations intégrées.

#### Déploiement via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

#### Déploiement via Interface Web

1. Connectez-vous sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre dépôt Git (GitHub, GitLab, Bitbucket)
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"

**Configuration Vercel (vercel.json - optionnel) :**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["cdg1"]
}
```

### Option 2 : Netlify

#### Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Construire et déployer
npm run build
netlify deploy --prod --dir=.next
```

#### Via Interface Web

1. Connectez-vous sur [netlify.com](https://netlify.com)
2. Importez votre dépôt Git
3. Configuration de build :
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.next`
   - **Framework:** Next.js

**Fichier netlify.toml :**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Option 3 : Hébergement Classique (OVH, O2Switch, etc.)

Pour un hébergement Node.js classique :

#### Prérequis Serveur

- Node.js 20+
- npm ou yarn
- PM2 (gestionnaire de processus)

#### Étapes de Déploiement

1. **Construire l'application en local :**

```bash
npm run build
```

2. **Transférer les fichiers sur le serveur via FTP/SFTP :**
   - Dossier `.next/`
   - `public/`
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`
   - `node_modules/` (ou installer sur le serveur)

3. **Sur le serveur, installer PM2 :**

```bash
npm install -g pm2
```

4. **Créer un fichier ecosystem.config.js :**

```javascript
module.exports = {
  apps: [{
    name: 'thercal-energie',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: '/path/to/thercal-energie',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

5. **Démarrer l'application :**

```bash
cd /path/to/thercal-energie
npm install --production
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

6. **Configuration Nginx (reverse proxy) :**

```nginx
server {
    listen 80;
    server_name thercal-energie.fr www.thercal-energie.fr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

7. **Activer SSL avec Let's Encrypt :**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d thercal-energie.fr -d www.thercal-energie.fr
```

### Option 4 : Export Statique (SSG)

Si vous souhaitez un export 100% statique (HTML/CSS/JS) :

1. **Modifier next.config.ts :**

```typescript
const nextConfig = {
  output: 'export',
  // ... autres configurations
};
```

2. **Construire :**

```bash
npm run build
```

3. **Le dossier `out/` contient les fichiers statiques**

4. **Héberger sur n'importe quel serveur web** (Apache, Nginx, hébergement mutualisé)

⚠️ **Limitations du mode statique :**
- Pas de Server-Side Rendering (SSR)
- Pas d'API Routes
- Pas de fonctions serveur

## 📊 Optimisations Implémentées

### Performance

✅ **Images optimisées** - Formats WebP/AVIF, lazy loading  
✅ **Code splitting** - Chargement dynamique des composants  
✅ **Compression** - Gzip/Brotli activée  
✅ **Caching headers** - Optimisation du cache navigateur  
✅ **React Server Components** - Rendu côté serveur par défaut  

### SEO

✅ **Sitemap.xml** - Génération automatique  
✅ **Robots.txt** - Configuration optimale  
✅ **Métadonnées** - Open Graph, Twitter Cards  
✅ **URLs sémantiques** - Structure claire et logique  
✅ **Performance Web Vitals** - LCP, FID, CLS optimisés  

### Sécurité

✅ **Headers de sécurité** - X-Frame-Options, CSP  
✅ **HTTPS** - Recommandé pour la production  
✅ **Validation des formulaires** - Zod côté client et serveur  
✅ **Protection RGPD** - Pages mentions légales et confidentialité  

## 🎨 Personnalisation

### Modifier les Couleurs

Éditer `app/globals.css` :

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... */
}
```

### Modifier les Informations Entreprise

Éditer `lib/constants.ts` :

```typescript
export const SITE_CONFIG = {
  name: "Thercal Énergie",
  phone: "+33 1 23 45 67 89",
  email: "contact@thercal-energie.fr",
  // ...
};
```

## 📝 Fonctionnalités

- ✅ Page d'accueil avec sections Hero, Services, Témoignages
- ✅ Pages services détaillées (combles, murs, sols, toiture)
- ✅ Page réalisations avec portfolio
- ✅ Formulaire de devis avec validation Zod
- ✅ Formulaire de contact
- ✅ Menu mobile responsive
- ✅ Footer complet avec liens
- ✅ Pages légales (mentions légales, confidentialité)
- ✅ SEO optimisé (sitemap, robots, métadonnées)
- ✅ Performance optimisée (images, lazy loading)

## 🐛 Dépannage

### Le serveur ne démarre pas

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreurs de build

```bash
# Nettoyer le cache Next.js
rm -rf .next
npm run build
```

### Problèmes d'images

Vérifiez que les images sont dans `public/` et référencées avec `/image.jpg`

## 📧 Support

Pour toute question technique :
- Email : contact@thercal-energie.fr
- Téléphone : +33 1 23 45 67 89

## 📄 Licence

Tous droits réservés © 2025 Thercal Énergie
