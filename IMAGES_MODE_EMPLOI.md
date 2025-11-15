# 📸 MODE D'EMPLOI - Images (2 minutes)

## Ce que tu dois faire MAINTENANT

### 1️⃣ Crée un dossier (30 secondes)

```bash
# Ouvre PowerShell dans thercal-energie
cd public
mkdir images
```

Résultat :
```
thercal-energie/
└── public/
    └── images/    ← Nouveau dossier vide
```

---

### 2️⃣ Place les 3 images (1 minute)

**Sauvegarde les 3 images que tu m'as envoyées dans ce dossier :**

```
public/images/
├── hero-installation.jpg      ← Image des grands tuyaux verts
├── installation-1.jpg         ← Image avec vannes bleues
└── installation-2.jpg         ← Image avec vannes rouges
```

**Correspondance :**

| Ta Photo | Nom du Fichier | Où elle apparaît |
|----------|----------------|------------------|
| 🏭 Grands tuyaux verts + argentés | `hero-installation.jpg` | En haut de la page d'accueil |
| 🔵 Vannes et manomètres bleus | `installation-1.jpg` | Section "Pourquoi nous choisir" |
| 🔴 Vannes rouges | `installation-2.jpg` | Section "Expertise technique" |

---

### 3️⃣ Teste (30 secondes)

```bash
npm run dev
```

Ouvre http://localhost:3000

**Si tout est OK, tu verras :**
- ✅ Ton image de grande installation en haut de page
- ✅ Image avec vannes bleues plus bas
- ✅ Image avec vannes rouges encore plus bas

---

## ❌ Si ça ne marche pas

### Image not found ?

**Vérifie :**
1. Le dossier s'appelle bien `images` (tout en minuscules)
2. Il est dans `public/`
3. Les noms de fichiers sont exacts :
   - `hero-installation.jpg` (pas Hero ou HERO)
   - `installation-1.jpg` 
   - `installation-2.jpg`

### Redémarre le serveur

```bash
Ctrl+C
npm run dev
```

---

## 🎯 Structure Finale

```
thercal-energie/
└── public/
    ├── images/
    │   ├── hero-installation.jpg     ✅
    │   ├── installation-1.jpg        ✅
    │   └── installation-2.jpg        ✅
    ├── logo.svg                      (à ajouter)
    ├── favicon.ico                   (à ajouter)
    └── ...
```

---

**C'est tout ! Les images apparaîtront automatiquement sur le site. 🚀**

📖 **Guide détaillé :** `INTEGRATION_IMAGES.md`

