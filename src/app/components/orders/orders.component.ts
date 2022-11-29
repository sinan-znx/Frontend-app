import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private userApi: UserApiService) {
    this.getOrders();
  }

  ngOnInit(): void {}
  getOrders() {
    let details = { userId: localStorage.getItem('user_id') };
    this.userApi.getOrders(details).subscribe((res) => {
      this.orderData = res.orders;
      console.log(this.orderData);
    });
  }

  orderData: any;
}
