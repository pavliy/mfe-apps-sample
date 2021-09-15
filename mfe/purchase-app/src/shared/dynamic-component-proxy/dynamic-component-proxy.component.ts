import { Component, ComponentFactoryResolver, Injector, Input, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '../dynamic-federation';
import { DynamicItemInfo } from '../dynamic-item-info';

@Component({
  selector: 'app-dynamic-component-proxy',
  templateUrl: './dynamic-component-proxy.component.html'
})
export class DynamicComponentProxyComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver) { }

  @Input() options!: DynamicItemInfo;

  async ngOnChanges() {
      this.viewContainer.clear();

      const Component = await loadRemoteModule(this.options)
          .then(m => {
            return m[this.options.componentName];
          });

      const factory = this.cfr.resolveComponentFactory(Component);
      const compRef = this.viewContainer.createComponent(factory, 0, this.injector);
  }
}
