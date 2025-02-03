import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PretPage } from './pret.page';

const routes: Routes = [
  {
    path: '',
    component: PretPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PretPageRoutingModule {}
