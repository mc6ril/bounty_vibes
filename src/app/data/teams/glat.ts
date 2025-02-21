import Images from "@/app/assets/images";
import { TeamTableProps } from "@/app/types/table";
import { ChsName, SetsName } from "..";

const glatTeam: TeamTableProps = {
  teamName: "GLAT",
  data: {
    characters: [
      {
        name: ChsName.glat.name,
        image: Images.glat,
        relic: "Rel 9",
        tag: ChsName.glat.tag,
      },
      {
        name: ChsName.generalSyndulla.name,
        image: Images.generalsyndu,
        relic: "Rel 7 / 8",
        tag: ChsName.generalSyndulla.tag,
      },
      {
        name: ChsName.huyang.name,
        image: Images.huyang,
        relic: "Rel 7 / 8",
        tag: ChsName.huyang.tag,
      },
      {
        name: ChsName.padawanSabine.name,
        image: Images.padawansabine,
        relic: "Rel 7 / 8",
        tag: ChsName.padawanSabine.tag,
      },
      {
        name: ChsName.ezraBridgerExil.name,
        image: Images.ezraexile,
        relic: "Rel 8 / 9",
        tag: ChsName.ezraBridgerExil.tag,
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

export default glatTeam;
