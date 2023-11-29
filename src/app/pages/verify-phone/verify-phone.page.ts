import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PhoneVerifyComponent } from '../components/phone-verify/phone-verify.component';
@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.page.html',
  styleUrls: ['./verify-phone.page.scss'],
})
export class VerifyPhonePage implements OnInit {
  login = {
    mobile: ""
  };
  constructor(private router : Router,private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['/search-chef']);
  }

  resetPassword() {
    this.presentModal();
  }


  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: PhoneVerifyComponent,
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
      cssClass: "phoneVerify"
    })
    return await modal.present();
  }
}
