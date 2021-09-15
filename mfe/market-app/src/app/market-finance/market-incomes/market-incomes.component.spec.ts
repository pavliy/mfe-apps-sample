import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketIncomesComponent } from './market-incomes.component';

describe('MarketIncomesComponent', () => {
  let component: MarketIncomesComponent;
  let fixture: ComponentFixture<MarketIncomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketIncomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
