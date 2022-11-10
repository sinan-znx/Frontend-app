import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-edit-carousel',
  templateUrl: './edit-carousel.component.html',
  styleUrls: ['./edit-carousel.component.css'],
})
export class EditCarouselComponent implements OnInit {
  constructor(
    private userApi: UserApiService,
    private flashMsg: FlashMessagesService
  ) {
    this.displayCarousel();
  }
  carouselData: any = [];

  ngOnInit(): void {}
  //displayCarousel
  displayCarousel() {
    this.userApi.getCarousel().subscribe((res) => {
      this.carouselData = res.data;
      console.log(this.carouselData);
    });
  }

  //EditCarousel
  updateCarousel() {}
  //DeleteCarousel
  deleteCarousel($event: Event, id: any) {
    $event.preventDefault();
    let document = { _id: id };
    this.userApi.removeCarousel(document).subscribe((res) => {
      if (res.success) {
        this.flashMsg.show('successfully removed', {
          cssClass: 'alert-success',
          timeout: 3000,
        });
        this.displayCarousel();
      }
    });
  }
  editCarousel($event: Event, id: any) {}
}
