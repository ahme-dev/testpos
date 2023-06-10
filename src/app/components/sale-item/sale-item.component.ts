import { Component, Input } from "@angular/core";
import { ISale, ISaleWithSelect } from "src/app/models/sale.model";

@Component({
	selector: "app-sale-item",
	templateUrl: "./sale-item.component.html",
})
export class SaleItemComponent {
	@Input() alternate = false;

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
