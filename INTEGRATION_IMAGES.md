# 📸 Intégration des Images - Guide Rapide

## ✅ Ce qui a été fait

J'ai intégré les 3 images d'installations thermiques dans :
1. **Hero Section** (haut de page) : Grande installation industrielle
2. **About Section** : Installation avec vannes bleues
3. **Nouvelle Section Expertise** : Installation avec vannes rouges

## 🎯 CE QUE TU DOIS FAIRE (5 minutes)

### Étape 1 : Créer le dossier images

Dans le dossier `thercal-energie/public/`, crée un dossier `images` :

```
thercal-energie/
└── public/
    └── images/          ← Crée ce dossier
```

**Sur Windows :**
```bash
cd thercal-energie\public
mkdir images
```

---

### Étape 2 : Sauvegarder les 3 images

**Sauvegarde les 3 images que tu m'as fournies avec ces noms :**

```
public/images/
├── hero-installation.jpg        ← Image 3 (grande installation verte)
├── installation-1.jpg           ← Image 1 (vannes bleues)
└── installation-2.jpg           ← Image 2 (vannes rouges)
```

**Correspondance :**
- **`hero-installation.jpg`** = La grande installation industrielle avec les tuyaux argentés et verts
- **`installation-1.jpg`** = L'installation avec les vannes et manomètres bleus
- **`installation-2.jpg`** = L'installation avec les vannes rouges

---

### Étape 3 : Tester

```bash
npm run dev
```

Ouvre http://localhost:3000

**Tu devrais voir :**
- ✅ Image de la grande installation en haut (Hero)
- ✅ Image avec vannes bleues dans "Pourquoi nous choisir"
- ✅ Image avec vannes rouges dans "Expertise technique"
- ✅ Badge "Certifié RGE" sur l'image hero
- ✅ Statistiques (2000+ projets, 98% satisfaction)

---

## 🎨 Où les Images Apparaissent

### 1. Hero Section (En-tête principal)

```
┌─────────────────────────────────────┐
│  Expert en isolation thermique      │
│                                     │
│  [GRANDE IMAGE INSTALLATION]        │ ← hero-installation.jpg
│       Badge "Certifié RGE"          │
└─────────────────────────────────────┘
```

### 2. Section "Pourquoi nous choisir"

```
┌─────────────────────────────────────┐
│  Texte explicatif                   │
│                                     │
│  [IMAGE VANNES BLEUES]              │ ← installation-1.jpg
│                                     │
│  [Cartes features]                  │
└─────────────────────────────────────┘
```

### 3. Section "Expertise technique" (NOUVEAU)

```
┌─────────────────────────────────────┐
│  [IMAGE VANNES ROUGES]              │ ← installation-2.jpg
│    Statistiques : 2000+ / 98%       │
│                                     │
│  Texte + Points expertise           │
└─────────────────────────────────────┘
```

---

## 🔧 Optimisations Appliquées

### Images Next.js Optimisées

✅ **Format WebP automatique** : Next.js convertit automatiquement en WebP
✅ **Lazy loading** : Les images se chargent quand on scroll
✅ **Responsive** : Tailles adaptées selon l'écran
✅ **Priority** : L'image hero se charge en priorité

### Améliorations Design

✅ **Badge de certification** sur l'image hero
✅ **Cartes de statistiques** en surimpression
✅ **Ombres et arrondis** pour un look moderne
✅ **Transitions fluides** au survol

---

## 📐 Spécifications des Images

| Image | Usage | Dimensions Recommandées | Format |
|-------|-------|------------------------|--------|
| hero-installation.jpg | Hero principal | 1200x900px | JPG optimisé |
| installation-1.jpg | Section About | 800x600px | JPG optimisé |
| installation-2.jpg | Section Expertise | 900x650px | JPG optimisé |

**Poids recommandé :** Moins de 500 Ko par image

---

## 🖼️ Si les Images sont Trop Lourdes

Si les images sont très lourdes (> 1 Mo), optimise-les avec :

### En ligne (gratuit)
- **TinyPNG** : https://tinypng.com/
- **Squoosh** : https://squoosh.app/

### Recommandation
1. Upload l'image
2. Choisis qualité 80-85%
3. Télécharge la version optimisée
4. Place dans `public/images/`

---

## ❌ Problèmes Fréquents

### "Image not found"

**Cause :** Nom de fichier incorrect ou mauvais emplacement

**Solution :**
```
✅ Bon : public/images/hero-installation.jpg
❌ Mauvais : public/hero-installation.jpg
❌ Mauvais : public/images/Hero-Installation.jpg (majuscules)
```

### Image ne s'affiche pas

1. Vérifie que le dossier `images` existe dans `public/`
2. Vérifie les noms de fichiers (sensible à la casse)
3. Redémarre le serveur : `Ctrl+C` puis `npm run dev`

### Image floue

- Utilise des images haute résolution
- Minimum 1200px de large pour hero
- Format JPG avec qualité 85%

---

## ✨ Résultat Final

Après intégration, la page d'accueil affichera :

### Section par Section

**1. Hero (Haut de page)**
- Grande image d'installation professionnelle
- Badge "Certifié RGE" en surimpression
- Texte accrocheur + boutons d'action

**2. Services**
- 4 cartes de services
- Icônes et descriptions

**3. Pourquoi nous choisir**
- Texte explicatif à gauche
- Image professionnelle à droite
- 4 cartes de features

**4. Expertise technique** (NOUVELLE SECTION)
- Image d'installation complexe
- Statistiques (2000+ projets, 98%)
- Points d'expertise
- Bouton vers réalisations

**5. Témoignages**
- Avis clients avec étoiles

**6. Call-to-Action**
- Bouton devis + téléphone

**7. Contact**
- Formulaire avec upload de fichiers

---

## 📋 Checklist

- [ ] Dossier `public/images/` créé
- [ ] Image 1 sauvegardée : `hero-installation.jpg`
- [ ] Image 2 sauvegardée : `installation-1.jpg`
- [ ] Image 3 sauvegardée : `installation-2.jpg`
- [ ] Serveur relancé : `npm run dev`
- [ ] Page d'accueil vérifiée
- [ ] Image hero visible en haut
- [ ] Image vannes bleues dans "Pourquoi nous choisir"
- [ ] Image vannes rouges dans "Expertise"

---

## 🎯 Ordre des Sections sur la Page d'Accueil

1. **Hero** (avec grande installation) ← Image 3
2. **Services** (4 cartes)
3. **Pourquoi nous choisir** (avec vannes bleues) ← Image 1
4. **Expertise technique** (avec vannes rouges) ← Image 2
5. **Témoignages** (avis clients)
6. **Call-to-Action** (devis)
7. **Contact** (formulaire)

---

## 💡 Prochaines Améliorations (Optionnel)

### Si tu veux aller plus loin :

- [ ] Ajouter un carrousel d'images dans les réalisations
- [ ] Créer une galerie before/after
- [ ] Ajouter des vidéos d'installation
- [ ] Intégrer des schémas techniques

---

**C'est prêt ! Sauvegarde les 3 images dans `public/images/` et teste avec `npm run dev` 🚀**

