import { TeamTableProps } from "@/app/types/table";
import { ChsName, SetsName } from "..";
import Images from "../../assets/images";

const jmkTeam: TeamTableProps = {
  teamName: "JMK",
  data: {
    characters: [
      {
        name: ChsName.jmk,
        image: Images.jmk,
        relic: "Rel 7",
      },
      {
        name: ChsName.cat,
        image: Images.cat,
        relic: "Rel 5 / 7",
      },
      {
        name: ChsName.ashokaSnips,
        image: Images.snips,
        relic: "Rel 5 / 7",
      },
      {
        name: ChsName.padmeAmidala,
        image: Images.padme,
        relic: "Rel 7",
      },
      {
        name: ChsName.generalKenobi,
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
      [SetsName.speed, SetsName.speed, SetsName.primaryOffense, SetsName.primaryHealth, SetsName.primaryHealth],
      [
        SetsName.primaryCritDmg,
        SetsName.primaryCritDmg,
        SetsName.primaryCritDmg,
        SetsName.primaryHealth,
        SetsName.primaryHealth,
      ],
      [
        SetsName.primaryHealthOrProt,
        SetsName.primaryHealthOrProt,
        SetsName.primaryHealthOrProt,
        SetsName.primaryHealth,
        SetsName.primaryHealth,
      ],
      [
        SetsName.primaryOffense,
        SetsName.primaryOffense,
        SetsName.primaryOffense,
        SetsName.primaryHealth,
        SetsName.primaryHealth,
      ],
    ],
    secondary: [
      [SetsName.speed, SetsName.speed, SetsName.secondaryOffense, SetsName.secondaryHealth, SetsName.secondaryHealth],
      [SetsName.secondaryOffense, SetsName.secondaryOffense, SetsName.speed, SetsName.speed, SetsName.speed],
      [
        SetsName.secondaryHealthOrProt,
        SetsName.secondaryHealthOrProt,
        SetsName.secondaryOffenseFlat,
        SetsName.secondaryProtection,
        SetsName.secondaryProtection,
      ],
      [
        SetsName.secondaryHealth,
        SetsName.secondaryHealth,
        SetsName.secondaryHealthFlat,
        SetsName.secondaryHealthFlat,
        SetsName.secondaryHealthFlat,
      ],
    ],
    stats: [
      [SetsName.speed, "570+", "365+", "230+", "280+", "-"],
      [SetsName.attack, "Attack > 10k", "Attack > 8.5k", "Attack > 10k", "Health > 100k", "Health > 110k"],
    ],
    infos: "If you don't have Commander Ahsoka Tano (CAT) then she can be replaced with Master Yoda in the meantime.",
  },
};

export default jmkTeam;
