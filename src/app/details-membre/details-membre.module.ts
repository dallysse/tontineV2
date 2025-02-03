import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMembrePageRoutingModule } from './details-membre-routing.module';

import { DetailsMembrePage } from './details-membre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMembrePageRoutingModule
  ],
})
export class DetailsMembrePageModule {}
