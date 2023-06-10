import { Component } from "@angular/core";
import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
	ICheckoutProduct,
	IProduct,
	IProductCategory,
	productCategories,
} from "src/app/models/product.model";
import { SystemService } from "src/app/services/system.service";

@Component({
	selector: "app-system",
	templateUrl: "./system.component.html",
})
export class SystemComponent {
	faSearch = faSearch;
	faSadTear = faSadTear;

	categoriesList = productCategories;

	constructor(public systemService: SystemService) {}
}
