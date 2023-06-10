import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SystemComponent } from "./pages/system/system.component";
import { SystemService } from "./services/system.service";
import { SalesComponent } from "./pages/sales/sales.component";
import { SalesService } from "./services/sales.service";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SidebarItemComponent } from "./components/sidebar-item/sidebar-item.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { CheckoutProductItemComponent } from "./components/checkout-product-item/checkout-product-item.component";
import { FormsModule } from "@angular/forms";
import { SaleItemComponent } from './components/sale-item/sale-item.component';
import { DollarPipe } from './pipes/dollar.pipe';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
	declarations: [
		AppComponent,
		SystemComponent,
		SalesComponent,
		SidebarComponent,
		SidebarItemComponent,
		ProductItemComponent,
		CheckoutProductItemComponent,
  SaleItemComponent,
  DollarPipe,
  DatePipe,
	],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
	providers: [SystemService, SalesService],
	bootstrap: [AppComponent],
})
export class AppModule {}
