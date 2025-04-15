import { Character } from "@core/domain/entities/Character";
import { ICharacterRepository } from "@core/domain/interfaces/ICharacterRepository";
import { ChsNameType, CharacterData } from "@data/types";

export class CharacterRepository implements ICharacterRepository {
  private characters: Character[] = [];

  constructor(private readonly chsName: ChsNameType) {
    this.initializeCharacters();
  }

  private initializeCharacters() {
    this.characters = Object.entries(this.chsName).map(([, value]) => {
      const characterData = value as CharacterData;
      return new Character(characterData.name, characterData.tag);
    });
  }

  async getAll(): Promise<Character[]> {
    return this.characters;
  }

  async getByName(name: string): Promise<Character | undefined> {
    return this.characters.find((char) => char.name.toLowerCase() === name.toLowerCase());
  }

  async getByTag(tag: string): Promise<Character[]> {
    return this.characters.filter((char) => char.hasTag(tag));
  }

  async search(searchTerm: string): Promise<Character[]> {
    return this.characters.filter((char) => char.matchesSearch(searchTerm));
  }
}
