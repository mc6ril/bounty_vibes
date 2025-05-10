import { Character } from "@core/domain/entities/Character";
import { ICharacterRepository } from "@core/domain/interfaces/ICharacterRepository";
import { characters } from "@data/chs";
import { CharacterSearchData } from "@data/types";

export class CharacterRepository implements ICharacterRepository {
  private static instance: CharacterRepository;
  private characters: Record<string, CharacterSearchData>;

  private constructor() {
    this.characters = characters;
  }

  public static getInstance(): CharacterRepository {
    if (!CharacterRepository.instance) {
      CharacterRepository.instance = new CharacterRepository();
    }
    return CharacterRepository.instance;
  }

  public getAllCharacters(): Record<string, CharacterSearchData> {
    return this.characters;
  }

  public getCharacterById(id: string): CharacterSearchData | undefined {
    return this.characters[id];
  }

  public searchCharacters(query: string): CharacterSearchData[] {
    const searchTerm = query.toLowerCase();
    return Object.values(this.characters).filter((character) => {
      const nameMatch = character.name.toLowerCase().includes(searchTerm);
      const aliasMatch = character.aliases?.some((alias) => alias.toLowerCase().includes(searchTerm));
      const tagMatch = character.tag.some((tag) => tag.toLowerCase().includes(searchTerm));
      return nameMatch || aliasMatch || tagMatch;
    });
  }

  async getAll(): Promise<Character[]> {
    return Object.values(this.characters).map((data) => new Character(data.name, data.tag));
  }

  async getByName(name: string): Promise<Character | undefined> {
    const characterData = Object.values(this.characters).find((data) => data.name.toLowerCase() === name.toLowerCase());
    return characterData ? new Character(characterData.name, characterData.tag) : undefined;
  }

  async getByTag(tag: string): Promise<Character[]> {
    return Object.values(this.characters)
      .filter((data) => data.tag.some((t) => t.toLowerCase() === tag.toLowerCase()))
      .map((data) => new Character(data.name, data.tag));
  }

  async search(searchTerm: string): Promise<Character[]> {
    const searchTermLower = searchTerm.toLowerCase();
    return Object.values(this.characters)
      .filter((data) => {
        const nameMatch = data.name.toLowerCase().includes(searchTermLower);
        const aliasMatch = data.aliases?.some((alias) => alias.toLowerCase().includes(searchTermLower));
        const tagMatch = data.tag.some((tag) => tag.toLowerCase().includes(searchTermLower));
        return nameMatch || aliasMatch || tagMatch;
      })
      .map((data) => new Character(data.name, data.tag));
  }
}
