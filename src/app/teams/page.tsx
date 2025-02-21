"use client"; // Rend le composant interactif

import { useRouter } from "next/navigation"; // Import du router
import React from "react";
import "./page.css"; // Fichier CSS pour le style

const teams = ["JMK", "CLS", "Reva", "Aphra", "Leia", "GLAT", "JML", "LV", "Rey", "SK", "UFU", "SLKR"];

export default function Home() {
  const router = useRouter(); // Initialisation du router

  const handleClick = (team: string) => {
    router.push(`/teams/${team}`); // Redirige vers la page de l'équipe
  };

  return (
    <div className="container">
      <div className="grid">
        {teams.map((team) => (
          <div key={team} className="card" onClick={() => handleClick(team)}>
            {team}
          </div>
        ))}
      </div>
    </div>
  );
}
