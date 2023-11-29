import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EmailResetComponent } from '../components/email-reset/email-reset.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  login = {
    email: ""
  };
  constructor(private router : Router,private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }

  resetPassword() {
    this.presentModal();
  }


  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: EmailResetComponent,
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
      cssClass: "emailReset"
    })
    return await modal.present();
  }
}
