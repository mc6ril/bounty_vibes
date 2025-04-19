"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { AVAILABLE_TEAMS } from "@data/teamNames";
import { SearchService } from "@infrastructure/services/SearchService";
import { CharacterSearchData } from "@data/types";
import { Team } from "@core/domain/entities/Team";

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<{
    characters: CharacterSearchData[];
    teams: Team[];
  }>({ characters: [], teams: [] });
  const router = useRouter();
  const searchService = SearchService.getInstance();

  useEffect(() => {
    const search = async () => {
      if (searchTerm.length > 2) {
        const results = await searchService.searchAll(searchTerm);
        setSearchResults(results);
      } else {
        setSearchResults({ characters: [], teams: [] });
      }
    };

    const debounceTimer = setTimeout(search, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchService, searchTerm]);

  const handleSearch = () => {
    if (searchResults.teams.length > 0) {
      router.push(`/teams/${searchResults.teams[0].name}`);
    }
  };

  const filteredTeams = AVAILABLE_TEAMS.filter(
    (team) =>
      team.id.includes(searchTerm.toLowerCase().trim()) ||
      team.name.toLowerCase().includes(searchTerm.toLowerCase().trim()),
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchSection}>
        <h1>Team Search</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for a team or character (JMK, GLAT, Luke, Ahsoka)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className={styles.searchInput}
          />
          <button
            onClick={handleSearch}
            className={styles.searchButton}>
            Search
          </button>
        </div>

        {/* Résultats de recherche */}
        {(searchResults.characters.length > 0 || searchResults.teams.length > 0) && (
          <div className={styles.searchResults}>
            {searchResults.characters.length > 0 && (
              <div className={styles.characterResults}>
                <div className={styles.resultList}>
                  {searchResults.characters.map((character) => (
                    <div
                      key={character.name}
                      className={styles.resultItem}>
                      <span>{character.name}</span>
                      <div className={styles.tags}>
                        {character.tag.map((tag) => (
                          <span
                            key={tag}
                            className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchResults.teams.length > 0 && (
              <div className={styles.searchResults}>
                {searchResults.teams.map((team) => (
                  <Link
                    key={team.name}
                    href={`/teams/${team.name}`}
                    className={styles.resultItem}>
                    <div className={styles.tags}>
                      {team.characters.map((char) => (
                        <span
                          key={char.name}
                          className={styles.tag}>
                          {char.name}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className={styles.quickAccess}>
        <h2>Quick Access</h2>
        <div className={styles.teamButtons}>
          {filteredTeams.map((team) => (
            <Link
              key={team.id}
              href={`/teams/${team.id}`}
              className={styles.teamButton}>
              {team.name}
            </Link>
          ))}
          {filteredTeams.length === 0 && <p className={styles.noResults}>No teams found matching your search</p>}
        </div>
      </div>
    </div>
  );
}
