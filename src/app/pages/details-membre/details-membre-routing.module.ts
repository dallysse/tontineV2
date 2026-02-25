import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsMembrePage } from './details-membre.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsMembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsMembrePageRoutingModule {}
