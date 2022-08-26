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
	const cocktailsLoadingError = cocktailState.error;
	const cocktailsLoading = cocktailState.loading;

	const onSelectCocktailHandler = (cocktail: ICocktail) => {
		// dispatch(setSelectedCocktail(cocktail));
		navigate(`cocktails-details/${cocktail.id}`);
	};

	useEffect(() => {
		if (coctails.length === 0) {
			dispatch(fetchCocktails());
		}
	}, []);

	const searchStringFromRedux = cocktailState.searchString;

	const filteredCocktails = useFilter(category, coctails);

	const cocktailSearchResult = useSearch(filteredCocktails, searchStringFromRedux);

	return (
		<CocktailsList
			onSelectCocktailHandler={onSelectCocktailHandler}
			setCocktailsCategory={setCategory}
			filteredCocktails={cocktailSearchResult}
			cocktailsLoadingError={cocktailsLoadingError}
			cocktailsLoading={cocktailsLoading}
		/>
	);
};
