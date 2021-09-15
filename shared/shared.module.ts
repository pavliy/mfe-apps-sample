import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeLookupService } from './mfe-lookup.service';
import { DynamicComponentProxyComponent } from './dynamic-component-proxy/dynamic-component-proxy.component';
import { WrapperComponent } from './wrapper-component/wrapper';



@NgModule({
  declarations: [
    DynamicComponentProxyComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicComponentProxyComponent,
    WrapperComponent
  ],
  providers: [
    MfeLookupService
  ]
})
export class SharedModule { }
