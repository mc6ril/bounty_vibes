import { Character } from "@core/domain/entities/Character";
import { Team } from "@core/domain/entities/Team";
import { ITeamRepository } from "@core/domain/interfaces/ITeamRepository";
import { TeamsCharactersType, ChsNameType } from "@data/types";
import { CharacterRepository } from "./CharacterRepository";

export class TeamRepository implements ITeamRepository {
  private teams: Team[] = [];
  private characterRepository: CharacterRepository;

  constructor(private readonly teamsCharacters: TeamsCharactersType, chsName: ChsNameType) {
    this.characterRepository = new CharacterRepository(chsName);
    this.initializeTeams();
  }

  private async initializeTeams() {
    const characters = await this.characterRepository.getAll();

    this.teams = Object.entries(this.teamsCharacters).map(([teamName, characterKeys]) => {
      const teamCharacters = characterKeys
        .map((key: string) => characters.find((char) => char.name.toLowerCase() === key.toLowerCase()))
        .filter((char): char is Character => char !== undefined);

      return new Team(teamName, teamCharacters);
    });
  }

  async getAll(): Promise<Team[]> {
    return this.teams;
  }

  async getByName(name: string): Promise<Team | undefined> {
    return this.teams.find((team) => team.name.toLowerCase() === name.toLowerCase());
  }

  async search(searchTerm: string): Promise<Team[]> {
    return this.teams.filter((team) => team.matchesSearch(searchTerm));
  }

  async getTeamsByCharacter(characterName: string): Promise<Team[]> {
    return this.teams.filter((team) =>
      team.characters.some((char) => char.name.toLowerCase() === characterName.toLowerCase()),
    );
  }
}
