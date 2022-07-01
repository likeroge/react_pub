import React from "react";
import { CocktailsList } from "./components/cocktails-list/cocktails-list";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import { CocktailDetails } from "./components/cocktail-details/cocktail-details";
import { SearchResult } from "./components/search-page/search-result";

function App() {
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
							<Footer />
						</>
					}
				>
					<Route index element={<CocktailsList />} />
					<Route path="search" element={<SearchResult />} />
				</Route>

				<Route path="cocktails-details" element={<CocktailDetails />} />
			</Routes>
		</div>
	);
}

export default App;
