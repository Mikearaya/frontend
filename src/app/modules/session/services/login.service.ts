import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../user.model';

@Injectable()
export class LoginService {
  readonly baseUrl = 'http://localhost:/../api/users';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
