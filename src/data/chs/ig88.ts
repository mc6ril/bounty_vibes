import { sets } from "@data/sets";
import Images from "../../assets/images";

export const ig88 = {
  name: "IG-88",
  image: Images.ig88,
  relic: "Rel 7 / 8",
  sets: {
    images: [Images.dmgcrit, Images.health],
    primary: {
      fleche: sets.speed,
      triangle: sets.primaryProtection,
      rond: sets.primaryProtection,
      croix: sets.primaryPotency,
    },
    secondary: {
      1: sets.secondaryOffense,
      2: "",
      3: sets.secondaryOffenseFlat,
      4: sets.secondaryOffenseFlat,
    },
    stats: {
      speed: "565+",
      other: {
        1: "Health > 200k",
        2: "Armor > 74%",
        3: "Attack > 6k2",
      },
    },
  },
};
