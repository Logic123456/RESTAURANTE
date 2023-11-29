import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  title: string;
  img: string;
  decsription: string;
  start: string;
  end: string;
  constructor(public modalController: ModalController,
    public navParams: NavParams) {
    this.title = navParams.get('title');
    this.img = navParams.get('img');
    this.decsription = navParams.get('description');
    this.start = navParams.get('startTime');
    this.end = navParams.get('endTime');
  }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }
}
