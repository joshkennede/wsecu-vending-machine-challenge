import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { VendingMachineService } from '../../services/vendingmachine.service';
import { Transaction } from 'src/app/models/transaction.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {
  transaction: Transaction | undefined;
  products = new Array<any>(); //Product[] = [];

  transId: number | undefined;
  transTotalCost: number | undefined;
  transTotalProducts: number | undefined;

  constructor(
    private service: VendingMachineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((parameters: Params) => {
      this.service.getTransactionById(parseInt(parameters["id"])).subscribe((transaction: any) => {
        this.transaction = transaction.result;
        this.transId = transaction.result.id;
        this.transTotalCost = transaction.result.totalCost;
        this.transTotalProducts = transaction.result.totalProducts;
        this.products = transaction.result.products;
      });
    });
  }

  goBack() {
      this.router.navigate(['/']);
  }
}
