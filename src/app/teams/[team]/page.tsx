import TeamModsTable, { TeamTableProps } from "@/app/components/teamTable/table";
import { notFound } from "next/navigation";
import Images from "@/app/assets/images";

export const generateStaticParams = () => {
  const teams = ["JMK", "CLS", "Reva","Aphra","Leia","GLAT","JML","LV","Rey","SK","UFU","SLKR"];
  return teams.map((team) => ({ team }));
};

const teamData: Record<string, TeamTableProps> = {
  JMK: {
    teamName: "JMK",
    data: {
      characters: [
        {
          name: "Jedi Master Kenobi",
          image: Images.jmk,
          relic: "Rel 7",
        },
        {
          name: "Commander Ahsoka Tano",
          image: Images.cat,
          relic: "Rel 5 / 7",
        },
        {
          name: "Ahsoka Tano (Snips)",
          image: Images.snips,
          relic: "Rel 5 / 7",
        },
        {
          name: "Padme Amidala",
          image: Images.padme,
          relic: "Rel 7",
        },
        {
          name: "General Kenobi",
          image: Images.gk,
          relic: "Rel 8 / 9",
        },
      ],
      sets: [
        {
          images: [Images.speed, Images.health],
        },
        {
          images: [Images.speed, Images.health],
        },
        {
          images: [Images.attack, Images.health],
        },
        {
          images: [Images.health, Images.health, Images.health],
        },
        {
          images: [Images.health, Images.health, Images.health],
        },
      ],
      primaryIcons: [Images.fleche, Images.triangle, Images.rond, Images.croix],
      primary: [
        ["Speed", "Speed", "Offense", "Health", "Health"],
        ["Critical Damage", "Critical Damage", "Critical Damage", "Health", "Health"],
        ["Health / Protection", "Health / Protection", "Health / Protection", "Health", "Health"],
        ["Offense", "Offense", "Offense", "Health", "Health"],
      ],
      secondary: [
        ["Speed", "Speed", "Offense %", "Health %", "Health %"],
        ["Offense %", "Offense %", "Speed", "Speed", "Speed"],
        ["Health / Protection %", "Health / Protection %", "Offense Flat", "Protection %", "Protection %"],
        ["Health %", "Health %", "Health Flat", "Health Flat", "Health Flat"],
      ],
      stats: [
        ["Speed", "570+", "365+", "230+", "280+", "-"],
        ["Attack", "Attack > 10k", "Attack > 8.5k", "Attack > 10k", "Health > 100k", "Health > 110k"],
      ],
      infos: "If you don't have Commander Ahsoka Tano (CAT) then she can be replaced with Master Yoda in the meantime.",
    },
  },
  GLAT: {
    teamName: "GLAT",
    data: {
      characters: [
        {
          name: "Ahsoka Tano",
          image: Images.glat,
          relic: "Rel 9",
        },
        {
          name: "General Syndulla",
          image: Images.generalsyndu,
          relic: "Rel 7 / 8",
        },
        {
          name: "Huyang",
          image: Images.huyang,
          relic: "Rel 7 / 8",
        },
        {
          name: "Padawan Sabine Wren",
          image: Images.padawansabine,
          relic: "Rel 7 / 8",
        },
        {
          name: "Ezra Bridger (Exile)",
          image: Images.ezraexile,
          relic: "Rel 8 / 9",
        },
      ],
      sets: [
        {
          images: [Images.speed, Images.health],
        },
        {
          images: [Images.speed, Images.health],
        },
        {
          images: [Images.attack, Images.crit],
        },
        {
          images: [Images.dmgcrit, Images.health],
        },
        {
          images: [Images.speed, Images.health],
        },
      ],
      primaryIcons: [Images.fleche, Images.triangle, Images.rond, Images.croix],
      primary: [
        ["Speed / Health", "Speed", "Speed", "Speed", "Speed"],
        ["Health", "Health / Protection", "Critical Damage", "Critical Damage", "Health"],
        ["Health", "Health / Protection", "Health / Protection", "Health", "Health"],
        ["Health", "Health / Protection", "Offense", "Offense", "Health"],
      ],
      secondary: [
        ["Health %", "Speed", "Offense %", "Offense %", "Speed"],
        ["Defense %", "Health / Protection %", "Speed", "Speed", "Health %"],
        ["Speed", "Health / Protection %", "Critical Chance %", "Health %", "Offense %"],
        ["Offense %", "", "Offense Flat", "Offense Flat", "Health Flat"],
      ],
      stats: [
        ["Speed", "565+", "350+", "300+", "300+", "365+"],
        ["Others", "Health > 200k", "", "Attack > 9k", "Attack > 9k", "Health > 90k"],
		["", "Armor > 74%", "", "", "", ""],
		["", "Attack > 6k2", "", "", "", ""],
      ],
      infos: "",
    },
  },
  CLS: {
    teamName: "CLS",
    data: {
      characters: [
        {
          name: "Jedi Master Kenobi",
          image: "", //lien
          relic: "Rel 7",
        },
        {
          name: "Commander Ahsoka Tano",
          image: "",
          relic: "Rel 5 / 7",
        },
        {
          name: "Ahsoka Tano (Snips)",
          image: "",
          relic: "Rel 5 / 7",
        },
        {
          name: "Padme Amidala",
          image: "",
          relic: "Rel 7",
        },
        {
          name: "General Kenobi",
          image: "",
          relic: "Rel 8 / 9",
        },
      ],
      sets: [],
      primaryIcons: [],
      primary: [
        ["Speed", "Speed", "Offense", "Health", "Health"],
        ["Critical Damage", "Critical Damage", "Critical Damage", "Health", "Health"],
        ["Health / Protection", "Health / Protection", "Health / Protection", "Health", "Health"],
        ["Offense", "Offense", "Offense", "Health", "Health"],
      ],
      secondary: [
        ["Speed", "Speed", "Offense %", "Health %", "Health %"],
        ["Offense %", "Offense %", "Speed", "Speed", "Speed"],
        ["Health / Protection %", "Health / Protection %", "Offense Flat", "Protection %", "Protection %"],
        ["Health %", "Health %", "Health Flat", "Health Flat", "Health Flat"],
      ],
      stats: [
        ["Speed", "570+", "365+", "230+", "280+", "-"],
        ["Attack", "Attack > 10k", "Attack > 8.5k", "Attack > 10k", "Health > 100k", "Health > 110k"],
      ],
      infos: "If you don't have Commander Ahsoka Tano (CAT) then she can be replaced with Master Yoda in the meantime.",
    },
  },
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
