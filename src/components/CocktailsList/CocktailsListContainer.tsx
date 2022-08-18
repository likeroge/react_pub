import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { useFilter } from "../../hooks/useFilter";
import { useSearch } from "../../hooks/useSearch";
import { ICocktail } from "../../models/Cocktail";
import { fetchCocktails, setSelectedCocktail } from "../../store/slices/cocktailSlice";
import { CocktailsList } from "./CocktailsList";

export const CocktailsListContainer = () => {
	const navigate = useNavigate();
	const [category, setCategory] = useState(1);

	const dispatch = useAppDispatch();
	const cocktailState = useAppSelector((state) => state.cocktails);
	const coctails = cocktailState.cocktails;

	const onSelectCocktailHandler = (cocktail: ICocktail) => {
		dispatch(setSelectedCocktail(cocktail));
		navigate("cocktails-details");
	};

	useEffect(() => {
		if (coctails.length !== 0) {
			return;
		}
		dispatch(fetchCocktails());
	}, [coctails]);

	const searchStringFromRedux = cocktailState.searchString;

	const filteredCocktails = useFilter(category, coctails);

	const cocktailSearchResult = useSearch(filteredCocktails, searchStringFromRedux);

	return (
		<CocktailsList
			onSelectCocktailHandler={onSelectCocktailHandler}
			setCocktailsCategory={setCategory}
			filteredCocktails={cocktailSearchResult}
		/>
	);
};
