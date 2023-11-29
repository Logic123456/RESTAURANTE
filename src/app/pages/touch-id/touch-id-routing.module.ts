import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouchIdPage } from './touch-id.page';

const routes: Routes = [
  {
    path: '',
    component: TouchIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouchIdPageRoutingModule {}
