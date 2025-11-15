# 🎨 Guide d'Intégration du Logo Thercal Energies

## 📋 Instructions Étape par Étape

### Étape 1 : Préparer les fichiers du logo

Tu as le logo **THERCAL ENERGIES** avec la flamme bleue. Voici ce qu'il faut faire :

#### A. Fichiers à créer

**1. Logo principal (pour le site)**
- **Nom du fichier :** `logo.svg` (ou `logo.png`)
- **Format recommandé :** SVG (vectoriel - meilleure qualité)
- **Dimensions si PNG :** 400x150px minimum
- **Fond :** Transparent

**2. Favicons (icônes de l'onglet)**
- `favicon.ico` : 32x32px
- `favicon-16x16.png` : 16x16px  
- `favicon-32x32.png` : 32x32px
- `apple-touch-icon.png` : 180x180px

Pour les favicons, utilise juste la partie **"T" + flamme** du logo (version simplifiée)

---

### Étape 2 : Placer les fichiers

**Copie tous les fichiers dans le dossier :** `thercal-energie/public/`

```
thercal-energie/
└── public/
    ├── logo.svg              ← Logo complet pour le site
    ├── favicon.ico           ← Icône navigateur
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── apple-touch-icon.png  ← Icône iOS
```

---

### Étape 3 : Utiliser le logo dans le site

Une fois les fichiers dans `public/`, le code est **déjà prêt** !

#### Dans le Header (en-tête du site)

Ouvre le fichier `components/layout/header.tsx` et remplace :

```typescript
{/* Placeholder - Remplacer par le vrai logo */}
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600">
  <span className="text-xl font-bold text-white">🔥</span>
</div>
```

Par :

```typescript
<Image
  src="/logo.svg"
  alt="Thercal Énergie"
  width={120}
  height={40}
  className="h-10 w-auto object-contain"
  priority
/>
```

**N'oublie pas d'importer Image en haut du fichier :**

```typescript
import Image from "next/image";
```

#### Dans le Footer (pied de page)

Même chose dans `components/layout/footer.tsx` :

```typescript
<Image
  src="/logo.svg"
  alt="Thercal Énergie"
  width={40}
  height={40}
  className="h-10 w-auto object-contain"
/>
```

#### Dans le Menu Mobile

Et dans `components/layout/mobile-nav.tsx` :

```typescript
<Image
  src="/logo.svg"
  alt="Thercal Énergie"
  width={40}
  height={40}
  className="h-10 w-auto object-contain"
/>
```

---

### Étape 4 : Vérifier que ça fonctionne

1. Lance le serveur de développement :

```bash
npm run dev
```

2. Ouvre http://localhost:3000

3. Vérifie :
   - ✅ Le logo apparaît dans le header (en haut)
   - ✅ Le logo apparaît dans le footer (en bas)
   - ✅ Le favicon apparaît dans l'onglet du navigateur

---

## 🎨 Charte Graphique Appliquée

J'ai déjà mis à jour les couleurs du site selon le logo :

### Couleurs extraites du logo

```css
/* Bleu ciel (flamme) */
--primary: #5BB4E5

/* Bleu foncé (texte THERCAL) */
--foreground: #0F3A54

/* Blanc */
--background: #FFFFFF
```

Ces couleurs sont appliquées à :
- ✅ Boutons principaux : bleu ciel
- ✅ Liens et accents : bleu ciel
- ✅ Textes : bleu foncé
- ✅ Arrière-plans : blanc et nuances de bleu clair

---

## 🛠️ Outils pour Créer les Favicons

Si tu as besoin de créer les favicons depuis le logo :

### Option 1 : En ligne (gratuit)

**Favicon.io** : https://favicon.io/
1. Upload ton logo
2. Télécharge le pack de favicons
3. Copie les fichiers dans `public/`

**RealFaviconGenerator** : https://realfavicongenerator.net/
- Plus d'options avancées
- Génère tous les formats

### Option 2 : Avec un logiciel

- **Photoshop / GIMP** : Redimensionne le logo aux bonnes tailles
- **Figma / Canva** : Exporte en différentes résolutions

---

## 📱 Format Recommandé : SVG

**Pourquoi SVG ?**
- ✅ Qualité parfaite à toutes les tailles
- ✅ Fichier plus léger
- ✅ Supporte les animations (si besoin plus tard)

**Si tu n'as que PNG :**
- Ça fonctionne aussi !
- Assure-toi d'une résolution élevée (400x150px minimum)
- Fond transparent

---

## ✅ Checklist Finale

- [ ] Logo principal dans `public/logo.svg` (ou `.png`)
- [ ] Favicons dans `public/` (favicon.ico, etc.)
- [ ] Import `Image` ajouté dans `header.tsx`
- [ ] Import `Image` ajouté dans `footer.tsx`
- [ ] Import `Image` ajouté dans `mobile-nav.tsx`
- [ ] Code placeholder remplacé par `<Image src="/logo.svg" ... />`
- [ ] Testé sur http://localhost:3000
- [ ] Logo visible dans le header
- [ ] Logo visible dans le footer
- [ ] Favicon visible dans l'onglet

---

## 🎯 Résultat Final

Une fois le logo intégré :

- **Header** : Logo Thercal Energies avec la flamme bleue
- **Footer** : Même logo, version compacte
- **Onglet navigateur** : Icône "T + flamme"
- **Couleurs du site** : Bleu ciel et bleu foncé (selon la charte)

---

## 🆘 Besoin d'Aide ?

Si tu rencontres un problème :

1. Vérifie que les fichiers sont bien dans `public/`
2. Vérifie le nom exact : `logo.svg` (pas `Logo.svg` ou autre)
3. Redémarre le serveur : `Ctrl+C` puis `npm run dev`

---

**Logo prêt à être intégré ! 🎉**

