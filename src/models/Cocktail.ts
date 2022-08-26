import { IIngredient } from "./Ingredient";

export interface ICocktail {
	id: number;
	title: string;
	description: string;
	alcohol: number;
	image: string;
	category: number;
	recipe: string;
	ingredients: Array<IIngredient>;
}
