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
    const componentName = this.options?.componentName ?? this.route.snapshot.data['componentName'];
    const remoteName = this.options?.mfeName ?? this.route.snapshot.data['mfeName'];
    const remoteEntry = this.options?.remoteEntry ?? this.route.snapshot.data['remoteEntry'];
    const exposedModule = this.options?.exposedModule ?? this.route.snapshot.data['exposedModule'];

    const remoteIsLoaded = document.querySelector(`script[src="${remoteEntry}'"]`);
    const loadedRemotes = (window as any).loadedRemotes;
    if (loadedRemotes?.indexOf(remoteEntry) < 0) {
      (window as any).loadedRemotes.push(remoteEntry);
      loadRemoteModule({
        exposedModule,
        remoteEntry,
        remoteName
      })
        .then((_: any) =>  console.log('Done with module loading'))
        .catch((err: any) => console.error(`error loading ${componentName}:`, err));
    }

    const element = document.createElement(componentName);
    this?.vc?.nativeElement.appendChild(element);
  }

}
