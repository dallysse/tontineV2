import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { TontineService } from '../services/tontine.service';
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
import { Reunion } from '../models/reunion';
import { Membre } from '../models/membre';
import { Pret } from '../models/pret';
import { Aide } from '../models/aide';
import { MembreSession } from '../models/membreSession';
import { Rencontre } from '../models/rencontre';

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

  membres: any = {};
  rencontres: any[] = [];
  rencontre: any = {};
  participants: any = {};
  presents: any[] = [];
  id: any;

  constructor(private route: ActivatedRoute, private reunionService: TontineService) {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.listMembresPresentR()
    this.getRencontreS()
  }

  getRencontreS() {
    this.reunionService.getRencontre(this.id).subscribe((response: { data: Rencontre[] }) => {
      this.rencontre = response.data[0];
    });
    console.log('test  -----------13.11-----------' + this.rencontre.nom)
  }

  listMembresPresentR() {
    this.reunionService.listMembresPresent().subscribe((data) => {
      this.participants = data;
      for (let present of this.participants) {
        if (present.id_rencontre == this.id)
          this.presents.push(present);
      }
    });
  }
}






