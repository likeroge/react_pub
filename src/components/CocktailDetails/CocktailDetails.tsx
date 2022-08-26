import { FC } from "react";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/images/LeftArrow.png";
import { bem } from "../../config/bem-react";
import { ICocktail } from "../../models/Cocktail";
import "./CocktailDetails.scss";

interface ICocktailDetailsProps {
	selectedCocktail: ICocktail | null;
}

export const CocktailDetails: FC<ICocktailDetailsProps> = ({ selectedCocktail }) => {
	const navigate = useNavigate();
	const cocktailsDetails = bem("cocktails-details");

	return (
		<div className={cocktailsDetails()}>
			<div className={cocktailsDetails("back-button")} onClick={() => navigate(-1)}>
				<img src={LeftArrow} alt="Left arrow" />
			</div>
			<div className={cocktailsDetails("image-container")}>
				<img
					className={cocktailsDetails("image")}
					src={selectedCocktail?.image}
					alt={selectedCocktail?.title}
				/>
			</div>
			<div className={cocktailsDetails("info")}>
				<h1>Blackberry</h1>
				<h2>Освежающий напиток</h2>
			</div>
			<div className={cocktailsDetails("ingredients")}>
				<h1>Ингредиенты</h1>
				{selectedCocktail?.ingredients.map((ingredient, idx) => (
					<div key={idx} className={cocktailsDetails("ingredient-item")}>
						<p>{ingredient.name}</p>
						<span>
							................................................................................
						</span>
						<p>{ingredient.quantity}</p>
					</div>
				))}
			</div>
			<div className={cocktailsDetails("recipe")}>
				<h1>Как готовоить</h1>
				<p>{selectedCocktail?.recipe}</p>
			</div>
		</div>
	);
};
