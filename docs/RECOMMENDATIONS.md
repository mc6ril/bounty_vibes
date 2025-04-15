# Recommandations pour l'Amélioration du Projet

## 1. Documentation

### Problème

- Chevauchement d'informations entre `README.md`, `TECHNICAL_GUIDE.md` et `CONTRIBUTING.md`
- Instructions répétées sur l'ajout d'équipes

### Recommandation

Restructurer la documentation en :

- `README.md` : Vue d'ensemble et installation
- `docs/DEVELOPMENT.md` : Guide de développement détaillé
- `docs/ARCHITECTURE.md` : Architecture et structure du code
- `docs/CONTRIBUTING.md` : Processus de contribution uniquement

## 2. Configuration TypeScript

### Problème

- Configuration potentiellement redondante entre `tsconfig.json` et `tsconfig.node.json`

### Recommandation

```json
// tsconfig.json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

// tsconfig.node.json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "module": "commonjs"
  }
}
```

## 3. Structure des Données d'Équipe

### Problème

- Structure répétitive dans `glat.ts` et `jmk.ts`
- Importations redondantes

### Recommandation

Créer un modèle de base :

```typescript
// src/data/teamNames/baseTeam.ts
export const createTeam = (data: TeamData) => ({
  teamName: data.teamName,
  data: {
    ...data,
    primaryIcons: [Images.fleche, Images.triangle, Images.rond, Images.croix],
  },
});
```

## 4. Organisation des Composants

### Problème

- Composants et styles séparés
- Structure non optimale pour la réutilisation

### Recommandation

```
src/presentation/components/
├── teamTable/
│   ├── index.ts
│   ├── TeamTable.tsx
│   ├── TeamTable.types.ts
│   └── TeamTable.styles.css
```

## 5. Gestion des Types

### Problème

- Types dispersés entre `types/` et `core/domain/interfaces/`
- Définitions potentiellement contradictoires

### Recommandation

Centraliser les types :

```
src/core/types/
├── index.ts
├── team.types.ts
├── character.types.ts
└── mods.types.ts
```

## 6. Styles CSS

### Problème

- Styles potentiellement redondants entre `globals.css` et les modules CSS
- Variables CSS non centralisées

### Recommandation

```css
/* src/styles/variables.css */
:root {
  --primary-color: #222;
  --text-color: #000;
  --background-color: #f5f5f5;
  /* ... autres variables */
}

/* src/styles/globals.css */
@import "./variables.css";

/* Styles globaux */
```

## 7. Configuration Next.js

### Problème

- Présence de `next.config.js` et `next.config.mjs`
- Configuration Turbopack manquante

### Recommandation

```javascript
// next.config.mjs
export default {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Configuration Turbopack
  experimental: {
    turbo: {
      rules: {
        // Règles spécifiques
      },
    },
  },
};
```

## 8. Gestion des Erreurs

### Problème

- Erreurs non gérées dans la page dynamique des équipes
- Messages d'erreur non standardisés

### Recommandation

```typescript
// src/core/errors/teamErrors.ts
export class TeamNotFoundError extends Error {
  constructor(teamName: string) {
    super(`Team "${teamName}" not found`);
    this.name = "TeamNotFoundError";
  }
}

// Utilisation dans la page
try {
  const teamData = await getTeamData(params.teamName);
} catch (error) {
  if (error instanceof TeamNotFoundError) {
    notFound();
  }
  throw error;
}
```

## 9. Tests

### Problème

- Absence de tests
- Pas de structure pour les tests

### Recommandation

```
src/
├── __tests__/
│   ├── components/
│   │   └── TeamTable.test.tsx
│   ├── pages/
│   │   └── teams.test.tsx
│   └── utils/
│       └── teamUtils.test.ts
```

## 10. Performance

### Problème

- Chargement potentiellement inefficace des données d'équipe
- Pas d'optimisation des images

### Recommandation

```typescript
// Optimisation du chargement des données
export async function generateMetadata({ params }: TeamPageProps) {
  const teamData = await getTeamData(params.teamName);
  return {
    title: `${teamData.teamName} Team - Bounty Vibes`,
    description: teamData.data.infos,
  };
}

// Optimisation des images
<Image
  src={character.image}
  alt={character.name}
  width={100}
  height={100}
  priority={false}
  loading="lazy"
/>;
```

## Priorités d'Implémentation

1. ✅ Correction des erreurs de configuration Next.js
2. 🔄 Restructuration de la documentation
3. 🔄 Centralisation des types
4. 🔄 Optimisation du chargement des données
5. 🔄 Mise en place des tests
6. 🔄 Amélioration de la structure des composants
7. 🔄 Optimisation des performances
8. 🔄 Standardisation des styles
9. 🔄 Amélioration de la gestion des erreurs
10. 🔄 Refactoring des données d'équipe
