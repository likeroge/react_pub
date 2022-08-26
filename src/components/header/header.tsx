import { FC } from "react";
import { bem } from "../../config/bem-react";
import { Logo } from "../Logo/Logo";
import "./Header.scss";

interface HeaderProps {
	currentDateString: string;
}

export const Header: FC<HeaderProps> = ({ currentDateString }) => {
	const header = bem("header");

	return (
		<header className={header()}>
			<div className={header("container")}>
				<h1 className={header("title")}>Главная</h1>
				<h2 className={header("subtitle")}>{currentDateString}</h2>
			</div>
			<Logo />
		</header>
	);
};
