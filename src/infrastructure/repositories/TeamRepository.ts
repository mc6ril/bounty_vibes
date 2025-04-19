import { Team } from "@core/domain/entities/Team";
import { ITeamRepository } from "@core/domain/interfaces/ITeamRepository";
import { CharacterRepository } from "./CharacterRepository";
import { AVAILABLE_TEAMS, teams } from "@data/teamNames";
import { Character } from "@core/domain/entities/Character";
import { CharacterSearchData } from "@data/types";

export class TeamRepository implements ITeamRepository {
  private static instance: TeamRepository;
  private teams: Record<string, string[]>;
  private availableTeams: { id: string; name: string }[];
  private characterRepository: CharacterRepository;

  private constructor() {
    this.teams = teams;
    this.availableTeams = AVAILABLE_TEAMS;
    this.characterRepository = CharacterRepository.getInstance();
  }

  public static getInstance(): TeamRepository {
    if (!TeamRepository.instance) {
      TeamRepository.instance = new TeamRepository();
    }
    return TeamRepository.instance;
  }

  public getAllTeams(): Record<string, string[]> {
    return this.teams;
  }

  public getTeamById(id: string): string[] | undefined {
    return this.teams[id];
  }

  public getAvailableTeams(): { id: string; name: string }[] {
    return this.availableTeams;
  }

  public getTeamCharacters(teamId: string): string[] {
    return this.teams[teamId] || [];
  }

  private convertToCharacter(characterData: CharacterSearchData): Character {
    return new Character(characterData.name, characterData.tag);
  }

  async getAll(): Promise<Team[]> {
    const allTeams = Object.entries(this.teams).map(([id, characterIds]) => {
      const characters = characterIds
        .filter((id) => id !== "")
        .map((id) => this.characterRepository.getCharacterById(id))
        .filter((char): char is NonNullable<typeof char> => char !== undefined)
        .map((charData) => this.convertToCharacter(charData));
      return new Team(id, characters);
    });
    return allTeams;
  }

  async getByName(name: string): Promise<Team | undefined> {
    const teamId = this.availableTeams.find((team) => team.name.toLowerCase() === name.toLowerCase())?.id;
    if (!teamId) return undefined;

    const characterIds = this.getTeamCharacters(teamId);
    const characters = characterIds
      .filter((id) => id !== "")
      .map((id) => this.characterRepository.getCharacterById(id))
      .filter((char): char is NonNullable<typeof char> => char !== undefined)
      .map((charData) => this.convertToCharacter(charData));

    return new Team(teamId, characters);
  }

  async search(searchTerm: string): Promise<Team[]> {
    const searchTermLower = searchTerm.toLowerCase();
    return (await this.getAll()).filter((team) => team.name.toLowerCase().includes(searchTermLower));
  }

  async getTeamsByCharacter(characterName: string): Promise<Team[]> {
    return (await this.getAll()).filter((team) =>
      team.characters.some((char) => char.name.toLowerCase() === characterName.toLowerCase()),
    );
  }
}
