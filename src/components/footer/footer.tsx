import { useNavigate } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
	const navigate = useNavigate();
	return (
		<footer className="footer">
			<div className="footer__container">
				<button onClick={() => navigate("search")} className="footer__button">
					Поиск
				</button>
			</div>
		</footer>
	);
};
