import React, { MouseEventHandler } from "react";
import { ICocktail } from "../../models/Cocktail";


export interface ICocktailCardProps {
	key: React.Key;
	cocktail: ICocktail;
	onClick: MouseEventHandler<HTMLDivElement>
}
