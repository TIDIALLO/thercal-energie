# 🔐 Documentation du Système d'Authentification

## Vue d'ensemble

Le système d'authentification de Thercal Énergies est conçu pour être **simple, sécurisé et évolutif**. Actuellement en version de développement, il utilise le localStorage pour la démonstration, mais est prêt à être migré vers une solution de production complète.

---

## 📂 Architecture du système

```
lib/
  └── auth-context.tsx          # Context React pour l'état global d'authentification

components/auth/
  ├── auth-button.tsx            # Bouton de connexion dans le header
  ├── login-form.tsx             # Formulaire de connexion
  ├── register-form.tsx          # Formulaire d'inscription
  └── forgot-password-form.tsx   # Formulaire de récupération de mot de passe
```

---

## 🔑 Gestion des Mots de Passe

### **Actuellement (Développement)**

```javascript
// Stockage simple dans localStorage
const user = {
  id: "123",
  name: "Jean Dupont",
  email: "jean@example.com",
  password: "monmotdepasse"  // ⚠️ EN CLAIR (développement uniquement)
}

localStorage.setItem("thercal_users", JSON.stringify([user]));
```

**⚠️ IMPORTANT** : Cette approche est **uniquement pour le développement**. Les mots de passe ne doivent **JAMAIS** être stockés en clair en production !

---

### **En Production (Recommandé)**

#### **1. Hashage avec bcrypt**

```javascript
// Backend (Node.js/Express)
const bcrypt = require('bcrypt');

// Lors de l'inscription
async function registerUser(name, email, password) {
  // Générer un salt (sel) unique
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  // Stocker en base de données
  await db.users.create({
    name,
    email,
    password: hashedPassword  // ✅ Hashé, pas en clair
  });
}

// Lors de la connexion
async function loginUser(email, password) {
  const user = await db.users.findOne({ email });
  
  // Comparer le mot de passe avec le hash
  const isValid = await bcrypt.compare(password, user.password);
  
  if (!isValid) {
    throw new Error("Mot de passe incorrect");
  }
  
  return user;
}
```

**Exemple de hash bcrypt** :
```
Mot de passe : "monmotdepasse"
Hash bcrypt : "$2b$12$KIXxPz9FQ7qH9fGpQx3KOuYz8r5vN6wQ..."
```

---

## 🔐 Système d'Authentification Complet

### **1. Flux d'Inscription**

```
Client                     Serveur                   Base de données
  |                          |                             |
  |-- POST /api/register --->|                             |
  |    {name, email, pwd}    |                             |
  |                          |-- Vérifier email unique --->|
  |                          |                             |
  |                          |<---- Email disponible ------|
  |                          |                             |
  |                          |-- Hash mot de passe         |
  |                          |   (bcrypt)                  |
  |                          |                             |
  |                          |-- Créer utilisateur ------->|
  |                          |                             |
  |                          |<---- Utilisateur créé ------|
  |                          |                             |
  |                          |-- Générer JWT Token         |
  |<--- Token + User data ---|                             |
  |                          |                             |
```

---

### **2. Flux de Connexion**

```
Client                     Serveur                   Base de données
  |                          |                             |
  |-- POST /api/login ------>|                             |
  |    {email, password}     |                             |
  |                          |-- Chercher utilisateur ---->|
  |                          |                             |
  |                          |<---- User avec hash --------|
  |                          |                             |
  |                          |-- Comparer mot de passe     |
  |                          |   bcrypt.compare()          |
  |                          |                             |
  |                          |-- Générer JWT Token         |
  |<--- Token + User data ---|                             |
  |                          |                             |
  |-- Stocker token          |                             |
  |   (localStorage/cookie)  |                             |
```

---

### **3. JWT (JSON Web Token)**

**Qu'est-ce qu'un JWT ?**

Un JWT est un token sécurisé qui contient les informations de l'utilisateur et qui prouve son identité.

```javascript
// Structure d'un JWT
{
  // Header (entête)
  "alg": "HS256",
  "typ": "JWT"
}
.
{
  // Payload (données)
  "userId": "123",
  "email": "jean@example.com",
  "iat": 1699564800,  // Date de création
  "exp": 1699651200   // Date d'expiration (24h)
}
.
// Signature (pour vérifier l'intégrité)
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

**Exemple de JWT** :
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJlbWFpbCI6ImplYW5AZXhhbXBsZS5jb20iLCJpYXQiOjE2OTk1NjQ4MDAsImV4cCI6MTY5OTY1MTIwMH0.abc123def456...
```

---

### **4. Implémentation Backend Complète**

```javascript
// server/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

// SECRET pour signer les JWT (à mettre dans .env)
const JWT_SECRET = process.env.JWT_SECRET;

// ✅ INSCRIPTION
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // 1. Valider les données
    if (!email || !password || password.length < 6) {
      return res.status(400).json({ error: "Données invalides" });
    }
    
    // 2. Vérifier si l'email existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email déjà utilisé" });
    }
    
    // 3. Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // 4. Créer l'utilisateur
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });
    
    // 5. Générer le JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // 6. Répondre avec le token
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
    
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ CONNEXION
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // 1. Chercher l'utilisateur
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Identifiants incorrects" });
    }
    
    // 2. Vérifier le mot de passe
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Identifiants incorrects" });
    }
    
    // 3. Générer le JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // 4. Répondre avec le token
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
    
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ MIDDLEWARE pour vérifier le JWT
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: "Token manquant" });
  }
  
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Token invalide" });
    }
    req.userId = decoded.userId;
    next();
  });
}

// ✅ ROUTE PROTÉGÉE (exemple)
router.get('/profile', authenticateToken, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
});

module.exports = router;
```

---

## 🛡️ Sécurité : Bonnes Pratiques

### **1. Validation des données**

```javascript
// Côté client (React)
const schema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string()
    .min(8, "Minimum 8 caractères")
    .regex(/[A-Z]/, "Au moins une majuscule")
    .regex(/[a-z]/, "Au moins une minuscule")
    .regex(/[0-9]/, "Au moins un chiffre")
    .regex(/[^A-Za-z0-9]/, "Au moins un caractère spécial")
});

// Côté serveur
const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});
```

---

### **2. Protection contre les attaques**

#### **a) Rate Limiting** (Limitation de tentatives)

```javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 tentatives max
  message: "Trop de tentatives, réessayez dans 15 minutes"
});

router.post('/login', loginLimiter, loginHandler);
```

---

#### **b) HTTPS obligatoire**

```javascript
// Rediriger HTTP vers HTTPS
app.use((req, res, next) => {
  if (req.protocol === 'http' && process.env.NODE_ENV === 'production') {
    return res.redirect(301, `https://${req.hostname}${req.url}`);
  }
  next();
});
```

---

#### **c) HttpOnly Cookies** (plus sécurisé que localStorage)

```javascript
// Stocker le JWT dans un cookie HttpOnly
res.cookie('authToken', token, {
  httpOnly: true,    // Pas accessible via JavaScript
  secure: true,      // HTTPS uniquement
  sameSite: 'strict', // Protection CSRF
  maxAge: 24 * 60 * 60 * 1000 // 24 heures
});
```

---

### **3. Variables d'environnement**

```bash
# .env (JAMAIS commiter ce fichier !)
JWT_SECRET=super_secret_key_tres_longue_et_aleatoire_123456789
DATABASE_URL=mongodb://localhost:27017/thercal
BCRYPT_ROUNDS=12
NODE_ENV=production
```

---

## 📊 Base de Données

### **Schéma utilisateur (MongoDB/Mongoose)**

```javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

// Index pour améliorer les performances
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);
```

---

## 🔄 Récupération de Mot de Passe

### **Flux complet**

```javascript
// 1. Générer un token de réinitialisation
const crypto = require('crypto');

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  
  if (!user) {
    // Ne pas révéler si l'email existe
    return res.json({ message: "Email envoyé si le compte existe" });
  }
  
  // Générer un token unique
  const resetToken = crypto.randomBytes(32).toString('hex');
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  
  // Sauvegarder le token (expire dans 1h)
  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpires = Date.now() + 3600000;
  await user.save();
  
  // Envoyer l'email avec le lien
  const resetUrl = `https://thercal-energie.fr/reset-password?token=${resetToken}`;
  await sendEmail({
    to: user.email,
    subject: "Réinitialisation de mot de passe",
    html: `Cliquez ici pour réinitialiser : <a href="${resetUrl}">${resetUrl}</a>`
  });
  
  res.json({ message: "Email envoyé si le compte existe" });
});

// 2. Réinitialiser le mot de passe
router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;
  
  // Hasher le token pour le comparer
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  
  // Chercher l'utilisateur avec le token valide
  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() }
  });
  
  if (!user) {
    return res.status(400).json({ error: "Token invalide ou expiré" });
  }
  
  // Changer le mot de passe
  user.password = await bcrypt.hash(newPassword, 12);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  
  res.json({ message: "Mot de passe réinitialisé avec succès" });
});
```

---

## 📱 Frontend : Intégration avec le Backend

```javascript
// lib/api/auth.ts
export async function login(email: string, password: string) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  
  const data = await response.json();
  
  // Stocker le token
  localStorage.setItem('authToken', data.token);
  
  return data.user;
}

// Ajouter le token aux requêtes
export async function fetchProtectedData() {
  const token = localStorage.getItem('authToken');
  
  const response = await fetch('/api/protected', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  return response.json();
}
```

---

## 🎯 Résumé : Passage en Production

### **Checklist de migration**

- [ ] **Backend API** : Node.js/Express ou Next.js API Routes
- [ ] **Base de données** : MongoDB/PostgreSQL/MySQL
- [ ] **Hashage bcrypt** : Remplacer le stockage en clair
- [ ] **JWT Tokens** : Générer et vérifier les tokens
- [ ] **HTTPS** : Certificat SSL obligatoire
- [ ] **Rate Limiting** : Limiter les tentatives de connexion
- [ ] **Variables d'env** : Secrets dans .env
- [ ] **Cookies HttpOnly** : Au lieu de localStorage (optionnel mais recommandé)
- [ ] **Email service** : SendGrid/Mailgun pour récupération
- [ ] **Tests** : Tests unitaires et d'intégration

---

## 📚 Ressources Recommandées

- **bcrypt** : https://www.npmjs.com/package/bcrypt
- **jsonwebtoken** : https://www.npmjs.com/package/jsonwebtoken
- **OWASP** : https://owasp.org/www-project-top-ten/
- **Express Rate Limit** : https://www.npmjs.com/package/express-rate-limit

---

**Maintenu par** : Équipe Thercal Énergies  
**Dernière mise à jour** : Novembre 2024

