import { ChsName, Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";

const aphraTeam: TeamTableProps = {
  teamName: "Aphra",
  data: {
    characters: [
      {
        name: ChsName.aphra.name,
        image: Images.aphra,
        relic: "Rel 9",
      },
      {
        name: ChsName.ooo.name,
        image: Images.ooo,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.bt1.name,
        image: Images.bt1,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.ig88.name,
        image: Images.ig88,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.sonde.name,
        image: Images.sonde,
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

export default aphraTeam;
