import React from "react";
import "./App.css";

import {
	Articles,
	Features,
	Footer,
	Header,
	MoreInfo,
	Navbar,
	Showcase,
	WhyBudget,
} from "./containers/baseContainers";

const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Features />
			<Showcase />
			<MoreInfo />
			<WhyBudget />
			<Articles />
			<Footer />
		</div>
	);
};

export default App;
