import TeamModsTable from "@presentation/components/teamTable/TeamTable";
import { notFound } from "next/navigation";

interface TeamPageProps {
  params: {
    teamName: string;
  };
}

// Fonction pour générer les paramètres statiques
export function generateStaticParams() {
  return [{ teamName: "jmk" }, { teamName: "glat" }];
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
