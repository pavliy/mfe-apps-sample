import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startsWith } from 'shared/routing-utils';
import { WrapperComponent } from 'shared/wrapper-component/wrapper';

const routes: Routes = [
  {
    matcher: startsWith('purchaseapp/'),
    pathMatch: "prefix",
    component: WrapperComponent, data: { remoteEntry: 'http://localhost:9102/remoteEntry.js',
    remoteName: 'purchaseApp',
    componentName: 'purchase-app-main-element',
    mfeName: 'purchaseApp',
    exposedModule: './PurchaseIsolatedComponents'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
