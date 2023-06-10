export type IProductCategory = "Dresses" | "Jeans" | "Skirts" | "Shirts";

export interface IProduct {
	id: number;
	price: number;
	name: string;
	about: string;
	category: IProductCategory;
	pictureLink: string;
}

export interface ICheckoutProduct extends IProduct {
	quantity: number;
}
