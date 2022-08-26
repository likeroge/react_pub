import React, { FC } from "react";
import { bem } from "../../config/bem-react";
import { ICocktail } from "../../models/Cocktail";
import "./CardBadge.scss";

interface ICardBadgeProps {
	cocktail: ICocktail;
}

export const CardBadge: FC<ICardBadgeProps> = ({ cocktail }) => {
	const badge = bem("badge");

	return (
		<div className={badge()}>
			<h1 className={badge("title")}>{cocktail.alcohol}%</h1>
			<h2 className={badge("subtitle")}>Алкоголь</h2>
		</div>
	);
};
