import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./pages/system/system.component";
import { SalesComponent } from "./pages/sales/sales.component";

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
		path: "sales",
		component: SalesComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
