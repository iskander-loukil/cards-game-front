import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-cards-game',
  templateUrl: './cards-game.component.html',
  styleUrls: ['./cards-game.component.scss']
})
export class CardsGameComponent implements OnInit {

  private isGameStarted = false;
   deck : Card[] = [];
   sortedDeck : Card[] = [];
   colorOrder: string[] = [];
   cardValuesOrder : string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.deck.push(new Card("COEUR","ROI"));
    this.deck.push(new Card("COEUR","ROI"));
    this.deck.push(new Card("COEUR","ROI"));
    this.deck.push(new Card("COEUR","ROI"));
    this.deck.push(new Card("COEUR","ROI"));
    this.deck.push(new Card("COEUR","ROI"));
    this.deck.push(new Card("COEUR","ROI"));
    this.deck.push(new Card("COEUR","ROI"));
  }

}
