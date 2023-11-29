import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  payment = [];
  constructor(private service: AppServiceService, public loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllPayments().subscribe((res) => {
        this.payment = res.document.records;
        console.log(this.payment);
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
