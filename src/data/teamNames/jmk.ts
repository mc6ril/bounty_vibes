import { ChsName, Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";

const jmkTeam: TeamTableProps = {
  teamName: "JMK",
  data: {
    characters: [
      {
        name: ChsName.jmk.name,
        image: Images.jmk,
        relic: "Rel 7",
      },
      {
        name: ChsName.cat.name,
        image: Images.cat,
        relic: "Rel 5 / 7",
      },
      {
        name: ChsName.ashokaSnips.name,
        image: Images.snips,
        relic: "Rel 5 / 7",
      },
      {
        name: ChsName.padmeAmidala.name,
        image: Images.padme,
        relic: "Rel 7",
      },
      {
        name: ChsName.generalKenobi.name,
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
      [Sets.speed, Sets.speed, Sets.primaryOffense, Sets.primaryHealth, Sets.primaryHealth],
      [Sets.primaryCritDmg, Sets.primaryCritDmg, Sets.primaryCritDmg, Sets.primaryHealth, Sets.primaryHealth],
      [
        Sets.primaryHealthOrProt,
        Sets.primaryHealthOrProt,
        Sets.primaryHealthOrProt,
        Sets.primaryHealth,
        Sets.primaryHealth,
      ],
      [Sets.primaryOffense, Sets.primaryOffense, Sets.primaryOffense, Sets.primaryHealth, Sets.primaryHealth],
    ],
    secondary: [
      [Sets.speed, Sets.speed, Sets.secondaryOffense, Sets.secondaryHealth, Sets.secondaryHealth],
      [Sets.secondaryOffense, Sets.secondaryOffense, Sets.speed, Sets.speed, Sets.speed],
      [
        Sets.secondaryHealthOrProt,
        Sets.secondaryHealthOrProt,
        Sets.secondaryOffenseFlat,
        Sets.secondaryProtection,
        Sets.secondaryProtection,
      ],
      [
        Sets.secondaryHealth,
        Sets.secondaryHealth,
        Sets.secondaryHealthFlat,
        Sets.secondaryHealthFlat,
        Sets.secondaryHealthFlat,
      ],
    ],
    stats: [
      [Sets.speed, "570+", "365+", "230+", "280+", "-"],
      [Sets.attack, "Attack > 10k", "Attack > 8.5k", "Attack > 10k", "Health > 100k", "Health > 110k"],
    ],
    infos: "If you don't have Commander Ahsoka Tano (CAT) then she can be replaced with Master Yoda in the meantime.",
  },
};

export default jmkTeam;
