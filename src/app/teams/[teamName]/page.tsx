import glatTeam from "@data/teamNames/glat";
import TeamModsTable from "@presentation/components/teamTable/TeamTable";

// import TeamModsTable from "../../../components/teamTable/table";

interface TeamPageProps {
  params: {
    teamName: string;
  };
}

// Fonction pour générer les paramètres statiques
export function generateStaticParams() {
  return [
    { teamName: "glat" },
    // Ajoutez d'autres équipes ici si nécessaire
  ];
}

export default function TeamPage({ params }: TeamPageProps) {
  // Si c'est la team GLAT, utiliser les données du fichier glat.ts
  if (params.teamName.toLowerCase() === "glat") {
    return (
      <div>
        <TeamModsTable
          teamName={glatTeam.teamName}
          data={glatTeam.data}
        />
      </div>
    );
  }

  // Pour les autres teams, retourner une page 404
  return (
    <div>
      <h1>Team not found</h1>
      <p>The team you are looking for does not exist.</p>
    </div>
  );
}
