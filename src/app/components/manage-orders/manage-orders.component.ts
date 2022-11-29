import { Component, OnInit } from '@angular/core';
import { AdminApiService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css'],
})
export class ManageOrdersComponent implements OnInit {
  constructor(private adminApi: AdminApiService) {
this.allOrders()
  }

  ngOnInit(): void {}
  orders: any;

allOrders(){
  this.adminApi.allOrders().subscribe((res) => {
    this.orders = res.data;
    console.log(this.orders);
  });
}

  changeStatus($event:Event,id:any,status:String){
$event.preventDefault()
this.adminApi.changeStatus({id:id,status:status}).subscribe(res=>{
if (res.success) {
this.allOrders()
}

})
  }
}
