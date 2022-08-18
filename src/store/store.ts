import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./slices/cocktailSlice";
import favoriteSlice from "./slices/favoriteSlice";

export const store = configureStore({
	reducer: { cocktails: cocktailSlice, favorites: favoriteSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
