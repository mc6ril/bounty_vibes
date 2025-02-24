import TeamModsTable from "@/app/components/teamTable/table";
import { notFound } from "next/navigation";
import { teamsArray } from "@/app/data";
import aphraTeam from "@/app/data/teams/aphra";
import clsTeam from "@/app/data/teams/cls";
import glatTeam from "@/app/data/teams/glat";
import jabbaTeam from "@/app/data/teams/jabba";
import jmkTeam from "@/app/data/teams/jmk";
import jmlTeam from "@/app/data/teams/jml";
import revaTeam from "@/app/data/teams/reva";
import { TeamTableProps } from "@/app/types/table";

export const teamData: Record<string, TeamTableProps> = {
  JMK: jmkTeam,
  GLAT: glatTeam,
  CLS: clsTeam,
  JML: jmlTeam,
  Reva: revaTeam,
  Jabba: jabbaTeam,
  Aphra: aphraTeam,
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
