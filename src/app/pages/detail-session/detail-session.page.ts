import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ActivatedRoute, RouterModule } from '@angular/router';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Pret } from 'src/app/models/pret';
import { Aide } from 'src/app/models/aide';
import { TontineService } from 'src/app/services/tontine.service';
import { Membre } from 'src/app/models/membre';
import { Reunion } from 'src/app/models/reunion';


@Component({
  selector: 'app-detail-session',
  templateUrl: './detail-session.page.html',
  styleUrls: ['./detail-session.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService],
  standalone: true
})



export class DetailSessionPage implements OnInit {

  membres: any = {};
  rencontres: any = {};
  membresInscrits: any[] = [];
  rencontresSession: any[] = [];
  date_encaissement = new Date()


  reunion: any = {};
  presents: any;
  id: any;

  PretsList: Pret[] = [];
  prets: any = {};
  total_prets: number = 0;
  interet_generer: number = 0;
  total_interet_generer: number = 0;

  aides: any = {};
  listAides: Aide[] = [];
  offenAidesList: Aide[] = [];
  closeAidesList: Aide[] = [];
  constructor(private route: ActivatedRoute, private reunionService: TontineService) {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.getSession()
    /*    this.getSessionRencontres()
       this.getSessionMembre()
       this.listPrets()
       this.fetchAides() */
    //this.isThisMonth()
  }

  fetchMembres() {
    this.reunionService.listMembres().subscribe((response: { data: Membre[] }) => {
      this.membres = response.data;
    });
  }

  getSession() {
    this.reunionService.getReunion(this.id).subscribe((response: { data: Reunion[] }) => {
      this.reunion = response.data[0];
    });

  }
  getSessionMembre() {
    this.reunionService.getSessionMembers().subscribe((data) => {
      this.membres = data
      for (let membre of this.membres)
        if (membre.id_session == this.id)
          this.membresInscrits.push(membre);
    },
      (error) => {
        console.error('Erreur lors du chargement des membres:', error);
      }
    );
  }
  getSessionRencontres() {
    this.reunionService.listSessionRencontres().subscribe((data) => {
      this.rencontres = data
      for (let rencontre of this.rencontres)
        if (rencontre.id_session == this.id)
          this.rencontresSession.push(rencontre);
    },
      (error) => {
        console.error('Erreur lors du chargement des rencontres:', error);
      }
    );
  }

  listPrets() {
    this.reunionService.getPrets().subscribe((data) => {
      this.prets = data;
      for (let pret of this.prets) {
        if (pret.id_session == this.id)
          console.log('test----------------' + this.PretsList.push(pret))

      }
    });
  }

  fetchAides() {
    this.reunionService.getAides().subscribe((data) => {
      this.aides = data;
      for (let aide of this.aides) {
        if (aide.id_session == this.id)
          console.log('test----------------' + this.listAides.push(aide))
      }
    });
  }

  isThisMonth(date: string): boolean {
    const date_encaissement = new Date(date);
    const today = new Date()
    return date_encaissement.getFullYear() === today.getFullYear() && date_encaissement.getMonth() === today.getMonth()

  }
}


