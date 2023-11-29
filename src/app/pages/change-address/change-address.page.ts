import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddressComponent } from '../components/address/address.component';
import { ThankyouPage } from '../components/thankyou/thankyou.page';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.page.html',
  styleUrls: ['./change-address.page.scss'],
})
export class ChangeAddressPage implements OnInit {
  returnDataFromModal =
    {
      "line1": "Home Address 1",
      "line2": "",
      "value": ""
    };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async changeAddress() {
    console.log("changed");
    const modal = await this.modalCtrl.create({
      component: AddressComponent,
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
    modal.onDidDismiss().then((data: any) => {
      this.returnDataFromModal = data.data;
      console.log(this.returnDataFromModal);
    })
    return await modal.present();

  }
  async contiune() {
    const modal = await this.modalCtrl.create({
      component: ThankyouPage,
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
