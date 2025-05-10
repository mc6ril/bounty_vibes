import { ITeamRepository } from "../../domain/interfaces/ITeamRepository";
import { Team } from "../../domain/entities/Team";

export class GetTeamsUseCase {
  constructor(private teamRepository: ITeamRepository) {}

  async execute(searchTerm?: string): Promise<Team[]> {
    if (searchTerm) {
      return this.teamRepository.search(searchTerm);
    }
    return this.teamRepository.getAll();
  }
}
