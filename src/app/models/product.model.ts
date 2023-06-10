export type IProductCategory = "Dresses" | "Jeans" | "Skirts" | "Shirts";

export const productCategories = [
	"Dresses",
	"Jeans",
	"Skirts",
	"Shirts",
	"All",
] as const;

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
