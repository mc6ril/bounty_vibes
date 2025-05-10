export interface Character {
  name: string;
  image?: string;
  relic?: string;
}

export interface Set {
  images?: string[];
}

export interface TeamTableData {
  characters: Character[];
  sets: Set[];
  primaryIcons: string[];
  primary: string[][];
  secondary: string[][];
  stats: string[][];
  infos: string;
}

export interface TeamTableProps {
  teamName: string;
  data: TeamTableData;
}
