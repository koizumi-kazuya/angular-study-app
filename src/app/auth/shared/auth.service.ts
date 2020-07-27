import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http :HttpClient) { }

  resister(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/resister',userData)
  }

  login(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/login',userData)
  }
}
