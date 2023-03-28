import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";

const textVariants = {
	hidden: {
		opacity: 0,
		x: -50,
	},
	visible: {
		opacity: 1,
		x: -5,

		transition: {
			duration: 2,
			delay: 2,
			ease: "easeInOut",
		},
	},
};

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleScroll = (id) => {
		setClick(!click);
	};

	return (
		<div
			click={click}
			initial={{
				y: "-100%",
			}}
			animate={{ y: 0 }}
			transition={{ duration: 2, delay: 2 }}
			className="budgetMe__navbar"
		>
			<div className="budgetMe__navbar-links">
				<div className="budgetMe__navbar-links_logo">
					<img src={logo} alt="" />
					<motion.p variants={textVariants} initial="hidden" animate="visible">
						BudgetMe
					</motion.p>
				</div>
				<div className="budgetMe__navbar-links_container">
					<motion.p
						onClick={() => handleScroll()}
						whileHover={{ scale: 1.1, y: -5 }}
						whileTap={{ scale: 0.9, y: 0 }}
					>
						<a href="#home">Home</a>
					</motion.p>
					<motion.p
						onClick={() => handleScroll()}
						whileHover={{ scale: 1.1, y: -5 }}
						whileTap={{ scale: 0.9, y: 0 }}
					>
						<a href="#moreInfo">What is BudgetMe</a>
					</motion.p>
					<motion.p
						onClick={() => handleScroll()}
						whileHover={{ scale: 1.1, y: -5 }}
						whileTap={{ scale: 0.9, y: 0 }}
					>
						<a href="#showcase">Features</a>
					</motion.p>
					<motion.p
						onClick={() => handleScroll()}
						whileHover={{ scale: 1.1, y: -5 }}
						whileTap={{ scale: 0.9, y: 0 }}
					>
						<a href="#articles">Articles</a>
					</motion.p>
					<motion.p
						onClick={() => handleScroll()}
						whileHover={{ scale: 1.1, y: -5 }}
						whileTap={{ scale: 0.9, y: 0 }}
					>
						<a href="#dashboard">My Dashboard</a>
					</motion.p>
				</div>
				<div className="budgetMe__navbar-sign">
					<motion.p
						onClick={() => handleScroll()}
						whileHover={{ scale: 1.01, y: -3 }}
						whileTap={{ scale: 0.09, y: 0 }}
					>
						Sign In
					</motion.p>
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
