import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFavouritePageRoutingModule } from './my-favourite-routing.module';

import { MyFavouritePage } from './my-favourite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFavouritePageRoutingModule
  ],
  declarations: [MyFavouritePage]
})
export class MyFavouritePageModule {}
