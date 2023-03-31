import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import {
	Articles,
	Features,
	Footer,
	Header,
	MoreInfo,
	Showcase,
	Navbar,
	WhyBudget,
} from "./containers/baseContainers";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import ScrollTriggerProxy from "./components/gsap/ScrollTriggerProxy";

const App = () => {
	const containerRef = useRef(null);

	return (
		<div className="App" id="app">
			<LocomotiveScrollProvider
				options={{
					smooth: true,
					// ... all available Locomotive Scroll instance options
				}}
				watch={
					[
						//..all the dependencies you want to watch to update the scroll.
						//  Basicaly, you would want to watch page/location changes
						//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
					]
				}
				containerRef={containerRef}
			>
				<ScrollTriggerProxy />
				<AnimatePresence>
					<main className="main" data-scroll-container ref={containerRef}>
						<div data-scroll-section className="gradient__bg">
							<Navbar />
							<Header />
						</div>
						<Features />
						{/* <Showcase /> */}

						<MoreInfo />
						<WhyBudget />
						<Articles />
						<Footer />
					</main>
				</AnimatePresence>
			</LocomotiveScrollProvider>
		</div>
	);
};

export default App;
