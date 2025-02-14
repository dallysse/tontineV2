import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    {
      title: 'Reunion',
      url: '/accueil',
      icon: 'home'
    },
    {
      title: 'Aides',
      url: '/aides',
      icon: 'help-buoy'
    },
    {
      title: 'Prêts',
      url: '/pret',
      icon: 'cash'
    },
    {
      title: 'Depenses',
      url: '/depenses',
      icon: 'cash'
    },

    {
      title: 'Sanctions',
      url: '/sanctions',
      icon: 'document-text'
    },
    {
      title: 'Projets',
      url: '/projets',
      icon: 'file-tray-full'
    },
    {
      title: 'Regles',
      url: '/regles',
      icon: 'clipboard'
    }
  ];
  constructor() { }
}
