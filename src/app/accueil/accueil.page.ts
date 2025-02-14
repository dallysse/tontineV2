
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TontineService } from '../services/tontine.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Membre } from '../models/membre';
import { RouterModule, Router } from '@angular/router';
import { Reunion } from '../models/reunion';
import { MembresPage } from '../membres/membres.page';
import { Pret } from '../models/pret';
import { Aide } from '../models/aide';
import { Depense } from '../models/depense';
import { Sanction } from '../models/sanction';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
  standalone: true
})

export class AccueilPage implements OnInit {
  reunions: Reunion[] = [];
  membres: any = {};
  //membres: Membre[] = [];
  membresInscrits: any[] = [];

  aides: any = {};
  listAides: Aide[] = [];

  PretsList: Pret[] = [];
  prets: any = {};

  reunion: any = {};
  presents: any;

  id: any;
  fonds: any[] = [];
  total_fonds: number = 0;
  total_fonds_disponible: number = 0;
  total_fonds_caisse: number = 0;

  total_prets_non_rembourser: number = 0;
  total_interet_generer: number = 0;
  total_prets: number = 0;
  interet_generer: number = 0;

  total_depenses: number = 0;
  depenses: any = {};

  sanctions: any[] = [];
  total_sanctions: number = 0;
  offenAidesList: Aide[] = [];
  closeAidesList: Aide[] = [];

  offenPretsList: Pret[] = [];
  closePretsList: Pret[] = [];

  constructor(private reunionService: TontineService, private router: Router) { }

  ngOnInit() {
    this.fetchSessions()
    this.getSessionMembre()
    this.getSessionF()
    this.getPrets();
    this.getDepenses();
    this.getSanctions();
    this.fetchAides();
    this.getSessionMembre()
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

  getSessionF() {
    for (let reunion of this.reunions)
      for (let membre of this.membres)
        if (membre.id_session == reunion.id_session)
          this.membresInscrits.push(membre);
    console.log(this.membresInscrits.length)

  }

  getDepenses() {
    this.reunionService.getDepenses().subscribe((data) => {
      this.depenses = data
      console.log('test terre dzfnb' + this.depenses);
      for (let depense of this.depenses) {
        this.total_depenses += depense.montant_depense * 1;
      }
    });
  }

  fetchSessions() {
    this.reunionService.listReunions().subscribe((response: { data: Reunion[] }) => {
      this.reunions = response.data.sort((a, b) => b.id_session - a.id_session);
      for (let reunion of this.reunions) {
        reunion.montant_fond_caisse
      }
    });
  }

  getPrets() {
    this.reunionService.getPrets().subscribe((data) => {
      this.prets = data;
      for (let pret of this.prets) {
        this.PretsList.push(pret)
        if (pret.date_remboursement != null) {
          this.closePretsList.push(pret)
          if (pret.duree == 3) {
            this.interet_generer = pret.montant * 3 / 100;
          }
          else {
            this.interet_generer = pret.montant * 6 / 100;

          }
          this.total_interet_generer += this.interet_generer;
        } else {
          this.offenPretsList.push(pret);
          this.total_prets_non_rembourser += pret.montant * 1;
        }
      }
    });
  }

  fetchAides() {
    this.reunionService.getAides().subscribe((data) => {
      this.aides = data;
      for (let aide of this.aides) {
        if (aide.date_versement == null) {
          console.log('test1----------------' + this.offenAidesList.push(aide));
        }
        else {
          console.log('test2----------------' + this.closeAidesList.push(aide));
        }
      }
    });
  }

  getFonds() {

  }

  getSommeDispo(): number {
    this.total_fonds_disponible = this.total_fonds_caisse + this.total_interet_generer + this.total_sanctions - this.total_depenses - this.total_prets_non_rembourser;

    return this.total_fonds_disponible;
  }

  getSommeTotal(): number {
    this.total_fonds = this.total_fonds_caisse + this.total_interet_generer + this.total_sanctions - this.total_depenses;
    return this.total_fonds;
  }

  getSanctions() {
    this.reunionService.getSanctions().subscribe((response: { data: Sanction[] }) => {
      this.sanctions = response.data;
      for (let sanction of this.sanctions) {
        this.total_sanctions += sanction.montant * 1;
      }
    });
  }
}


