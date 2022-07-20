import React from "react";
import "./cocktail-details.scss";
import LeftArrow from "../../assets/images/LeftArrow.png";
import { useNavigate } from "react-router-dom";

export const CocktailDetails = () => {
	const navigate = useNavigate();
	return (
		<div className="cocktails-details">
			<div className="cocktails-details__back-button" onClick={() => navigate(-1)}>
				<img src={LeftArrow} alt="Left arrow" />
			</div>
			<div className="cocktails-details__image-container">
				<img
					className="cocktails-details__image"
					src={require("../../assets/images/cocktail1.jpg")}
					alt=""
				/>
			</div>
			<div className="cocktails-details__info">
				<h1>Blackberry</h1>
				<h2>Освежающий напиток</h2>
			</div>
		</div>
	);
};
