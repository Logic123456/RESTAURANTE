import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-coupan',
  templateUrl: './coupan.component.html',
  styleUrls: ['./coupan.component.scss'],
})
export class CoupanComponent implements OnInit {
  
  coupanCode;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  dismiss() {
    this.modalCtrl.dismiss({
      "code": "",
    });
  }

  apply() {
    this.modalCtrl.dismiss({
      "code": this.coupanCode,
    });
  }
}
