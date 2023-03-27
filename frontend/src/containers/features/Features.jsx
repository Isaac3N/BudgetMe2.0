import React from "react";
import "./features.css";
import HeaderImage from "../../assets/header_image1.jpg";
import SlideShow from "../../components/slideShow/slideshowSlider";

const Features = () => {
	return (
		<div className="budgetMe__features section-padding ">
			<div className="budgetMe__features-content">
				<h4>keeping an eye on your money has never been easier </h4>
				<h1 className="gradient__text">
					Data Analysis like you have never seen before
				</h1>
				<p>
					With BudgetMe, you can easily categorize your expenses and income,
					allowing you to see where your money is going and identify areas where
					you might be overspending or not allocating enough funds.
				</p>
				<h4>Try it out now !</h4>
			</div>
			<div className="budgetMe__features-image">
				{/* <img src={HeaderImage} alt="headerImage" /> */}
				<SlideShow />
			</div>
		</div>
	);
};

export default Features;
