export interface ICustomer {
	id: number;
	name: string;
	address: string;
}

export interface ISale {
	id: number;
	customer: ICustomer;
	invoiceDate: Date;
	payoutDate: Date;
	totalAmount: number;
	status: "pending" | "success" | "failed";
}

export interface ISaleWithSelect extends ISale {
	selected: boolean;
}
