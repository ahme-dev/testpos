import { Injectable } from "@angular/core";
import {
	ICheckoutProduct,
	IProduct,
	IProductCategory,
} from "../models/product.model";
import { mockCheckoutProducts, mockProducts } from "../mock/products.mock";

@Injectable({
	providedIn: "root",
})
export class SystemService {
	// the search text and category
	searchText: string = "";
	searchCategory: IProductCategory | "All" = "All";

	// the products listed and ones in the checkout
	products: IProduct[] = mockProducts;
	checkoutProducts: ICheckoutProduct[] = mockCheckoutProducts;

	// add an item to the checkout
	addToCheckout(product: IProduct) {
		this.checkoutProducts.push({ ...product, quantity: 1 });
	}

	// remove an item from the checkout
	removeFromCheckout(product: ICheckoutProduct) {
		this.checkoutProducts = this.checkoutProducts.filter(
			(p) => p.id !== product.id,
		);
	}

	// calculate the total price of the checkout
	get checkoutTotal() {
		return this.checkoutProducts.reduce(
			(total, checkoutProduct) =>
				total + checkoutProduct.price * checkoutProduct.quantity,
			0,
		);
	}

	// the discount to be applied to the checkout
	checkoutDiscount = 0;

	// calculate the total price of the checkout after discount
	get priceAfterDiscount() {
		return this.checkoutTotal - this.checkoutDiscount;
	}
}
