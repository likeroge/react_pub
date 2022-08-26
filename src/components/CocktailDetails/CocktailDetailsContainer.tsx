import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { fetchCocktails, setSelectedCocktail } from "../../store/slices/cocktailSlice";
import { CocktailDetails } from "./CocktailDetails";

export const CocktailDetailsContainer = () => {
	const location = useLocation();
	const selectedCocktail = useAppSelector((state) => state.cocktails.selectedCocktail);
	const cocktails = useAppSelector((state) => state.cocktails.cocktails);
	const dispatch = useAppDispatch();
	const cocktailId = location.pathname.slice(19);

	useEffect(() => {
		if (cocktails.length === 0) {
			dispatch(fetchCocktails());
		}
		const cocktail = cocktails.filter((cocktailElement) => +cocktailElement.id === +cocktailId)[0];
		dispatch(setSelectedCocktail(cocktail));
	}, [location.pathname, cocktails]);
	return <CocktailDetails selectedCocktail={selectedCocktail} />;
};
