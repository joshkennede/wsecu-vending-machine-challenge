import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { Transaction } from '../../models/transaction.model';
import { VendingMachineService } from '../../services/vendingmachine.service';

@Component({
  selector: 'app-vending-purchase',
  templateUrl: './vending-purchase.component.html',
  styleUrls: ['./vending-purchase.component.css']
})
export class VendingPurchaseComponent implements OnInit {
  products = new Array<any>();
  transaction: Transaction | undefined;
  totalPrice: number = 0.00;
  totalProducts: number = 0;
  purchasedProducts = new Array<any>();

  constructor(
    private service: VendingMachineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((products: any) => {
      this.products = products.result;
    });
  }

  addProduct(id: number) {
    this.service.getProductById(id).subscribe((product: any) => {
      console.log(product.result);
      this.purchasedProducts.push(product.result);
      console.log(this.purchasedProducts);
      this.totalProducts += 1;
      this.totalPrice = product.result.price * this.totalProducts;
    });
  }

  removeProduct() {
    const product = this.purchasedProducts.pop();
    this.totalProducts -= 1;
    this.totalPrice -= product.price;
  }

  buy() {

  }

  goBack() {
    this.router.navigate(['/']);
  }
}
