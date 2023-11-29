import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  user = [];
  constructor(private service: AppServiceService, public loadingController: LoadingController, private router: Router,) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMsg().subscribe((res) => {
        this.user = res.document.records;
        console.log(this.user);
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
