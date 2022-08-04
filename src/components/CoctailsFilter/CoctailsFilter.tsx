import { Dispatch, FC, SetStateAction, useState } from "react";
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
	return (
		<div className="cocktails-filter">
			<div className="cocktails-filter__scroll">
				{filters.map((filter, idx) => (
					<button
						key={idx}
						onFocus={() => onSetCocktailsCategory(filter)}
						className={
							activeCategory === filter.categoryId
								? "cocktails-filter__button cocktails-filter__button_selected"
								: "cocktails-filter__button"
						}
					>
						{filter.title}
					</button>
				))}
			</div>
		</div>
	);
};
