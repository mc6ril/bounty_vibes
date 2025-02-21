"use client"; // Rend le composant interactif

import React, { useState } from "react";
import "./page.css";
import { teamsArray } from "../data";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTeams = teamsArray.filter((team) =>
    team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h1>List of teams</h1>
      </header>
      <input
        type="text"
        placeholder="Find a team..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="grid">
        {filteredTeams.map((team) => (
          <Link key={team} className="card" href={`/teams/${team}`}>
            {team}
          </Link>
        ))}
      </div>
    </div>
  );
}