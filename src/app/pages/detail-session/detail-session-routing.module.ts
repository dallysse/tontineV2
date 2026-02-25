import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSessionPage } from './detail-session.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSessionPageRoutingModule {}
