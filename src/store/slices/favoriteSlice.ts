import { createSlice } from "@reduxjs/toolkit";
import { IFavoriteState } from "../types";

const initialState: IFavoriteState = {
	cocktails: [],
};

export const favoriteSlice = createSlice({
	name: "favorite",
	initialState: initialState,
	reducers: {
		getCurrentFavorites(state: any, action) {
			const favoriteCocktails = JSON.parse(localStorage.getItem("favorites") ?? "");
			state.cocktails = favoriteCocktails;
		},
		addCocktailToFavorites(state: any, action) {
			const favoriteCocktails = JSON.parse(localStorage.getItem("favorites") ?? "");
			favoriteCocktails.push(action.payload);
			localStorage.setItem("favorites", JSON.stringify(favoriteCocktails));
			state.cocktails = favoriteCocktails;
		},
	},
});

export const { getCurrentFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
