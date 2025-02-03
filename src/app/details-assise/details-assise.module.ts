import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsAssisePageRoutingModule } from './details-assise-routing.module';

import { DetailsAssisePage } from './details-assise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsAssisePageRoutingModule
  ],
})
export class DetailsAssisePageModule {}
