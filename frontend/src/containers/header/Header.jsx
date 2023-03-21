import React from "react";
import "./header.css";
import image1 from "../../assets/header_image1.jpg";
import image2 from "../../assets/header_image2.jpg";
import blob from "../../assets/blob.svg";

const Header = () => {
	return (
		<div className="budgetMe__header section__padding" id="home">
			<div className="budgetMe__header-content">
				<p>Hey 👋 , start tracking you income and expenses with budgetMe 🇳🇬 </p>
				<h1 className="gradient__text">
					Gain Financial Freedom, with BudgetMe.
				</h1>
				<h3>BudgetMe allows you to track your goals ...</h3>

				<button type="button">
					<span>Get Started</span>
				</button>
			</div>
			<div className="budgetMe__header-img1">
				<img src={image1} alt="image1" />
			</div>

			<div className="budgetMe__header-img2">
				<img src={image2} alt="image2" />
			</div>

			<div className="budgetMe__header-blob float">
				<img src={blob} alt="blob" />
			</div>
		</div>
	);
};

export default Header;
