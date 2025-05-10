import { useState, useEffect } from "react";
import { Team } from "@core/domain/entities/Team";
import { GetTeamsUseCase } from "@core/usecases/team/GetTeamsUseCase";
import { TeamRepository } from "@infrastructure/repositories/TeamRepository";
import { ChsName, teamsCharacters, ChsNameType, TeamsCharactersType } from "@data/index";

export const useTeams = (searchTerm?: string) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const teamRepository = new TeamRepository(teamsCharacters as TeamsCharactersType, ChsName as ChsNameType);
        const getTeamsUseCase = new GetTeamsUseCase(teamRepository);
        const result = await getTeamsUseCase.execute(searchTerm);
        setTeams(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [searchTerm]);

  return { teams, loading, error };
};
