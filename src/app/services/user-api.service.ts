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
  getProduct() {
    return this.http.get<any>('http://localhost:3000/users/sendProduct');
  }
  getOneProduct(id: any) {
    return this.http.post<any>(
      'http://localhost:3000/users/sendOneProduct',
      id
    );
  }
  addCartItem(details: any) {
    return this.http.post<any>(
      'http://localhost:3000/users/addToCart',
      details
    );
  }
  removeFromCart(details: any) {
    return this.http.post<any>(
      'http://localhost:3000/users/removeFromCart',
      details
    );
  }
  getCart(userId: any) {
    return this.http.post<any>('http://localhost:3000/users/sendCart', userId);
  }
  incORdec(incOrdec: any) {
    return this.http.post<any>(
      'http://localhost:3000/users/incOrdec',
      incOrdec
    );
  }
  getTotal(userId: any) {
    return this.http.post<any>(
      'http://localhost:3000/users/totalAmount',
      userId
    );
  }
  checkoutOrder(details: any) {
    return this.http.post<any>('http://localhost:3000/users/checkout', details);
  }
  verifyPayment(razorpayResponse: any) {
    return this.http.post<any>(
      'http://localhost:3000/users/verifyPayment',
      razorpayResponse
    );
  }
  getOrders(userId: any) {
    return this.http.post<any>('http://localhost:3000/users/sendOrder', userId);
  }
  getProductList(tag:any){
    return this.http.post<any>('http://localhost:3000/users/productList', tag);

  }
}
