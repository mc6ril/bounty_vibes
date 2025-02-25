import Images from "@/assets/images";

type chsType = {
  name: string;
  image: Images;
  relic: string;
};

type SetType = {
  images: Images[];
};

export interface TeamTableProps {
  teamName: string;
  data: {
    characters: chsType[];
    sets: SetType[];
    primaryIcons: Images[];
    primary: string[][];
    secondary: string[][];
    stats: string[][];
    infos: string;
  };
}
