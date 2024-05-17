import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPaymentDeniedComponent } from './tour-payment-denied.component';

describe('TourPaymentDeniedComponent', () => {
  let component: TourPaymentDeniedComponent;
  let fixture: ComponentFixture<TourPaymentDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPaymentDeniedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourPaymentDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
