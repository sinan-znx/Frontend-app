import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userApi: UserApiService
  ) {
    activatedRoute.paramMap.subscribe((res) => {
      this.tag = res.get('tag');
      let category = { category: this.tag };
      userApi.getProductList(category).subscribe((res) => {
        this.productData=res.data
      });
    });
  }

  ngOnInit(): void {}
  productData: any;
  tag: any;
}
