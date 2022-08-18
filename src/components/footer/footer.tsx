import { FC } from "react";
import searchIcon from "../../assets/icons/searchIcon.png";
import { bem } from "../../config/bem-react";
import "./Footer.scss";

interface FooterProps {
	isInputVisible: boolean;
	searchString: string;
	onSearchButtonHandler: () => void;
	onChangeInputHandler: (e: any) => void;
}

export const Footer: FC<FooterProps> = ({
	isInputVisible,
	searchString,
	onSearchButtonHandler,
	onChangeInputHandler,
}) => {
	const footer = bem("footer");

	return (
		<footer className={footer()}>
			<div className={footer("container")}>
				{isInputVisible ? (
					<div className={footer("search-container")}>
						<input
							ref={(element) => element?.focus()}
							onChange={(e) => onChangeInputHandler(e)}
							type="text"
							className={footer("search-input")}
							value={searchString}
							onBlur={onSearchButtonHandler}
						/>
						<button className={footer("search-button")}>
							<img src={searchIcon} alt="searchIcon" />
						</button>
					</div>
				) : (
					<button onClick={onSearchButtonHandler} className={footer("button")}>
						Поиск
					</button>
				)}
			</div>
		</footer>
	);
};
