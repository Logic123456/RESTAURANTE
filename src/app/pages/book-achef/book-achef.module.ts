import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAchefPageRoutingModule } from './book-achef-routing.module';

import { BookAchefPage } from './book-achef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAchefPageRoutingModule
  ],
  declarations: [BookAchefPage]
})
export class BookAchefPageModule {}
