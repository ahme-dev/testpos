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
}
