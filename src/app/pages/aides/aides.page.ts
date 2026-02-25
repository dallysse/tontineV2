import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
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
import { AidesServiceService } from 'src/app/services/aides-service.service';
import { AjouterAideModalComponent } from 'src/app/components/ajouter-aide-modal/ajouter-aide-modal.component';
import { ModalReglesComponent } from 'src/app/components/modal-regles/modal-regles.component';
import { Aide } from 'src/app/models/aide';

@Component({
  standalone: true,
  selector: 'app-aides',
  templateUrl: './aides.page.html',
  styleUrls: ['./aides.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [AidesServiceService], // Provide the service if not already provided in root
})

export class AidesPage implements OnInit {

  constructor(private modalCtrl: ModalController, private reunionService: AidesServiceService) {
    addIcons({ add });

  }

  aides: any = {};
  listAides: Aide[] = [];
  offenAidesList: Aide[] = [];
  closeAidesList: Aide[] = [];
  public newAide: Aide[] = [];

  beneficiaire: string = "";
  type_aide: string = "";
  date_versement: Date = new Date();

  ngOnInit() {
    this.fetchAides();
  }

  async openModalAdd() {
    const modal = await this.modalCtrl.create({
      component: AjouterAideModalComponent,
      componentProps: {
        title: 'Custom Modal Title',
        content: 'This is the content of the modal.',
      },
    });
    await modal.present();
  }

  async openModalInfo() {
    const modal = await this.modalCtrl.create({
      component: ModalReglesComponent,
      componentProps: {
        title: 'Custom Modal Title',
        content: 'This is the content of the modal.',
      },
    });
    await modal.present();
  }

  fetchAides() {
    this.reunionService.getAides().subscribe((data) => {
      this.aides = data;

      for (let aide of this.aides) {
        this.listAides.push(aide)
        if (aide.date_versement == null) {
          this.offenAidesList.push(aide);
        }
        else {
          this.closeAidesList.push(aide);
        }

      }
    });
  }

  isChecked() {
    {
      let bodyData = {
        "date_versement": this.date_versement
      };
      this.reunionService.registerAide(bodyData).subscribe((resultData: any) => {
        console.log("resultData" + resultData);
        alert('You have registered successfully');
      });
    }
  }
}
