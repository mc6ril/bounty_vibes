"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.searchSection}>
        <h1>Team Search</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for a team..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>

      <div className={styles.quickAccess}>
        <h2>Quick Access</h2>
        <Link
          href="/teams/glat"
          className={styles.teamButton}>
          GLAT Team
        </Link>
      </div>
    </div>
  );
}
