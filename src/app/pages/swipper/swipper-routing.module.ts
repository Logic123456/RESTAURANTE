import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwipperPage } from './swipper.page';

const routes: Routes = [
  {
    path: '',
    component: SwipperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwipperPageRoutingModule {}
