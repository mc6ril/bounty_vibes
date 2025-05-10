import React, { useState } from "react";
import Link from "next/link";
import { useTeams } from "../hooks/useTeams";
import { Team } from "@core/domain/entities/Team";
import styles from "./TeamsPage.module.css";

export const TeamsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const { teams, loading, error } = useTeams(search);

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>List of teams</h1>
      </header>
      <input
        type="text"
        placeholder="Find a team..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.grid}>
        {teams.length > 0 ? (
          teams.map((team: Team) => (
            <Link
              key={team.name}
              className={styles.card}
              href={`/teams/${team.name}`}>
              {team.name}
            </Link>
          ))
        ) : (
          <p className={styles.noResults}>No teams found</p>
        )}
      </div>
    </div>
  );
};
