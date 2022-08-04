import { Dispatch, SetStateAction } from "react";

export interface ICocktailsListProps {
	setCocktailsCategory: Dispatch<SetStateAction<number>>;
}

export interface IFilterCategory {
	title: string
	categoryId: number
}