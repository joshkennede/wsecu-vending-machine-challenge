import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingPurchaseComponent } from './vending-purchase.component';

describe('VendingPurchaseComponent', () => {
  let component: VendingPurchaseComponent;
  let fixture: ComponentFixture<VendingPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendingPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendingPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
