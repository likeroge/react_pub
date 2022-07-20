import { useState } from "react";
import "./coctails-filter.scss";

const filters = [
	{
		title: "Новинки",
	},
	{
		title: "Хит",
	},
	{
		title: "Крепкие",
	},
	{
		title: "Сладкие",
	},
	{
		title: "Лонг",
	},
	{
		title: "Шот",
	},
];

export const CocktailsFilter = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="cocktails-filter">
			<div className="cocktails-filter__scroll">
				{filters.map((filter, idx) => (
					<button
						key={idx}
						onFocus={() => setActive(idx)}
						className={
							active === idx
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
