import { Component } from "@angular/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ICheckoutProduct, IProduct } from "src/app/models/product.model";
import { SystemService } from "src/app/services/system.service";

@Component({
	selector: "app-system",
	templateUrl: "./system.component.html",
})
export class SystemComponent {
	products: IProduct[];
	checkoutProducts: ICheckoutProduct[];

	faSearch = faSearch;

	constructor(systemService: SystemService) {
		this.products = systemService.products;
		this.checkoutProducts = systemService.checkoutProducts;
	}
}
