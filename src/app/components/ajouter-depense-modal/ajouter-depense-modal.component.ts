import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
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
import { TontineService } from 'src/app/services/tontine.service';

@Component({
  selector: 'app-ajouter-depense-modal',
  templateUrl: './ajouter-depense-modal.component.html',
  styleUrls: ['./ajouter-depense-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
})


export class AjouterDepenseModalComponent {

  @Input() title: string = 'Default Title';
  @Input() content: string = 'Default Content';
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  prets: any[] = [];

  datePret: Date = new Date();
  dateDepense: Date = new Date();
  duree: number = 0;
  motif: string = "";
  montant: number = 0;
  datePipe = new DatePipe('en-US');

  constructor(private modalCtrl: ModalController, private reunionService: TontineService) { }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  register() {
    let bodyData = {
      "duree": this.duree,
      "motif": this.motif,
      "dateDepense": this.datePipe.transform(this.dateDepense, 'yyyy.MM.dd'),
      "montant": this.montant
    };

    this.reunionService.registerPret(bodyData).subscribe((resultData: any) => {
      console.log("resultData " + this.datePret,);
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
