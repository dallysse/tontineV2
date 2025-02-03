import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AidesPageRoutingModule } from './aides-routing.module';

import { AidesPage } from './aides.page';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonNote, IonButton, IonImg } from "@ionic/angular/standalone";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AidesPageRoutingModule,
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
export class AidesPageModule {}
  