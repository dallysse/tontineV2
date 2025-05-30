import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TontineService } from '../services/tontine.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Aide } from '../models/aide';
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
import { ModalReglesComponent } from '../modal-regles/modal-regles.component';
import { AjouterAideModalComponent } from '../ajouter-aide-modal/ajouter-aide-modal.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-cotisations',
  templateUrl: './cotisations.page.html',
  styleUrls: ['./cotisations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
})
export class CotisationsPage implements OnInit {

  constructor(private modalCtrl: ModalController, private reunionService: TontineService) {
    addIcons({ add });
  }

  ngOnInit() {
  }

}
