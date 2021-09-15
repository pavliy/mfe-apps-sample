import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentProxyComponent } from './dynamic-component-proxy.component';

describe('DynamicComponentProxyComponent', () => {
  let component: DynamicComponentProxyComponent;
  let fixture: ComponentFixture<DynamicComponentProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicComponentProxyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
