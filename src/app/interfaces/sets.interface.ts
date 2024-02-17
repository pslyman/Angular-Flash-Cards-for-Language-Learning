export interface Set {
  id: number;
  name: string;
  description: string;
  cards: Cards[];
}

export interface Cards {
  front: string;
  back: string;
  extra: string;
}
