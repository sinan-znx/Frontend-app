import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userApi: UserApiService
  ) {
    this.activatedRoute.paramMap.subscribe((res) => {
      this.id = res.get('id');
    });
    let document = { id: this.id };
    this.userApi.getOneProduct(document).subscribe((res) => {
      this.productData = res.data;
      let discount =
        (this.productData.offerPrice / this.productData.actualPrice) * 100;
      this.offPercentage = 100 - discount;
      console.log(this.productData);
      this.specList = this.productData.description.split(',');
    });
  }
  id: any;
  productData: any;
  offPercentage: any;
  specList: any;
  isAdded: boolean = false;

  //addToCart
  onCartClick($event: Event, productId: any) {
    $event.preventDefault();
    let details = {
      userId: localStorage.getItem('user_id'),
      productId: productId,
    };
    this.userApi.addCartItem(details).subscribe((res) => (this.isAdded = true));
  }
  //removeFromCart
  onCartRemove($event: Event, productId: any) {
    $event.preventDefault();
    let details = {
      userId: localStorage.getItem('user_id'),
      productId: productId,
    };
    this.userApi
      .removeFromCart(details)
      .subscribe((res) => (this.isAdded = true));
  }
  ngOnInit(): void {}
}
