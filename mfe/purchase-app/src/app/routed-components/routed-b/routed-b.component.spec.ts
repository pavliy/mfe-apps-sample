import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedBComponent } from './routed-b.component';

describe('RoutedBComponent', () => {
  let component: RoutedBComponent;
  let fixture: ComponentFixture<RoutedBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutedBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
