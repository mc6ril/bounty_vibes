"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

const AVAILABLE_TEAMS = ["jmk", "glat"];

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    if (AVAILABLE_TEAMS.includes(normalizedSearch)) {
      router.push(`/teams/${normalizedSearch}`);
    }
  };

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
          <Link
            href="/teams/jmk"
            className={styles.teamButton}>
            JMK Team
          </Link>
          <Link
            href="/teams/glat"
            className={styles.teamButton}>
            GLAT Team
          </Link>
        </div>
      </div>
    </div>
  );
}
