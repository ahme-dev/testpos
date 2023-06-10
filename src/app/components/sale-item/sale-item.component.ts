import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ISale, ISaleWithSelect } from "src/app/models/sale.model";

@Component({
	selector: "app-sale-item",
	templateUrl: "./sale-item.component.html",
})
export class SaleItemComponent {
	faEye = faEye;
	faCheck = faCheck;
	faSpinner = faSpinner;
	faTimes = faTimes;

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
