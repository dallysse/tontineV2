import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TontineService } from '../services/tontine.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Membre } from '../models/membre';
import { RouterModule, Router } from '@angular/router';
import { Reunion } from '../models/reunion';
import { MembresPage } from '../membres/membres.page';
import { Pret } from '../models/pret';
import { Aide } from '../models/aide';
import { Depense } from '../models/depense';
import { Sanction } from '../models/sanction';
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

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
  standalone: true
})
export class ParametrePage implements OnInit {

  constructor(private reunionService: TontineService, private router: Router) { }

  ngOnInit() {
  }

}
