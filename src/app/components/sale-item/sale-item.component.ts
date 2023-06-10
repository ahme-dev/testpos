import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ISale, ISaleWithSelect } from "src/app/models/sale.model";

@Component({
	selector: "app-sale-item",
	templateUrl: "./sale-item.component.html",
})
export class SaleItemComponent {
	@Input() alternate = false;

	@Output() onToggleSelect = new EventEmitter();

	@Input() sale: ISaleWithSelect = {
		id: -1,
		customer: {
			id: -1,
			name: "Unknown",
			address: "Unknown",
		},
		invoiceDate: new Date(),
		payoutDate: new Date(),
		selected: false,
		status: "success",
		totalAmount: 0,
	};
}
