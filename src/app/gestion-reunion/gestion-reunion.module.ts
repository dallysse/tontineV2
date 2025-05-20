import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionReunionPageRoutingModule } from './gestion-reunion-routing.module';

import { GestionReunionPage } from './gestion-reunion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionReunionPageRoutingModule
  ],
})
export class GestionReunionPageModule { }
