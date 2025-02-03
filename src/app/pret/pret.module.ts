import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PretPageRoutingModule } from './pret-routing.module';

import { PretPage } from './pret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PretPageRoutingModule
  ],
})
export class PretPageModule {}
