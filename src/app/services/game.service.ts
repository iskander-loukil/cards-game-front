import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'src/app/app.constants';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game, IGame } from '../models/game';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  public resourceUrl = SERVER_API_URL + '/new-game';

  constructor(protected http: HttpClient) { }

  getANewGame(): Observable<IGame> {
    return this.http.get<IGame>(this.resourceUrl);
  }
}
