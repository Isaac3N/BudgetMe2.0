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
					data-scroll-speed="3"
					data-scroll-target="#pin"
					className="budgetMe__features-content"
				>
					<h4>Your goals are as valid as you are !!! </h4>
					<h1 className="gradient__text">Keep Track of your financial goals</h1>
					<p>
						At BudgetMe we believe that it is important to celebrate goals and
						take notes of setbacks in order to achieve our financial goals. So
						we integrated a goal milestone app. Keep track of those moments and
						look back on them when need arises
					</p>
					<h4>Try it out now !</h4>
				</div>
				<div
					id="three"
					data-scroll
					data-scroll-speed="7"
					data-scroll-target="#pin"
					className="budgetMe__features-content"
				>
					<h4>
						Be on top of your business processes with BudgetMe Enterprise{" "}
					</h4>
					<h1 className="gradient__text">
						The perfect way to skyrocket your SME
					</h1>
					<p>
						Taking your SME to the next level requires understanding the need to
						take risk. BudgetMe Enterprise aims to solve this problem by
						streamlining the business decisions, assets, turnover and much in
						order to avoid making an uninformed decision in hindsight.
					</p>
					<h4>Coming Soon !</h4>
				</div>
			</div>

			<div
				id="stick"
				data-scroll
				data-scroll-sticky
				data-scroll-target="#pin"
				data-scroll-speed="12"
				className="budgetMe__features-image"
			>
				<SlideShow />
			</div>
		</section>
	);
};

export default Features;
