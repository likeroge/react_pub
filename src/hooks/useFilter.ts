import { useEffect, useState } from "react";
import { ICocktail } from "../models/Cocktail";

export const useFilter = (categoryId: number, cocktails: ICocktail[]) => {
	const [filteredCocktails, setFilteredCocktails] = useState<ICocktail[]>(cocktails);

	useEffect(() => {
		const filteredCocktailsByCategory = cocktails.filter(
			(cocktail) => cocktail.category === categoryId
		);
		setFilteredCocktails(filteredCocktailsByCategory);
	}, [categoryId, cocktails]);

	return filteredCocktails;
};
