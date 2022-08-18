import { PropsWithChildren } from "react";
import { bem } from "../../config/bem-react";
import "./Main.scss";

export const Main = (props: PropsWithChildren) => {
	const main = bem("main");
	return (
		<main className={main()}>
			<div className={main("container")}>{props.children}</div>
		</main>
	);
};
