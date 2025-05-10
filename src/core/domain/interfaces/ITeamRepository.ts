import { Team } from "../entities/Team";

export interface ITeamRepository {
  getAll(): Promise<Team[]>;
  getByName(name: string): Promise<Team | undefined>;
  search(searchTerm: string): Promise<Team[]>;
  getTeamsByCharacter(characterName: string): Promise<Team[]>;
}
