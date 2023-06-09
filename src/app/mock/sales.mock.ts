import { ISale } from "../models/sale.model";

export const mockSales: ISale[] = [
	{
		id: 1,
		customer: {
			id: 1001,
			name: "John Smith",
			address: "123 Main Street",
		},
		invoiceDate: new Date(2023, 5, 1),
		payoutDate: new Date(2023, 5, 5),
		totalAmount: 50.99,
		status: "success",
	},
	{
		id: 2,
		customer: {
			id: 1002,
			name: "Alice Johnson",
			address: "456 Oak Avenue",
		},
		invoiceDate: new Date(2023, 5, 2),
		payoutDate: new Date(2023, 5, 6),
		totalAmount: 35.5,
		status: "success",
	},
	{
		id: 3,
		customer: {
			id: 1003,
			name: "David Williams",
			address: "789 Elm Street",
		},
		invoiceDate: new Date(2023, 5, 3),
		payoutDate: new Date(2023, 5, 7),
		totalAmount: 75.0,
		status: "success",
	},
	{
		id: 4,
		customer: {
			id: 1004,
			name: "Emily Davis",
			address: "321 Pine Road",
		},
		invoiceDate: new Date(2023, 5, 4),
		payoutDate: new Date(2023, 5, 8),
		totalAmount: 120.25,
		status: "pending",
	},
	{
		id: 5,
		customer: {
			id: 1005,
			name: "Michael Anderson",
			address: "654 Cedar Lane",
		},
		invoiceDate: new Date(2023, 5, 5),
		payoutDate: new Date(2023, 5, 9),
		totalAmount: 90.75,
		status: "pending",
	},
	{
		id: 6,
		customer: {
			id: 1006,
			name: "Sophia Thompson",
			address: "987 Maple Avenue",
		},
		invoiceDate: new Date(2023, 5, 6),
		payoutDate: new Date(2023, 5, 10),
		totalAmount: 25.99,
		status: "failed",
	},
	{
		id: 7,
		customer: {
			id: 1007,
			name: "Oliver Wilson",
			address: "741 Oak Street",
		},
		invoiceDate: new Date(2023, 5, 7),
		payoutDate: new Date(2023, 5, 11),
		totalAmount: 60.5,
		status: "success",
	},
	{
		id: 8,
		customer: {
			id: 1008,
			name: "Emma Thomas",
			address: "369 Elm Avenue",
		},
		invoiceDate: new Date(2023, 5, 8),
		payoutDate: new Date(2023, 5, 12),
		totalAmount: 40.0,
		status: "success",
	},
	{
		id: 9,
		customer: {
			id: 1009,
			name: "Liam Brown",
			address: "258 Pine Street",
		},
		invoiceDate: new Date(2023, 5, 9),
		payoutDate: new Date(2023, 5, 13),
		totalAmount: 85.25,
		status: "pending",
	},
	{
		id: 10,
		customer: {
			id: 1010,
			name: "Ava Martinez",
			address: "159 Cedar Avenue",
		},
		invoiceDate: new Date(2023, 5, 10),
		payoutDate: new Date(2023, 5, 14),
		totalAmount: 30.75,
		status: "failed",
	},
];
