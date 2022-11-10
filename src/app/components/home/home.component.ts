import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userApi: UserApiService) {
    userApi.getCarousel().subscribe((res) => (this.carouselData = res.data));
  }

  ngOnInit(): void {}
  carouselData: any;
}
