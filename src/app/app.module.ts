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

@NgModule({
	declarations: [
		AppComponent,
		SystemComponent,
		SalesComponent,
		SidebarComponent,
		SidebarItemComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [SystemService, SalesService],
	bootstrap: [AppComponent],
})
export class AppModule {}
