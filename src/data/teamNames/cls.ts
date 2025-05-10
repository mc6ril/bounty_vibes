import { ChsName, Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";

const clsTeam: TeamTableProps = {
  teamName: "CLS",
  data: {
    characters: [
      {
        name: ChsName.cls.name,
        image: Images.cls,
        relic: "",
      },
      {
        name: ChsName.chewbacca.name,
        image: Images.chewbacca,
        relic: "",
      },
      {
        name: ChsName.c3po.name,
        image: Images.c3po,
        relic: "",
      },
      {
        name: ChsName.hansolo.name,
        image: Images.hansolo,
        relic: "",
      },
      {
        name: ChsName.threepio.name,
        image: Images.threepio,
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

export default clsTeam;
