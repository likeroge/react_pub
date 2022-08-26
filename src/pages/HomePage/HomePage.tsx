import React from "react";
import { CocktailsListContainer } from "../../components/CocktailsList/CocktailsListContainer";
import { FooterContainer } from "../../components/Footer/FooterContainer";
import { HeaderContainer } from "../../components/Header/HeaderContainer";
import { Main } from "../../components/Main/Main";

export const HomePage = () => {
	return (
		<>
			<HeaderContainer />
			<Main>
				<CocktailsListContainer />
			</Main>
			<FooterContainer />
		</>
	);
};
