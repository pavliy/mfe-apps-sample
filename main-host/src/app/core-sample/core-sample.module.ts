import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDataComponent } from './main-data/main-data.component';
import { SharedModule } from 'shared/shared.module';



@NgModule({
  declarations: [
    MainDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainDataComponent
  ]
})
export class CoreSampleModule { }
