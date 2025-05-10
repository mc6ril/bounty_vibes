import { CharacterRepository } from "../repositories/CharacterRepository";
import { TeamRepository } from "../repositories/TeamRepository";

export class DataInitializationService {
  private static instance: DataInitializationService;
  private characterRepository: CharacterRepository;
  private teamRepository: TeamRepository;

  private constructor() {
    this.characterRepository = CharacterRepository.getInstance();
    this.teamRepository = TeamRepository.getInstance();
  }

  public static getInstance(): DataInitializationService {
    if (!DataInitializationService.instance) {
      DataInitializationService.instance = new DataInitializationService();
    }
    return DataInitializationService.instance;
  }

  public initialize(): void {
    // Les données sont déjà chargées via les singletons des repositories
    console.log("Data initialization completed");
  }

  public getCharacterRepository(): CharacterRepository {
    return this.characterRepository;
  }

  public getTeamRepository(): TeamRepository {
    return this.teamRepository;
  }
}
