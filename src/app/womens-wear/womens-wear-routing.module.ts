import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomensWearPage } from './womens-wear.page';

const routes: Routes = [
  {
    path: '',
    component: WomensWearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomensWearPageRoutingModule {}
