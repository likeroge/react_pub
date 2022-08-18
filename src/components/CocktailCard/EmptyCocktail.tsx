import React from "react";
import { bem } from "../../config/bem-react";

export const EmptyCocktail = () => {
	const coctailCard = bem("coctail-card");

	return (
		<div className={coctailCard()}>
			<img
				className={coctailCard("image")}
				src={require("../../assets/images/emptyResult.jpg")}
				alt={`no results`}
			/>
			<div className={coctailCard("empty")}>
				<h1>Ничего не найдено</h1>
			</div>
			<div className={coctailCard("info")}>
				<h1 className={coctailCard("title")}>Пусто</h1>
				<h2 className={coctailCard("subtitle")}>Попробуйте изменить запрос</h2>
			</div>
		</div>
	);
};
