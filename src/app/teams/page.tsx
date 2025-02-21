"use client"; // Rend le composant interactif
import React from "react";
import "./page.css"; // Fichier CSS pour le style
import Link from "next/link";

const teams = ["JMK", "CLS", "Reva", "Aphra", "Leia", "GLAT", "JML", "LV", "Rey", "SK", "UFU", "SLKR"];

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Liste des teams</h1>
      </header>
      <div className="grid">
        {teams.map((team) => (
          <Link key={team} className="card" href={`/teams/${team}`}>
            {team}
          </Link>
        ))}
      </div>
    </div>
  );
}
