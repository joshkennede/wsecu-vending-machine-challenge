import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TransactionsViewerComponent } from './components/view-transactions/transactions-viewer.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';
import { VendingInventoryComponent } from './components/vending-inventory/vending-inventory.component';
import { VendingPurchaseComponent } from './components/vending-purchase/vending-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsViewerComponent,
    NavBarComponent,
    ViewTransactionComponent,
    VendingInventoryComponent,
    VendingPurchaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
