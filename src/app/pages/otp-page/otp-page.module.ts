import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpPagePageRoutingModule } from './otp-page-routing.module';

import { OtpPagePage } from './otp-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpPagePageRoutingModule
  ],
  declarations: [OtpPagePage]
})
export class OtpPagePageModule {}
