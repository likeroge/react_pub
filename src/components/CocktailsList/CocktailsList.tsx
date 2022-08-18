import { FC, memo } from "react";
import { bem } from "../../config/bem-react";
import { ICocktail } from "../../models/Cocktail";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import { EmptyCocktail } from "../CocktailCard/EmptyCocktail";
import { CocktailsFilter } from "../CoctailsFilter/CoctailsFilter";

import "./CocktailsList.scss";

interface CocktailsListProps {
	setCocktailsCategory: React.Dispatch<React.SetStateAction<number>>;
	filteredCocktails: ICocktail[];
	onSelectCocktailHandler: (cocktail: ICocktail) => void;
}

export const CocktailsList: FC<CocktailsListProps> = memo(
	({ filteredCocktails, setCocktailsCategory, onSelectCocktailHandler }) => {
		const cocktailsList = bem("cocktails-list");

		return (
			<>
				<CocktailsFilter setCocktailsCategory={setCocktailsCategory} />
				{filteredCocktails.length === 0 ? (
					<div className={cocktailsList()}>
						<EmptyCocktail />
					</div>
				) : (
					<div className={cocktailsList()}>
						{filteredCocktails.map((cocktail: ICocktail) => (
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
