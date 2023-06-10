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

	// filter products based on search category and text
	get filteredProducts() {
		return this.products.filter((product) => {
			if (this.searchCategory !== "All") {
				if (this.searchCategory !== product.category) {
					return false;
				}
			}

			if (this.searchText.trim() !== "") {
				if (
					!product.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
					!product.about.toLowerCase().includes(this.searchText.toLowerCase())
				) {
					return false;
				}
			}

			return true;
		});
	}

	// add an item to the checkout
	addToCheckout(product: IProduct) {
		// add to checkout
		this.checkoutProducts.push({ ...product, quantity: 1 });

		// then remove from products
		this.products = this.products.filter((p) => p.id !== product.id);
	}

	// remove an item from the checkout
	removeFromCheckout(product: ICheckoutProduct) {
		// add to products
		this.products.push({
			about: product.about,
			category: product.category,
			id: product.id,
			name: product.name,
			pictureLink: product.pictureLink,
			price: product.price,
		});

		// then remove from checkout
		this.checkoutProducts = this.checkoutProducts.filter(
			(p) => p.id !== product.id,
		);
	}

	// modify the quantity of an item in the checkout either by increasing or decreasing
	modifyCheckoutProductQuantity(
		checkoutProduct: ICheckoutProduct,
		increment: boolean,
	) {
		const index = this.checkoutProducts.findIndex((pItem) => {
			return pItem.id === checkoutProduct.id;
		});

		// if not found return
		if (index === -1) return;

		// increment
		if (increment) {
			this.checkoutProducts[index].quantity++;
			return;
		}

		// decrement
		this.checkoutProducts[index].quantity--;

		// remove if quantity is 0
		if (this.checkoutProducts[index].quantity === 0)
			this.removeFromCheckout(checkoutProduct);
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
	checkoutDiscount = 5.99;

	// calculate the total price of the checkout after discount
	get priceAfterDiscount() {
		// calculate the discount price
		const discountPrice = this.checkoutTotal - this.checkoutDiscount;
		// floor it
		return Math.floor(discountPrice * 100) / 100;
	}
}
