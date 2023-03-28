import React, { useEffect, useState, useRef } from "react";

import ImageList from "./ImageList";
import image1 from "../../assets/slideshow/1.png";
import image2 from "../../assets/slideshow/2.png";
import image3 from "../../assets/slideshow/3.png";

import "./slideshow.css";

const delay = 2500;

function SlideShow() {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	const imageUrls = [image1, image2, image3];

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
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
				<ImageList key={index} className="slide" images={imageUrls} />
			</div>

			<div className="slideshowDots">
				{imageUrls.map((_, idx) => (
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
