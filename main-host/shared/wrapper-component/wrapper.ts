import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule } from '../dynamic-federation';
import { DynamicItemInfo } from '../dynamic-item-info';

@Component({
  selector: 'wrapper-component',
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', {read: ElementRef, static: true})
  vc: ElementRef | undefined;

  constructor(private route: ActivatedRoute) { }

  @Input() options?: DynamicItemInfo;

  ngAfterContentInit(): void {
    const componentName = this.options?.componentName ?? "";
    const remoteName = this.options?.mfeName ?? "";
    const remoteEntry = this.options?.remoteEntry ?? "";
    const exposedModule = this.options?.exposedModule ?? "";

    loadRemoteModule({
      exposedModule,
      remoteEntry,
      remoteName
    })
      .then((_: any) =>  console.log('Done with module loading'))
      .catch((err: any) => console.error(`error loading ${componentName}:`, err));
debugger
      const element = document.createElement(componentName);
    this?.vc?.nativeElement.appendChild(element);
  }

}
