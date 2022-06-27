import { CocktailCard } from "../cocktail-card/cocktail-card";
import { CocktailsFilter } from "../coctails-filter/coctails-filter";

import "./cocktails-list.scss";

const mockCoctails = [
	{
		id: 1,
		title: "Blackberry",
		description: "Освежающий напиток",
		alcohol: 30,
		image: "cocktail1.jpg",
	},
	{
		id: 2,
		title: "Blackberry2",
		description: "Освежающий напиток",
		alcohol: 10,
		image: "cocktail2.jpg",
	},
	{
		id: 3,
		title: "Blackberry3",
		description: "Освежающий напиток",
		alcohol: 50,
		image: "cocktail3.jpg",
	},
	{
		id: 4,
		title: "Blackberry34",
		description: "Освежающий напиток",
		alcohol: 500,
		image: "cocktail3.jpg",
	},
];

export const CocktailsList = () => {
	return (
		<>
			<CocktailsFilter />
			<div className="cocktails-list">
				{mockCoctails.map((cocktail) => (
					<CocktailCard key={cocktail.id} cocktail={cocktail} />
				))}
			</div>
		</>
	);
};
