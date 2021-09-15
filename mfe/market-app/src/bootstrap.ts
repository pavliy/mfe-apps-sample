import { enableProdMode, VERSION } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const ngVersion = VERSION.full;
(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];

if (!platform) {
  platform = platformBrowser();
  (window as any).plattform[ngVersion] = platform;
}

platform.bootstrapModule(AppModule, { ngZone: (window as any).ngZone })
  .catch((err: Error) => console.error(err));
