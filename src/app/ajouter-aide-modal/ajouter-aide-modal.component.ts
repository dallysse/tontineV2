import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TontineService} from '../services/tontine.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
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
  selector: 'app-ajouter-aide-modal',
  templateUrl: './ajouter-aide-modal.component.html',
  styleUrls: ['./ajouter-aide-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
})
export class AjouterAideModalComponent   {
  @ViewChild(IonModal) modal!: IonModal;

  aides: any[] = [];
  public newAide: Aide[] = [];

  beneficiaire: string = "";
  type_aide: string = "";
  remis: any = 0;
  @Input() title: string = 'Default Title';
  @Input() content: string = 'Default Content';
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  constructor(private modalCtrl: ModalController, private reunionService: TontineService) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
  register() {
    let bodyData = {
      "type_aide": this.type_aide,
      "beneficiaire": this.beneficiaire
    };

    this.reunionService.registerAide(bodyData).subscribe((resultData: any) => {
      console.log("resultData" + resultData);
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




