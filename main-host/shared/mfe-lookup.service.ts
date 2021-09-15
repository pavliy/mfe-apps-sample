import { Injectable } from '@angular/core';
import { MicrofrontendItem } from './microfrontend-item.model';

@Injectable({
  providedIn: 'root'
})
export class MfeLookupService {

  constructor() { }

  getQtMfeApps(): Promise<MicrofrontendItem[]> {
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:4300/tribe_app.js',
        remoteName: 'tribeApp',
        exposedModule: './TribeAppCore',
        displayName: 'Invest',
        routePath: 'tribeApp',
        ngModuleName: 'TribeAppCoreModule'
      },
      {
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './web-components',

        displayName: 'Mfe2_Stuff',
        routePath: 'mfe2/a',
        ngModuleName: 'WebComponents',

        webComponentDetails: {
          elementName: 'mfe2-element'
        }
      },
      {
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'moneymfe',
        exposedModule: './money-components',

        displayName: 'Money MFE',
        routePath: 'moneymfe/a',
        ngModuleName: 'MoneyComponents',

        webComponentDetails: {
          elementName: 'moneymfe-element'
        }
      },
      {
        remoteEntry: 'http://localhost:4208/remoteEntry.js',
        remoteName: 'epamoneymfe2',
        exposedModule: './money-components2',

        displayName: 'Money MFE2',
        routePath: 'epamoneymfe2/a',
        ngModuleName: 'MoneyComponents',

        webComponentDetails: {
          elementName: 'moneymfe2-element'
        }
      },
      {
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        remoteName: 'ng12mfe',
        exposedModule: './web-components',

        displayName: 'ng12-mfe',
        routePath: 'ng12mfe/ccc/a',
        ngModuleName: 'WebComponents',

        webComponentDetails: {
          elementName: 'ng12mfe-element'
        }
      }
    ]);
  }
}
