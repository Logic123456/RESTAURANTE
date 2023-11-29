import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFavouritePage } from './my-favourite.page';

const routes: Routes = [
  {
    path: '',
    component: MyFavouritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFavouritePageRoutingModule {}
