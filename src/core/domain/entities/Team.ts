import { Character } from "./Character";

export class Team {
  constructor(
    public readonly name: string,
    public readonly characters: Character[],
    public readonly mods?: {
      sets: string[][];
      primary: string[][];
      secondary: string[][];
      stats: string[][];
      infos: string;
    },
  ) {}

  matchesSearch(search: string): boolean {
    const searchLower = search.toLowerCase();
    return (
      this.name.toLowerCase().includes(searchLower) || this.characters.some((char) => char.matchesSearch(searchLower))
    );
  }

  getCharacterByName(name: string): Character | undefined {
    return this.characters.find((char) => char.name.toLowerCase() === name.toLowerCase());
  }
}
