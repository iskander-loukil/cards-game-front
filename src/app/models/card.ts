export interface ICard {
    color: string,
    cardValue: string
  }

  export class Card implements ICard{
      constructor(
          public color: string,
          public cardValue: string
      ) {}
  }