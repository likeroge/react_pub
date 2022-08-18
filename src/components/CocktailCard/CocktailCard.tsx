import { FC } from "react";
import { bem } from "../../config/bem-react";
import "./CocktailCard.scss";
import { ICocktailCardProps } from "./props";

export const CocktailCard: FC<ICocktailCardProps> = ({ cocktail, onClick }) => {
	const coctailCard = bem("coctail-card");
	const badge = bem("badge");

	return (
		<div className={coctailCard()} onClick={onClick}>
			<img
				className={coctailCard("image")}
				src={cocktail.image}
				alt={`cocktail-${cocktail.title}`}
			/>
			<div className={badge()}>
				<h1 className={badge("title")}>{cocktail.alcohol}%</h1>
				<h2 className={badge("subtitle")}>Алкоголь</h2>
			</div>
			<div className={coctailCard("info")}>
				<h1 className={coctailCard("title")}>{cocktail.title}</h1>
				<h2 className={coctailCard("subtitle")}>{cocktail.description}</h2>
			</div>
		</div>
	);
};
