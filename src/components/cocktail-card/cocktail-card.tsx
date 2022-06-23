import { FC } from "react";
import "./cocktail-card.scss";
import { ICocktail } from "./types";

export const CocktailCard: FC<{ key: any; cocktail: ICocktail }> = ({ cocktail }) => {
	return (
		<div className="coctailCard">
			{/* <img
				className="coctailCard__image"
				src={require("../../assets/images/cocktail1.jpg")}
				alt={`cocktail ${cocktail.title}`}
			/> */}
			<div className="coctailCard__badge">
				<h1 className="coctailCard__badge_title">{cocktail.alcohol}%</h1>
				<h2 className="coctailCard__badge_subtitle">Алкоголь</h2>
			</div>
			<div className="coctailCard__info">
				<h1 className="coctailCard__title">{cocktail.title}</h1>
				<h2 className="coctailCard__subtitle">{cocktail.description}</h2>
			</div>
		</div>
	);
};
