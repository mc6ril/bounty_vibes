export interface Character {
  name: string;
  tag: string[];
}

export type ChsData = Record<string, Character>;
export type SetsData = Record<string, string>;
export type TeamsData = Record<string, string>;

// Définition des types exacts des clés
export type ChsNameKey = keyof ChsData;
export type SetKeyName = keyof SetsData;
export type TeamNameKey = keyof TeamsData;
