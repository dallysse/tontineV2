import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TontineService } from 'src/app/services/tontine.service';

@Component({
  standalone: true,
  selector: 'app-sanctions',
  templateUrl: './sanctions.page.html',
  styleUrls: ['./sanctions.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule], // Add IonicModule here
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [TontineService],
})

export class SanctionsPage implements OnInit {

  constructor(private reunionService: TontineService) { }

  sanctions: any[] = [];
  sanctionSession: any = {};

  ngOnInit() {
    this.getSanction()
  }

  getSanction() {
    this.reunionService.getSanctions().subscribe((data) => {
      this.sanctionSession = data;
      for (let sanction of this.sanctionSession) {
        this.sanctions.push(sanction)
      }
    });
  }


}
