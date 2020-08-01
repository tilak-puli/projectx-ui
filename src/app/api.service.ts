import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import UserCredentials from './types/user-credentials';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(credentials: UserCredentials): Observable<any> {
    return this.http.post('http://localhost:8080/login', credentials);
  }
}
