import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingInventoryComponent } from './vending-inventory.component';

describe('VendingInventoryComponent', () => {
  let component: VendingInventoryComponent;
  let fixture: ComponentFixture<VendingInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendingInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendingInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
