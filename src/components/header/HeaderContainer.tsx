import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";

export const HeaderContainer = () => {
	const currentDateString = new Date()
		.toLocaleDateString("nu", {
			dateStyle: "long",
		})
		.slice(0, -2);

	const currentPath = useLocation().pathname;
	let headerTitle = "";

	switch (currentPath) {
		case "/":
			headerTitle = "Главная";
			break;
		case "/search":
			headerTitle = "Поиск";
			break;
		default:
			break;
	}
	return <Header headerTitle={headerTitle} currentDateString={currentDateString} />;
};
