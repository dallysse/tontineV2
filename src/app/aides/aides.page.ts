import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { ModalReglesComponent } from '../modal-regles/modal-regles.component';
import { AjouterAideModalComponent } from '../ajouter-aide-modal/ajouter-aide-modal.component';


@Component({
  standalone: true,
  selector: 'app-aides',
  templateUrl: './aides.page.html',
  styleUrls: ['./aides.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
})

export class AidesPage implements OnInit {

  constructor(  private modalCtrl: ModalController, private reunionService: TontineService) { }

  aides: any = {};
  listAides: Aide[] = [];
  offenAidesList: Aide[] = [];
  closeAidesList: Aide[] = [];
  public newAide: Aide[] = [];

  beneficiaire: string = "";
  type_aide: string = "";
  date_versement: Date = new Date();

  ngOnInit() {
    this.fetchAides() ;
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
      for (let aide of this.aides){
        console.log('test----------------'+ this.listAides.push(aide))
        if (aide.date_versement == null){
          console.log('test1----------------'+this.offenAidesList.push(aide)) ;
        }
        else{
          console.log('test2----------------'+this.closeAidesList.push(aide) );
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
