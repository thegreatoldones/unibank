import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './card.model';

@Injectable()
export class CardsService {

  constructor(
    private http: HttpClient
  ) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>('http://private-6f740-unibank.apiary-mock.com/cards');
  }
  // getCardData() {
  //
  // }

}
