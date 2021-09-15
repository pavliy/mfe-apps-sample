import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketIncomesComponent } from './market-incomes/market-incomes.component';



@NgModule({
  declarations: [
    MarketIncomesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MarketIncomesComponent
  ]
})
export class MarketFinanceModule { }
