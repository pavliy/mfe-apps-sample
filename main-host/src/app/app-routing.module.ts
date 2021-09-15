import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startsWith } from 'shared/routing-utils';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    matcher: startsWith('purchaseapp/'),
    pathMatch: "prefix",
    outlet: 'purchase-core-outlet',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
