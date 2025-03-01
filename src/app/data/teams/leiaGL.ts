import Images from "@/assets/images";
import { TeamTableProps } from "@/types/table";
import { ChsName, SetsName } from "..";

const leiaGLTeam: TeamTableProps = {
  teamName: "Leia",
  data: {
    characters: [
      {
        name: ChsName.leiagl.name,
        image: Images.leiagl,
        relic: "Rel 9",
      },
      {
        name: ChsName.r2d2.name,
        image: Images.r2d2,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.drogan.name,
        image: Images.drogan,
        relic: "Rel 7 / 8",
      },
      {
        name: "",
        image: "",
        relic: "Rel 7 / 8",
      },
      {
        name: "",
        image: "",
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
      [SetsName.primarySpeedHealth, SetsName.speed, SetsName.speed, SetsName.speed, SetsName.speed],
      [
        SetsName.primaryHealth,
        SetsName.primaryHealthOrProt,
        SetsName.primaryCritDmg,
        SetsName.primaryCritDmg,
        SetsName.primaryHealth,
      ],
      [
        SetsName.primaryHealth,
        SetsName.primaryHealthOrProt,
        SetsName.primaryHealthOrProt,
        SetsName.primaryHealth,
        SetsName.primaryHealth,
      ],
      [
        SetsName.primaryHealth,
        SetsName.primaryHealthOrProt,
        SetsName.primaryOffense,
        SetsName.primaryOffense,
        SetsName.primaryHealth,
      ],
    ],
    secondary: [
      [SetsName.secondaryHealth, SetsName.speed, SetsName.secondaryOffense, SetsName.secondaryOffense, SetsName.speed],
      [
        SetsName.secondaryDefense,
        SetsName.secondaryHealthOrProt,
        SetsName.speed,
        SetsName.speed,
        SetsName.secondaryHealth,
      ],
      [
        SetsName.speed,
        SetsName.secondaryHealthOrProt,
        SetsName.secondaryCritChance,
        SetsName.secondaryHealth,
        SetsName.secondaryOffense,
      ],
      [
        SetsName.secondaryOffense,
        "",
        SetsName.secondaryOffenseFlat,
        SetsName.secondaryOffenseFlat,
        SetsName.secondaryHealthFlat,
      ],
    ],
    stats: [
      [SetsName.speed, "565+", "350+", "300+", "300+", "365+"],
      [SetsName.Others, "Health > 200k", "", "Attack > 9k", "Attack > 9k", "Health > 90k"],
      ["", "Armor > 74%", "", "", "", ""],
      ["", "Attack > 6k2", "", "", "", ""],
    ],
    infos: "",
  },
};

export default leiaGLTeam;
