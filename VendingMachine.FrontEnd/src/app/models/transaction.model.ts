import { Product } from "./product.model";

export interface Transaction {

  Id: number;
  TotalCost: number;
  TotalProducts: number;
  Products: Product[];

  //constructor(
  //  id: number,
  //  totalCost: number,
  //  totalProducts: number,
  //  products: Product[]) {
  //  this.Id = id;
  //  this.TotalCost = totalCost;
  //  this.TotalProducts = totalProducts;
  //  this.Products = products;
  //}
}
