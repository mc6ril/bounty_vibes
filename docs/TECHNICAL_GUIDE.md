# Guide Technique Bounty Vibes

## Architecture du Projet

Le projet suit une architecture propre (Clean Architecture) avec une séparation claire des responsabilités en plusieurs couches :

### 1. Couche Présentation (`src/app/` et `src/presentation/`)

- Gère l'interface utilisateur et l'expérience utilisateur
- Composants React et pages Next.js
- Styles et CSS Modules
- Navigation et routage

### 2. Couche Domaine (`src/core/`)

- Contient la logique métier
- Définit les interfaces et types
- Gère les règles métier
- Indépendante des frameworks et librairies externes

### 3. Couche Données (`src/data/`)

- Gère les sources de données
- Implémente les interfaces définies dans le domaine
- Contient les données statiques des équipes

## Structure des Fichiers

```
src/
├── app/                    # Application Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── teams/             # Pages des équipes
│       ├── page.tsx       # Liste des équipes
│       └── [teamName]/    # Pages dynamiques des équipes
│           └── page.tsx   # Page d'une équipe spécifique
│
├── core/                  # Logique métier
│   └── domain/           # Domaines et interfaces
│       └── interfaces/   # Interfaces TypeScript
│
├── data/                 # Données
│   └── teamNames/       # Données des équipes
│       ├── glat.ts      # Données GLAT
│       └── jmk.ts       # Données JMK
│
└── presentation/         # Composants UI
    └── components/      # Composants réutilisables
        └── teamTable/   # Composant de tableau d'équipe
```

## Ajout d'une Nouvelle Équipe

### 1. Créer le Fichier de Données

Créer un nouveau fichier dans `src/data/teamNames/` (ex: `newTeam.ts`) :

```typescript
import { ChsName, Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";

const newTeam: TeamTableProps = {
  teamName: "NOM_EQUIPE",
  data: {
    characters: [
      {
        name: ChsName.nomPersonnage.name,
        image: Images.nomImage,
        relic: "Rel X",
      },
      // ... autres personnages
    ],
    sets: [
      // ... configurations des sets
    ],
    primaryIcons: [Images.fleche, Images.triangle, Images.rond, Images.croix],
    primary: [
      // ... configurations primaires
    ],
    secondary: [
      // ... configurations secondaires
    ],
    stats: [
      // ... statistiques
    ],
    infos: "Informations supplémentaires sur l'équipe",
  },
};

export default newTeam;
```

### 2. Mettre à Jour la Liste des Équipes

Dans `src/app/teams/page.tsx`, ajouter la nouvelle équipe à `AVAILABLE_TEAMS` :

```typescript
const AVAILABLE_TEAMS = [
  { id: "jmk", name: "JMK Team" },
  { id: "glat", name: "GLAT Team" },
  { id: "nom_equipe", name: "NOM_EQUIPE Team" }, // Nouvelle équipe
];
```

### 3. Mettre à Jour les Paramètres Statiques

Dans `src/app/teams/[teamName]/page.tsx`, ajouter la nouvelle équipe à `generateStaticParams` :

```typescript
export function generateStaticParams() {
  return [
    { teamName: "jmk" },
    { teamName: "glat" },
    { teamName: "nom_equipe" }, // Nouvelle équipe
  ];
}
```

## Bonnes Pratiques

### 1. Structure des Données

- Utiliser des interfaces TypeScript pour définir la structure des données
- Maintenir la cohérence des données entre les équipes
- Documenter les champs obligatoires et optionnels

### 2. Composants

- Créer des composants réutilisables
- Utiliser des props typées
- Séparer la logique de l'UI
- Utiliser des CSS Modules pour le style

### 3. Performance

- Utiliser le rendu statique quand possible
- Optimiser les images
- Minimiser les re-rendus
- Utiliser le lazy loading pour les composants lourds

### 4. Tests

- Tester les composants critiques
- Vérifier la validité des données
- Tester les cas d'erreur

## Déploiement

1. Build du projet :

```bash
npm run build
```

2. Vérification du build :

```bash
npm run start
```

3. Déploiement sur la plateforme de votre choix (Vercel, Netlify, etc.)

## Maintenance

- Mettre à jour régulièrement les dépendances
- Vérifier la compatibilité avec les nouvelles versions de Next.js
- Maintenir la documentation à jour
- Suivre les bonnes pratiques de sécurité
