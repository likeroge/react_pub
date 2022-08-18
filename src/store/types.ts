import { SerializedError } from "@reduxjs/toolkit";
import { ICocktail } from "../models/Cocktail";

export interface ICocktailState {
	loading: boolean;
	error: null | SerializedError;
	cocktails: ICocktail[];
	searchString: string;
	selectedCocktail: ICocktail | null;
}

export interface IFavoriteState {
	cocktails: ICocktail[];
}
