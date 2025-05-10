import { ChsName, Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";

const jabbaTeam: TeamTableProps = {
  teamName: "Jabba",
  data: {
    characters: [
      {
        name: ChsName.jabba.name,
        image: Images.jabba,
        relic: "Rel 7",
      },
      {
        name: ChsName.boushh.name,
        image: Images.boushh,
        relic: "Rel 5 / 7",
      },
      {
        name: ChsName.boba.name,
        image: Images.boba,
        relic: "Rel 5 / 7",
      },
      {
        name: ChsName.skifflando.name,
        image: Images.skifflando,
        relic: "Rel 7",
      },
      {
        name: ChsName.krrsantan.name,
        image: Images.krrsantan,
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

export default jabbaTeam;
