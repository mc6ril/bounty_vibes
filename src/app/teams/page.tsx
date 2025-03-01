"use client";

import React, { useState } from "react";
import "./page.css";
import Link from "next/link";
import { ChsName, TeamNameKey, teamsArray, teamsCharacters } from "@/data";
import { teams } from "@/data/teamNames";

export default function Page() {
  const [search, setSearch] = useState("");

  // Fonction pour filtrer les équipes
  const filteredTeams = teamsArray.filter((team: TeamNameKey) => {
    const characterKeys = teamsCharacters[team] || [];

    // Vérifier si le nom de l'équipe correspond
    const matchTeamName = team.toLowerCase().includes(search.toLowerCase());

    const matchCharacterName = characterKeys.some((charKey) =>
      ChsName[charKey]?.name.toLowerCase().includes(search.toLowerCase()),
    );

    // Vérifier si un des personnages a un tag qui correspond
    const matchCharacterTag = characterKeys.some((charKey) =>
      ChsName[charKey]?.tag.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
    );

    return matchTeamName || matchCharacterName || matchCharacterTag;
  });

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
        {filteredTeams.length > 0 ? (
          filteredTeams.map((team) => (
            <Link
              key={team}
              className="card"
              href={`/teams/${team}`}>
              {teams[team] || team}
            </Link>
          ))
        ) : (
          <p className="no-results">No teams found</p>
        )}
      </div>
    </div>
  );
}
