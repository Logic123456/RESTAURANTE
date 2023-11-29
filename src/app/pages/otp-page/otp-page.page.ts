import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PhoneVerifyComponent } from '../components/phone-verify/phone-verify.component';
@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.page.html',
  styleUrls: ['./otp-page.page.scss'],
})
export class OtpPagePage implements OnInit {
  login = {
    key1: "",
    key2: "",
    key3: "",
    key4: "",
  };
  msg: string = '';
  otp1: number = 1;
  otp2: number = 2;
  otp3: number = 3;
  otp4: number = 4;
  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
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

  move(e: any, p: any, c: any, n: any) {
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');

    if (length == maxlength) {
      if (n != "") {
        n.focus();
      }
      n.focus();
    }

    if (e.key === "Backspace") {
      if (p != "") {
        p.focus();
        this.msg = "";
      }
    }
  }

  resend() {
    console.log("Resend Password");

  }

  veryfiotp() {
    console.log(this.login.key1 + " " + this.login.key2 + " " + this.login.key3 + " " + this.login.key4);

    if (this.otp1 == +this.login.key1 &&
      this.otp2 == +this.login.key2 &&
      this.otp3 == +this.login.key3 &&
      this.otp4 == +this.login.key4) {
        this.router.navigate(["/setting"])
    } else {
      this.msg = " OPT is invalid , Please try again"
      console.log(this.msg);
      
    }

  }
}
