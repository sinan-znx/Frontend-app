import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminApiService {
  constructor(private http: HttpClient) {}

  getAwsUrl() {
    return this.http.get<any>('http://localhost:3000/admin/s3url');
  }
  uploadImgAWS(url: any, file: any) {
    return this.http.put<any>(url, file, { headers: { Anonymous: 'true' } });
  }
  addCarousel(carousel: any) {
    return this.http.post<any>(
      'http://localhost:3000/admin/addCarousel',
      carousel
    );
  }
}
