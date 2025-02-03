
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TontineService} from '../services/tontine.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Membre }  from '../models/membre';
import { RouterModule, Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-membres',
  templateUrl: './membres.page.html',
  styleUrls: ['./membres.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, RouterModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root

})

export class MembresPage implements OnInit {

  membres: any[] = [];

  constructor(private reunionService: TontineService, private router: Router) { }

  ngOnInit() {
    this.fetchMembres()

  }

  fetchMembres() {
    this.reunionService.listMembres().subscribe((response: { data: Membre[]}) => {
      this.membres = response.data;
    });
  }
}


