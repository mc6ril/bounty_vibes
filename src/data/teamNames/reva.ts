import { ChsName, Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";

const revaTeam: TeamTableProps = {
  teamName: "Reva",
  data: {
    characters: [
      {
        name: ChsName.reva.name,
        image: Images.reva,
        relic: "Rel 9",
      },
      {
        name: ChsName.gi.name,
        image: Images.gi,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.cinqfrere.name,
        image: Images.cinqfrere,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.huitfrere.name,
        image: Images.huitfrere,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.septsoeur.name,
        image: Images.septsoeur,
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
      [Sets.primarySpeedHealth, Sets.speed, Sets.speed, Sets.speed, Sets.speed],
      [Sets.primaryHealth, Sets.primaryHealthOrProt, Sets.primaryCritDmg, Sets.primaryCritDmg, Sets.primaryHealth],
      [Sets.primaryHealth, Sets.primaryHealthOrProt, Sets.primaryHealthOrProt, Sets.primaryHealth, Sets.primaryHealth],
      [Sets.primaryHealth, Sets.primaryHealthOrProt, Sets.primaryOffense, Sets.primaryOffense, Sets.primaryHealth],
    ],
    secondary: [
      [Sets.secondaryHealth, Sets.speed, Sets.secondaryOffense, Sets.secondaryOffense, Sets.speed],
      [Sets.secondaryDefense, Sets.secondaryHealthOrProt, Sets.speed, Sets.speed, Sets.secondaryHealth],
      [Sets.speed, Sets.secondaryHealthOrProt, Sets.secondaryCritChance, Sets.secondaryHealth, Sets.secondaryOffense],
      [Sets.secondaryOffense, "", Sets.secondaryOffenseFlat, Sets.secondaryOffenseFlat, Sets.secondaryHealthFlat],
    ],
    stats: [
      [Sets.speed, "565+", "350+", "300+", "300+", "365+"],
      [Sets.Others, "Health > 200k", "", "Attack > 9k", "Attack > 9k", "Health > 90k"],
      ["", "Armor > 74%", "", "", "", ""],
      ["", "Attack > 6k2", "", "", "", ""],
    ],
    infos: "",
  },
};

export default revaTeam;
