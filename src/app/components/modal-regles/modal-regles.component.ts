import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-regles',
  templateUrl: './modal-regles.component.html',
  styleUrls: ['./modal-regles.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ModalReglesComponent   {

  @Input() title: string = 'Default Title';
  @Input() content: string = 'Default Content';

  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

}


