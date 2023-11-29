import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-email-reset',
  templateUrl: './email-reset.component.html',
  styleUrls: ['./email-reset.component.scss'],
})
export class EmailResetComponent implements OnInit {

  constructor(private router : Router,private modalCtrl: ModalController) { }

  ngOnInit() {}
  goToLogin() {
    this.router.navigate(['/login']);
    this.modalCtrl.dismiss({
      "val1": "val1",      
    });
  }
}
