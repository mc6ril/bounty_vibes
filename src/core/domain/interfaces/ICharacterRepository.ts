import { Character } from "../entities/Character";

export interface ICharacterRepository {
  getAll(): Promise<Character[]>;
  getByName(name: string): Promise<Character | undefined>;
  getByTag(tag: string): Promise<Character[]>;
  search(searchTerm: string): Promise<Character[]>;
}
