import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { VendingMachineService } from '../../services/vendingmachine.service';

@Component({
  selector: 'app-vending-inventory',
  templateUrl: './vending-inventory.component.html',
  styleUrls: ['./vending-inventory.component.css']
})
export class VendingInventoryComponent implements OnInit {
  productId: any;
  product: any | undefined;

  prodId: number | undefined;
  prodName: string | undefined;
  prodPrice: number | undefined;
  prodQuantity: number | undefined;

  constructor(private service: VendingMachineService) { }

  ngOnInit(): void {
  }

  getProduct(): any {
    return this.service.getProductById(this.productId).subscribe((product: any) => {
      console.log(product.result);
      this.product = product.result;
      this.prodId = product.result.id;
      this.prodName = product.result.name;
      this.prodPrice = product.result.price;
      this.prodQuantity = product.result.quantity;
    });
  }
}
