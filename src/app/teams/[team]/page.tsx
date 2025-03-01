import TeamModsTable from "@/components/teamTable/table";
import { notFound } from "next/navigation";
import { TeamNameKey, teamsArray } from "@/data";
import aphraTeam from "@/data/teams/aphra";
import clsTeam from "@/data/teams/cls";
import glatTeam from "@/data/teams/glat";
import jabbaTeam from "@/data/teams/jabba";
import jmkTeam from "@/data/teams/jmk";
import jmlTeam from "@/data/teams/jml";
import revaTeam from "@/data/teams/reva";
import lvTeam from "@/data/teams/lv";
import leiaGLTeam from "@/data/teams/leiaGL";
import { TeamTableProps } from "@/types/table";

export const teamData: Partial<Record<TeamNameKey, TeamTableProps>> = {
  jmk: jmkTeam,
  glat: glatTeam,
  cls: clsTeam,
  jml: jmlTeam,
  reva: revaTeam,
  jabba: jabbaTeam,
  aphra: aphraTeam,
  lv: lvTeam,
  leiaGL: leiaGLTeam,
};

export const generateStaticParams = () => {
  const teams = teamsArray;
  return teams.map((team) => ({ team }));
};

const TeamPage = async (props: { params: Promise<{ team: TeamNameKey }> }) => {
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
