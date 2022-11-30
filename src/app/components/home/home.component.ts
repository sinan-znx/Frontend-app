import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userApi: UserApiService, public auth: AuthService) {
    userApi.getCarousel().subscribe((res) => (this.carouselData = res.data));
    userApi.getProduct().subscribe((res) => {this.productData = res.data
    });
  }

  //addToCart
  onCartClick($event: Event, productId: any) {
    $event.preventDefault();
    $event.stopPropagation();
    let details = {
      userId: localStorage.getItem('user_id'),
      productId: productId,
    };
    this.userApi.addCartItem(details).subscribe();
  }
  ngOnInit(): void {}
  carouselData: any;
  productData: any;
  offPercentage: any;
}
