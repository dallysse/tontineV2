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
      title: 'Accueil',
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
      title: 'Cotisations',
      url: '/cotisations',
      icon: 'cash'
    },
    {
      title: 'Projets',
      url: '/projets',
      icon: 'file-tray-full'
    },
    {
      title: 'Regles',
      url: '/regles',
      icon: 'receipt'
    }
  ];
  constructor() { }
}
