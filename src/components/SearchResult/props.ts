import { Dispatch, SetStateAction } from "react";
import { ICocktail } from "../../models/Cocktail";

export interface ISearchResultsProps {
	searchResults: ICocktail[];
}