import { characters } from "./chs";
import { ChsNameType, TeamsCharactersType, CharacterData, SetsType } from "./types";
import { teams } from "@data/teamNames";
import { sets } from "@data/sets";

export const ChsName: ChsNameType = characters;
export const teamsCharacters: TeamsCharactersType = teams;
export const Sets: SetsType = sets;

export type { ChsNameType, TeamsCharactersType, CharacterData, SetsType };
