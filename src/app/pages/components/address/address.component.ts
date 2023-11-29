import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  address = {
    line1: 'Home Address 2',
    line2: '4073 Sundown Lane Austin, Texas, 78749',
    value: 'home2',
  }

  listOfAddress = [
    {
      "id": 1,
      "line1": "Home Address 1",
      "line2": "4073 Sundown Lane Austin, Texas, 78749",
      "value": "home1"
    },
    {
      "id": 2,
      "line1": "Home Address 2",
      "line2": "4073 Sundown Lane Austin, Texas, 78749",
      "value": "home2"
    },
    {
      "id": 3,
      "line1": "Home Address 3",
      "line2": "4073 Sundown Lane Austin, Texas, 78749",
      "value": "home3"
    }
  ]
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }


  addressChange(ev) {
    console.log("Change Address = " + ev.detail.value);
    this.address.value = ev.detail.value;
    let filterAdd = this.listOfAddress.find((add) => {
      return add.value == ev.detail.value;

    });
    this.address.line1 = filterAdd.line1
    this.address.line2 = filterAdd.line2
    this.address.value = filterAdd.value


  }
  setAddress() {
    console.log("Set Address = " + this.address.value);
    this.modalCtrl.dismiss({
      "line1": this.address.line1,
      "line2": this.address.line2,
      "value": this.address.value
    });
  }

  async presentModal(ev) {
    console.log("changed");
    const modal = await this.modalCtrl.create({
      component: AddAddressComponent,
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
      cssClass: "addAddress"
    })
    
    return await modal.present();
  }
}
