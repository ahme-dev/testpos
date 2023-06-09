import { Component } from "@angular/core";
import { IProduct } from "src/app/models/product.model";
import { SystemService } from "src/app/services/system.service";

@Component({
	selector: "app-system",
	templateUrl: "./system.component.html",
})
export class SystemComponent {
	products: IProduct[];

	constructor(systemService: SystemService) {
		this.products = systemService.products;
	}
}
