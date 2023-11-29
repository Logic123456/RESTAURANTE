import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications = [];
  constructor(private modalCtrl : ModalController,private service: AppServiceService, public loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllNotifications().subscribe((res) => {
        this.notifications = res.document.records;
        console.log(this.notifications);
        this.loadingController.dismiss();
      });
    });
  }
  dismiss() {
    this.modalCtrl.dismiss({
      "name": "Laxmi",
      "city":"Degloor"
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait .. ",
    });
    await loading.present();
  }
}
