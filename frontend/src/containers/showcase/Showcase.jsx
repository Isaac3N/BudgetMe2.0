import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";

import img1 from "../../assets/showcase/1.png";
import img2 from "../../assets/showcase/2.png";
import img3 from "../../assets/showcase/3.png";

import "./showcase.css";

const Items = ({ img, title = "" }) => {
	return (
		<div className="budgetMe__section-images">
			<img src={img} alt={title} />
		</div>
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
		<section
			className="budgetMe__showcase section-padding"
			ref={ref}
			data-scroll-section
		>
			<div className="budgetMe__showcase-container" ref={Horizontalref}>
				<Items img={img1} title="Man Basics" />
				<Items img={img2} title="Tops" />
				<Items img={img3} />
			</div>
		</section>
	);
};

export default Showcase;
