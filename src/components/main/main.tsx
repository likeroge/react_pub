import { PropsWithChildren } from "react";
import "./Main.scss";

export const Main = (props: PropsWithChildren) => {
	return (
		<main className="main">
			<div className="main__container">{props.children}</div>
		</main>
	);
};
