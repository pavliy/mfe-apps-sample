import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedAComponent } from './routed-a.component';

describe('RoutedAComponent', () => {
  let component: RoutedAComponent;
  let fixture: ComponentFixture<RoutedAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutedAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
