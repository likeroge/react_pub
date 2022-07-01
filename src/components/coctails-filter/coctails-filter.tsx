import "./coctails-filter.scss";

export const CocktailsFilter = () => {
	return (
		<div className="cocktails-filter">
			<div className="cocktails-filter__scroll">
				<button className="cocktails-filter__button">Новинки</button>
				<button className="cocktails-filter__button cocktails-filter__button_selected">
					Сладкие
				</button>
				<button className="cocktails-filter__button">Хит</button>
				<button className="cocktails-filter__button">Крепкие</button>
			</div>
		</div>
	);
};
