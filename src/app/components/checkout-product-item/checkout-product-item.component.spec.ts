import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProductItemComponent } from './checkout-product-item.component';

describe('CheckoutProductItemComponent', () => {
  let component: CheckoutProductItemComponent;
  let fixture: ComponentFixture<CheckoutProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutProductItemComponent]
    });
    fixture = TestBed.createComponent(CheckoutProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
