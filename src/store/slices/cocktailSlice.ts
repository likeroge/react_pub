import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cocktailsApi } from "../../api/cocktails";
import { ICocktailState } from "../types";

export const fetchCocktails = createAsyncThunk("cocktails/", async () => {
	const { data } = await cocktailsApi.get("cocktails");
	return data;
});

const initialState: ICocktailState = {
	loading: false,
	error: null,
	cocktails: [],
	selectedCocktail: null,
	searchString: "",
};

export const cocktailSlice = createSlice({
	name: "cocktails",
	initialState: initialState,
	reducers: {
		setSearchString(state: any, action) {
			state.searchString = action.payload;
		},
		setSelectedCocktail(state: any, action) {
			state.selectedCocktail = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchCocktails.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCocktails.fulfilled, (state, action) => {
				state.cocktails = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchCocktails.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
			});
	},
});

export const { setSearchString, setSelectedCocktail } = cocktailSlice.actions;

export default cocktailSlice.reducer;
