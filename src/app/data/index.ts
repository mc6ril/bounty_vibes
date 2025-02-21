import chs from "./chs/index.json";
import sets from "./sets/index.json";
import teams from "./chs/teamName.json";

export const ChsName: Record<keyof typeof chs, { name: string; tag: string[] }> = chs;
export const SetsName: Record<keyof typeof sets, string> = sets;

const TeamsName: Record<keyof typeof teams, string> = teams;
export const teamsArray: string[] = [...Object.values(TeamsName)];
