import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";

import styled from "styled-components";

import img1 from "../../assets/showcase/1.png";
import img2 from "../../assets/showcase/2.png";
import img3 from "../../assets/showcase/3.png";

const Section = styled.section`
	min-height: 100vh;
	height: auto;
	width: 100vw;
	margin: 0 auto;
	overflow: hidden;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;

	position: relative;
`;

const Right = styled.div`
	position: absolute;
	left: 0;
	padding-left: 0px;

	/* background-color: ${(props) => props.theme.grey}; */
	min-height: 100vh;
	/* width: 65%; */
	display: flex;
	justify-content: flex-start;
	align-items: center;

	/* h1 {
		width: 5rem;
		margin: 0 2rem;
	} */
`;

const Item = styled.div`
	position: relative;
	width: 1200px;
	height: 100%;

	margin-right: 2rem;

	/* margin-top: 1rem; */
	margin-bottom: 1rem;

	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
`;

//sets grayscale for the items that are not on screen
const Product = ({ img, title = "" }) => {
	return (
		<Item
		// initial={{ filter: "grayscale(100%)" }}
		// whileInView={{ filter: "grayscale(0%)" }}
		// transition={{ duration: 0.5 }}
		// viewport={{ once: false, amount: "all" }}
		>
			<img src={img} alt={title} />
		</Item>
	);
};

const Showcase = () => {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	const Horizontalref = useRef(null);

	useLayoutEffect(() => {
		let element = ref.current;
		let scrollingElement = Horizontalref.current;
		let pinWrapwidth = scrollingElement.offsetWidth;
		let t1 = gsap.timeline();

		setTimeout(() => {
			t1.to(element, {
				scrollTrigger: {
					trigger: element,
					start: "top top",
					end: pinWrapwidth,
					// end: "2200px",
					scrub: true,
					scroller: "main", //locomotive element

					pin: true,
					// markers: true,
				},
				// we have to increase scrolling height of this section same as the scrolling element width
				// height: `${scrollingElement.scrollWidth}px`,
				ease: "none,",
			});

			console.log(pinWrapwidth);
			// horizontal scrolling
			t1.to(scrollingElement, {
				scrollTrigger: {
					trigger: scrollingElement,
					start: "top top",
					end: "2220px",

					// end: "bottom center",
					scrub: true,
					scroller: "main", //locomotive element

					// pin: true,
					markers: true,
				},
				// we have to increase scrolling height of this section same as the scrolling element width
				// x: -pinWrapwidth,
				duration: 20,
				x: -2220,
				ease: "none,",
			});
			ScrollTrigger.refresh();
		}, 5000);

		return () => {
			// clearing all instances
			t1.kill();
			ScrollTrigger.kill();
		};
	}, []);
	return (
		<Section ref={ref}>
			<Right ref={Horizontalref}>
				{/* <Item img={img1} />
				<Item img={img2} />
				<Item img={img3} /> */}
				<Product img={img1} title="Man Basics" />
				<Product img={img2} title="Tops" />
				<Product img={img3} />
				{/* <Item img={img4} title="Ethnic Wear" />
				<Item img={img5} title="Blazers" />

				<Item img={img7} title="Antiques" />
				<Item img={img8} title="Jewelery" />
				<Item img={img9} title="Watches" />
				<Item img={img10} title="Special Edition" /> */}
			</Right>
		</Section>
	);
};

export default Showcase;
