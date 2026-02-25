import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, provideRouter, withPreloading } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  appsOutline,
  cashOutline,
  fileTrayFullOutline,
  heartOutline,
  helpBuoy,
  homeOutline,
  medkitOutline,
  peopleOutline,
  receiptOutline,
  walletOutline,
} from 'ionicons/icons';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments /environment.prod';

addIcons({
  'people-outline': peopleOutline,
  'heart-outline': heartOutline,
  'apps-outline': appsOutline,
  'home-outline': homeOutline,
  'medkit-outline': medkitOutline,
  'cash-outline': cashOutline,
  'file-tray-full-outline': fileTrayFullOutline,
  'receipt-outline': receiptOutline,
  'wallet-outline': walletOutline,
  'help-buoy': helpBuoy,
});

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
}).catch((err) => console.error(err));
