import { characters } from "./chs";
import { sets } from "./sets";
import { teams } from "./teamNames";

export type ChsNameKey = keyof typeof characters;
export const ChsName: Record<ChsNameKey, { name: string; tag: string[] }> = characters;

export type SetKeyName = keyof typeof sets;
export const SetsName: Record<SetKeyName, string> = sets;

export type TeamNameKey = keyof typeof teams;
const TeamsName: Record<TeamNameKey, string> = teams;
export const teamsArray: TeamNameKey[] = Object.keys(TeamsName) as TeamNameKey[];

// Dictionnaire associant chaque équipe à ses personnages
export const teamsCharacters: Record<TeamNameKey, ChsNameKey[]> = {
  jmk: ["jmk", "cat", "ashokaSnips", "padmeAmidala", "generalKenobi"],
  glat: ["glat", "ezraBridgerExil", "generalSyndulla", "huyang", "padawanSabine"],
  cls: ["cls", "chewbacca", "c3po", "hansolo", "threepio"],
  jml: ["jml", "jkl", "revan", "jkck", "hyoda"],
  reva: ["reva", "gi", "cinqfrere", "huitfrere", "septsoeur"],
  jabba: ["jabba", "boushh", "skifflando", "krrsantan", "boba"],
  aphra: ["aphra", "ooo", "bt1", "ig88", "sonde"],
  leiaGL: ["leiagl", "r2d2", "drogan", "", ""],
  lv: ["lordvador", "piett", "admiralthrawn", "maul", "royalguard"],
  rey: [],
  sk: [],
  slkr: [],
  ufu: [],
};
