import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallPurchaseStatsComponent } from './overall-purchase-stats.component';

describe('OverallPurchaseStatsComponent', () => {
  let component: OverallPurchaseStatsComponent;
  let fixture: ComponentFixture<OverallPurchaseStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallPurchaseStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallPurchaseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
