import { useEffect, useState } from "react";
import { ICocktail } from "../models/Cocktail";

export const useSearch = (cocktails: ICocktail[], searchString: string) => {
	const [searchResults, setSearchResults] = useState<ICocktail[]>(cocktails);

	useEffect(() => {
		if (searchString === "") {
			setSearchResults(cocktails);
		} else {
			const newResults = cocktails.filter((cocktail) => {
				if (cocktail.title.toLowerCase().match(searchString.toLowerCase()) !== null) {
					return cocktail.title.toLowerCase().match(searchString.toLowerCase())?.input;
				}
			});
			setSearchResults(newResults);
		}
	}, [cocktails, searchString]);
	if (cocktails.length === 0) {
		return null;
	}
	return searchResults;
};
