import { Logo } from "../logo/logo";
import "./header.scss";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<h1 className="header__title">Главная</h1>
				<h2 className="header__subtitle">17 июля 2021</h2>
			</div>
			<Logo />
		</header>
	);
};
