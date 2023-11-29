import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.page.html',
  styleUrls: ['./profile-menu.page.scss'],
})
export class ProfileMenuPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  close() {
    this.popoverController.dismiss();
  }
}
