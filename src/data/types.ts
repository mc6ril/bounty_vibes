export interface CharacterData {
  name: string;
  tag: string[];
}

export interface TeamData {
  [key: string]: string[];
}

export type ChsNameType = Record<string, CharacterData>;
export type TeamsCharactersType = Record<string, string[]>;
export type SetsType = Record<string, string>;
