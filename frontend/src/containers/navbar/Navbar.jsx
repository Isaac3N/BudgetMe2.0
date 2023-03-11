import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
	return (
		<div className="budgetMe__navbar">
			<div className="budgetMe__navbar-links">
				<div className="budgetMe__navbar-links_logo">
					<img src={logo} alt="" />
					<p>BudgetMe</p>
				</div>
				<div className="budgetMe__navbar-links_container">
					<p>
						<a href="#home">Home</a>
					</p>
					<p>
						<a href="#moreInfo">What is BudgetMe</a>
					</p>
					<p>
						<a href="#showcase">Features</a>
					</p>
					<p>
						<a href="#articles">Articles</a>
					</p>
					<p>
						<a href="#dashboard">My Dashboard</a>
					</p>
				</div>
				<div className="budgetMe__navbar-sign">
					<p>Sign In</p>
					<button type="button">
						<span>Sign Up</span>
						<i />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
