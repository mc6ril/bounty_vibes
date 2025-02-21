import { TeamTableProps } from "@/app/types/table";

const clsTeam: TeamTableProps = {
  teamName: "CLS",
  data: {
    characters: [
      {
        name: "Commander Luke Skywalker",
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
};

export default clsTeam;
