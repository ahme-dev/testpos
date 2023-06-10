import { Injectable } from "@angular/core";
import { ISale, ISaleWithSelect } from "../models/sale.model";
import { mockSales } from "../mock/sales.mock";

@Injectable({
	providedIn: "root",
})
export class SalesService {
	sales: ISaleWithSelect[] = mockSales.map((sale) => ({
		...sale,
		selected: false,
	}));

	allSelected = false;

	// toggle the selection of a sale
	toggleSelection(sale: ISale) {
		this.sales.forEach((s) => {
			if (s.id === sale.id) {
				s.selected = !s.selected;
			}
		});
	}

	// toggle the selection of all sales
	toggleSelectionAll() {
		this.sales.forEach(
			(sale) => (sale.selected = this.allSelected == true ? true : false),
		);
	}
}
