import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, RouterLink],
})
export class AppComponent {
  constructor() {}
}
