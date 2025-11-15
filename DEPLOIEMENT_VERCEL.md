# 🚀 Déploiement sur Vercel

## ✅ Ton code est maintenant sur GitHub !

🎉 **Repository** : https://github.com/TIDIALLO/thercal-energie

---

## 🌐 Déployer sur Vercel (GRATUIT)

### Méthode 1 : Via l'interface Vercel (Le plus simple)

1. **Va sur Vercel** : https://vercel.com

2. **Connecte-toi avec GitHub**
   - Clique sur "Sign Up" ou "Log In"
   - Choisis "Continue with GitHub"
   - Autorise Vercel à accéder à ton compte GitHub

3. **Importer ton projet**
   - Clique sur **"Add New..."** → **"Project"**
   - Tu verras la liste de tes repos GitHub
   - Cherche et clique sur **"thercal-energie"**
   - Clique sur **"Import"**

4. **Configuration (déjà optimale)**
   ```
   Framework Preset: Next.js (détecté automatiquement)
   Root Directory: ./
   Build Command: npm run build (par défaut)
   Output Directory: .next (par défaut)
   Install Command: npm install (par défaut)
   ```
   
   ⚠️ **Ne change rien, tout est déjà configuré !**

5. **Déployer**
   - Clique sur **"Deploy"**
   - Attends 2-3 minutes ⏱️

6. **C'est en ligne !** 🎉
   - Tu auras une URL du type : `https://thercal-energie.vercel.app`
   - Partage cette URL à tes clients !

---

### Méthode 2 : Via Vercel CLI (Développeurs)

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
cd D:\projets\thercal-energie
vercel

# Déployer en production
vercel --prod
```

---

## 🔄 Déploiement automatique

**Bonne nouvelle** : Une fois connecté à Vercel, **chaque fois que tu pushe sur GitHub**, Vercel redéploie automatiquement ! 🎉

```bash
# Tu modifies ton code localement
# Puis :
git add .
git commit -m "Amélioration design"
git push

# Vercel redéploie automatiquement en 2 minutes !
```

---

## 🌍 Utiliser ton propre nom de domaine

### Sur Vercel (après déploiement)

1. Va dans **Settings** → **Domains**
2. Ajoute ton domaine : `www.thercal-energie.fr`
3. Vercel te donne des enregistrements DNS à configurer
4. Configure chez ton registrar (OVH, Namecheap, etc.)
5. Attends 24-48h pour la propagation DNS

### Configuration DNS recommandée

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A (pour le domaine racine)
Name: @
Value: 76.76.21.21
```

---

## ⚡ Optimisations Vercel

### Variables d'environnement

Si tu as besoin de variables d'environnement :

1. Dans Vercel : **Settings** → **Environment Variables**
2. Ajoute :
   ```
   NEXT_PUBLIC_SITE_URL = https://thercal-energie.fr
   NEXT_PUBLIC_EMAIL = contact@thercal-energie.fr
   NEXT_PUBLIC_PHONE = +33 1 23 45 67 89
   ```
3. Redéploie

### Analytics gratuits

Vercel offre des analytics gratuits :
- **Settings** → **Analytics** → Enable
- Voir les visiteurs, pages vues, etc.

---

## 📊 Performance attendue

Ton site sur Vercel aura :
- ✅ **Lighthouse Score** : 95-100/100
- ✅ **Temps de chargement** : < 1 seconde
- ✅ **CDN global** : Site rapide partout dans le monde
- ✅ **HTTPS automatique** : Sécurisé par défaut
- ✅ **Optimisation images** : Automatique avec Next.js

---

## 🆘 Problèmes courants

### Erreur de build

Si le déploiement échoue :

1. Vérifie les logs dans Vercel
2. Teste localement :
   ```bash
   npm run build
   npm start
   ```
3. Si ça marche localement, c'est probablement un problème de variables d'environnement

### Site pas à jour

```bash
# Force un nouveau déploiement
git commit --allow-empty -m "Force rebuild"
git push
```

### Images ne s'affichent pas

- Vérifie que les images sont bien dans `public/images/`
- Les chemins doivent être `/images/nom.jpg` (pas `./images/`)

---

## 📈 Prochaines étapes

### 1. SEO et Google

Une fois déployé, soumets ton site à Google :
- https://search.google.com/search-console
- Ajoute ton domaine
- Soumets le sitemap : `https://ton-site.vercel.app/sitemap.xml`

### 2. Formulaire de contact

Pour recevoir les emails du formulaire, intègre :
- **Resend** (gratuit jusqu'à 3000 emails/mois)
- **SendGrid** (gratuit jusqu'à 100 emails/jour)
- **EmailJS** (gratuit jusqu'à 200 emails/mois)

Exemple avec Resend :
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'contact@thercal-energie.fr',
    to: 'ton-email@gmail.com',
    subject: `Nouveau message de ${data.firstName} ${data.lastName}`,
    html: `<p>${data.message}</p>`
  });
  
  return Response.json({ success: true });
}
```

### 3. Google Analytics

Ajoute Google Analytics pour suivre tes visiteurs :

```typescript
// app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🎉 Félicitations !

Ton site professionnel est maintenant :
- ✅ Sur GitHub : https://github.com/TIDIALLO/thercal-energie
- ✅ Déployable sur Vercel en 2 minutes
- ✅ Avec déploiement automatique à chaque push
- ✅ Rapide et optimisé
- ✅ HTTPS et CDN inclus

**Partage l'URL à tes clients et commence à recevoir des demandes de devis !** 🚀

---

## 📞 Support

- Vercel Docs : https://vercel.com/docs
- Next.js Docs : https://nextjs.org/docs
- GitHub Docs : https://docs.github.com

**Besoin d'aide ? N'hésite pas !** 💪

