import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseBoardsModule } from './purchase-boards/purchase-boards.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PurchaseBoardsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const wrappedComponents: Record<string, any> = {
      "purchase-app-main-element": AppComponent,
    };

    for(let itemKey in wrappedComponents) {
      const alreadyDefined = customElements.get(itemKey);
      if (alreadyDefined) {
        console.warn(`Element with name '${itemKey}' is already defined`);
      }

      if (!alreadyDefined){
        const ce = createCustomElement(wrappedComponents[itemKey], {injector: this.injector});
        customElements.define(itemKey, ce);
      }
    }
  }
}
