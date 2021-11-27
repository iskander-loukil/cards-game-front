import { ICard } from "./card";
import { ICardsOrder } from "./cards-order";

export interface IGame {
    deck : ICard[],
    cardsOrder: ICardsOrder,
    sortedDeck : ICard[]
  }

  export class Game implements IGame{
      constructor(
       public deck : ICard[],
       public cardsOrder: ICardsOrder,
       public sortedDeck : ICard[]
      ) {}
  }