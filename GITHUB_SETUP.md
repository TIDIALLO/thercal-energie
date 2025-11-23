# 🚀 Guide de déploiement sur GitHub

## ✅ Étape 1 : Git est déjà configuré !

Ton projet est maintenant prêt avec :
- ✅ Git initialisé
- ✅ Premier commit effectué
- ✅ `.gitignore` configuré pour Next.js

---

## 📦 Étape 2 : Créer un repository sur GitHub

### Option A : Via l'interface GitHub (Recommandé)

1. **Va sur GitHub** : https://github.com
2. **Connecte-toi** à ton compte
3. **Clique sur le bouton "+"** en haut à droite → **"New repository"**
4. **Remplis les informations** :
   ```
   Repository name: thercal-energie
   Description: Site professionnel d'isolation thermique - Next.js + TypeScript
   Visibilité: Public ou Private (ton choix)
   ⚠️ NE COCHE PAS "Add a README file"
   ⚠️ NE COCHE PAS "Add .gitignore"
   ```
5. **Clique sur "Create repository"**

### Option B : Via GitHub CLI (si installé)

```bash
gh repo create thercal-energie --public --source=. --remote=origin --push
```

---

## 🔗 Étape 3 : Lier ton projet local à GitHub

Une fois le repo créé sur GitHub, **copie l'URL** affichée (ex: `https://github.com/ton-username/thercal-energie.git`)

Puis exécute ces commandes :

```bash
cd D:\projets\thercal-energie

# Ajouter le remote GitHub
git remote add origin https://github.com/TON-USERNAME/thercal-energie.git

# Vérifier que c'est bien ajouté
git remote -v

# Pousser ton code sur GitHub
git push -u origin master
```

**⚠️ Remplace `TON-USERNAME` par ton nom d'utilisateur GitHub !**

---

## 🔄 Commandes Git quotidiennes

### Voir les modifications
```bash
git status
```

### Ajouter des fichiers modifiés
```bash
# Ajouter tous les fichiers
git add .

# Ou ajouter un fichier spécifique
git add chemin/vers/fichier.tsx
```

### Créer un commit
```bash
git commit -m "Description de tes modifications"
```

### Envoyer sur GitHub
```bash
git push
```

### Récupérer les dernières modifications (si travail en équipe)
```bash
git pull
```

---

## 🌿 Workflow recommandé

### Pour chaque nouvelle fonctionnalité :

```bash
# 1. Créer une branche
git checkout -b feature/nom-de-la-feature

# 2. Faire tes modifications
# ... éditer les fichiers ...

# 3. Ajouter et committer
git add .
git commit -m "Ajout de la fonctionnalité X"

# 4. Pousser la branche
git push -u origin feature/nom-de-la-feature

# 5. Sur GitHub, créer une Pull Request

# 6. Une fois la PR mergée, revenir sur master
git checkout master
git pull
```

---

## 📝 Messages de commit recommandés

Utilise des préfixes pour clarifier tes commits :

```bash
# Nouvelles fonctionnalités
git commit -m "feat: Ajout section partenaires avec défilement automatique"

# Corrections de bugs
git commit -m "fix: Correction affichage images sur mobile"

# Modifications de style
git commit -m "style: Amélioration dégradés et animations"

# Documentation
git commit -m "docs: Mise à jour README avec instructions déploiement"

# Refactoring
git commit -m "refactor: Optimisation composant ServiceCard"

# Performance
git commit -m "perf: Optimisation images WebP"
```

---

## 🚀 Déploiement automatique sur Vercel

### Via l'interface Vercel (Recommandé)

1. **Va sur** : https://vercel.com
2. **Connecte-toi** avec ton compte GitHub
3. **Clique sur "New Project"**
4. **Importe** ton repository `thercal-energie`
5. **Configure** :
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```
6. **Clique sur "Deploy"**

### Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
cd D:\projets\thercal-energie
vercel
```

**🎉 Ton site sera disponible sur : `https://thercal-energie.vercel.app`**

---

## 🔐 Variables d'environnement (si nécessaire)

Si tu as des clés API ou des secrets :

1. **Crée un fichier `.env.local`** (déjà dans `.gitignore`)
   ```env
   NEXT_PUBLIC_SITE_URL=https://thercal-energie.vercel.app
   NEXT_PUBLIC_EMAIL=contact@thercal-energie.fr
   ```

2. **Sur Vercel** : Settings → Environment Variables
   - Ajoute les mêmes variables
   - Redéploie

---

## 📊 Structure actuelle du projet

```
thercal-energie/
├── app/                    # Pages Next.js App Router
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Styles globaux
│   ├── devis/             # Page devis
│   ├── services/          # Pages services
│   └── ...
├── components/            # Composants React
│   ├── layout/           # Header, Footer
│   ├── sections/         # Sections homepage
│   └── ui/               # Composants UI (Shadcn)
├── lib/                   # Utilitaires
├── public/               # Fichiers statiques
│   └── images/           # Images (calo1-3.jpg)
├── .gitignore            # Fichiers à ignorer
└── package.json          # Dépendances
```

---

## 🛠️ Commandes utiles

```bash
# Voir l'historique des commits
git log --oneline

# Annuler le dernier commit (garde les modifications)
git reset --soft HEAD~1

# Voir les différences
git diff

# Créer un tag de version
git tag v1.0.0
git push --tags

# Cloner sur une autre machine
git clone https://github.com/TON-USERNAME/thercal-energie.git
```

---

## 🆘 En cas de problème

### Conflit lors du push
```bash
git pull --rebase
# Résoudre les conflits dans les fichiers
git add .
git rebase --continue
git push
```

### Annuler toutes les modifications locales
```bash
git reset --hard HEAD
```

### Supprimer une branche
```bash
# Localement
git branch -d nom-branche

# Sur GitHub
git push origin --delete nom-branche
```

---

## 📞 Support

Si tu as des questions :
- Documentation Git : https://git-scm.com/doc
- Documentation GitHub : https://docs.github.com
- Documentation Vercel : https://vercel.com/docs

---

## 🎉 Prochaines étapes

1. ✅ Créer le repo sur GitHub
2. ✅ Pousser le code
3. ✅ Déployer sur Vercel
4. ✅ Configurer un nom de domaine personnalisé (optionnel)
5. ✅ Activer GitHub Actions pour CI/CD (optionnel)

**Ton site sera en ligne en moins de 5 minutes !** 🚀

