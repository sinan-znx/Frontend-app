import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private userApi: UserApiService) {
    let userId = { userId: localStorage.getItem('user_id') };
    userApi.getCart(userId).subscribe((res) => {
      this.cartData = res.data;
      console.log(this.cartData);
    });
  }
  cartData: any;
  ngOnInit(): void {}
}
