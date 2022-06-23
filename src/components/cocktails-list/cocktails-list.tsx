import { CocktailCard } from "../cocktail-card/cocktail-card";
import { CocktailsFilter } from "../coctails-filter/coctails-filter";

import "./cocktails-list.scss";

const mockCoctails = [
	{
		id: 1,
		title: "Blackberry",
		description: "Освежающий напиток",
		alcohol: 30,
		image: "../../assets/images/cocktail1.jpg",
	},
	{
		id: 2,
		title: "Blackberry2",
		description: "Освежающий напиток",
		alcohol: 10,
		// image: "../../assets/images/cocktail2.jpg",
		image: "cocktail2.jpg",
	},
	{
		id: 3,
		title: "Blackberry3",
		description: "Освежающий напиток",
		alcohol: 50,
		image: "../../assets/images/cocktail3.jpg",
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
