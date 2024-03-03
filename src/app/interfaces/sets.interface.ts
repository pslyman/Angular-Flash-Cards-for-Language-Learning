export interface Set {
  id: number;
  name: string;
  description: string;
  cards: Card[];
  groupId: number;
}

export interface Card {
  front: string;
  back: string;
  extra: string;
  alwaysFrontFirst?: boolean;
}

export interface NamesOfGroupIds {
  [key: number]: string;
}