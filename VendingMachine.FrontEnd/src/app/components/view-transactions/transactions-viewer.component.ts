import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VendingMachineService } from 'src/app/services/vendingmachine.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transactions-viewer',
  templateUrl: './transactions-viewer.component.html',
  styleUrls: ['./transactions-viewer.component.css']
})
export class TransactionsViewerComponent implements OnInit {
  transactions = new Array<any>();
  isRefunded: boolean | undefined;

  constructor(private service: VendingMachineService) {
  }

  ngOnInit(): void {
    this.service.getTransactions().subscribe((response) => {
      this.transactions = response.result;
    });
  }

  refundTransaction(id: number) {
    console.log(id);
    return this.service.refundTransaction(id)
      .subscribe((response) => {
        this.isRefunded = response.result;
        this.getTransactions().subscribe((data) => {
          this.transactions = data.result;
        });
      });
  }

  getTransactions(): Observable<any> {
    return this.service.getTransactions();
  }
}
