import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, PopoverController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';
import { OrderPage } from '../popup/order/order.page';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.page.html',
  styleUrls: ['./my-favourite.page.scss'],
})
export class MyFavouritePage implements OnInit {
  segId = "chef";
  orders = [];
  constructor(private service: AppServiceService, public loadingController: LoadingController, private router: Router,public popoverController: PopoverController) { }


  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMenuDishes().subscribe((res) => {
        this.orders = res.document.records;
        console.log(this.orders);
        this.loadingController.dismiss();
      });
    }); 
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait .. ",
    });
    await loading.present();
  }

  segmentChanged(ev) {
    this.segId = ev.detail.value;
    console.log(this.segId);
    
  }

  goToEvent() {
    this.router.navigate(['/events'])
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OrderPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  delete(id) {
    console.log("Deleted Id =" + id);
    
  }
}
