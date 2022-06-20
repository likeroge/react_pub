import { CocktailCard } from "../cocktail-card/cocktail-card";
import { CocktailsFilter } from "../coctails-filter/coctails-filter";

import "./cocktails-list.scss";

const mockCoctails = [
	{
		id: 1,
		title: "Blackberry",
		description: "Освежающий напиток",
		alcohol: 30,
	},
	{
		id: 2,
		title: "Blackberry2",
		description: "Освежающий напиток",
		alcohol: 10,
	},
	{
		id: 3,
		title: "Blackberry3",
		description: "Освежающий напиток",
		alcohol: 50,
	},
];

export const CocktailsList = () => {
	return (
		<>
			<CocktailsFilter />
			<div className="cocktailsList">
				{mockCoctails.map((cocktail) => (
					<CocktailCard key={cocktail.id} cocktail={cocktail} />
				))}
			</div>
		</>
	);
};
