import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsAssisePage } from './details-assise.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsAssisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsAssisePageRoutingModule {}
