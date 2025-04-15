import { ChsName, Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";

const glatTeam: TeamTableProps = {
  teamName: "GLAT",
  data: {
    characters: [
      {
        name: ChsName.glat.name,
        image: Images.glat,
        relic: "Rel 9",
      },
      {
        name: ChsName.generalSyndulla.name,
        image: Images.generalsyndu,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.huyang.name,
        image: Images.huyang,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.padawanSabine.name,
        image: Images.padawansabine,
        relic: "Rel 7 / 8",
      },
      {
        name: ChsName.ezraBridgerExil.name,
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
export default glatTeam;
