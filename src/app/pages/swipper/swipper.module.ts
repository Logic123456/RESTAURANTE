import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwipperPageRoutingModule } from './swipper-routing.module';

import { SwipperPage } from './swipper.page';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  imports: [
    CommonModule,SwiperModule,
    FormsModule,
    IonicModule,
    SwipperPageRoutingModule
  ],
  declarations: [SwipperPage]
})
export class SwipperPageModule {}
