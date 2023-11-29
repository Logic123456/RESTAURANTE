import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAchefPage } from './book-achef.page';

const routes: Routes = [
  {
    path: '',
    component: BookAchefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAchefPageRoutingModule {}
