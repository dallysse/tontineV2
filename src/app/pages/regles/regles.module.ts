import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReglesPageRoutingModule } from './regles-routing.module';

import { ReglesPage } from './regles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReglesPageRoutingModule
  ],
})
export class ReglesPageModule {}
