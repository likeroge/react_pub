import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ICocktail } from "../../models/Cocktail";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import { ISearchResultsProps } from "./props";
import "./SearchResult.scss";

export const SearchResult: FC<ISearchResultsProps> = ({ searchResults }) => {
	const navigate = useNavigate();

	return (
		<div className="search-result">
			{searchResults.length === 0 ? (
				<h1 className="search-result__no-result">Нет запроса - нет результатов</h1>
			) : (
				<div className="search-result__cocktails-list">
					{searchResults.map((cocktail: ICocktail) => (
						<CocktailCard
							key={cocktail.id}
							cocktail={cocktail}
							onClick={() => {
								navigate("cocktails-details");
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
};
