import { Transaction } from "./transaction.model";

export interface Ledger {

  Transactions: Transaction[];

  //constructor(
  //  transactions: Transaction[]) {
  //  this.Transactions = transactions;
  //}
}
