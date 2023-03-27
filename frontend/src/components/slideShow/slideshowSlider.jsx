import React, { useEffect, useState, useRef } from "react";
import ImageList from "./ImageList";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/2.jpg";

import "./slideshow.css";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function SlideShow() {
	const [index, setIndex] = React.useState(0);
	const timeoutRef = React.useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === colors.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<div className="slideshow">
			<div
				className="slideshowSlider"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{colors.map((backgroundColor, index) => (
					<div className="slide" key={index} style={{ backgroundColor }}></div>
				))}
			</div>

			<div className="slideshowDots">
				{colors.map((_, idx) => (
					<div
						key={idx}
						className={`slideshowDot${index === idx ? " active" : ""}`}
						onClick={() => {
							setIndex(idx);
						}}
					></div>
				))}
			</div>
		</div>
	);
}

export default SlideShow;
