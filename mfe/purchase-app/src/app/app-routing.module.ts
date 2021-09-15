import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { endsWith } from 'src/shared/routing-utils';
import { SharedModule } from 'src/shared/shared.module';
import { RoutedAComponent } from './routed-components/routed-a/routed-a.component';
import { RoutedBComponent } from './routed-components/routed-b/routed-b.component';

const routes: Routes = [
  {
    matcher: endsWith('/a'),
    component: RoutedAComponent
  },
  {
    matcher: endsWith('/b'),
    component: RoutedBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
