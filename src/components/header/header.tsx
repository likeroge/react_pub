import { Logo } from "../logo/logo";
import "./header.scss";

export const Header = () => {
	const currentDateString = new Date()
		.toLocaleDateString("nu", {
			dateStyle: "long",
		})
		.slice(0, 12);

	return (
		<header className="header">
			<div className="header__container">
				<h1 className="header__title">Главная</h1>
				<h2 className="header__subtitle">{currentDateString}</h2>
			</div>
			<Logo />
		</header>
	);
};
