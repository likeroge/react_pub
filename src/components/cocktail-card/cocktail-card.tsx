import { FC } from "react";
import "./cocktail-card.scss";
import { ICocktailCardProps } from "./types";

export const CocktailCard: FC<ICocktailCardProps> = ({ cocktail, onClick }) => {
	return (
		<div className="coctail-card" onClick={onClick}>
			<img
				className="coctail-card__image"
				src={require("../../assets/images/cocktail1.jpg")}
				alt={`cocktail-${cocktail.title}`}
			/>
			<div className="badge">
				<h1 className="badge__title">{cocktail.alcohol}%</h1>
				<h2 className="badge__subtitle">Алкоголь</h2>
			</div>
			<div className="coctail-card__info">
				<h1 className="coctail-card__title">{cocktail.title}</h1>
				<h2 className="coctail-card__subtitle">{cocktail.description}</h2>
			</div>
		</div>
	);
};
