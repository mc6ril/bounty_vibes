import { CharacterRepository } from "../repositories/CharacterRepository";
import { TeamRepository } from "../repositories/TeamRepository";
import { CharacterSearchData } from "@data/types";
import { Team } from "@core/domain/entities/Team";

export class SearchService {
  private static instance: SearchService;
  private characterRepository: CharacterRepository;
  private teamRepository: TeamRepository;

  private constructor() {
    this.characterRepository = CharacterRepository.getInstance();
    this.teamRepository = TeamRepository.getInstance();
  }

  public static getInstance(): SearchService {
    if (!SearchService.instance) {
      SearchService.instance = new SearchService();
    }
    return SearchService.instance;
  }

  public async searchCharacters(query: string): Promise<CharacterSearchData[]> {
    return this.characterRepository.searchCharacters(query);
  }

  public async searchTeams(query: string): Promise<Team[]> {
    return this.teamRepository.search(query);
  }

  public async searchAll(query: string): Promise<{
    characters: CharacterSearchData[];
    teams: Team[];
  }> {
    const [characters, teams] = await Promise.all([this.searchCharacters(query), this.searchTeams(query)]);

    return { characters, teams };
  }

  public async getCharacterById(id: string): Promise<CharacterSearchData | undefined> {
    return this.characterRepository.getCharacterById(id);
  }

  public async getTeamById(id: string): Promise<Team | undefined> {
    return this.teamRepository.getByName(id);
  }

  public async getTeamsByCharacter(characterName: string): Promise<Team[]> {
    return this.teamRepository.getTeamsByCharacter(characterName);
  }
}
