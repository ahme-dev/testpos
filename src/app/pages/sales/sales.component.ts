import { Component } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { SalesService } from "src/app/services/sales.service";

@Component({
	selector: "app-sales",
	templateUrl: "./sales.component.html",
})
export class SalesComponent {
	faPlus = faPlus;

	constructor(public salesService: SalesService) {}
}
