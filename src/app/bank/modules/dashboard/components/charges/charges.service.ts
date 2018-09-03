import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChargesService {
  constructor(private http: HttpClient) {}
  getCharges(range): Observable<any> {
    /* TODO Need to pass 'range' as request parameter and prepare API for charges  */
    return this.http.get<any[]>(
      'http://private-6f740-unibank.apiary-mock.com/history'
    );
  }
}
