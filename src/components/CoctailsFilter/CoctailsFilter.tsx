import { FC, useState } from "react";
import { bem } from "../../config/bem-react";
import "./CoctailsFilter.scss";
import { ICocktailsListProps, IFilterCategory } from "./props";

const filters: IFilterCategory[] = [
	{
		title: "Новинки",
		categoryId: 1,
	},
	{
		title: "Хит",
		categoryId: 2,
	},
	{
		title: "Крепкие",
		categoryId: 3,
	},
	{
		title: "Сладкие",
		categoryId: 4,
	},
	{
		title: "Лонг",
		categoryId: 5,
	},
	{
		title: "Шот",
		categoryId: 6,
	},
];

export const CocktailsFilter: FC<ICocktailsListProps> = ({ setCocktailsCategory }) => {
	const [activeCategory, setActiveCategory] = useState(1);
	const onSetCocktailsCategory = (filter: IFilterCategory) => {
		setActiveCategory(filter.categoryId);
		setCocktailsCategory(filter.categoryId);
	};
	const cocktailsFilter = bem("cocktails-filter");
	return (
		<div className={cocktailsFilter()}>
			<div className={cocktailsFilter("scroll")}>
				{filters.map((filter, idx) => (
					<button
						key={idx}
						onFocus={() => onSetCocktailsCategory(filter)}
						className={
							activeCategory === filter.categoryId
								? cocktailsFilter("button", { selected: true })
								: cocktailsFilter("button")
						}
					>
						{filter.title}
					</button>
				))}
			</div>
		</div>
	);
};
