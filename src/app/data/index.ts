import chs from "./chs/index.json";
import sets from "./sets/index.json";
import teams from "./chs/teamName.json";

export const ChsName: Record<string, { name: string; tag: string[] }> = chs;
export const SetsName: Record<keyof typeof sets, string> = sets;

const TeamsName: Record<keyof typeof teams, string> = teams;
export const teamsArray: string[] = [...Object.values(TeamsName)];

// Dictionnaire associant chaque équipe à ses personnages
export const teamsCharacters: Record<string, string[]> = {
  JMK: ["jmk", "cat", "ashokaSnips", "padmeAmidala", "generalKenobi"],
  GLAT: ["glat", "ezraBridgerExil", "generalSyndulla", "huyang", "padawanSabine"],
};