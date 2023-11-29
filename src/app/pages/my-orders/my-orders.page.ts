import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, PopoverController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';
import { OrderPage } from '../popup/order/order.page';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  segId = "upcoming";
  orders = [];
  constructor(private service: AppServiceService, public loadingController: LoadingController, private router: Router, public popoverController: PopoverController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllOrders().subscribe((res) => {
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
}
