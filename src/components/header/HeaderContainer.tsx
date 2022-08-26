import { useEffect, useState } from "react";
import { Header } from "./Header";

export const HeaderContainer = () => {
	const [currentDateString, setCurrentDateString] = useState<string>("");

	useEffect(() => {
		const currentDateStringCandidate = new Date()
			.toLocaleDateString("nu", {
				dateStyle: "long",
			})
			.slice(0, -2);
		setCurrentDateString(currentDateStringCandidate);
	}, []);
	return <Header currentDateString={currentDateString} />;
};
