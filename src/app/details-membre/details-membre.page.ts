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

import { ActivatedRoute, RouterModule } from '@angular/router';
import { Membre } from '../models/membre';
import { Pret } from '../models/pret';

@Component({
  selector: 'app-details-membre',
  templateUrl: './details-membre.page.html',
  styleUrls: ['./details-membre.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService],
  standalone: true
})

export class DetailsMembrePage implements OnInit {

  constructor(private route: ActivatedRoute, private reunionService: TontineService) { }

  membre: any = {} ;
  membres: Membre[] = [];
  prets: Pret[] = [];
  aides: Aide[] = [];


  ngOnInit() {
    this.getMembre()
  //  this.getMembreAides()
    this.getMembrePrets()
  }

  fetchSessionMembre(id_session: number){
    for (let membre of this.membres)
      //if(id_session == membre.id_session)
        return membre.id_membre
        console.log()
      return this.membres
  }

  getMembre(){
    const id = this.route.snapshot.paramMap.get('id');
    this.reunionService.getMembre(id).subscribe((response: { data: Membre[]})  => {
      this.membre = response.data[0];
      console.log("ta tete ........................membre"+this.membre.prenom)
      console.log("ta tete ........................membre"+id)
    });
  }

  getMembrePrets(){
    this.reunionService.getPrets().subscribe((response: { data: Pret[]}) => {

      for (let pret of response.data) {
        // calcule du total des prets non rembourser
        if (pret.id_membre == this.membre.id_membre) {
          this.prets.push(pret);
          console.log("ta tete ........................prets"+this.prets)
        }

      }

    });

  }

/*   getMembreAides(){
    this.reunionService.getAides().subscribe((response: { data: Aide[]}) => {
      for (let aide of response.data) {
        // calcule du total des prets non rembourser
        //if (aide.id_membre == this.membre.id_membre) {
          this.aides.push(aide);
          console.log("ta tete ........................aide"+this.aides)
        }

      }
    });
  }
 */
}
