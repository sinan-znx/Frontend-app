import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private userApi: UserApiService) {
    this.GetCartdata();
    if (this.cartData) {
            this.totalAmount();
          }
  }
  cartData: any;
  total: any = 0;
  ngOnInit(): void {

  }
  //CART_DATA
  GetCartdata() {
    let userId = { userId: localStorage.getItem('user_id') };
    this.userApi.getCart(userId).subscribe((res) => {
      this.cartData = res.data;
      console.log(this.cartData);
    });
  }
  //ON_CHANGE_QUANTITY
  quantityChange(incOrDec: any, productId: any) {
    let value = {
      user: localStorage.getItem('user_id'),
      product: productId,
      value: incOrDec,
    };
    this.userApi.incORdec(value).subscribe((res) => {
      this.GetCartdata();
      this.totalAmount();
    });
  }
  //TO_GET_TOTAL_AMOUNT
  totalAmount() {
    let userId = { userId: localStorage.getItem('user_id') };
    this.userApi.getTotal(userId).subscribe((res) => {
      this.total =
        res.total[0].totalAmount === undefined ? 0 : res.total[0].totalAmount;
      console.log(this.total);
    });
  }
}
