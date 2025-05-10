import { AVAILABLE_TEAMS } from "@data/teamNames";
import TeamModsTable from "@presentation/components/teamTable/TeamTable";
import { notFound } from "next/navigation";

interface TeamPageProps {
  params: {
    teamName: string;
  };
}

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  return AVAILABLE_TEAMS.map((team) => ({
    teamName: team.id,
  }));
}

// Fonction pour charger les données de l'équipe
async function getTeamData(teamName: string) {
  try {
    const teamData = await import(`@data/teamNames/${teamName.toLowerCase()}`);
    return teamData.default;
  } catch {
    return null;
  }
}

export default async function TeamPage({ params }: TeamPageProps) {
  const teamData = await getTeamData(params.teamName);

  if (!teamData) {
    notFound();
  }

  return (
    <div>
      <TeamModsTable
        teamName={teamData.teamName}
        data={teamData.data}
      />
    </div>
  );
}
