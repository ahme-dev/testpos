import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SystemComponent } from "./pages/system/system.component";
import { CustomersComponent } from "./pages/customers/customers.component";
import { CustomersService } from "./services/customers.service";
import { SystemService } from "./services/system.service";

@NgModule({
	declarations: [AppComponent, SystemComponent, CustomersComponent],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [CustomersService, SystemService],
	bootstrap: [AppComponent],
})
export class AppModule {}
