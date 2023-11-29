import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouchIdPageRoutingModule } from './touch-id-routing.module';

import { TouchIdPage } from './touch-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouchIdPageRoutingModule
  ],
  declarations: [TouchIdPage]
})
export class TouchIdPageModule {}
