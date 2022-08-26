import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { CocktailDetailsContainer } from "./components/CocktailDetails/CocktailDetailsContainer";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
	return (
		<div className="app-wrapper">
			<Routes>
				<Route path="" element={<HomePage />} />

				<Route path="cocktails-details/:id" element={<CocktailDetailsContainer />} />
			</Routes>
		</div>
	);
}

export default App;
