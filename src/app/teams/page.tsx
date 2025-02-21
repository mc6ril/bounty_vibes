"use client"; // Rend le composant interactif

import React from "react";
import "./page.css";
import { teamsArray } from "../data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Liste des teams</h1>
      </header>
      <div className="grid">
        {teamsArray.map((team) => (
          <Link
            key={team}
            className="card"
            href={`/teams/${team}`}>
            {team}
          </Link>
        ))}
      </div>
    </div>
  );
}
