import { ChsName, Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";

const jmlTeam: TeamTableProps = {
  teamName: "JML",
  data: {
    characters: [
      {
        name: ChsName.jml.name,
        image: Images.jml,
        relic: "Rel 9",
      },
      {
        name: ChsName.jkl.name,
        image: Images.jkl,
        relic: "",
      },
      {
        name: ChsName.revan.name,
        image: Images.revan,
        relic: "",
      },
      {
        name: ChsName.jkck.name,
        image: Images.jkck,
        relic: "",
      },
      {
        name: ChsName.hyoda.name,
        image: Images.hyoda,
        relic: "",
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

export default jmlTeam;
