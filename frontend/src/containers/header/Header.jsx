import React from "react";
import "./header.css";

const Header = () => {
	return (
		<div className="budgetMe__header section__padding" id="home">
			<div className="budgetMe__header-content">
				<p>Hey 👋 , start tracking you income and expenses with budgetMe 🇳🇬 </p>
				<h1 className="gradient__text">
					Gain Financial Freedom with BudgetMe.
				</h1>
				<h3>BudgetMe allows you to track your goals ...</h3>

				<button type="button">
					<span>Get Started</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
