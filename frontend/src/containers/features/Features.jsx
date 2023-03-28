import React from "react";
import "./features.css";

import SlideShow from "../../components/slideShow/slideshowSlider";

const Features = () => {
	return (
		<section
			className="budgetMe__features section-padding"
			data-scroll-section
			id="pin"
		>
			<div className="budgetMe__features-container">
				<div
					id="one"
					data-scroll
					// data-scroll-direction="vertical"
					data-scroll-target="#pin"
					data-scroll-speed="3"
					className="budgetMe__features-content"
				>
					<h4>keeping an eye on your money has never been easier </h4>
					<h1 className="gradient__text">
						Data Analysis like you have never seen before
					</h1>
					<p>
						With BudgetMe, you can easily categorize your expenses and income,
						allowing you to see where your money is going and identify areas
						where you might be overspending or not allocating enough funds.
					</p>
					<h4>Try it out now !</h4>
				</div>
				<div
					id="two"
					data-scroll
					// data-scroll-direction="vertical"
					data-scroll-speed="3"
					data-scroll-target="#pin"
					className="budgetMe__features-content"
				>
					<h4>keeping an eye on your money has never been easier </h4>
					<h1 className="gradient__text">
						Data Analysis like you have never seen before
					</h1>
					<p>
						With BudgetMe, you can easily categorize your expenses and income,
						allowing you to see where your money is going and identify areas
						where you might be overspending or not allocating enough funds.
					</p>
					<h4>Try it out now !</h4>
				</div>
				<div
					id="three"
					data-scroll
					// data-scroll-direction="vertical"
					data-scroll-speed="7"
					data-scroll-target="#pin"
					className="budgetMe__features-content"
				>
					<h4>keeping an eye on your money has never been easier </h4>
					<h1 className="gradient__text">
						Data Analysis like you have never seen before
					</h1>
					<p>
						With BudgetMe, you can easily categorize your expenses and income,
						allowing you to see where your money is going and identify areas
						where you might be overspending or not allocating enough funds.
					</p>
					<h4>Try it out now !</h4>
				</div>
			</div>

			<div
				id="stick"
				data-scroll
				data-scroll-sticky
				data-scroll-target="#pin"
				data-scroll-speed="2"
				className="budgetMe__features-image"
			>
				{/* <img src={HeaderImage} alt="headerImage" /> */}
				<SlideShow />

				{/* <SlideShow
					data-scroll
					data-scroll-sticky
					data-scroll-target="#pin"
					data-scroll-speed="-1"
				/> */}
			</div>
		</section>
	);
};

export default Features;
