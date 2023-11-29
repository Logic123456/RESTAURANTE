import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { BookingChefComponent } from '../components/booking-chef/booking-chef.component';
@Component({
  selector: 'app-book-achef',
  templateUrl: './book-achef.page.html',
  styleUrls: ['./book-achef.page.scss'],
})
export class BookAchefPage implements OnInit {
  segId = "forever";
  availableType = {
    "today": null,
    "forever": 'monthly',
    "calendar": null
  }
  dateValue = '';
  dateValue2 = '';

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  segmentChanged(ev) {
    console.log(ev.detail.value);
    this.segId = ev.detail.value;
    console.log(this.segId);
    if (this.segId == 'today') {
      this.availableType = {
        "today": 'wholeday',
        "forever": null,
        "calendar": null
      }
    }

    if (this.segId == 'forever') {
      this.availableType = {
        "today": null,
        "forever": 'monthly',
        "calendar": null
      }
    }

    if (this.segId == 'calender') {
      this.availableType = {
        "today": null,
        "forever": null,
        "calendar": '18:27, Dec 30 2021'
      }
    }
  }

  todayChange(ev) {
    console.log(ev.detail.value);
    this.availableType = {
      "today": null,
      "forever": null,
      "calendar": null
    }
    this.availableType.today = ev.detail.value;
  }

  foreverChange(ev) {
    console.log(ev.detail.value);
    this.availableType = {
      "today": null,
      "forever": null,
      "calendar": null
    }
    this.availableType.forever = ev.detail.value;

  }

  contiune() {
    console.log(this.availableType);
    this.presentModal();
  }

  formatDate(value: string) {
    this.availableType = {
      "today": null,
      "forever": null,
      "calendar": null
    }
    this.availableType.calendar = format(parseISO(value), 'HH:mm, MMM dd yyyy');
    console.log(this.availableType);
  }



  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: BookingChefComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      swipeToClose: true,
      mode: 'ios',
      keyboardClose: true,
      componentProps: {
        "name": "Yamini",
        "city": "Nanded"
      },
      cssClass: "bookingmodal"
    })
    return await modal.present();
  }
}
