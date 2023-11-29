import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() name: string;
  @Input() city: string;
  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss({
      "name": "Laxmi",
      "city":"Degloor"
    });
  }
}
