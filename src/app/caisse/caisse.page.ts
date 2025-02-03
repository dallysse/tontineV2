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
import { Depense } from '../models/depense';
import { Pret } from '../models/pret';
import { FondCaisses } from '../models/fondCaisse';
import { Sanction } from '../models/sanction';

@Component({
  standalone: true,
  selector: 'app-caisse',
  templateUrl: './caisse.page.html',
  styleUrls: ['./caisse.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
})


export class CaissePage implements OnInit {

  constructor(private reunionService: TontineService) {}

  fonds: any[] = [];
  total_fonds : number = 0;
  total_fonds_disponible : number = 0;
  total_fonds_caisse : number = 0;

  prets: any[] = [];
  total_prets_non_rembourser : number = 0;
  total_interet_generer : number = 0;  

  total_depenses : number = 0;
  depenses :  any[] = [];

  sanctions :  any[] = [];
  total_sanctions: number = 0;  

  ngOnInit() {
    this.getFonds();
    this.getPrets();
    this.getDepenses();
    this.getSanctions();
  }

  getSommeDispo(): number {
    this.total_fonds_disponible=this.total_fonds_caisse+this.total_interet_generer+this.total_sanctions-this.total_depenses-this.total_prets_non_rembourser;

    return this.total_fonds_disponible;
  }

  getSommeTotal(): number {
    this.total_fonds=this.total_fonds_caisse+this.total_interet_generer+this.total_sanctions-this.total_depenses;
    return this.total_fonds;
  }

  getPrets() {
         this.reunionService.getPrets().subscribe((response: { data: Pret[]}) => {
                this.prets = response.data;
                for(let pret of this.prets){
                  // calcule du total des prets non rembourser
                  if(pret.rembourser==0){
                    this.total_prets_non_rembourser += pret.montant*1;
                  }
                  // calcule de taux d'interet généré par pret
                  if(pret.rembourser==1){
                    let interet_generer;
                    if( pret.duree == 3) {                    
                      interet_generer=pret.montant*3/100; 
                    }
                    else {
                      interet_generer=pret.montant*6/100;                       
                    }
                    // calcule du total de taux d'interet généré 
                    this.total_interet_generer+=interet_generer;
                  }
                }
            });
  }

  getSanctions() {
    this.reunionService.getSanctions().subscribe((response: { data: Sanction[]}) => {
            this.sanctions = response.data;
            for(let sanction of this.sanctions){
              this.total_sanctions+=sanction.montant*1;   
            }   
        });
}
  getFonds() {
        this.reunionService.getFonds().subscribe((response: { data: FondCaisses[]}) => {
                this.fonds = response.data;
                for(let fond of this.fonds){
                  this.total_fonds_caisse+=fond.montant*1;                  
                  }               
            });
  }

  getDepenses() {
    this.reunionService.getDepenses().subscribe((response: { data: Depense[]}) => {
            this.depenses = response.data;
            for(let depense of this.depenses){
              this.total_depenses+=depense.montant*1;                  
              }               
        });
  }
}

