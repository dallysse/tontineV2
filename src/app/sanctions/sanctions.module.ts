import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanctionsPageRoutingModule } from './sanctions-routing.module';

import { SanctionsPage } from './sanctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanctionsPageRoutingModule
  ],
})
export class SanctionsPageModule {}
