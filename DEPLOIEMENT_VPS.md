# 🚀 Guide de Déploiement sur VPS Hostinger

## ✅ Changements poussés sur GitHub

Les modifications sont maintenant sur GitHub : `https://github.com/TIDIALLO/thercal-energie`

---

## 📋 Déploiement sur le VPS Hostinger

### Option 1 : Déploiement manuel (Recommandé pour la première fois)

#### Étape 1 : Se connecter au VPS

```bash
ssh root@ton-ip-vps
# ou
ssh utilisateur@thercalenergies.com
```

#### Étape 2 : Aller dans le dossier du projet

```bash
cd /var/www/thercal-energie
# ou le chemin où se trouve ton projet
```

#### Étape 3 : Récupérer les dernières modifications

```bash
# Si tu utilises Git sur le VPS
git pull origin main

# OU si tu n'utilises pas Git sur le VPS, télécharge depuis GitHub :
# 1. Va sur https://github.com/TIDIALLO/thercal-energie
# 2. Télécharge le ZIP
# 3. Extrais et remplace les fichiers
```

#### Étape 4 : Installer les dépendances (si nécessaire)

```bash
npm install --production
# ou
npm ci --production
```

#### Étape 5 : Rebuild l'application

```bash
npm run build
```

#### Étape 6 : Redémarrer PM2

```bash
pm2 restart thercal
# ou
pm2 restart all
```

#### Étape 7 : Vérifier les logs

```bash
pm2 logs thercal
# Vérifie qu'il n'y a pas d'erreurs
```

---

### Option 2 : Script de déploiement automatique

Crée un fichier `deploy.sh` sur le VPS :

```bash
#!/bin/bash
cd /var/www/thercal-energie
git pull origin main
npm install --production
npm run build
pm2 restart thercal
echo "✅ Déploiement terminé !"
```

Rends-le exécutable :

```bash
chmod +x deploy.sh
```

Utilise-le ensuite :

```bash
./deploy.sh
```

---

## 🔧 Configuration PM2 (si pas encore fait)

### Créer le fichier ecosystem.config.js

```bash
nano ecosystem.config.js
```

Contenu :

```javascript
module.exports = {
  apps: [{
    name: 'thercal',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: '/var/www/thercal-energie',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_SITE_URL: 'https://thercalenergies.com'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
```

### Démarrer avec PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## 🔐 Variables d'environnement

Assure-toi que `.env.local` existe sur le VPS :

```bash
nano .env.local
```

Contenu minimum :

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://thercalenergies.com
RESEND_API_KEY=re_6G197S5u_9n4TJb9iMSdPvcDwq9rgUsTj
RESEND_FROM=onboarding@resend.dev
```

**Important** : Après modification de `.env.local`, redémarre PM2 :

```bash
pm2 restart thercal
```

---

## 🌐 Configuration Nginx (si nécessaire)

Vérifie que Nginx pointe bien vers le port 3000 :

```bash
sudo nano /etc/nginx/sites-available/thercalenergies.com
```

Configuration :

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name thercalenergies.com www.thercalenergies.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Recharger Nginx :

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## ✅ Vérification après déploiement

1. **Vérifie que le site fonctionne** :
   - Ouvre https://thercalenergies.com
   - Vérifie que le nouveau logo s'affiche
   - Vérifie que le favicon est visible dans l'onglet

2. **Vérifie les logs PM2** :
   ```bash
   pm2 logs thercal --lines 50
   ```

3. **Teste le formulaire de contact** :
   - Envoie un message avec une pièce jointe
   - Vérifie que l'email arrive bien

---

## 🆘 En cas de problème

### Le site ne se charge pas

```bash
# Vérifie que PM2 tourne
pm2 status

# Vérifie les logs
pm2 logs thercal

# Redémarre
pm2 restart thercal
```

### Erreur de build

```bash
# Nettoie et rebuild
rm -rf .next
npm run build
pm2 restart thercal
```

### Le favicon ne s'affiche pas

1. Videz le cache du navigateur (`Ctrl+Shift+Delete`)
2. Vérifie que `public/favicon-th.png` existe sur le VPS
3. Force le rechargement : `Ctrl+F5`

---

## 📝 Commandes utiles PM2

```bash
pm2 status              # Voir l'état des processus
pm2 logs thercal        # Voir les logs
pm2 restart thercal     # Redémarrer
pm2 stop thercal        # Arrêter
pm2 start thercal       # Démarrer
pm2 delete thercal      # Supprimer
pm2 monit               # Monitoring en temps réel
```

---

## 🎯 Résumé rapide

Pour déployer rapidement après un `git push` :

```bash
ssh root@ton-vps
cd /var/www/thercal-energie
git pull origin main
npm install --production
npm run build
pm2 restart thercal
```

C'est tout ! 🚀


