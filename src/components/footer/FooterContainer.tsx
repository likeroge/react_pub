import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { useSearch } from "../../hooks/useSearch";
import { setSearchString } from "../../store/slices/cocktailSlice";
import { Footer } from "./Footer";

export const FooterContainer = () => {
	// const [searchString, setSearchString] = useState<string>("");
	const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
	const searchInputRef: React.Ref<HTMLElement> = useRef(null);

	const dispatch = useAppDispatch();
	const searchStringFromRedux = useAppSelector((state) => state.cocktails.searchString);

	const onSearchButtonHandler = () => {
		setIsInputVisible(!isInputVisible);
		searchInputRef.current?.focus();
	};

	const onChangeInputHandler = (e: any) => {
		setSearchString(e.target.value);
		dispatch(setSearchString(e.target.value));
	};

	return (
		<Footer
			onSearchButtonHandler={onSearchButtonHandler}
			searchString={searchStringFromRedux}
			isInputVisible={isInputVisible}
			onChangeInputHandler={onChangeInputHandler}
		/>
	);
};
