import { Component } from "@angular/core";
import { SalesService } from "src/app/services/sales.service";

@Component({
	selector: "app-sales",
	templateUrl: "./sales.component.html",
})
export class SalesComponent {
	constructor(public salesService: SalesService) {}
}
