import { sets } from "@data/sets";
import Images from "../../assets/images";

export const aphra = {
  name: "Doctor Aphra",
  image: Images.aphra,
  relic: "Rel 9",
  sets: {
    images: [Images.potency],
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
