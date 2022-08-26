import { SerializedError } from "@reduxjs/toolkit";
import { FC, memo, useMemo } from "react";
import { bem } from "../../config/bem-react";
import { ICocktail } from "../../models/Cocktail";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import { EmptyCocktail } from "../CocktailCard/EmptyCocktail";
import { CocktailsFilter } from "../CoctailsFilter/CoctailsFilter";

import "./CocktailsList.scss";

interface CocktailsListProps {
	setCocktailsCategory: React.Dispatch<React.SetStateAction<number>>;
	filteredCocktails: ICocktail[] | null;
	onSelectCocktailHandler: (cocktail: ICocktail) => void;
	cocktailsLoadingError: SerializedError | null;
	cocktailsLoading: boolean;
}

export const CocktailsList: FC<CocktailsListProps> = memo(
	({
		filteredCocktails,
		setCocktailsCategory,
		onSelectCocktailHandler,
		cocktailsLoadingError,
		cocktailsLoading,
	}) => {
		const cocktailsList = bem("cocktails-list");

		return (
			<>
				<CocktailsFilter setCocktailsCategory={setCocktailsCategory} />
				{cocktailsLoading === true && <h1 className={cocktailsList("error")}>Loading...</h1>}
				{cocktailsLoadingError !== null ? (
					<h1 className={cocktailsList("error")}>Load error..</h1>
				) : filteredCocktails?.length === 0 ? (
					<div className={cocktailsList()}>
						<EmptyCocktail />
					</div>
				) : (
					<div className={cocktailsList()}>
						{filteredCocktails?.map((cocktail: ICocktail) => (
							<CocktailCard
								key={cocktail.id}
								cocktail={cocktail}
								onClick={() => onSelectCocktailHandler(cocktail)}
							/>
						))}
					</div>
				)}
			</>
		);
	}
);
