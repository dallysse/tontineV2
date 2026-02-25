import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Membre } from '../../models/membre';
import { RouterModule, Router } from '@angular/router';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, InfiniteScrollCustomEvent,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { TontineService } from 'src/app/services/tontine.service';
@Component({
  selector: 'app-collation',
  templateUrl: './collation.page.html',
  styleUrls: ['./collation.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
  standalone: true
})
export class CollationPage implements OnInit {

  constructor(private reunionService: TontineService) {
    addIcons({ add });
  }

  ngOnInit() {
  }

}
