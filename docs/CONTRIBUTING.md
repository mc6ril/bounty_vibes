# Guide du Contributeur

## Comment Contribuer

### 1. Préparation de l'Environnement

1. Fork le repository
2. Cloner votre fork :

```bash
git clone https://github.com/votre-username/bounty_vibes.git
cd bounty_vibes
```

3. Installer les dépendances :

```bash
npm install
```

4. Créer une branche pour votre fonctionnalité :

```bash
git checkout -b feature/nom-de-la-fonctionnalite
```

### 2. Développement

1. Lancer le serveur de développement :

```bash
npm run dev
```

2. Suivre les conventions de code :

   - Utiliser TypeScript
   - Suivre l'architecture propre
   - Documenter le code
   - Écrire des tests si nécessaire

3. Vérifier le code :

```bash
npm run lint
```

### 3. Soumission des Changements

1. Ajouter vos modifications :

```bash
git add .
```

2. Créer un commit :

```bash
git commit -m "Description claire des changements"
```

3. Pousser les changements :

```bash
git push origin feature/nom-de-la-fonctionnalite
```

4. Créer une Pull Request sur GitHub

## Structure des Commits

Utilisez le format suivant pour vos messages de commit :

```
type(scope): description

[body]
```

Types possibles :

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage, point-virgule manquant, etc.
- `refactor`: Refactoring du code
- `test`: Ajout ou modification de tests
- `chore`: Mise à jour des dépendances, etc.

Exemple :

```
feat(teams): ajout de la recherche d'équipes

- Implémentation de la barre de recherche
- Ajout du filtrage des équipes
- Mise à jour des styles
```

## Ajout d'une Nouvelle Équipe

1. Créer un nouveau fichier dans `src/data/teamNames/`
2. Suivre la structure existante
3. Ajouter les données de l'équipe
4. Mettre à jour les fichiers nécessaires :
   - `src/app/teams/page.tsx`
   - `src/app/teams/[teamName]/page.tsx`

## Tests

Avant de soumettre une PR, assurez-vous que :

- Les tests passent
- Le code est linté
- Les nouvelles fonctionnalités sont documentées
- Les changements sont testés manuellement

## Revue de Code

Les PR seront revues selon les critères suivants :

- Qualité du code
- Respect des conventions
- Tests adéquats
- Documentation à jour
- Performance
- Sécurité

## Questions et Support

Si vous avez des questions :

1. Consultez la documentation
2. Vérifiez les issues existantes
3. Créez une nouvelle issue si nécessaire
4. Contactez les mainteneurs du projet
