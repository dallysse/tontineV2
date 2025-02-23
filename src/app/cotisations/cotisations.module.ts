import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotisationsPageRoutingModule } from './cotisations-routing.module';

import { CotisationsPage } from './cotisations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotisationsPageRoutingModule
  ],
})
export class CotisationsPageModule { }
