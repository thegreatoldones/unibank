import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SummaryService {
  constructor(private http: HttpClient) {}

  getSummary(): Observable<object> {
    return this.http
      .get<object>('http://private-6f740-unibank.apiary-mock.com/summary')
  }
}
