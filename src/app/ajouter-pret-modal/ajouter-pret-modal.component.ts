import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TontineService} from '../services/tontine.service';
import { CommonModule, DatePipe } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Aide }  from '../models/aide';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-ajouter-pret-modal',
  templateUrl: './ajouter-pret-modal.component.html',
  styleUrls: ['./ajouter-pret-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
})


export class AjouterPretModalComponent {

  @Input() title: string = 'Default Title';
  @Input() content: string = 'Default Content';
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  prets: any[] = [];

  datePret: Date = new Date();
  dateRemboursement: Date = new Date();
  duree: number = 0;
  beneficiaire : string = "";
  montant : number = 0;
  datePipe = new DatePipe('en-US');

  constructor(private modalCtrl: ModalController, private reunionService: TontineService) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  register()
  {
    let bodyData = {
      "duree" : this.duree,
      "beneficiaire" : this.beneficiaire,
      "datePret" : this.datePipe.transform(this.datePret, 'yyyy.MM.dd'),
      "montant" : this.montant,
      "dateRemboursement" : this.dateRemboursement,

    };

    this.reunionService.registerPret(bodyData).subscribe((resultData: any)=>
    {
        console.log("resultData "+this.datePret,);
        alert('You have registered successfully');
      
      });
  }


  add() {
    this.register();
  }
  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalCtrl.dismiss(this.name, 'name');
    this.add();
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }
}













 


  