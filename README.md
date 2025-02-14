# 📖 Guide Git & Next.js

Bienvenue dans ce guide qui va t’aider à utiliser **Git** et **GitHub** pour collaborer efficacement sur notre projet. 🚀  
Nous allons voir comment :

-   ✅ Créer une branche pour travailler dessus
-   ✅ Envoyer ton code sur GitHub
-   ✅ Récupérer le code mis à jour depuis GitHub
-   ✅ Faire une **Pull Request (PR)** pour proposer tes modifications
-   ✅ Utiliser **Yarn** pour lancer et builder le projet Next.js

---

## 🔹 1. Cloner le projet (première fois seulement)

Avant de commencer, il faut récupérer le projet depuis GitHub :

```bash
git clone https://github.com/nom-utilisateur/nom-du-repo.git
cd nom-du-repo
```

Cela crée un dossier avec tout le code du projet.

---

## 🔹 2. Créer une nouvelle branche

Avant de travailler, crée ta propre branche pour éviter de modifier directement `main` :

```bash
git checkout -b ma-branche
```

💡 Remplace `ma-branche` par un nom explicite (ex: `feature-login`, `fix-bug-header`, etc.).

---

## 🔹 3. Faire des modifications et envoyer le code sur GitHub

Après avoir modifié du code, voici comment l’envoyer sur GitHub :

1. Vérifier quels fichiers ont changé :

    ```bash
    git status
    ```

2. Ajouter les fichiers à la prochaine sauvegarde :

    ```bash
    git add .
    ```

3. Créer un "commit" (une sauvegarde avec un message explicatif) :

    ```bash
    git commit -m "Ajout du formulaire de connexion"
    ```

4. Envoyer la branche sur GitHub :

    ```bash
    git push origin ma-branche
    ```

💡 Si c'est ta première fois sur cette branche, utilise :

```bash
git push --set-upstream origin ma-branche
```

---

## 🔹 4. Récupérer les dernières mises à jour du projet

Avant de commencer à coder ou après une PR validée, il faut récupérer les mises à jour du projet :

1. Revenir sur `main` :

    ```bash
    git checkout main
    ```

2. Télécharger les dernières mises à jour :

    ```bash
    git pull origin main
    ```

3. Mettre à jour ta branche avec les nouvelles modifications :

    ```bash
    git checkout ma-branche
    git merge main
    ```

💡 **Conflits ?** Si Git indique des conflits, il faut les résoudre manuellement dans les fichiers concernés avant de valider avec :

```bash
git add .
git commit -m "Résolution des conflits"
git push origin ma-branche
```

---

## 🔹 5. Faire une **Pull Request (PR)** sur GitHub

Une **Pull Request** permet de proposer ton code pour qu’il soit intégré au projet.

1. Aller sur GitHub :  
   👉 [https://github.com/nom-utilisateur/nom-du-repo/pulls](https://github.com/nom-utilisateur/nom-du-repo/pulls)

2. **Créer une nouvelle PR** :

    - Sélectionne ta branche (`ma-branche`)
    - Vérifie les fichiers modifiés
    - Ajoute un **titre clair** et une **description**
    - Clique sur **"Create Pull Request"**

3. Après validation, fusionner la PR en cliquant sur **"Merge Pull Request"**

4. Supprimer ta branche localement (optionnel) :

    ```bash
    git branch -d ma-branche
    git push origin --delete ma-branche
    ```

---

## 🔹 6. Utiliser **Yarn** avec Next.js

Dans notre projet, on utilise **Yarn** pour gérer les dépendances et lancer l’application.

### 🚀 Installer les dépendances

Si c'est ta première fois sur le projet :

```bash
yarn install
```

### ▶️ Lancer le projet en local

```bash
yarn dev
```

💡 Cela démarre un serveur local pour voir tes modifications en direct.

### 🔨 Builder le projet

Si tu veux générer la version prête pour la production :

```bash
yarn build
```

### 🔄 Mettre à jour les dépendances

Si une mise à jour des dépendances est nécessaire :

```bash
yarn upgrade
```

### 📂 Mettre à jour le dossier `/out`

Si le projet utilise un export statique, voici comment régénérer `/out` :

```bash
yarn build
```

---

## 🎯 Conclusion

Tu as maintenant toutes les bases pour travailler efficacement avec **Git**, **GitHub** et **Next.js** !  
Si tu as des questions, n’hésite pas à me demander. 🚀
hello the community