export interface ICocktail {
	id: number;
	title: string;
	description: string;
	alcohol: number;
	image: string;
}

export interface ICocktailCardProps {
	key: any;
	cocktail: ICocktail;
}
