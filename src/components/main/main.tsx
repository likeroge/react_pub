import "./main.scss";

export const Main = (props: any) => {
	return (
		<main className="main">
			<div className="main__container">{props.children}</div>
		</main>
	);
};
