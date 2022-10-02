import { Observable } from "rxjs";
import { Ledger } from "src/app/models/ledger.model";
import { Transaction } from "src/app/models/transaction.model";
import { Product } from "src/app/models/product.model";

export interface IVendingMachineService {

  /**
   * Get all transactions from the ledger
   * */
  getTransactions(): Observable<any>;

  /**
   * Get a transaction by id
   * @param transactionId
   */
  getTransactionById(transactionId: number): Observable<any>;

  /**
   * Get all products
   */
  getProducts(): Observable<any>;

  /**
   * Get a product by id
   * @param productId
   */
  getProductById(productId: number): Observable<any>;

  /**
   * Add a transaction to the ledger
   * @param transaction
   */
  addTransactionToLedger(transaction: Transaction): void;

  /**
   * Remove/refund a transaction from the ledger
   * @param transaction
   */
  refundTransaction(transactionId: number): Observable<boolean>;
}
