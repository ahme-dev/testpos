import { Component, Input } from "@angular/core";
import { ICheckoutProduct } from "src/app/models/product.model";

@Component({
	selector: "app-checkout-product-item",
	templateUrl: "./checkout-product-item.component.html",
})
export class CheckoutProductItemComponent {
	@Input() checkoutProduct: ICheckoutProduct = {
		id: -1,
		about: "",
		name: "Unknown",
		category: "Jeans",
		price: 0,
		pictureLink: "",
		quantity: 1,
	};
}
