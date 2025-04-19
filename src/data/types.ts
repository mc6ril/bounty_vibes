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

export interface Team {
  id: string;
  name: string;
  characters: string[];
}

export interface TeamConfig {
  id: string;
  name: string;
}

export interface CharacterSearchData extends CharacterData {
  aliases?: string[];
}
