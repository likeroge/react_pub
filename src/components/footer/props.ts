import { Dispatch, SetStateAction } from "react";
import { ICocktail } from "../../models/Cocktail";

export interface IFooterProps {
	setSearchResults: Dispatch<SetStateAction<ICocktail[]>>;
}