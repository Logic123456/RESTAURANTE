import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchChefPageRoutingModule } from './search-chef-routing.module';

import { SearchChefPage } from './search-chef.page';
import { ProfileComponent } from '../components/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchChefPageRoutingModule
  ],
  declarations: [SearchChefPage,ProfileComponent]
})
export class SearchChefPageModule {}
