import { FC } from "react";
import { bem } from "../../config/bem-react";
import { CardBadge } from "../CardBadge/CardBadge";
import "./CocktailCard.scss";
import { ICocktailCardProps } from "./props";

export const CocktailCard: FC<ICocktailCardProps> = ({ cocktail, onClick }) => {
	const coctailCard = bem("coctail-card");

	return (
		<div className={coctailCard()} onClick={onClick}>
			<img
				className={coctailCard("image")}
				src={cocktail.image}
				alt={`cocktail-${cocktail.title}`}
			/>
			<CardBadge cocktail={cocktail} />
			<div className={coctailCard("info")}>
				<h1 className={coctailCard("title")}>{cocktail.title}</h1>
				<h2 className={coctailCard("subtitle")}>{cocktail.description}</h2>
			</div>
		</div>
	);
};
