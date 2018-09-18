import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountsService {
  constructor(private http: HttpClient) {}
  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>('http://private-6f740-unibank.apiary-mock.com/accounts');
  }
}
