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
import { AjouterAideModalComponent } from '../ajouter-aide-modal/ajouter-aide-modal.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
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
