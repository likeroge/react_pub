import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useFilter } from "../../hooks/useFilter";
import { ICocktail } from "../../models/Cocktail";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import { CocktailsFilter } from "../CoctailsFilter/CoctailsFilter";

import "./CocktailsList.scss";

const mockCoctails = [
	{
		id: 1,
		title: "Blackberry",
		description: "Освежающий напиток",
		alcohol: 30,
		image: "cocktail1.jpg",
		category: 4,
	},
	{
		id: 2,
		title: "Blackberry2",
		description: "Освежающий напиток",
		alcohol: 10,
		image: "cocktail2.jpg",
		category: 1,
	},
	{
		id: 3,
		title: "Blackberry3",
		description: "Освежающий напиток",
		alcohol: 50,
		image: "cocktail3.jpg",
		category: 3,
	},
	{
		id: 4,
		title: "Blackberry34",
		description: "Освежающий напиток",
		alcohol: 500,
		image: "cocktail3.jpg",
		category: 2,
	},
];

export const CocktailsList = () => {
	const navigate = useNavigate();
	const [category, setCategory] = useState(1);
	const cocktails = useFetch("cocktails");
	const filteredCocktails = useFilter(category, cocktails);

	return (
		<>
			<CocktailsFilter setCocktailsCategory={setCategory} />
			<div className="cocktails-list">
				{filteredCocktails.map((cocktail: ICocktail) => (
					<CocktailCard
						key={cocktail.id}
						cocktail={cocktail}
						onClick={() => {
							navigate("cocktails-details");
						}}
					/>
				))}
			</div>
		</>
	);
};
