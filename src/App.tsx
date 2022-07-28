import React, { useState } from "react";
import { CocktailsList } from "./components/CocktailsList/CocktailsList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import { CocktailDetails } from "./components/CocktailDetails/CocktailDetails";
import { SearchResult } from "./components/SearchResult/SearchResult";
import { cocktailsApi } from "./api/cocktails";
import { ICocktail } from "./models/Cocktail";

function App() {
	const [searchResults, setSearchResults] = useState<ICocktail[]>([]);
	return (
		<div className="app-wrapper">
			<Routes>
				<Route
					path=""
					element={
						<>
							<Header />
							<Main>
								<Outlet />
							</Main>
							<Footer setSearchResults={setSearchResults} />
						</>
					}
				>
					<Route index element={<CocktailsList />} />
					<Route path="search" element={<SearchResult searchResults={searchResults} />} />
				</Route>

				<Route path="cocktails-details" element={<CocktailDetails />} />
			</Routes>
		</div>
	);
}

export default App;
