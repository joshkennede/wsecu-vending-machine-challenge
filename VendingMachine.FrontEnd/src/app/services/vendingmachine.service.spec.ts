import { TestBed } from '@angular/core/testing';
import { VendingMachineService } from './vendingmachine.service';

describe('VendingMachineService', () => {
  let service: VendingMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendingMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
