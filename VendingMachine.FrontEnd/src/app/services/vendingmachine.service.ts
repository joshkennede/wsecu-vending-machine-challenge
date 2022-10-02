import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { IVendingMachineService } from './vendingmachine-api.service';
import { Transaction } from '../models/transaction.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class VendingMachineService implements IVendingMachineService {
  private readonly APIUrl: string = "https://localhost:7054/api/vendingmachine";
  constructor(private http: HttpClient) {
  }

  getTransactions(): Observable<any> {
    console.log('HttpGet - All Transactions');
    console.log(this.APIUrl);
      return this.http.get<any>(this.APIUrl);
  }

  getTransactionById(transactionId: number): Observable<any> {
    console.log('HttpGet - Transaction');
    console.log(this.APIUrl + '/' + transactionId + '/');
      return this.http.get<any>(this.APIUrl + '/' + transactionId + '/');
  }

  getProducts(): Observable<any> {
    console.log('HttpGet - All Products');
    return this.http.get<any>(this.APIUrl + '/product/');
  }

  getProductById(productId: number): Observable<any> {
    console.log('HttpGet - Product');
    console.log(this.APIUrl + '/product/' + productId + '/');
      return this.http.get<any>(this.APIUrl + '/product/' + productId + '/');
  }

  addTransactionToLedger(transaction: Transaction): void {
    console.log('HttpPost - New Purchase');
    const headers = { 'content-type': 'application/json' }
    this.http.post<Transaction>(this.APIUrl, transaction, { 'headers': headers });
  }

  refundTransaction(transactionId: number): Observable<any> {
    console.log('HttpPut');
    const headers = { 'content-type': 'application/json'}; //new Headers()
    return this.http.put<any>(this.APIUrl, JSON.stringify(transactionId), { 'headers': headers });
  }

}
