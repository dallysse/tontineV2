import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule, ModalController,NavParams } from '@ionic/angular';
import { TontineService} from '../services/tontine.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ActivatedRoute, RouterModule} from '@angular/router';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Reunion } from '../models/reunion';
import { Membre } from '../models/membre';
import { Pret } from '../models/pret';
import { Aide } from '../models/aide';
import { MembreSession } from '../models/membreSession';

@Component({
  selector: 'app-details-assise',
  templateUrl: './details-assise.page.html',
  styleUrls: ['./details-assise.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService],
  standalone: true
})



export class DetailsAssisePage implements OnInit {

  membres: any = {} ;
  //membres: Membre[] = [];
  membresInscrits: any[] = [];

  prets: Pret[] = [];
  aides: Aide[] = [];
  reunion: any = {};
  presents: any;
  id: any;

  constructor(private route: ActivatedRoute, private reunionService: TontineService) {
    this.id= this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.getSession()
    //this.listMembresPresentR()
    this.getSessionMembre()
  }

  fetchMembres() {
    this.reunionService.listMembres().subscribe((response: { data: Membre[]}) => {
      this.membres = response.data;
    });
  }

  getSession(){
    this.reunionService.getReunion(this.id).subscribe((response: { data: Reunion[]}) => {
      this.reunion = response.data[0];
    });
  }

  getSessionMembre(){
    this.reunionService.getSessionMembers().subscribe((data) => {
      this.membres=data
      for(let membre of this.membres)
        if( membre.id_session == this.id)
          this.membresInscrits.push(membre) ;
    },
    (error) => {
      console.error('Erreur lors du chargement des membres:', error);
    }
  );
}
  }

/*   listMembresPresentR(){
    this.reunionService.listMembresPresent().subscribe((response: { data:any []}) => {
      for (let present of response.data) {
        if(present.date == this.reunion.date){
          this.presents.push(present.nom) ;
          console.log(this.presents.length)
        }

      }
    });
  } */

/*   fetchSessionMembre(id_session: number){
    for (let membre of this.membres)
      if(id_session == membre.id_session)
        return membre.id_membre
        console.log()
    return this.membres
  } */


