import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.scss";
import searchIcon from "../../assets/icons/searchIcon.png";
import { useSearch } from "../../hooks/useSearch";
import { useFetch } from "../../hooks/useFetch";
import { FC, useState } from "react";
import { IFooterProps } from "./props";

export const Footer: FC<IFooterProps> = ({ setSearchResults }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [searchString, setSearchString] = useState<string>("");
	const cocktails = useFetch("cocktails");
	const searhResults = useSearch(searchString, cocktails);

	setSearchResults(searhResults);

	return (
		<footer className="footer">
			<div className="footer__container">
				{location.pathname === "/search" ? (
					<div className="footer__search-container">
						<input
							onChange={(e) => setSearchString(e.target.value)}
							type="text"
							className="footer__search-input"
							value={searchString}
						/>
						<button className="footer__search-button">
							<img src={searchIcon} alt="searchIcon" />
						</button>
					</div>
				) : (
					<button onClick={() => navigate("search")} className="footer__button">
						Поиск
					</button>
				)}
			</div>
		</footer>
	);
};
