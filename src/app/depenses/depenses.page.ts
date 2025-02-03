import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TontineService} from '../services/tontine.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Depense }  from '../models/depense';
import {DatePipe, formatDate} from '@angular/common';
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
  selector: 'app-depenses',
  templateUrl: './depenses.page.html',
  styleUrls: ['./depenses.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService],
  standalone: true,
})

export class DepensesPage implements OnInit {

  total_depenses : number = 0;
  depenses :  any[] = [];
  montant!: number;
  dateDepense!: Date;
  motif!: string;
  datePipe = new DatePipe('en-US');

  constructor(private reunionService: TontineService) { }

  ngOnInit() {
    this.getDepenses();
  }

  getDepenses() {
    this.reunionService.getDepenses().subscribe((response: { data: Depense[]}) => {
            this.depenses = response.data;
            for(let depense of this.depenses){
              this.total_depenses+=depense.montant_depense*1;
              }               
        });
  }

register()
{
  let bodyData = {
    "montant" : this.montant,
    "dateDepense" : this.datePipe.transform(this.dateDepense, 'yyyy.MM.dd'),
    "motif" : this.motif

};

  this.reunionService.registerDepense(bodyData).subscribe((resultData: any)=>
  {
      console.log("resultData "+this.datePipe.transform(this.dateDepense, 'yyy.MM.dd'));
      alert('You have registered successfully');

    });
}

add(){
  this.register();
}
}
