import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverallPurchaseStatsComponent } from './overall-purchase-stats/overall-purchase-stats.component';



@NgModule({
  declarations: [
    OverallPurchaseStatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OverallPurchaseStatsComponent]
})
export class PurchaseBoardsModule { }
