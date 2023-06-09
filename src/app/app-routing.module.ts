import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./pages/customers/customers.component";
import { SystemComponent } from "./pages/system/system.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/system",
		pathMatch: "full",
	},
	{
		path: "system",
		component: SystemComponent,
	},
	{
		path: "customers",
		component: CustomersComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
