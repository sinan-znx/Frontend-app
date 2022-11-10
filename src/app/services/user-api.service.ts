import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}
  getCarousel() {
    return this.http.get<any>('http://localhost:3000/users/sendCarousel');
  }
  removeCarousel(document: any) {
    return this.http.post<any>(
      'http://localhost:3000/users/removeCarousel',
      document
    );
  }
}
