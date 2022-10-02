import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsViewerComponent } from './transactions-viewer.component';

describe('TableViewerComponent', () => {
  let component: TransactionsViewerComponent;
  let fixture: ComponentFixture<TransactionsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
