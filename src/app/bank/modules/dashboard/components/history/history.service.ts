import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistoryItem } from './history-item.model';

@Injectable()
export class HistoryService {
  constructor(private http: HttpClient) {}

  getHistory(range, count): Observable<HistoryItem[]> {
    /* Need to pass 'range' as request parameter  */
    return this.http
      .get<HistoryItem[]>(
        'http://private-6f740-unibank.apiary-mock.com/history'
      ).pipe(
        map(historyItems => historyItems.slice(0, count))
      );
  }
}
