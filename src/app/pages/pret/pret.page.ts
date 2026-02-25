import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { TontineService } from 'src/app/services/tontine.service';
import { AjouterPretModalComponent } from 'src/app/components/ajouter-pret-modal/ajouter-pret-modal.component';
import { ModalReglesPretComponent } from 'src/app/components/modal-regles-prets/modal-regles-prets.component';
import { Pret } from 'src/app/models/pret';

@Component({
  selector: 'app-pret',
  templateUrl: './pret.page.html',
  styleUrls: ['./pret.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
})

export class PretPage implements OnInit {


  constructor(private modalCtrl: ModalController, private reunionService: TontineService) { }
  offenPretsList: Pret[] = [];
  closePretsList: Pret[] = [];
  PretsList: Pret[] = [];
  prets: any = {};
  total_prets: number = 0;
  interet_generer: number = 0;
  total_interet_generer: number = 0;

  datePret: Date = new Date();
  dateRemboursement: Date = new Date();
  duree: number = 0;
  beneficiaire: string = "";
  montant: number = 0;
  datePipe = new DatePipe('en-US');

  ngOnInit() {
    this.listPrets()
  }

  listPrets() {
    this.reunionService.getPrets().subscribe((data) => {
      this.prets = data;
      for (let pret of this.prets) {
        console.log('test----------------' + this.PretsList.push(pret))
        if (pret.date_remboursement != null) {
          console.log('test----------------' + this.closePretsList.push(pret))
          if (pret.duree == 3) {
            this.interet_generer = pret.montant * 3 / 100;
          }
          else {
            this.interet_generer = pret.montant * 6 / 100;

          }
          this.total_interet_generer += this.interet_generer;
        } else {
          this.offenPretsList.push(pret);
        }
      }
    });
  }

  async openModalAdd() {
    const modal = await this.modalCtrl.create({
      component: AjouterPretModalComponent,
      componentProps: {
        title: 'Custom Modal Title',
        content: 'This is the content of the modal.',
      },
    });

    await modal.present();
  }

  async openModalInfo() {
    const modal = await this.modalCtrl.create({
      component: ModalReglesPretComponent,
      componentProps: {
        title: 'Custom Modal Title',
        content: 'This is the content of the modal.',
      },
    });

    await modal.present();
  }
}
