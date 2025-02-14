import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSessionPageRoutingModule } from './detail-session-routing.module';

import { DetailSessionPage } from './detail-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSessionPageRoutingModule
  ],
})
export class DetailSessionPageModule {}
