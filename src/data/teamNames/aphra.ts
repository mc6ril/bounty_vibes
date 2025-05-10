import { Sets } from "..";
import { TeamTableProps } from "@core/domain/interfaces/TeamTableProps";
import Images from "../../assets/images";
import { aphra as aphraData } from "@data/chs/aphra";
import { ooo } from "@data/chs/ooo";
import { bt1 } from "@data/chs/bt1";
import { ig88 } from "@data/chs/ig88";
import { sonde } from "@data/chs/sonde";

const aphraTeam: TeamTableProps = {
  teamName: "Aphra",
  data: {
    characters: [
      {
        name: aphraData.name,
        image: aphraData.image,
        relic: aphraData.relic,
      },
      {
        name: ooo.name,
        image: ooo.image,
        relic: ooo.relic,
      },
      {
        name: bt1.name,
        image: bt1.image,
        relic: bt1.relic,
      },
      {
        name: ig88.name,
        image: ig88.image,
        relic: ig88.relic,
      },
      {
        name: sonde.name,
        image: sonde.image,
        relic: sonde.relic,
      },
    ],
    sets: [
      {
        images: aphraData.sets.images,
      },
      {
        images: ooo.sets.images,
      },
      {
        images: bt1.sets.images,
      },
      {
        images: ig88.sets.images,
      },
      {
        images: sonde.sets.images,
      },
    ],
    primaryIcons: [Images.fleche, Images.triangle, Images.rond, Images.croix],
    primary: [
      [
        aphraData.sets.primary.fleche,
        ooo.sets.primary.fleche,
        bt1.sets.primary.fleche,
        ig88.sets.primary.fleche,
        sonde.sets.primary.fleche,
      ],
      [
        aphraData.sets.primary.triangle,
        ooo.sets.primary.triangle,
        bt1.sets.primary.triangle,
        ig88.sets.primary.triangle,
        sonde.sets.primary.triangle,
      ],
      [
        aphraData.sets.primary.rond,
        ooo.sets.primary.rond,
        bt1.sets.primary.rond,
        ig88.sets.primary.rond,
        sonde.sets.primary.rond,
      ],
      [
        aphraData.sets.primary.croix,
        ooo.sets.primary.croix,
        bt1.sets.primary.croix,
        ig88.sets.primary.croix,
        sonde.sets.primary.croix,
      ],
    ],
    secondary: [
      [
        aphraData.sets.secondary[1],
        ooo.sets.secondary[1],
        bt1.sets.secondary[1],
        ig88.sets.secondary[1],
        sonde.sets.secondary[1],
      ],
      [
        aphraData.sets.secondary[2],
        ooo.sets.secondary[2],
        bt1.sets.secondary[2],
        ig88.sets.secondary[2],
        sonde.sets.secondary[2],
      ],
      [
        aphraData.sets.secondary[3],
        ooo.sets.secondary[3],
        bt1.sets.secondary[3],
        ig88.sets.secondary[3],
        sonde.sets.secondary[3],
      ],
      [
        aphraData.sets.secondary[4],
        ooo.sets.secondary[4],
        bt1.sets.secondary[4],
        ig88.sets.secondary[4],
        sonde.sets.secondary[4],
      ],
    ],
    stats: [
      [
        Sets.speed,
        aphraData.sets.stats.speed,
        ooo.sets.stats.speed,
        bt1.sets.stats.speed,
        ig88.sets.stats.speed,
        sonde.sets.stats.speed,
      ],
      [
        Sets.Others,
        aphraData.sets.stats.other[1],
        ooo.sets.stats.other[1],
        bt1.sets.stats.other[1],
        ig88.sets.stats.other[1],
        sonde.sets.stats.other[1],
      ],
      [
        Sets.Others,
        aphraData.sets.stats.other[2],
        ooo.sets.stats.other[2],
        bt1.sets.stats.other[2],
        ig88.sets.stats.other[2],
        sonde.sets.stats.other[2],
      ],
      [
        Sets.Others,
        aphraData.sets.stats.other[3],
        ooo.sets.stats.other[3],
        bt1.sets.stats.other[3],
        ig88.sets.stats.other[3],
        sonde.sets.stats.other[3],
      ],
    ],
    infos: "",
  },
};

export default aphraTeam;
