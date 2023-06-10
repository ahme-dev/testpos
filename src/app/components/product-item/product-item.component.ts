import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IProduct } from "src/app/models/product.model";

@Component({
	selector: "app-product-item",
	templateUrl: "./product-item.component.html",
})
export class ProductItemComponent {
	@Input() product: IProduct = {
		id: -1,
		about: "",
		name: "Unknown",
		category: "Jeans",
		price: 0,
		pictureLink: "",
	};

	@Output() onClick = new EventEmitter();
}
