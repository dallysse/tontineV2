import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotisationsPage } from './cotisations.page';

const routes: Routes = [
  {
    path: '',
    component: CotisationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotisationsPageRoutingModule {}
