import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketFinanceModule } from './market-finance/market-finance.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarketFinanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
