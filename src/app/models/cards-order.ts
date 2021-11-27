export interface ICardsOrder {
    colorOrder : string[],
    cardValuesOrder: string[]
  }

  export class CardsOrder implements ICardsOrder{
      constructor(
          public colorOrder : string[],
          public cardValuesOrder: string[]
      ) {}
  }