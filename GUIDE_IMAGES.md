# 📸 Guide d'intégration des images

## 🎯 Objectif
Remplacer les placeholders par les vraies images d'installations thermiques.

## 📁 Où sauvegarder les images ?

**Chemin complet** : `D:\projets\thercal-energie\public\images\`

Le dossier `public\images` a déjà été créé automatiquement.

---

## 📥 Images à sauvegarder

### Image 1 : Hero Section (Page d'accueil principale)
**Nom du fichier** : `hero-installation.jpg`

**Description** : Collage de 3 photos montrant :
- Manomètres bleus
- Installation de tuyauterie
- Vannes et équipements

**Utilisation** : Section principale de la page d'accueil (première image visible)

---

### Image 2 : Section "À propos"
**Nom du fichier** : `installation-1.jpg`

**Description** : Installation avec vannes rouges et tuyaux en acier

**Utilisation** : Section "À propos de nous" pour montrer l'expertise

---

### Image 3 : Section "Expertise"
**Nom du fichier** : `installation-2.jpg`

**Description** : Grande installation industrielle avec tuyaux verts

**Utilisation** : Section "Notre expertise à votre service"

---

### Image 4 : (Optionnelle - Pour une future section)
**Nom du fichier** : `installation-3.jpg`

**Description** : Installation complexe de tuyauterie

**Utilisation** : Disponible pour d'autres sections ou pages de services

---

## ✅ Étapes de sauvegarde (Windows)

### Méthode 1 : Via les messages
1. Dans le chat, **clique-droit** sur chaque image
2. Sélectionne **"Enregistrer l'image sous..."**
3. Navigue vers : `D:\projets\thercal-energie\public\images\`
4. Nomme le fichier selon le tableau ci-dessus
5. Clique sur **"Enregistrer"**

### Méthode 2 : Via l'explorateur
1. Ouvre l'explorateur Windows
2. Va dans `D:\projets\thercal-energie\public\images\`
3. Garde cette fenêtre ouverte
4. **Glisse-dépose** les images depuis le chat directement dans ce dossier
5. **Renomme** chaque fichier selon les noms ci-dessus

---

## 🔍 Vérification

Après avoir sauvegardé les images, vérifie que tu as bien ces 4 fichiers :

```
D:\projets\thercal-energie\public\images\
├── hero-installation.jpg
├── installation-1.jpg
├── installation-2.jpg
└── installation-3.jpg
```

---

## 🚀 Après la sauvegarde

Une fois les images sauvegardées :

1. **Lance le serveur de développement** :
   ```bash
   npm run dev
   ```

2. **Ouvre le navigateur** : http://localhost:3000

3. **Les images devraient s'afficher** automatiquement à la place des placeholders

---

## 🛠️ En cas de problème

### L'image ne s'affiche pas ?

**Vérifie que :**
- ✅ Le nom du fichier est **exactement** comme indiqué (minuscules, tirets)
- ✅ L'extension est bien `.jpg` (pas `.jpeg` ou `.png`)
- ✅ Le fichier est bien dans `public/images/` (pas dans un sous-dossier)
- ✅ Le serveur de développement est relancé (Ctrl+C puis `npm run dev`)

### Forcer le rechargement du navigateur :
- **Windows** : `Ctrl + Shift + R`
- **Mac** : `Cmd + Shift + R`

---

## 📊 Optimisation des images (Optionnel)

Si les images sont trop lourdes (> 2 Mo), tu peux les compresser avec :
- **TinyPNG** : https://tinypng.com/
- **ImageOptim** (Mac)
- **JPEG-Optimizer** (Windows)

**Taille recommandée** : 500 Ko - 1 Mo par image

---

## 💡 Bon à savoir

Next.js optimise automatiquement les images :
- ✅ Conversion en WebP/AVIF (formats modernes)
- ✅ Lazy loading (chargement différé)
- ✅ Responsive (différentes tailles selon l'écran)
- ✅ Réduction automatique de la qualité sans perte visible

Tu n'as donc **rien à faire** côté code, tout est déjà configuré ! 🎉

