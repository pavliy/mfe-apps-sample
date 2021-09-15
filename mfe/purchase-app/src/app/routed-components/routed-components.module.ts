import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutedAComponent } from './routed-a/routed-a.component';
import { RoutedBComponent } from './routed-b/routed-b.component';



@NgModule({
  declarations: [
    RoutedAComponent,
    RoutedBComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutedComponentsModule { }
