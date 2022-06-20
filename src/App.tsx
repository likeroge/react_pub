import React from "react";
import { CocktailsList } from "./components/cocktails-list/cocktails-list";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import "./App.scss";

function App() {
	return (
		<div className="appWrapper">
			<Header />
			<Main>
				<CocktailsList />
			</Main>
			<Footer />
		</div>
	);
}

export default App;
