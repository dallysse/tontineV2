import { enableProdMode } from '@angular/core';


import { addIcons } from 'ionicons';
import { peopleOutline, heartOutline, appsOutline, homeOutline, cashOutline, receiptOutline, medkitOutline, fileTrayFullOutline } from 'ionicons/icons';

addIcons({
  'people-outline': peopleOutline,
  'heart-outline': heartOutline,
  'apps-outline': appsOutline,
  'home-outline': homeOutline,
  'medkit-outline': medkitOutline,
  'cash-outline': cashOutline,
  'file-tray-full-outline': fileTrayFullOutline,
  'receipt-outline': receiptOutline
});

if (environment.production) {
  enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments /environment.prod';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
