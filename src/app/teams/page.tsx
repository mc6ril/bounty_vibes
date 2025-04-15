"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

const AVAILABLE_TEAMS = [
  { id: "jmk", name: "JMK Team" },
  { id: "glat", name: "GLAT Team" },
];

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    const matchingTeam = AVAILABLE_TEAMS.find(
      (team) => team.id.includes(normalizedSearch) || team.name.toLowerCase().includes(normalizedSearch),
    );

    if (matchingTeam) {
      router.push(`/teams/${matchingTeam.id}`);
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
            placeholder="Search for a team (JMK, GLAT)..."
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
