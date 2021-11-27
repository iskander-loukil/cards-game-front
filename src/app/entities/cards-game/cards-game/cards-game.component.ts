import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { IGame } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cards-game',
  templateUrl: './cards-game.component.html',
  styleUrls: ['./cards-game.component.scss']
})
export class CardsGameComponent implements OnInit {

   isGameStarted = false;
   currentGame : IGame | undefined;
   apiError = false;
  
  constructor(protected gameService: GameService) { }

  ngOnInit(): void {

  }

  logger() : void {
    console.log(this.currentGame);
  }
  startNewGame() : void {
    this.isGameStarted = false;
      this.gameService.getANewGame()
      .subscribe(
        (data: IGame) => {
          this.currentGame = data;
          this.isGameStarted = true;
          this.apiError = false;
        },

        (error) => this.apiError = true
      );
  }
}
