import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionReunionPage } from './gestion-reunion.page';

const routes: Routes = [
  {
    path: '',
    component: GestionReunionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionReunionPageRoutingModule {}
