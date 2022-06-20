import "./coctails-filter.scss";

export const CocktailsFilter = () => {
	return (
		<div className="cocktailsFilter">
			<div className="cocktailsFilter__scroll">
				<button className="cocktailsFilter__button">Новинки</button>
				<button className="cocktailsFilter__button selected">Сладкие</button>
				<button className="cocktailsFilter__button">Хит</button>
				<button className="cocktailsFilter__button">Крепкие</button>
			</div>
		</div>
	);
};
