import React from "react";
import Link from "next/link";
import { useTeams } from "../hooks/useTeams";
import { Team } from "@core/domain/entities/Team";
import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  const { teams, loading, error } = useTeams();

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bounty Vibes</h1>
        <p>Your guide to the best teams in Star Wars: Galaxy of Heroes</p>
      </header>
      <div className={styles.grid}>
        {teams.map((team: Team) => (
          <Link
            key={team.name}
            href={`/teams/${team.name}`}
            className={styles.card}>
            {team.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
