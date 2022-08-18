import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { bem } from "../../config/bem-react";
import { ICocktail } from "../../models/Cocktail";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import { ISearchResultsProps } from "./props";
import "./SearchResult.scss";

export const SearchResult: FC<ISearchResultsProps> = ({ searchResults }) => {
	const navigate = useNavigate();
	const searchResult = bem("search-result");

	return (
		<div className={searchResult()}>
			{searchResults.length === 0 ? (
				<h1 className={searchResult("no-result")}>Нет запроса - нет результатов</h1>
			) : (
				<div className={searchResult("cocktails-list")}>
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
