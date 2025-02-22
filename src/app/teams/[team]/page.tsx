import TeamModsTable from "@/app/components/teamTable/table";
import { notFound } from "next/navigation";
import { teamsArray } from "@/app/data";
import jmkTeam from "@/app/data/teams/jmk";
import glatTeam from "@/app/data/teams/glat";
import clsTeam from "@/app/data/teams/cls";
import jmlTeam from "@/app/data/teams/jml";
import revaTeam from "@/app/data/teams/reva";
import { TeamTableProps } from "@/app/types/table";

export const teamData: Record<string, TeamTableProps> = {
  JMK: jmkTeam,
  GLAT: glatTeam,
  CLS: clsTeam,
  JML: jmlTeam,
  Reva: revaTeam,
};

export const generateStaticParams = () => {
  const teams = teamsArray;
  return teams.map((team) => ({ team }));
};

const TeamPage = async (props: { params: Promise<{ team: string }> }) => {
  const { params } = props;
  const { team } = await params;

  if (!teamData[team]) {
    notFound();
  }

  const { teamName, data } = teamData[team];

  return (
    <div>
      <TeamModsTable
        teamName={teamName}
        data={data}
      />
    </div>
  );
};

export default TeamPage;
