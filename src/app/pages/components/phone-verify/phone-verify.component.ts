import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-phone-verify',
  templateUrl: './phone-verify.component.html',
  styleUrls: ['./phone-verify.component.scss'],
})
export class PhoneVerifyComponent implements OnInit {

  constructor(private router : Router,private modalCtrl: ModalController) { }

  ngOnInit() { }
  
  goToVerification() {
    this.router.navigate(['/otp-page']);
    this.modalCtrl.dismiss({
      "otp": "1234",      
    });
  }

}
