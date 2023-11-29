import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, PopoverController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss'],
})
export class AddItemsComponent implements OnInit {
  orders = [];
  constructor(private service: AppServiceService, public loadingController: LoadingController, private router: Router,public popoverController: PopoverController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllYourOrders().subscribe((res) => {
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
}
