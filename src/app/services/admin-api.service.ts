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
  removeCarousel(document: any) {
    return this.http.post<any>(
      'http://localhost:3000/admin/removeCarousel',
      document
    );
  }
  addProduct(product: any) {
    return this.http.post<any>(
      'http://localhost:3000/admin/addProduct',
      product
    );
  }
  allOrders() {
    return this.http.get<any>(
      'http://localhost:3000/admin/allOrders'
    );
  }
  changeStatus(order:any) {
    return this.http.post<any>(
      'http://localhost:3000/admin/changeStatus',order
    );
  }
  getAllProducts() {
    return this.http.get<any>(
      'http://localhost:3000/admin/allProducts'
    );
  }
  removeOneProduct(id: any) {
    return this.http.post<any>(
      'http://localhost:3000/admin/removeProduct',
      id
    );
  }
}
