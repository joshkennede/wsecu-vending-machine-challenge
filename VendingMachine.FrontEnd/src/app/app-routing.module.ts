import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsViewerComponent } from './components/view-transactions/transactions-viewer.component';
import { VendingInventoryComponent } from './components/vending-inventory/vending-inventory.component';
import { VendingPurchaseComponent } from './components/vending-purchase/vending-purchase.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';

const routes: Routes =
[
    { path: '', component: TransactionsViewerComponent },
    { path: 'transaction/:id', component: ViewTransactionComponent },
    { path: 'vending/purchase', component: VendingPurchaseComponent },
    { path: 'vending/inventory', component: VendingInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
