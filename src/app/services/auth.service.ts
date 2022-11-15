import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //REGISTER
  register(user: any) {
    return this.http.post<any>('http://localhost:3000/users/register', user);
  }
  //LOGIN
  login(user: any) {
    return this.http.post<any>('http://localhost:3000/users/login', user);
  }
  //IS_LOGGED_IN
  isLogged() {
    return !!localStorage.getItem('token_id');
  }
  //IS_ADMIN
  isAdmin() {
    return localStorage.getItem('isAdmin') === 'true' ? true : false;
  }
  //LOAD_TOKEN
  loadToken() {
    return localStorage.getItem('token_id');
  }
}
