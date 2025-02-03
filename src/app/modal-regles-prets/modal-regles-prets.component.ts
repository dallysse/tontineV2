import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-regles-prets',
  templateUrl: './modal-regles-prets.component.html',
  styleUrls: ['./modal-regles-prets.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ModalReglesPretComponent   {

  @Input() title: string = 'Default Title';
  @Input() content: string = 'Default Content';

  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
