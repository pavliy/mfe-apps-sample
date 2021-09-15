import { Component, OnInit } from '@angular/core';
import { DynamicItemInfo } from 'shared/dynamic-item-info';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.scss']
})
export class MainDataComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  marketIncomesInfo: DynamicItemInfo = {
    remoteEntry: 'http://localhost:9101/remoteEntry.js',
    remoteName: 'marketApp',
    componentName: 'MarketIncomesComponent',
    mfeName: 'marketApp',
    exposedModule: './MarketIncomes'
  }

  purchaseAppInfo: DynamicItemInfo = {
    remoteEntry: 'http://localhost:9102/remoteEntry.js',
    remoteName: 'purchaseApp',
    componentName: 'purchase-app-main-element',
    mfeName: 'purchaseApp',
    exposedModule: './PurchaseIsolatedComponents'
  }
}
