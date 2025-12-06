# ⚡ ACTION REQUISE - Intégration du Logo

## 🎯 Ce qui a été fait ✅

1. ✅ **Charte graphique** mise à jour (bleu ciel + bleu foncé)
2. ✅ **Upload de fichiers** ajouté au formulaire de contact  
3. ✅ **Code préparé** pour recevoir le logo
4. ✅ **Favicons configurés**

## 📋 CE QUE TU DOIS FAIRE MAINTENANT

### Étape 1 : Préparer les Fichiers Logo (5 min)

Tu dois créer ces fichiers à partir du logo **THERCAL ENERGIES** que tu m'as fourni :

```
📁 À créer :
├── logo.svg (ou logo.png)      ← Logo complet avec flamme
├── favicon.ico                 ← Juste "T" + flamme (32x32px)
├── favicon-16x16.png           ← Juste "T" + flamme (16x16px)
├── favicon-32x32.png           ← Juste "T" + flamme (32x32px)
└── apple-touch-icon.png        ← Juste "T" + flamme (180x180px)
```

**🛠️ Outils gratuits pour créer les favicons :**
- https://favicon.io/
- https://realfavicongenerator.net/

---

### Étape 2 : Copier les Fichiers (1 min)

**Copie tous les fichiers dans ce dossier :**

```
thercal-energie/public/
```

Résultat attendu :

```
thercal-energie/
└── public/
    ├── logo.svg              ← Logo complet
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── apple-touch-icon.png
```

---

### Étape 3 : Modifier 3 Fichiers (5 min)

#### Fichier 1 : `components/layout/header.tsx`

**Cherche cette ligne (environ ligne 2) :**
```typescript
import Link from "next/link";
```

**Ajoute juste en dessous :**
```typescript
import Image from "next/image";
```

**Puis cherche :**
```typescript
{/* Placeholder - Remplacer par le vrai logo */}
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600">
  <span className="text-xl font-bold text-white">🔥</span>
</div>
```

**Remplace par :**
```typescript
<Image
  src="/logo.svg"
  alt="THERCAL ENERGIES"
  width={120}
  height={40}
  className="h-10 w-auto object-contain"
  priority
/>
```

---

#### Fichier 2 : `components/layout/footer.tsx`

**Ajoute en haut (après les autres imports) :**
```typescript
import Image from "next/image";
```

**Cherche le placeholder et remplace par :**
```typescript
<Image
  src="/logo.svg"
  alt="THERCAL ENERGIES"
  width={40}
  height={40}
  className="h-10 w-auto object-contain"
/>
```

---

#### Fichier 3 : `components/layout/mobile-nav.tsx`

**Ajoute en haut :**
```typescript
import Image from "next/image";
```

**Remplace le placeholder par :**
```typescript
<Image
  src="/logo.svg"
  alt="THERCAL ENERGIES"
  width={40}
  height={40}
  className="h-10 w-auto object-contain"
/>
```

---

### Étape 4 : Tester (1 min)

```bash
npm run dev
```

Ouvre http://localhost:3000

**Vérifie :**
- [ ] Le logo THERCAL ENERGIES apparaît en haut (header)
- [ ] Le logo apparaît en bas (footer)
- [ ] Le favicon (icône) apparaît dans l'onglet du navigateur
- [ ] Les couleurs du site sont bleu ciel / bleu foncé

---

## 🎨 Ce qui a Changé Visuellement

### Avant (avec placeholder)
```
Header : [🔥 Carré bleu]  THERCAL ENERGIES
```

### Maintenant (avec ton logo)
```
Header : [LOGO COMPLET AVEC FLAMME]  THERCAL ENERGIES
```

### Couleurs

**Avant :** Gris/Noir
**Maintenant :** Bleu ciel (#5BB4E5) + Bleu foncé (#0F3A54)

---

## 📎 Nouveauté : Upload de Fichiers

Le formulaire de contact permet maintenant :
- ✅ Joindre des fichiers (PDF, Word, Images)
- ✅ Plusieurs fichiers en même temps
- ✅ Affichage de la taille des fichiers
- ✅ Possibilité de retirer un fichier

**Teste-le sur :** http://localhost:3000/contact

---

## 📚 Documentation Disponible

Si tu es bloqué ou veux plus de détails :

| Fichier | Contenu |
|---------|---------|
| **`INTEGRATION_LOGO.md`** | Guide complet étape par étape |
| **`CHANGEMENTS_LOGO.md`** | Résumé de toutes les modifications |
| **`README.md`** | Installation et déploiement |
| **`QUICKSTART.md`** | Démarrage rapide |
| **`GUIDE_DEVELOPPEUR.md`** | Explications du code |

---

## 🆘 Problèmes Fréquents

### Le logo ne s'affiche pas

**Causes possibles :**
1. Fichier pas dans `public/` → Vérifie l'emplacement
2. Mauvais nom → Doit être exactement `logo.svg` (ou `.png`)
3. Serveur pas redémarré → Fais `Ctrl+C` puis `npm run dev`

### Erreur "Image not found"

```typescript
// Vérifie que le chemin commence par "/"
<Image src="/logo.svg" ... />
       ^^^ slash obligatoire
```

### Le favicon ne change pas

- Vide le cache du navigateur : `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
- Ferme et rouvre l'onglet

---

## ✅ Checklist Rapide

- [ ] Logo principal créé : `public/logo.svg`
- [ ] Favicons créés dans `public/`
- [ ] Import `Image` ajouté dans `header.tsx`
- [ ] Import `Image` ajouté dans `footer.tsx`
- [ ] Import `Image` ajouté dans `mobile-nav.tsx`
- [ ] Placeholder remplacé dans les 3 fichiers
- [ ] Testé avec `npm run dev`
- [ ] Logo visible dans le site
- [ ] Favicon visible dans l'onglet

---

## 🚀 C'est Prêt !

Une fois ces 4 étapes terminées, ton site THERCAL ENERGIES sera complet avec :
- ✨ Ton logo officiel
- 🎨 Charte graphique bleu ciel/blanc
- 📎 Upload de fichiers dans le formulaire
- 🌐 Prêt pour le déploiement sur Vercel

**Temps estimé : 15 minutes maximum**

---

**Besoin d'aide ? Consulte `INTEGRATION_LOGO.md` pour le guide détaillé !**

