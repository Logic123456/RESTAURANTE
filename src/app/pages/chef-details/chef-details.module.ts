import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChefDetailsPageRoutingModule } from './chef-details-routing.module';

import { ChefDetailsPage } from './chef-details.page';
import { NgxStarsModule } from 'ngx-stars';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,NgxStarsModule,
    IonicModule,
    ChefDetailsPageRoutingModule
  ],
  declarations: [ChefDetailsPage]
})
export class ChefDetailsPageModule {}
