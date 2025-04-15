# Bounty Vibes

Bounty Vibes est une application web dédiée à Star Wars: Galaxy of Heroes qui permet aux joueurs de découvrir et d'explorer les meilleures compositions d'équipes pour le jeu.

## Fonctionnalités

- 🔍 Recherche d'équipes par nom
- 🚀 Accès rapide aux équipes populaires
- 📊 Affichage détaillé des statistiques et mods pour chaque équipe
- 🎯 Recommandations de composition d'équipe optimisées

## Structure du Projet

Le projet suit une architecture propre (Clean Architecture) avec une séparation claire des responsabilités :

```
src/
├── app/                    # Application Next.js (couche présentation)
├── core/                   # Logique métier et domaines
├── data/                   # Données et sources de données
└── presentation/           # Composants UI et styles
```

## Installation

1. Cloner le repository :

```bash
git clone https://github.com/votre-username/bounty_vibes.git
```

2. Installer les dépendances :

```bash
cd bounty_vibes
npm install
```

3. Lancer l'application en mode développement :

```bash
npm run dev
```

## Ajout d'une Nouvelle Équipe

Pour ajouter une nouvelle équipe, suivez ces étapes :

1. Créer un nouveau fichier dans `src/data/teamNames/` (ex: `newTeam.ts`)
2. Implémenter la structure de données selon le modèle existant
3. Ajouter l'équipe dans `AVAILABLE_TEAMS` dans `src/app/teams/page.tsx`
4. Ajouter l'équipe dans `generateStaticParams` dans `src/app/teams/[teamName]/page.tsx`

## Technologies Utilisées

- Next.js 15
- TypeScript
- CSS Modules
- Clean Architecture

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

MIT
