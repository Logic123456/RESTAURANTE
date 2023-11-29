import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  close() {
    this.popoverController.dismiss();
  }
}
