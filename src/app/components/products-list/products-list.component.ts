import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userApi: UserApiService,
    public auth: AuthService
  ) {
    activatedRoute.paramMap.subscribe((res) => {
      this.tag = res.get('tag');
      let category = { category: this.tag };
      userApi.getProductList(category).subscribe((res) => {
        this.productData = res.data;
      });
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
  productData: any;
  tag: any;
}
