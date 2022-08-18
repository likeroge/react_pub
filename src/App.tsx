import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import { CocktailDetails } from "./components/CocktailDetails/CocktailDetails";
import { CocktailsListContainer } from "./components/CocktailsList/CocktailsListContainer";
import { FooterContainer } from "./components/Footer/FooterContainer";
import { Header } from "./components/Header/Header";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Main } from "./components/Main/Main";

function App() {
	return (
		<div className="app-wrapper">
			<Routes>
				<Route
					path=""
					element={
						<>
							<HeaderContainer />
							<Main>
								<Outlet />
							</Main>
							<FooterContainer />
						</>
					}
				>
					<Route index element={<CocktailsListContainer />} />
					{/* <Route path="search" element={<SearchResult searchResults={searchResults} />} /> */}
				</Route>

				<Route path="cocktails-details" element={<CocktailDetails />} />
			</Routes>
		</div>
	);
}

export default App;
