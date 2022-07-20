import { useLocation } from "react-router-dom";
import { Logo } from "../logo/logo";
import "./header.scss";

export const Header = () => {
	const currentDateString = new Date()
		.toLocaleDateString("nu", {
			dateStyle: "long",
		})
		.slice(0, 12);

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

	return (
		<header className="header">
			<div className="header__container">
				<h1 className="header__title">{headerTitle}</h1>
				<h2 className="header__subtitle">{currentDateString}</h2>
			</div>
			<Logo />
		</header>
	);
};
