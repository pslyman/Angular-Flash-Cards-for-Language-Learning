export interface Set {
  id: number;
  name: string;
  description: string;
  cards: Card[];
}

export interface Card {
  front: string;
  back: string;
  extra: string;
  alwaysFrontFirst?: boolean;
}
