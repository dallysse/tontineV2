import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembresPageRoutingModule } from './membres-routing.module';

import { MembresPage } from './membres.page';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonNote, IonButton, IonImg } from "@ionic/angular/standalone";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembresPageRoutingModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonNote,
    IonButton,
    IonImg
  ],
})
export class MembresPageModule {}
