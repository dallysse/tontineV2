import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { TontineService } from '../services/tontine.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService], // Provide the service if not already provided in root
})
export class ParametrePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
