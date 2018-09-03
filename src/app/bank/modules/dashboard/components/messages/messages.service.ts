import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from './message.model';

@Injectable()
export class MessagesService {
  constructor(private http: HttpClient) {}

  getLatestMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>('http://private-6f740-unibank.apiary-mock.com/messages')
      .pipe(map(messages => messages.slice(0, 5)));
  }
}
